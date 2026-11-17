import http from 'http';
import fs from 'fs';
import path from 'path';
import { chromium } from 'playwright';

const DIST_DIR = path.resolve('website/dist');

function createServer() {
  return http.createServer((req, res) => {
    let filePath = path.join(DIST_DIR, new URL(req.url, 'http://localhost').pathname);
    if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
      filePath = path.join(DIST_DIR, 'index.html');
    }
    const ext = path.extname(filePath).toLowerCase();
    const mime = ext === '.css' ? 'text/css' : ext === '.js' ? 'application/javascript' : ext === '.png' ? 'image/png' : 'text/html';
    res.writeHead(200, { 'Content-Type': mime });
    res.end(fs.readFileSync(filePath));
  });
}

const server = createServer();
await new Promise(r => server.listen(0, '127.0.0.1', r));
const port = server.address().port;

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 1000 });
await page.goto(`http://127.0.0.1:${port}/`, { waitUntil: 'networkidle' });

const details = await page.evaluate(() => {
  const sections = Array.from(document.querySelectorAll('section')).map((s, i) => {
    const r = s.getBoundingClientRect();
    const h = s.querySelector('h1, h2, h3')?.innerText.trim() || 'No Heading';
    return {
      index: i + 1,
      heading: h.slice(0, 40),
      top: Math.round(r.top + window.scrollY),
      height: Math.round(r.height)
    };
  });
  return sections;
});

console.log('SECTION DIMENSIONS:');
for (const s of details) {
  console.log(`Section ${s.index}: y=${s.top.toString().padStart(5)}, height=${s.height.toString().padStart(4)}px | ${s.heading}`);
}

await browser.close();
server.close();
