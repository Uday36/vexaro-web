import fs from 'fs';

const js = fs.readFileSync('capture/live/assets/d159656472b0.js', 'utf8');

// 1. Header & Navigation
// Let's locate navbar component
console.log('--- NAVBAR ---');
const navMatch = js.match(/function wh\(\){[\s\S]*?return\s*\([\s\S]*?<\/header>/) || js.match(/function wh\(\){[\s\S]*?return/);
console.log(js.slice(js.indexOf('function wh()'), js.indexOf('function wh()') + 1500));

// 2. Footer component
console.log('--- FOOTER ---');
const footerIdx = js.indexOf('<footer') !== -1 ? js.indexOf('<footer') : js.indexOf('`footer`');
console.log(js.slice(footerIdx - 200, footerIdx + 1200));

// 3. PageHeader component (kv)
console.log('--- PAGE HEADER (kv) ---');
console.log(js.slice(js.indexOf('function kv('), js.indexOf('function kv(') + 800));

// 4. Legal / Resources (Vv and Hv)
console.log('--- LEGAL DATA (Vv) ---');
const vvIdx = js.indexOf('var Vv=');
console.log(js.slice(vvIdx, vvIdx + 1500));
