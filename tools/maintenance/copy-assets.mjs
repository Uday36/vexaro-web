import fs from 'fs';
import path from 'path';

const manifestPath = path.resolve(process.cwd(), 'reference/capture-data/live/manifest.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

const publicDir = path.resolve(process.cwd(), 'website/public');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

let copiedCount = 0;

for (const asset of manifest.assets) {
  if (asset.contentType && asset.contentType.startsWith('image/')) {
    const srcPath = path.resolve(process.cwd(), 'reference/capture-data/live', asset.file);
    const fileName = path.basename(new URL(asset.url).pathname);
    
    if (fs.existsSync(srcPath)) {
      const dest = path.join(publicDir, fileName);
      fs.copyFileSync(srcPath, dest);
      console.log(`Copied ${fileName} (${(asset.size / 1024).toFixed(1)} KB)`);
      copiedCount++;
    } else {
      console.error(`Source missing: ${srcPath}`);
    }
  }
}

console.log(`Total images copied: ${copiedCount}`);
