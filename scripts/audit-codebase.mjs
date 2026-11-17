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
const packageJson = JSON.parse(fs.readFileSync('website/package.json', 'utf8'));

const fileReports = files.map(filePath => {
  const code = fs.readFileSync(filePath, 'utf8');
  const lines = code.split('\n').length;
  const importLines = code.match(/import\s+.*?\s+from\s+['"][^'"]+['"]/g) || [];
  
  // check for unused imports or packages
  const packagesUsed = [];
  Object.keys(packageJson.dependencies || {}).forEach(dep => {
    if (code.includes(`'${dep}`) || code.includes(`"${dep}`)) {
      packagesUsed.push(dep);
    }
  });

  return {
    filePath: filePath.replace(/\\/g, '/'),
    lines,
    importLines,
    packagesUsed
  };
});

console.log('=== FILE INVENTORY ===');
fileReports.forEach(r => {
  console.log(`${r.filePath} (${r.lines} lines)`);
  r.importLines.forEach(imp => console.log(`  ${imp}`));
});

// Check package usage across all files
const allDeps = Object.keys(packageJson.dependencies || {});
console.log('\n=== DEPENDENCY USAGE ===');
allDeps.forEach(dep => {
  const users = fileReports.filter(r => r.packagesUsed.includes(dep)).map(r => r.filePath);
  console.log(`${dep}: used in ${users.length} files (${users.map(u => path.basename(u)).join(', ') || 'NONE'})`);
});

// Check asset references
const allCode = files.map(f => fs.readFileSync(f, 'utf8')).join('\n') + fs.readFileSync('website/index.html', 'utf8');

const pubRoot = fs.readdirSync('website/public').filter(f => !fs.statSync('website/public/' + f).isDirectory());
const pubAssets = fs.existsSync('website/public/assets') ? fs.readdirSync('website/public/assets') : [];

console.log('\n=== PUBLIC ASSETS AUDIT ===');
console.log(`website/public root files: ${pubRoot.length}`);
console.log(`website/public/assets files: ${pubAssets.length}`);

pubRoot.forEach(f => {
  const direct = allCode.includes('/' + f);
  const asset = allCode.includes('/assets/' + f);
  console.log(`public/${f}: direct(/${f})=${direct}, asset(/assets/${f})=${asset}`);
});
