import fs from 'fs';

const js = fs.readFileSync('capture/live/assets/d159656472b0.js', 'utf8');

// The pattern is: function <name>(e){return $({tag:`svg`...child:[...]})(e)}
const regex = /function\s+([A-Za-z0-9_$]+)\s*\([a-z]\)\s*\{\s*return\s+\$\(\s*(\{[\s\S]*?\})\s*\)\s*\([a-z]\)\s*\}/g;

let m;
const icons = {};
while ((m = regex.exec(js)) !== null) {
  const name = m[1];
  const objStr = m[2];
  icons[name] = objStr;
}

console.log('Total extracted icons:', Object.keys(icons).length);
console.log('Names:', Object.keys(icons).join(', '));

fs.writeFileSync('scripts/extracted-icons.json', JSON.stringify(icons, null, 2));
