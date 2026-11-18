import fs from 'fs';

const liveJs = fs.readFileSync('capture/live/assets/d159656472b0.js', 'utf8');

// Match all icon functions: function Name(e){return $({tag:`svg`...})}
const regex = /function\s+([A-Za-z0-9_$]+)\s*\([a-z]\)\s*\{\s*return\s+\$\(\{\s*tag:\s*`svg`[\s\S]*?\}\)\s*\}/g;

let match;
const icons = [];
while ((match = regex.exec(liveJs)) !== null) {
  icons.push({
    name: match[1],
    code: match[0]
  });
}

console.log('Found', icons.length, 'icons');
for (const icon of icons) {
  console.log('Icon name:', icon.name, 'code length:', icon.code.length);
}
