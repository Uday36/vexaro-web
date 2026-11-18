import fs from 'fs';

const js = fs.readFileSync('capture/live/assets/d159656472b0.js', 'utf8');

// Find function containing Navbar: links Home, About, Services, Pricing, Partners, Contact
const p = js.indexOf('Try for Free');
console.log('Try for Free index:', p);
// Find function header before it
const fnStart = js.lastIndexOf('function ', p);
console.log(js.slice(fnStart, fnStart + 3500));
