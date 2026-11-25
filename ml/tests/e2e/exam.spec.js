// End-to-end: build papers, answer them through the real UI in both views, submit and check the marks.
const path = require('path');
const { pathToFileURL } = require('url');
const { test, expect } = require('@playwright/test');
const { load } = require('../load');

const URL = pathToFileURL(path.join(__dirname, '..', '..', 'index.html')).href;
const KEY = 'ml.sim.v1';

/* Fresh storage, optionally with a preferred exam view ('focus' | 'a4'). */
async function fresh(page, view) {
  await page.goto(URL);
  await page.evaluate(() => localStorage.clear());
  await page.reload();
  await page.evaluate((k) => localStorage.removeItem(k), KEY);
  await page.reload();
  // Choose the view on the home page, exactly as a student would.
  if (view === 'a4') await page.click('label:has(input[name=view][value=a4])');
}
async function openCode(page, code) {
  await page.fill('#code-in', code);
  await page.click('#codeform button[type=submit]');
  await page.waitForSelector('.exam-top');
}
async function plan(page) {
  return page.evaluate(() => {
    const ex = window.__sim.exam();
    return ex.items.map((it) => ({ n: it.n, id: it.id, type: it.type, marks: it.marks, need: it.q.need, model: window.__sim.modelAnswer(it) }));
  });
}
async function submit(page) {
  await page.click('#btn-submit');
  await page.click('dialog [data-r="1"]');
  await page.waitForSelector('.result-hero');
}

async function answerA4(page, items) {
  for (const it of items) {
    const q = page.locator(`#q${it.n}`);
    if (it.type === 'mcq') await q.locator(`.opt[data-v="${it.model}"]`).click();
    else if (it.type === 'fill') { for (let k = 0; k < it.model.length; k++) await q.locator(`input.blank[data-k="${k}"]`).fill(it.model[k]); }
    else { await page.locator(`.paper-box[data-id="${it.id}"] textarea[data-f=text]`).fill(it.model.text); await page.locator(`.paper-box[data-id="${it.id}"] textarea[data-f=out]`).fill(it.model.out); }
  }
}
async function answerFocus(page, items) {
  for (const it of items) {
    const card = page.locator(`.qcard[data-id="${it.id}"]`);
    await expect(card).toBeVisible();
    if (it.type === 'mcq') await card.locator(`.choice[data-v="${it.model}"]`).click();
    else if (it.type === 'fill') { for (let k = 0; k < it.model.length; k++) await card.locator(`input.fblank[data-k="${k}"]`).fill(it.model[k]); }
    else { await card.locator('textarea[data-f=text]').fill(it.model.text); await card.locator('textarea[data-f=out]').fill(it.model.out); }
    if (it.n < items.length) await page.click('#f-next');
  }
}

test('Focus mode: answer a whole paper one card at a time and get full marks', async ({ page }) => {
  await fresh(page);
  await page.click('#start');
  await page.waitForSelector('.qcard');
  const items = await plan(page);
  expect(items.reduce((s, i) => s + i.marks, 0)).toBe(40);
  await answerFocus(page, items);
  await expect(page.locator('#f-next-t')).toHaveText('Finish');
  await page.click('#f-next');
  await page.click('dialog [data-r="1"]');
  await page.waitForSelector('.result-hero');
  await expect(page.locator('[data-total2]')).toHaveText('40');
  await expect(page.locator('#sheets [data-total]')).toHaveText('40');
  await expect(page.locator('#sheets [data-grade]')).toHaveText('A');
  await page.goto(URL + '#/progress');
  await expect(page.locator('table.hist tbody tr')).toHaveCount(1);
  await expect(page.locator('table.hist')).toContainText('40/40');
});

test('A4 mode: answer directly on the sheets and get full marks', async ({ page }) => {
  await fresh(page, 'a4');
  await openCode(page, 'ML-3C9D');
  await page.waitForSelector('#sheets .sheet');
  expect(await page.locator('#sheets .sheet').count()).toBeGreaterThan(3);
  const items = await plan(page);
  await answerA4(page, items);
  await submit(page);
  await expect(page.locator('[data-total2]')).toHaveText('40');
  await expect(page.locator('.q-margin', { hasText: '✗' })).toHaveCount(0);
});

test('switching between Focus and A4 keeps every answer', async ({ page }) => {
  await fresh(page);
  await openCode(page, 'ML-7F3A');
  const items = await plan(page);
  const first = items[0];
  await page.locator(`.qcard .choice[data-v="${(first.model + 1) % 4}"]`).click();
  await page.click('.exam-top [data-view="a4"]');
  await page.waitForSelector('#sheets .sheet');
  await expect(page.locator(`#q1 .opt[data-v="${(first.model + 1) % 4}"]`)).toHaveAttribute('aria-checked', 'true');
  const fill = items.find((i) => i.type === 'fill');
  await page.locator(`#q${fill.n} input.blank`).first().fill('typed on paper');
  await page.click('.exam-top [data-view="focus"]');
  await page.click('#f-count');
  await page.click(`#drawer [data-go="${fill.n}"]`);
  await expect(page.locator('.qcard input.fblank').first()).toHaveValue('typed on paper');
});

