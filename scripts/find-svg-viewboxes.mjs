import fs from 'fs';

const js = fs.readFileSync('capture/live/assets/d159656472b0.js', 'utf8');

// Find all matches for viewBox:`...` or viewBox:"..."
const regex = /viewBox:[`'"]([^`'"]+)[`'"]/g;
let m;
const viewboxes = [];
while ((m = regex.exec(js)) !== null) {
  // get context around it
  const start = Math.max(0, m.index - 80);
  const end = Math.min(js.length, m.index + 120);
  viewboxes.push({ vb: m[1], context: js.slice(start, end) });
}

console.log('Total viewBox matches:', viewboxes.length);
viewboxes.forEach((vb, idx) => {
  console.log(`[${idx}] vb=${vb.vb}`);
  console.log(`     context: ${vb.context.replace(/\n/g, ' ')}`);
});
