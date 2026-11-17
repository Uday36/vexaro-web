import fs from 'fs';

const d = JSON.parse(fs.readFileSync('capture/live/data/page-1.json', 'utf8'));

// Find elements with class containing 'swiper'
const swiperEls = d.elements.filter(el => el.className && el.className.includes('swiper'));
console.log('Swiper elements in page-1:');
for (const el of swiperEls) {
  console.log(`  tag=${el.tag}, class="${el.className}", rect=(${el.rect.x}, ${el.rect.y}, ${el.rect.width}x${el.rect.height})`);
}
