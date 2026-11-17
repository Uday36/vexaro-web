import fs from 'fs';
import path from 'path';

function walk(dir) {
  let res = [];
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) res.push(...walk(full));
    else if (/\.(jsx?|tsx?)$/.test(item)) res.push(full);
  }
  return res;
}

const files = walk('website/src');
console.log('=== COMPONENT IMPORT PATHS ===');
files.forEach(f => {
  const code = fs.readFileSync(f, 'utf8');
  const lines = code.split('\n');
  lines.forEach(l => {
    if (l.trim().startsWith('import') && l.includes('components/')) {
      console.log(`${f.replace(/\\/g, '/')}: ${l.trim()}`);
    }
  });
});
