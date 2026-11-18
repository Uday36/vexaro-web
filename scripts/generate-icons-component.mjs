import fs from 'fs';

const parsed = JSON.parse(fs.readFileSync('scripts/parsed-icons.json', 'utf8'));

// Names mapping to standard names:
const nameMap = {
  Hm: 'FaWhatsapp',
  Um: 'FaInstagram',
  Wm: 'FaFacebook',
  mh: 'FaEnvelope',
  qm: 'FaTruck',
  bh: 'FaBolt',
  hh: 'FaClock',
  sh: 'FaIndustry',
  Gm: 'FaWarehouse',
  Xm: 'FaShoppingCart',
  vh: 'FaBoxes',
  Km: 'FaUndo',
  yh: 'FaShippingPlane',
  Sh: 'FaArrowRight',
  gh: 'FaCheckCircle',
  ih: 'FaMapMarkerAlt',
  ah: 'FaMapMarkedAlt',
  th: 'FaPhoneAlt',
  Qm: 'FaSearch',
  dh: 'FaHandshake',
  fh: 'FaGlobeAmericas',
  ph: 'FaEye',
  Zm: 'FaShieldAlt',
  _h: 'FaUsers',
  lh: 'FaHeart',
  uh: 'FaHeadphonesAlt',
  rh: 'FaMobileAlt',
  '$m': 'FaPaperPlane',
  fv: 'MdNavigation',
  dv: 'MdLocalShipping',
  Jm: 'FaChevronRight',
  Ym: 'FaStar',
  eh: 'FaBuilding',
  nh: 'FaLocationArrow',
  oh: 'FaBoltSolid',
  ch: 'FaDesktop',
  xh: 'FaBars'
};

let output = `import React from 'react';\n\n`;

for (const [codeName, iconObj] of Object.entries(parsed)) {
  const componentName = nameMap[codeName] || (`Icon_${codeName}`);
  const vb = iconObj.attr?.viewBox || '0 0 24 24';

  output += `export function ${componentName}({ size = 20, className = '', ...props }) {\n`;
  output += `  return (\n`;
  output += `    <svg width={size} height={size} viewBox="${vb}" fill="currentColor" className={className} {...props}>\n`;

  if (iconObj.child && Array.isArray(iconObj.child)) {
    iconObj.child.forEach(c => {
      if (c.attr?.fill === 'none') {
        output += `      <path fill="none" d="${c.attr.d}" />\n`;
      } else {
        output += `      <path d="${c.attr.d}" />\n`;
      }
    });
  }

  output += `    </svg>\n`;
  output += `  );\n}\n\n`;
}

// Add aliases for the short names too
output += `export const icons = {\n`;
for (const [codeName, iconObj] of Object.entries(parsed)) {
  const componentName = nameMap[codeName] || (`Icon_${codeName}`);
  output += `  ${codeName}: ${componentName},\n`;
  output += `  ${componentName}: ${componentName},\n`;
}
output += `};\n`;

fs.writeFileSync('website/src/components/OriginalIcons.jsx', output);
console.log('Generated website/src/components/OriginalIcons.jsx');
