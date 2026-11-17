import fs from 'fs';
import path from 'path';

const manifest = JSON.parse(fs.readFileSync('capture/live/manifest.json', 'utf8'));

const publicDir = 'website/public';
const publicAssetsDir = 'website/public/assets';

if (!fs.existsSync(publicAssetsDir)) {
  fs.mkdirSync(publicAssetsDir, { recursive: true });
}

let copiedCount = 0;

for (const asset of manifest.assets) {
  if (asset.contentType && asset.contentType.startsWith('image/')) {
    const srcPath = path.join('capture/live', asset.file);
    // target filename is from asset.url e.g. /new-logo.png -> new-logo.png
    const fileName = path.basename(new URL(asset.url).pathname);
    
    if (fs.existsSync(srcPath)) {
      const dest1 = path.join(publicDir, fileName);
      const dest2 = path.join(publicAssetsDir, fileName);
      
      fs.copyFileSync(srcPath, dest1);
      fs.copyFileSync(srcPath, dest2);
      console.log(`Copied ${fileName} (${(asset.size / 1024).toFixed(1)} KB)`);
      copiedCount++;
    } else {
      console.error(`Source missing: ${srcPath}`);
    }
  }
}

console.log(`Total images copied: ${copiedCount}`);
