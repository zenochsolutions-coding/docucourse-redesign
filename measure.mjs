import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto('https://docucourse-redesign.vercel.app/about', { waitUntil: 'networkidle' });
await page.waitForTimeout(1000);

async function sample(scrollY) {
  await page.evaluate((y) => window.scrollTo(0, y), scrollY);
  await page.waitForTimeout(150);
  return page.evaluate(() => {
    const p = Array.from(document.querySelectorAll('p')).find(el => /share with friends/i.test(el.textContent));
    const section = p ? p.closest('section') : null;
    const leadTitle = Array.from(document.querySelectorAll('h3')).find(el => el.textContent.trim() === 'Lead');
    return {
      scrollY: window.scrollY,
      shareRectTop: section ? section.getBoundingClientRect().top : null,
      shareTransform: section ? getComputedStyle(section).transform : null,
      leadTop: leadTitle ? leadTitle.getBoundingClientRect().top : null,
    };
  });
}

const maxScroll = await page.evaluate(() => document.documentElement.scrollHeight - window.innerHeight);
console.log('maxScroll', maxScroll);

for (const frac of [0.5, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1.0]) {
  const y = Math.round(frac * maxScroll);
  const r = await sample(y);
  console.log(frac, JSON.stringify(r));
}

await browser.close();
