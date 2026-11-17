import fs from 'fs';
import path from 'path';

function getPngDimensions(filePath) {
  if (!fs.existsSync(filePath)) return null;
  const buf = Buffer.alloc(24);
  const fd = fs.openSync(filePath, 'r');
  fs.readSync(fd, buf, 0, 24, 0);
  fs.closeSync(fd);
  // PNG signature: 89 50 4E 47 0D 0A 1A 0A
  // IHDR width at offset 16 (4 bytes), height at offset 20 (4 bytes)
  const width = buf.readUInt32BE(16);
  const height = buf.readUInt32BE(20);
  const size = fs.statSync(filePath).size;
  return { width, height, size };
}

const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const viewports = ['desktop', 'tablet', 'mobile'];

console.log('PAGE | VIEWPORT | LIVE (WxH, KB) | LOCAL (WxH, KB) | HEIGHT DIFF | RATIO');
console.log('-----|----------|----------------|-----------------|-------------|------');

for (const p of pages) {
  for (const vp of viewports) {
    const livePath = `capture/live/screenshots/page-${p}/${vp}.png`;
    const localPath = `capture/local/screenshots/page-${p}/${vp}.png`;

    const live = getPngDimensions(livePath);
    const local = getPngDimensions(localPath);

    if (live && local) {
      const heightDiff = local.height - live.height;
      const heightRatio = (local.height / live.height).toFixed(2);
      const liveKB = (live.size / 1024).toFixed(0);
      const localKB = (local.size / 1024).toFixed(0);
      console.log(
        `p${p} | ${vp.padEnd(7)} | ${live.width}x${live.height} (${liveKB}k) | ${local.width}x${local.height} (${localKB}k) | ${heightDiff > 0 ? '+' : ''}${heightDiff}px | ${heightRatio}x`
      );
    } else {
      console.log(`p${p} | ${vp} | MISSING FILE`);
    }
  }
}
