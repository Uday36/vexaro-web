import fs from 'fs';

const js = fs.readFileSync('capture/live/assets/d159656472b0.js', 'utf8');

// Find variable definitions around Services
const srvIdx = js.indexOf('Domestic Courier');
console.log('--- Services text context ---');
console.log(js.slice(srvIdx - 300, srvIdx + 2000));
