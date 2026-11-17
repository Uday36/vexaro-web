
import { chromium } from "playwright";
import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";

const START_URL =
  process.argv[2] || "https://www.vexarocouriersolutions.com/";

const OUTPUT =
  process.argv[3] || "capture/live";

const MAX_PAGES = 50;
const DELAY_MS = 1000;

const origin = new URL(START_URL).origin;

const browser = await chromium.launch({
  headless: true
});

const context = await browser.newContext({
  ignoreHTTPSErrors: false
});

const visited = new Set();
const queue = [START_URL];
const manifest = {
  source: START_URL,
  capturedAt: new Date().toISOString(),
  pages: [],
  assets: [],
  errors: []
};

const assetSet = new Set();

function safeName(value) {
  return value
    .replace(/[^a-z0-9._-]/gi, "_")
    .slice(0, 100);
}

function assetFileName(url) {
  const hash = crypto
    .createHash("sha1")
    .update(url)
    .digest("hex")
    .slice(0, 12);

  const pathname = new URL(url).pathname;
  const extension = path.extname(pathname) || ".bin";

  return `${hash}${extension}`;
}

async function saveJSON(file, data) {
  await fs.mkdir(path.dirname(file), {
    recursive: true
  });

  await fs.writeFile(
    file,
    JSON.stringify(data, null, 2),
    "utf8"
  );
}

async function downloadAsset(url) {
  if (assetSet.has(url)) return;
  assetSet.add(url);

  try {
    const response = await fetch(url, {
      signal: AbortSignal.timeout(20000)
    });

    if (!response.ok) return;

    const buffer = Buffer.from(
      await response.arrayBuffer()
    );

    if (buffer.length > 30 * 1024 * 1024) return;

    const fileName = assetFileName(url);
    const filePath = path.join(
      OUTPUT,
      "assets",
      fileName
    );

    await fs.mkdir(path.dirname(filePath), {
      recursive: true
    });

    await fs.writeFile(filePath, buffer);

    manifest.assets.push({
      url,
      file: `assets/${fileName}`,
      contentType:
        response.headers.get("content-type"),
      size: buffer.length
    });
  } catch (error) {
    manifest.errors.push({
      type: "asset",
      url,
      message: error.message
    });
  }
}

async function inspectPage(page, pageIndex) {
  const data = await page.evaluate(() => {
    const clean = (value) =>
      value?.replace(/\s+/g, " ").trim() || "";

    const getRect = (element) => {
      const r = element.getBoundingClientRect();

      return {
        x: Math.round(r.x),
        y: Math.round(r.y + window.scrollY),
        width: Math.round(r.width),
        height: Math.round(r.height)
      };
    };

    const elements = Array.from(
      document.querySelectorAll(
        "body *"
      )
    );

    const layout = elements.map((el) => {
      const s = getComputedStyle(el);

      return {
        tag: el.tagName.toLowerCase(),
        id: el.id || "",
        className:
          typeof el.className === "string"
            ? el.className
            : "",
        text: clean(el.innerText).slice(0, 180),
        rect: getRect(el),
        style: {
          display: s.display,
          position: s.position,
          width: s.width,
          height: s.height,
          margin: s.margin,
          padding: s.padding,
          gap: s.gap,
          color: s.color,
          backgroundColor: s.backgroundColor,
          fontFamily: s.fontFamily,
          fontSize: s.fontSize,
          fontWeight: s.fontWeight,
          lineHeight: s.lineHeight,
          letterSpacing: s.letterSpacing,
          textAlign: s.textAlign,
          borderRadius: s.borderRadius,
          boxShadow: s.boxShadow,
          transform: s.transform,
          transition: s.transition,
          animation: s.animation,
          opacity: s.opacity,
          overflow: s.overflow,
          zIndex: s.zIndex
        }
      };
    });

    const images = Array.from(
      document.images
    ).map((img) => ({
      src: img.currentSrc || img.src,
      alt: img.alt,
      width: img.naturalWidth,
      height: img.naturalHeight,
      loading: img.loading,
      rect: getRect(img)
    }));

    const videos = Array.from(
      document.querySelectorAll("video")
    ).map((video) => ({
      src: video.currentSrc || video.src,
      poster: video.poster,
      autoplay: video.autoplay,
      loop: video.loop,
      muted: video.muted
    }));

    const links = Array.from(
      document.querySelectorAll("a[href]")
    ).map((a) => ({
      text: clean(a.innerText),
      href: a.href,
      target: a.target
    }));

    const buttons = Array.from(
      document.querySelectorAll(
        "button, input[type=submit], [role=button]"
      )
    ).map((button) => ({
      text: clean(button.innerText),
      ariaLabel: button.getAttribute("aria-label"),
      type: button.getAttribute("type")
    }));

    const forms = Array.from(
      document.forms
    ).map((form) => ({
      action: form.action,
      method: form.method,
      fields: Array.from(form.elements).map(
        (field) => ({
          name: field.name,
          type: field.type,
          placeholder: field.placeholder
        })
      )
    }));

    const fonts = Array.from(
      document.fonts
    ).map((font) => ({
      family: font.family,
      weight: font.weight,
      style: font.style,
      status: font.status
    }));

    const stylesheets = Array.from(
      document.querySelectorAll(
        'link[rel="stylesheet"]'
      )
    ).map((item) => item.href);

    const scripts = Array.from(
      document.scripts
    ).map((item) => item.src).filter(Boolean);

    const resourceEntries =
      performance.getEntriesByType("resource")
        .map((item) => ({
          url: item.name,
          type: item.initiatorType,
          duration: item.duration,
          size: item.transferSize
        }));

    return {
      title: document.title,
      description:
        document.querySelector(
          'meta[name="description"]'
        )?.content || "",
      viewport: {
        width: innerWidth,
        height: innerHeight,
        documentHeight:
          document.documentElement.scrollHeight
      },
      headings: Array.from(
        document.querySelectorAll(
          "h1,h2,h3,h4,h5,h6"
        )
      ).map((h) => ({
        tag: h.tagName,
        text: clean(h.innerText),
        rect: getRect(h)
      })),
      elements: layout,
      images,
      videos,
      links,
      buttons,
      forms,
      fonts,
      stylesheets,
      scripts,
      resources: resourceEntries
    };
  });

  await saveJSON(
    path.join(OUTPUT, "data", `page-${pageIndex}.json`),
    data
  );

  return data;
}

