import fs from 'fs';

const js = fs.readFileSync('capture/live/assets/d159656472b0.js', 'utf8');
console.log('JS length:', js.length);

// Look for router patterns or component names
const routerMatches = js.match(/{path:"[^"]+",element:[^}]+}/g) || js.match(/path:"[^"]+"/g);
console.log('Router matches:', routerMatches?.slice(0, 20));

// Find component names or export sections
// Look for strings like "Delivering Trust", "Redefining Courier"
console.log('Has Delivering Trust?', js.includes('DELIVERING'));
