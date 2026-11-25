/* Captures every screen at desktop (1280px) and phone (390px) widths into screenshots/.
   Uses the installed Google Chrome (PW_CHANNEL=msedge for Edge, PW_CHANNEL=bundled for Playwright's Chromium). */
const path = require('path');
const { pathToFileURL } = require('url');
const { chromium } = require('@playwright/test');

const ROOT = path.join(__dirname, '..');
const URL = pathToFileURL(path.join(ROOT, 'index.html')).href;
const OUT = path.join(ROOT, 'screenshots');

/* Fill in a realistic mix of right, wrong and missing answers. */
async function answerSome(page) {
  await page.evaluate(() => {
    const ex = window.__sim.exam();
    const S = window.__sim.state();
    ex.items.forEach((it, i) => {
      if (i % 3 === 2) return;
      const m = window.__sim.modelAnswer(it);
      if (it.type === 'mcq') S.current.answers[it.id] = i % 4 === 0 ? (it.correct + 1) % 4 : m;
      else if (it.type === 'fill') S.current.answers[it.id] = m.map((x, k) => (k === 0 && i % 2 ? 'data' : x));
      else S.current.answers[it.id] = { text: it.q.model.split('\n').slice(0, 12).join('\n'), out: m.out };
    });
    S.current.idx = 0;
    localStorage.setItem('ml.sim.v1', JSON.stringify(S));
  });
}

(async () => {
  const channel = process.env.PW_CHANNEL || 'chrome';
  const browser = await chromium.launch(channel === 'bundled' ? {} : { channel });
  for (const [label, width, height] of [['desktop', 1280, 860], ['phone', 390, 844]]) {
    const ctx = await browser.newContext({ viewport: { width, height }, deviceScaleFactor: label === 'phone' ? 2 : 1 });
    const page = await ctx.newPage();
    const errors = [];
    page.on('pageerror', (e) => errors.push(e.message));
    page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
    const shot = (name, full) => page.screenshot({ path: path.join(OUT, `${label}-${name}.png`), fullPage: !!full });

    await page.goto(URL);
    await page.evaluate(() => localStorage.clear());
    await page.reload();
    await page.waitForTimeout(500);
    await shot('1-home', true);

    // Focus mode
    await page.fill('#code-in', 'ML-7F3A');
    await page.click('#codeform button[type=submit]');
    await page.waitForSelector('.qcard');
    await page.locator('.qcard .choice').nth(2).click();
    await shot('2-focus-mcq');
    const fillN = await page.evaluate(() => window.__sim.exam().items.find((i) => i.type === 'fill').n);
    await page.click('#f-count');
    await page.waitForSelector('#drawer');
    await shot('3-focus-drawer');
    await page.click(`#drawer [data-go="${fillN}"]`);
    await page.locator('.qcard input.fblank').first().fill('data');
    await shot('4-focus-fill');
    const expN = await page.evaluate(() => window.__sim.exam().items.find((i) => i.type === 'prac').n);
    await page.click('#f-count');
    await page.click(`#drawer [data-go="${expN}"]`);
    await shot('5-focus-practical');

    // A4 mode
    await page.click('.exam-top [data-view="a4"]');
    await page.waitForSelector('#sheets .sheet');
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(200);
    await shot('6-a4-top');

    // Results (Flow view, then A4 view)
    await answerSome(page);
    await page.reload();
    await page.waitForSelector('.exam-top');
    await page.click('.exam-top [data-view="focus"]');
    await page.click('#btn-submit');
    await page.click('dialog [data-r="1"]');
    await page.waitForSelector('.result-hero');
    await page.waitForTimeout(300);
    await shot('7-result-top');
    await page.evaluate(() => window.scrollTo(0, 900));
    await page.waitForTimeout(150);
    await shot('8-result-paper');

    await page.goto(URL + '#/cards');
    await page.waitForSelector('#fc-card');
    await shot('9-cards', true);
    await page.goto(URL + '#/progress');
    await page.waitForTimeout(200);
    await shot('10-progress', true);
    console.log(label, errors.length ? 'ERRORS: ' + errors.join(' | ') : 'no console errors');
    await ctx.close();
  }
  await browser.close();
})();
