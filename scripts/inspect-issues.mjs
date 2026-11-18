import fs from 'fs';

const liveJs = fs.readFileSync('capture/live/assets/d159656472b0.js', 'utf8');

console.log('--- 1. Three.js / WebGL / Canvas check ---');
console.log('three.js?', liveJs.includes('three') || liveJs.includes('THREE') || liveJs.includes('WebGL'));
console.log('canvas?', liveJs.includes('canvas'));

console.log('--- 2. Framer motion / motion check in liveJs ---');
console.log('motion?', liveJs.includes('framer-motion') || liveJs.includes('motion/react') || liveJs.includes('framer_motion'));

console.log('--- 3. Swiper check in liveJs ---');
console.log('swiper?', liveJs.includes('swiper') || liveJs.includes('Swiper'));

console.log('--- 4. Icons check in liveJs ---');
const iconMatches = liveJs.match(/Fa[A-Z][a-zA-Z0-9]+/g);
console.log('react-icons Fa icons:', [...new Set(iconMatches)]);
const fiMatches = liveJs.match(/Fi[A-Z][a-zA-Z0-9]+/g);
console.log('react-icons Fi icons:', [...new Set(fiMatches)]);
const mdMatches = liveJs.match(/Md[A-Z][a-zA-Z0-9]+/g);
console.log('react-icons Md icons:', [...new Set(mdMatches)]);
const hiMatches = liveJs.match(/Hi[A-Z][a-zA-Z0-9]+/g);
console.log('react-icons Hi icons:', [...new Set(hiMatches)]);
const ioMatches = liveJs.match(/Io[A-Z][a-zA-Z0-9]+/g);
console.log('react-icons Io icons:', [...new Set(ioMatches)]);
