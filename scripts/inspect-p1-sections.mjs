import fs from 'fs';

const live = JSON.parse(fs.readFileSync('capture/live/data/page-1.json', 'utf8'));

console.log('LIVE PAGE 1 HEADINGS & Y POSITIONS:');
for (const h of live.headings) {
  if (h.rect.width > 0 && h.rect.height > 0) {
    console.log(`  y=${h.rect.y.toString().padStart(5)} | h=${h.rect.height.toString().padStart(3)} | ${h.tag} | ${h.text.replace(/\s+/g, ' ').slice(0, 50)}`);
  }
}
