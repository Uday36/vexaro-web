import fs from 'fs';

const liveJs = fs.readFileSync('capture/live/assets/d159656472b0.js', 'utf8');

// Find all SVG definitions or icon tags
// Icons in react-icons usually have paths or specific variable names
const matches = liveJs.match(/function [A-Z][a-zA-Z0-9]*\(e\)\{return \$\(\{tag:`svg`[\s\S]*?\}\)/g);
console.log('Icon functions count:', matches?.length);

// Let's find what icons are assigned to variables:
// In liveJs, e.g. jv = { FaTruck: qm, FaBolt: bh, ... }
const jvIdx = liveJs.indexOf('var jv=');
console.log('jv:', liveJs.slice(jvIdx, jvIdx + 300));

const yvIdx = liveJs.indexOf('yv=');
console.log('yv:', liveJs.slice(yvIdx, yvIdx + 300));

// Find social icons in footer: Um, Hm, Wm, mh
const footerIdx = liveJs.indexOf('function jh()');
console.log('footer icons:', liveJs.slice(footerIdx + 300, footerIdx + 900));
