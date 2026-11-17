import fs from 'fs';

const js = fs.readFileSync('capture/live/assets/d159656472b0.js', 'utf8');

// Find the start of the data definitions
const gvIdx = js.indexOf('gv=') !== -1 ? js.indexOf('gv=') : js.indexOf('gv =');
console.log('gv index:', gvIdx);
// Let's print 5000 characters before and after gvIdx
console.log('--- 4000 CHARS BEFORE GV ---');
console.log(js.slice(Math.max(0, gvIdx - 4000), gvIdx));

console.log('--- 4000 CHARS AFTER GV ---');
console.log(js.slice(gvIdx, Math.min(js.length, gvIdx + 4000)));
