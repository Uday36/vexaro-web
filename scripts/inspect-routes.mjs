import fs from 'fs';

const js = fs.readFileSync('capture/live/assets/d159656472b0.js', 'utf8');

const terms = ['/about', '/services', '/pricing', '/partners', '/contact', '/track', '/terms', '/privacy', '/resources'];
for (const t of terms) {
  let idx = 0;
  console.log(`=== Matches for ${t} ===`);
  while ((idx = js.indexOf(t, idx)) !== -1) {
    console.log(js.slice(Math.max(0, idx - 100), Math.min(js.length, idx + 100)));
    console.log('---');
    idx += t.length;
  }
}
