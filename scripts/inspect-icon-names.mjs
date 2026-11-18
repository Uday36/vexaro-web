import fs from 'fs';

const liveJs = fs.readFileSync('capture/live/assets/d159656472b0.js', 'utf8');

function inspectFn(name) {
  const reg = new RegExp(`function ${name}\\(e\\)\\{[\\s\\S]*?\\}`);
  const match = liveJs.match(reg);
  if (match) {
    console.log(`=== ${name} ===`);
    console.log(match[0].slice(0, 300));
  } else {
    // maybe var name = ...
    const reg2 = new RegExp(`var ${name}=[^;]+;`);
    const m2 = liveJs.match(reg2);
    if (m2) console.log(`=== ${name} ===`, m2[0]);
  }
}

['ah', 'gh', 'dh', 'Zm', 'uh', 'rh', 'yh', 'Sh', 'ih', 'mh', 'th', 'ch', 'Um', 'Hm', 'Wm'].forEach(inspectFn);
