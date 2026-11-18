import fs from 'fs';

const liveJs = fs.readFileSync('capture/live/assets/d159656472b0.js', 'utf8');

const match = liveJs.match(/function yh\(e\)\{return \$\(\{tag:`svg`[\s\S]*?\}\)/);
console.log(match ? match[0] : 'not found');
