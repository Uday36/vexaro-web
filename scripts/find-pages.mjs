import fs from 'fs';

const js = fs.readFileSync('capture/live/assets/d159656472b0.js', 'utf8');

// Find all occurrences of jsx or jsxs with key identifiers
// In the bundle, the pages were:
// Ov (Home), Av (About), Mv (Services), Bv (Pricing), Fv (Partners), Rv (Track), zv (Contact), Hv (Legal/Terms/Privacy/Resources)
// Let's inspect each of these functions!

function inspectFunction(fnName) {
  // Look for `function fnName(` or `var fnName=` or `const fnName=`
  const patterns = [
    new RegExp(`function ${fnName}\\s*\\(`, 'g'),
    new RegExp(`var ${fnName}\\s*=`, 'g'),
    new RegExp(`const ${fnName}\\s*=`, 'g'),
    new RegExp(`${fnName}\\s*=\\s*\\(`, 'g'),
    new RegExp(`${fnName}\\s*=\\s*function`, 'g')
  ];

  for (const p of patterns) {
    const match = p.exec(js);
    if (match) {
      console.log(`Found ${fnName} at index ${match.index}:`);
      console.log(js.slice(match.index, match.index + 800));
      console.log('-------------------------------------------');
      return match.index;
    }
  }
  console.log(`Could not find definition for ${fnName}`);
  return -1;
}

['Ov', 'Av', 'Mv', 'Bv', 'Fv', 'Rv', 'zv', 'Hv'].forEach(inspectFunction);
