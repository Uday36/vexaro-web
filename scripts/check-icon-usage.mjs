import fs from 'fs';

const js = fs.readFileSync('capture/live/assets/d159656472b0.js', 'utf8');
const icons = JSON.parse(fs.readFileSync('scripts/extracted-icons.json', 'utf8'));

const usage = {};
for (const name of Object.keys(icons)) {
  const reg = new RegExp(`\\b${name}\\b`, 'g');
  const matches = js.match(reg) || [];
  usage[name] = matches.length;
}

console.log('Icon usages:');
console.log(usage);