test('a blank paper scores zero and self-marking changes the total', async ({ page }) => {
  await fresh(page);
  await openCode(page, 'ML-0A1B');
  await submit(page);
  await expect(page.locator('[data-total2]')).toHaveText('0');
  const e = page.locator('#sheets .q-prac');
  await expect(e).toHaveCount(1);
  const boxes = e.locator('input[data-pt]');
  const n = await boxes.count();
  expect(n).toBe(10);
  for (let i = 0; i < n; i++) await boxes.nth(i).check();
  await expect(page.locator('#sheets [data-total]')).toHaveText('10');
  await expect(page.locator('[data-total2]')).toHaveText('10');
  await expect(page.locator('#sheets .q-extra .model pre.code')).toHaveCount(2);
  await page.click('#btn-mistakes');
  await expect(page.locator('#sheets .q-prac')).toHaveCount(0);
  await page.click('.result-tools [data-view="a4"]');
  expect(await page.locator('#sheets .sheet').count()).toBeGreaterThan(1);
});

test('answers and flags autosave and survive a reload', async ({ page }) => {
  await fresh(page);
  await openCode(page, 'ML-7F3A');
  await page.locator('.qcard .choice[data-v="2"]').click();
  await page.click('#f-flag');
  await page.click('#f-next');
  await page.waitForTimeout(400);
  await page.reload();
  await page.waitForSelector('.qcard');
  await expect(page.locator('#f-count-t')).toHaveText(/^2 \//);
  await page.click('#f-prev');
  await expect(page.locator('.qcard .choice[data-v="2"]')).toHaveAttribute('aria-checked', 'true');
  await expect(page.locator('#f-flag')).toHaveAttribute('aria-pressed', 'true');
});

test('difficulty is chosen on the home page and travels in the code', async ({ page }) => {
  await fresh(page);
  await page.click('label:has(input[name=diff][value=H])');
  await page.click('#start');
  await page.waitForSelector('.qcard');
  const code = await page.evaluate(() => window.__sim.exam().code);
  expect(code).toMatch(/^ML-[0-9A-F]{4}-2345MH$/);
  await expect(page.locator('.et-title')).toContainText('Hard');
  const EC = load();
  const nodeIds = EC.core.makeExam(code).items.map((i) => i.id);
  expect((await plan(page)).map((i) => i.id)).toEqual(nodeIds);
});

test('keyboard: letters answer and arrows move in Focus mode', async ({ page }) => {
  await fresh(page);
  await openCode(page, 'ML-7F3A');
  await page.locator('.qcard').focus();
  await page.keyboard.press('c');
  await expect(page.locator('.qcard .choice[data-v="2"]')).toHaveAttribute('aria-checked', 'true');
  await page.keyboard.press('ArrowRight');
  await expect(page.locator('#f-count-t')).toHaveText(/^2 \//);
  await page.locator('.qcard').focus();
  await page.keyboard.press('a');
  await expect(page.locator('.qcard .choice[data-v="0"]')).toHaveAttribute('aria-checked', 'true');
});

test('word bank chips fill the blank in Focus mode', async ({ page }) => {
  await fresh(page);
  await openCode(page, 'ML-7F3A');
  const items = await plan(page);
  const fill = items.find((i) => i.type === 'fill' && i.model.length === 1);
  await page.click('#f-count');
  await page.click(`#drawer [data-go="${fill.n}"]`);
  await page.click(`.wb [data-word="${fill.model[0]}"]`);
  await expect(page.locator('.qcard input.fblank')).toHaveValue(fill.model[0]);
  await expect(page.locator(`.wb [data-word="${fill.model[0]}"]`)).toHaveClass(/used/);
});

test('print copies are real A4 pages, even from Focus mode on a phone', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await fresh(page);
  await openCode(page, 'ML-7F3A');
  const keySheets = await page.evaluate(() => window.__sim.preparePrint('key'));
  expect(keySheets).toBeGreaterThan(2);
  await page.evaluate(() => window.__sim.endPrint());
  const blankSheets = await page.evaluate(() => window.__sim.preparePrint('blank'));
  expect(blankSheets).toBeGreaterThanOrEqual(5);
  expect(blankSheets).toBeLessThanOrEqual(8);
  const pdf = await page.pdf({ format: 'A4', preferCSSPageSize: true });
  expect(pdf.length).toBeGreaterThan(10000);
  await page.evaluate(() => window.__sim.endPrint());
  await expect(page.locator('.print-area')).toHaveCount(0);
});

test('flashcards flip, progress renders, credit is shown', async ({ page }) => {
  await fresh(page);
  await expect(page.locator('.credit')).toContainText('Developed by Yasa Sardar');
  await page.goto(URL + '#/cards');
  await page.click('#fc-card');
  await expect(page.locator('#fc-card')).toHaveClass(/flipped/);
  await page.click('#fc-know');
  await expect(page.locator('.card-count')).toContainText('2 /');
  await page.goto(URL + '#/progress');
  await expect(page.locator('h1')).toHaveText('My progress');
});

test('the 10-mark Quick paper can be chosen, answered and scores 10/10', async ({ page }) => {
  await fresh(page);
  await page.click('label.preset:has(input[value=Q])');
  await expect(page.locator('#start-hint')).toContainText('10 marks · 15 min');
  await page.click('#start');
  await page.waitForSelector('.qcard');
  const code = await page.evaluate(() => window.__sim.exam().code);
  expect(code).toMatch(/^ML-[0-9A-F]{4}-2345Q$/);
  const items = await plan(page);
  expect(items.reduce((s, i) => s + i.marks, 0)).toBe(10);
  await answerFocus(page, items);
  await page.click('#f-next');
  await page.click('dialog [data-r="1"]');
  await page.waitForSelector('.result-hero');
  await expect(page.locator('[data-total2]')).toHaveText('10');
});

test('A4 mode on a phone shows real A4 pages scaled to fit, with zoom', async ({ page }) => {
  await fresh(page, 'a4');
  await openCode(page, 'ML-7F3A');
  await page.waitForSelector('#sheets .sheet');
  const desktopPages = await page.locator('#sheets .sheet').count();
  await page.setViewportSize({ width: 390, height: 844 });
  await page.reload();
  await page.waitForSelector('#sheets .sheet');
  // Same pages as desktop and print, not dozens of tiny ones.
  expect(await page.locator('#sheets .sheet').count()).toBe(desktopPages);
  const zoom = async () => +(await page.locator('#sheets').evaluate((el) => el.style.zoom));
  const fit = await zoom();
  expect(fit).toBeGreaterThan(0.4);
  expect(fit).toBeLessThan(0.55);
  await expect(page.locator('#zoombar')).toBeVisible();
  await expect(page.locator('#zoom-l')).toHaveText(/^Fit \d+%$/);
  await page.click('#zoombar [data-z="1"]');
  expect(await zoom()).toBeGreaterThan(fit);
  await page.click('#zoombar [data-z="0"]');
  expect(await zoom()).toBeCloseTo(fit, 3);
  // Answering on the scaled page still works.
  await page.locator('#q1 .opt[data-v="1"]').click();
  await expect(page.locator('#q1 .opt[data-v="1"]')).toHaveAttribute('aria-checked', 'true');
});

test('theme button cycles Auto, Light, Dark and is remembered', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'light' });
  await fresh(page);
  await page.evaluate(() => localStorage.removeItem('ml.theme'));
  await page.reload();
  const html = page.locator('html');
  await expect(html).toHaveAttribute('data-theme', 'auto');
  await expect(html).toHaveAttribute('data-mode', 'light');
  await page.click('#theme-btn');
  await expect(html).toHaveAttribute('data-theme', 'light');
  await page.click('#theme-btn');
  await expect(html).toHaveAttribute('data-theme', 'dark');
  await expect(html).toHaveAttribute('data-mode', 'dark');
  await page.reload();
  await expect(html).toHaveAttribute('data-mode', 'dark');
  // The exam paper stays white in dark mode.
  await openCode(page, 'ML-7F3A');
  await page.click('.exam-top [data-view="a4"]');
  const bg = await page.locator('#sheets .sheet').first().evaluate((el) => getComputedStyle(el).backgroundColor);
  expect(bg).toBe('rgb(255, 255, 255)');
  await page.evaluate(() => localStorage.removeItem('ml.theme'));
});

