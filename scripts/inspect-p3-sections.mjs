import fs from 'fs';

const live = JSON.parse(fs.readFileSync('capture/live/data/page-3.json', 'utf8'));

console.log('LIVE PAGE 3 HEADINGS & Y POSITIONS:');
for (const h of live.headings) {
  console.log(`  y=${h.rect.y.toString().padStart(5)} | h=${h.rect.height.toString().padStart(3)} | ${h.tag} | ${h.text.replace(/\s+/g, ' ').slice(0, 50)}`);
}

console.log('Document height:', live.viewport.documentHeight);
