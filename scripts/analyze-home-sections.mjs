import fs from 'fs';

const liveHome = fs.readFileSync('scripts/extracted-home-live.js', 'utf8');

// Let's find all sections in liveHome
const sectionMatches = [];
const regex = /section`,[\s\S]*?(?=section`,|$)/g;
let m;
while ((m = regex.exec(liveHome)) !== null) {
  sectionMatches.push(m[0].slice(0, 300));
}

console.log('Total sections in Home:', sectionMatches.length);
sectionMatches.forEach((s, i) => console.log(`--- Section ${i + 1} ---:\n`, s, '\n'));
