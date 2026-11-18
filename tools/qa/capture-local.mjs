import http from 'http';
import fs from 'fs';
import path from 'path';
import { chromium } from 'playwright';

const DIST_DIR = path.resolve(process.cwd(), 'website/dist');
const OUTPUT_DIR = path.resolve(process.cwd(), 'tools/qa/screenshots');

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.json': 'application/json',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2'
};

// Simple static server with SPA fallback
function createServer() {
  return http.createServer((req, res) => {
    let reqUrl = new URL(req.url, 'http://localhost');
    let filePath = path.join(DIST_DIR, reqUrl.pathname);

    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
      filePath = path.join(filePath, 'index.html');
    }

    if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
      filePath = path.join(DIST_DIR, 'index.html');
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    try {
      const data = fs.readFileSync(filePath);
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    } catch (e) {
      res.writeHead(500);
      res.end('Error loading file');
    }
  });
}

const routes = [
  { index: 1, path: '/', name: 'home' },
  { index: 2, path: '/about', name: 'about' },
  { index: 3, path: '/services', name: 'services' },
  { index: 4, path: '/pricing', name: 'pricing' },
  { index: 5, path: '/partners', name: 'partners' },
  { index: 6, path: '/contact', name: 'contact' },
  { index: 7, path: '/track', name: 'track' },
  { index: 8, path: '/terms', name: 'terms' },
  { index: 9, path: '/privacy', name: 'privacy' },
  { index: 10, path: '/resources', name: 'resources' }
];

const viewports = [
  { name: 'desktop', width: 1440, height: 1000 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'mobile', width: 390, height: 844 }
];

async function main() {
  const server = createServer();
  await new Promise((resolve) => server.listen(3000, resolve));
  console.log('Local static server running on http://localhost:3000');

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  for (const r of routes) {
    const pageDir = path.join(OUTPUT_DIR, `page-${r.index}`);
    if (!fs.existsSync(pageDir)) {
      fs.mkdirSync(pageDir, { recursive: true });
    }

    for (const vp of viewports) {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      const url = `http://localhost:3000${r.path}`;
      await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
      await page.waitForTimeout(600);

      // Scroll to trigger any scroll reveals
      await page.evaluate(async () => {
        const height = document.body.scrollHeight;
        for (let i = 0; i < height; i += 400) {
          window.scrollTo(0, i);
          await new Promise((r) => setTimeout(r, 40));
        }
        window.scrollTo(0, 0);
      });
      await page.waitForTimeout(400);

      const screenshotPath = path.join(pageDir, `${vp.name}.png`);
      await page.screenshot({
        path: screenshotPath,
        fullPage: true,
        timeout: 30000
      });
      console.log(`Captured [Page ${r.index}] ${r.name} @ ${vp.name}`);
    }
  }

  await browser.close();
  server.close();
  console.log('All local screenshots captured successfully!');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
