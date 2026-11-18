import fs from 'fs';

const js = fs.readFileSync('capture/live/assets/d159656472b0.js', 'utf8');

// We want to see how each section in Ov is structured:
// 1. Hero
// 2. Stats
// 3. About
// 4. Services
// 5. Why Vexaro Stands Apart
// 6. How it works
// 7. Testimonials
// 8. CTA (Dv)
// 9. Fast Help strip

const p = js.indexOf('function Ov(');
const nextFn = js.indexOf('function kv(', p);
const homeJs = js.slice(p, nextFn);

console.log('Home length:', homeJs.length);
fs.writeFileSync('scripts/home-raw.txt', homeJs);

// Let's also check all framer motion components: Q.div, Q.h1, etc.
const motions = homeJs.match(/Q\.[a-z0-9]+/g) || [];
console.log('Motions used in Home:', [...new Set(motions)]);

// Let's check all style props in Home:
const styles = homeJs.match(/style:\{[^}]+\}/g) || [];
console.log('Styles in Home:', styles);
