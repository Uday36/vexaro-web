import fs from 'fs';

const liveJs = fs.readFileSync('capture/live/assets/d159656472b0.js', 'utf8');

const kvIdx = liveJs.indexOf('function kv(');
console.log('--- kv (PageHeader) in liveJs ---');
console.log(liveJs.slice(kvIdx, kvIdx + 2000));
