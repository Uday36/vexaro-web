import http from 'http';
import fs from 'fs';
import path from 'path';
import { chromium } from 'playwright';

const DIST_DIR = path.resolve('website/dist');

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
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
    } catch {
      res.writeHead(500);
      res.end('Error');
    }
  });
}

const server = createServer();
await new Promise(r => server.listen(0, '127.0.0.1', r));
const port = server.address().port;
console.log(`Server listening on random port: ${port}`);

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 1000 });
await page.goto(`http://127.0.0.1:${port}/`, { waitUntil: 'networkidle' });

const data = await page.evaluate(() => {
  const headings = Array.from(document.querySelectorAll('h1,h2,h3,h4,h5,h6')).map(h => {
    const r = h.getBoundingClientRect();
    return {
      tag: h.tagName,
      text: h.innerText.replace(/\s+/g, ' ').slice(0, 50),
      y: Math.round(r.top + window.scrollY),
      h: Math.round(r.height),
      w: Math.round(r.width)
    };
  });
  return {
    title: document.title,
    bodyHeight: document.body.scrollHeight,
    headings
  };
});

console.log(`Document title: ${data.title}`);
console.log(`Total body height: ${data.bodyHeight}px`);
for (const h of data.headings) {
  console.log(`  y=${h.y.toString().padStart(5)} | h=${h.h.toString().padStart(3)} | ${h.tag} | ${h.text}`);
}

await browser.close();
server.close();