test('sound effects play on start and finish, and can be turned off', async ({ page }) => {
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  await fresh(page);
  await page.click('#start');
  await page.waitForSelector('.qcard');
  await submit(page);
  // Blank paper scores 0%, so the gentle "keep practising" sound plays.
  expect(await page.evaluate(() => window.__sim.sounds())).toEqual(['start', 'low']);

  await fresh(page);
  await page.click('summary:has-text("More options")');
  await page.click('label.switch-row:has(input[name=snd])');
  expect(await page.evaluate(() => window.__sim.state().settings.sound)).toBe(false);
  await page.click('#start');
  await page.waitForSelector('.qcard');
  await submit(page);
  expect(await page.evaluate(() => window.__sim.sounds())).toEqual([]);
  expect(errors).toEqual([]);
});

test('practical exam: chosen on the home page, pasted in Focus mode, full marks', async ({ page }) => {
  await fresh(page);
  await page.click('label:has(input[name=kind][value=practical])');
  await expect(page.locator('#kind-hint')).toContainText('Visual Studio');
  await expect(page.locator('input[name=lect]')).toHaveCount(3);
  await expect(page.locator('input[name=kind][value=practical]')).toBeFocused();
  await page.click('label.preset:has(input[value=U])');
  await expect(page.locator('#start-hint')).toContainText('20 marks · 45 min');
  await page.click('#start');
  await page.waitForSelector('.qcard');
  await expect(page.locator('.et-title')).toContainText('Practical');
  const items = await plan(page);
  expect(items.every((i) => i.type === 'prac')).toBe(true);
  await expect(page.locator('.vs-note')).toContainText('This page does not run code');
  await answerFocus(page, items);
  await page.click('#f-next');
  await page.click('dialog [data-r="1"]');
  await page.waitForSelector('.result-hero');
  await expect(page.locator('[data-total2]')).toHaveText('20');
  await expect(page.locator('#sheets .ph-title')).toContainText('Practical Exam');
  // The next paper is practical too, and the choice is remembered.
  await page.click('#btn-new');
  await page.waitForSelector('.qcard');
  expect(await page.evaluate(() => window.__sim.exam().practical)).toBe(true);
  await page.goto(URL + '#/');
  await expect(page.locator('input[name=kind][value=practical]')).toBeChecked();
  // Back to theory: Lecture 2 is still ticked.
  await page.click('label:has(input[name=kind][value=theory])');
  await expect(page.locator('input[name=lect]:checked')).toHaveCount(4);
});