async function preparePage(page) {
  await page.goto(START_URL, {
    waitUntil: "domcontentloaded",
    timeout: 60000
  }).catch(() => {});

  await page.waitForTimeout(2500);

  // Scroll gradually to trigger lazy-loaded images.
  await page.evaluate(async () => {
    const step = Math.max(
      300,
      Math.floor(window.innerHeight * 0.7)
    );

    for (
      let y = 0;
      y < document.body.scrollHeight;
      y += step
    ) {
      window.scrollTo(0, y);
      await new Promise((resolve) =>
        setTimeout(resolve, 120)
      );
    }

    window.scrollTo(0, 0);
  });

  await page.waitForTimeout(1000);
}

async function capturePage(url, index) {
  const page = await context.newPage();

  try {
    console.log(`Capturing: ${url}`);

    await page.goto(url, {
      waitUntil: "domcontentloaded",
      timeout: 60000
    });

    await page.waitForTimeout(2000);

    await page.evaluate(async () => {
      const step = Math.max(
        300,
        Math.floor(innerHeight * 0.7)
      );

      for (
        let y = 0;
        y < document.body.scrollHeight;
        y += step
      ) {
        scrollTo(0, y);
        await new Promise((resolve) =>
          setTimeout(resolve, 150)
        );
      }

      scrollTo(0, 0);
    });

    await page.waitForTimeout(1000);

    const pageData = await inspectPage(page, index);

    const pageDir = path.join(
      OUTPUT,
      "screenshots",
      `page-${index}`
    );

    await fs.mkdir(pageDir, {
      recursive: true
    });

    for (const viewport of [
      { name: "desktop", width: 1440, height: 1000 },
      { name: "tablet", width: 768, height: 1024 },
      { name: "mobile", width: 390, height: 844 }
    ]) {
      await page.setViewportSize({
        width: viewport.width,
        height: viewport.height
      });

      await page.goto(url, {
        waitUntil: "domcontentloaded",
        timeout: 60000
      });

      await page.waitForTimeout(2000);

      await page.evaluate(async () => {
        const step = Math.max(
          250,
          Math.floor(innerHeight * 0.8)
        );

        for (
          let y = 0;
          y < document.body.scrollHeight;
          y += step
        ) {
          scrollTo(0, y);
          await new Promise((resolve) =>
            setTimeout(resolve, 100)
          );
        }

        scrollTo(0, 0);
      });

      await page.waitForTimeout(500);

      await page.screenshot({
        path: path.join(
          pageDir,
          `${viewport.name}.png`
        ),
        fullPage: true,
        animations: "allow",
        timeout: 60000
      });
    }

    const discovered = pageData.links
      .map((link) => link.href)
      .filter((href) => {
        try {
          const parsed = new URL(href);

          return (
            parsed.origin === origin &&
            ["http:", "https:"].includes(parsed.protocol)
          );
        } catch {
          return false;
        }
      });

    const resources = [
      ...pageData.images.map((item) => item.src),
      ...pageData.videos.flatMap((item) => [
        item.src,
        item.poster
      ]),
      ...pageData.stylesheets,
      ...pageData.scripts,
      ...pageData.resources.map((item) => item.url)
    ];

    for (const resource of resources) {
      if (
        resource &&
        /^https?:\/\//.test(resource)
      ) {
        await downloadAsset(resource);
      }
    }

    manifest.pages.push({
      url,
      title: pageData.title,
      index
    });

    return discovered;
  } catch (error) {
    manifest.errors.push({
      type: "page",
      url,
      message: error.message
    });

    return [];
  } finally {
    await page.close();
  }
}

await fs.mkdir(OUTPUT, {
  recursive: true
});

while (
  queue.length > 0 &&
  visited.size < MAX_PAGES
) {
  const url = queue.shift();

  if (!url || visited.has(url)) continue;

  const parsed = new URL(url);
  parsed.hash = "";
  const cleanUrl = parsed.href;

  if (visited.has(cleanUrl)) continue;

  visited.add(cleanUrl);

  const links = await capturePage(
    cleanUrl,
    visited.size
  );

  for (const link of links) {
    const parsedLink = new URL(link);
    parsedLink.hash = "";
    const normalized = parsedLink.href;

    if (
      !visited.has(normalized) &&
      !queue.includes(normalized) &&
      visited.size + queue.length < MAX_PAGES
    ) {
      queue.push(normalized);
    }
  }

  await new Promise((resolve) =>
    setTimeout(resolve, DELAY_MS)
  );
}

await saveJSON(
  path.join(OUTPUT, "manifest.json"),
  manifest
);

await browser.close();

console.log("\nCapture completed!");
console.log(`Pages: ${manifest.pages.length}`);
console.log(`Assets: ${manifest.assets.length}`);
console.log(`Output: ${OUTPUT}`);
console.log(`Errors: ${manifest.errors.length}`);
