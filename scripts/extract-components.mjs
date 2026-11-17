import fs from 'fs';

const js = fs.readFileSync('capture/live/assets/d159656472b0.js', 'utf8');

function extractAround(label, str, before = 200, after = 1500) {
  const idx = js.indexOf(str);
  console.log(`\n================== ${label} (index ${idx}) ==================`);
  if (idx !== -1) {
    console.log(js.slice(Math.max(0, idx - before), Math.min(js.length, idx + after)));
  } else {
    console.log('NOT FOUND');
  }
}

extractAround('NAV ITEMS (Ch)', 'var Ch=');
extractAround('SERVICES DATA (gv)', 'var gv=');
extractAround('SERVICES ICONS (jv)', 'var jv=');
extractAround('TRACKING DATA (mv)', 'var mv=');
extractAround('PRICING COMPONENT (Bv)', 'function Bv()');
extractAround('PARTNERS COMPONENT (Fv)', 'function Fv()');
extractAround('HOME HERO (Ov)', 'function Ov()');
extractAround('ABOUT COMPONENT (Av)', 'function Av()');
extractAround('CONTACT COMPONENT (zv)', 'function zv()');
