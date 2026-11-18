import http from 'http';
import fs from 'fs';
import path from 'path';
import { chromium } from 'playwright';

const DIST_DIR = path.resolve(process.cwd(), 'dist');

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
  '/',
  '/about',
  '/services',
  '/pricing',
  '/partners',
  '/contact',
  '/track',
  '/terms',
  '/privacy',
  '/resources'
];

async function main() {
  const server = createServer();
  await new Promise((resolve) => server.listen(3002, resolve));
  console.log('Server started on 3002');

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  const errors = [];
  const brokenRequests = [];

  page.on('console', msg => {
    if (msg.type() === 'error') {
      errors.push({ text: msg.text(), location: msg.location() });
    }
  });

  page.on('pageerror', err => {
    errors.push({ pageerror: err.message, stack: err.stack });
  });

  page.on('response', resp => {
    if (resp.status() >= 400) {
      brokenRequests.push({ url: resp.url(), status: resp.status() });
    }
  });

  for (const r of routes) {
    console.log(`Checking route: ${r}`);
    await page.goto(`http://localhost:3002${r}`, { waitUntil: 'networkidle' });

    // Check for images with naturalWidth === 0
    const brokenImages = await page.evaluate(() => {
      const imgs = Array.from(document.querySelectorAll('img'));
      return imgs
        .filter(img => img.naturalWidth === 0)
        .map(img => ({ src: img.src, currentSrc: img.currentSrc, alt: img.alt }));
    });

    if (brokenImages.length > 0) {
      console.log(`Broken images on ${r}:`, brokenImages);
    }
  }

  console.log('--- Summary ---');
  console.log('Console errors:', errors);
  console.log('Broken requests:', brokenRequests);

  await browser.close();
  server.close();
}

main().catch(console.error);
