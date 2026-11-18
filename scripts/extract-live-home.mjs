import fs from 'fs';

const js = fs.readFileSync('capture/live/assets/d159656472b0.js', 'utf8');

const p = js.indexOf('function Ov(');
// Find end of Ov or next function definition
let nextFn = js.indexOf('function Av(', p);
if (nextFn === -1) nextFn = p + 25000;

console.log('Ov length:', nextFn - p);
fs.writeFileSync('scripts/extracted-home-live.js', js.slice(p, nextFn));
console.log('Written extracted-home-live.js');
