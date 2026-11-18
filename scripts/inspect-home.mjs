import fs from 'fs';

const js = fs.readFileSync('capture/live/assets/d159656472b0.js', 'utf8');

const p = js.indexOf('function Ov(');
if (p !== -1) {
  console.log('Ov length:', 20000);
  console.log(js.slice(p, p + 4000));
} else {
  console.log('Not found function Ov(');
  const m = js.match(/Ov\s*=\s*/);
  console.log('Ov match:', m ? js.slice(m.index, m.index + 500) : 'none');
}
