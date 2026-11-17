import fs from 'fs';

const js = fs.readFileSync('capture/live/assets/d159656472b0.js', 'utf8');
console.log('JS length:', js.length);

const routerMatches = js.match(/{path:"[^"]+",element:[^}]+}/g) || js.match(/path:"[^"]+"/g);
console.log('Router matches:', routerMatches);