test('practical exam on the A4 sheets: code and output survive a reload and a change of view', async ({ page }) => {
  await fresh(page, 'a4');
  await openCode(page, 'ML-3C9D-345V');
  await page.waitForSelector('#sheets .sheet');
  const items = await plan(page);
  await expect(page.locator('#sheets textarea.paper-code')).toHaveCount(items.length * 2);
  await page.locator('#sheets textarea[data-f=text]').first().fill('import pandas as pd\n# \'quotes\' <b>');
  await page.locator('#sheets textarea[data-f=out]').first().fill('1  2\n3  4');
  await page.waitForTimeout(400);
  await page.reload();
  await page.waitForSelector('#sheets .sheet');
  await expect(page.locator('#sheets textarea[data-f=text]').first()).toHaveValue('import pandas as pd\n# \'quotes\' <b>');
  await page.click('.exam-top [data-view="focus"]');
  await expect(page.locator('.qcard textarea[data-f=out]')).toHaveValue('1  2\n3  4');
  // Copying the data puts it on the clipboard.
  await page.context().grantPermissions(['clipboard-read', 'clipboard-write']).catch(() => {});
  await page.click('.qcard [data-copy]');
  await expect(page.locator('.qcard [data-copy]')).toHaveText('Copied');
  await page.click('.exam-top [data-view="a4"]');
  await answerA4(page, items);
  await submit(page);
  await expect(page.locator('[data-total2]')).toHaveText('30');
});

test('code and plots are printed with questions, and no raw backticks are shown', async ({ page }) => {
  let found = null;
  for (let s = 0; s < 200 && !found; s++) {
    const c = 'ML-' + (0x500 + s).toString(16).toUpperCase().padStart(4, '0') + '-2345F';
    const e = load().core.makeExam(c);
    if (e.items.some((i) => i.q.qfig) && e.items.some((i) => i.type === 'mcq' && i.q.code) && e.items.some((i) => i.type === 'fill' && i.q.code)) found = c;
  }
  expect(found).not.toBeNull();
  await fresh(page, 'a4');
  await openCode(page, found);
  await page.waitForSelector('#sheets .sheet');
  const info = await page.evaluate(() => window.__sim.exam().items.map((i) => ({ code: !!i.q.code, qfig: !!i.q.qfig, given: !!i.q.given })));
  expect(await page.locator('#sheets pre.code').count()).toBe(info.filter((i) => i.code || i.given).length);
  expect(await page.locator('#sheets .qfig svg').count()).toBe(info.filter((i) => i.qfig).length);
  expect(await page.locator('#sheets').textContent()).not.toContain('`');
  await submit(page);
  expect(await page.locator('#sheets').textContent()).not.toContain('`');
  const key = await page.evaluate(() => { const n = window.__sim.preparePrint('key'); const t = document.querySelector('.print-area').textContent; window.__sim.endPrint(); return [n, t.includes('Model solution'), t.includes('`')]; });
  expect(key[0]).toBeGreaterThan(2);
  expect(key.slice(1)).toEqual([true, false]);
});
