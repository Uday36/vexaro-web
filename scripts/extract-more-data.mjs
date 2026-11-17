import fs from 'fs';

const js = fs.readFileSync('capture/live/assets/d159656472b0.js', 'utf8');

// Find Partners data
const ptnIdx = js.indexOf('Partnership Categories');
console.log('--- Partners context ---');
console.log(js.slice(ptnIdx - 800, ptnIdx + 1500));

// Find About page data
const abtIdx = js.indexOf('Born in Indore');
console.log('--- About context ---');
console.log(js.slice(abtIdx - 400, abtIdx + 1500));

// Find Pricing data
const prcIdx = js.indexOf('Transparent Pricing');
console.log('--- Pricing context ---');
console.log(js.slice(prcIdx - 200, prcIdx + 2000));
