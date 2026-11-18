import fs from 'fs';

const js = fs.readFileSync('capture/live/assets/d159656472b0.js', 'utf8');

// Icons in react-icons or similar typically have: function X(e){return $({tag:`svg`,attr:{viewBox:`...`}...})}
// or $({tag:`svg`
const regex = /function\s+([A-Za-z0-9_$]+)\s*\([a-z]\)\s*\{\s*return\s+\$\(\{\s*tag:\s*`svg`[\s\S]*?\}\)\s*\}/g;

let m;
const icons = [];
while ((m = regex.exec(js)) !== null) {
  const name = m[1];
  const code = m[0];
  const vbMatch = code.match(/viewBox:`([^`]+)`/);
  const viewBox = vbMatch ? vbMatch[1] : 'unknown';
  
  // Find references to this icon in js
  const refCount = (js.match(new RegExp(`\\b${name}\\b`, 'g')) || []).length;
  icons.push({ name, viewBox, refCount, length: code.length });
}

console.log('Total icon functions found:', icons.length);
icons.forEach(ic => {
  console.log(`Icon ${ic.name}: viewBox="${ic.viewBox}", refs=${ic.refCount}, len=${ic.length}`);
});
