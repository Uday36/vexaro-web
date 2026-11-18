import fs from 'fs';

const icons = JSON.parse(fs.readFileSync('scripts/extracted-icons.json', 'utf8'));

// Each icon string looks like:
// {tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`...`},child:[]}]}
// Let's parse them safely with eval or JSON manipulation
function parseIcon(str) {
  // Replace backticks with quotes
  const cleaned = str
    .replace(/tag:`([^`]+)`/g, '"tag":"$1"')
    .replace(/viewBox:`([^`]+)`/g, '"viewBox":"$1"')
    .replace(/d:`([^`]+)`/g, '"d":"$1"')
    .replace(/fill:`([^`]+)`/g, '"fill":"$1"')
    .replace(/attr:/g, '"attr":')
    .replace(/child:/g, '"child":');
  try {
    return JSON.parse(cleaned);
  } catch (e) {
    // eval safely
    const fn = new Function(`return (${str})`);
    return fn();
  }
}

const parsedIcons = {};
for (const [name, str] of Object.entries(icons)) {
  parsedIcons[name] = parseIcon(str);
}

fs.writeFileSync('scripts/parsed-icons.json', JSON.stringify(parsedIcons, null, 2));
console.log('Successfully parsed all', Object.keys(parsedIcons).length, 'icons');
