// End-to-end: build papers, answer them through the real UI in both views, submit and check the marks.
const path = require('path');
const { pathToFileURL } = require('url');
const { test, expect } = require('@playwright/test');
const { load } = require('../load');

const URL = pathToFileURL(path.join(__dirname, '..', '..', 'index.html')).href;
const KEY = 'ma319.sim.v1';

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
    else if (it.type === 'match') { for (let k = 0; k < it.model.length; k++) await q.locator(`input.mletter[data-row="${k}"]`).fill('abcdef'[it.model[k]]); }
    else if (it.type === 'list') { for (let k = 0; k < it.need; k++) await q.locator(`ol.lines input[data-k="${k}"]`).fill(it.model[k]); }
    else {
      if (it.model.choice !== undefined) await q.locator(`.opt[data-v="${it.model.choice}"]`).click();
      await q.locator('textarea').fill(it.model.text);
    }
  }
}
async function answerFocus(page, items) {
  for (const it of items) {
    const card = page.locator(`.qcard[data-id="${it.id}"]`);
    await expect(card).toBeVisible();
    if (it.type === 'mcq') await card.locator(`.choice[data-v="${it.model}"]`).click();
    else if (it.type === 'match') { for (let k = 0; k < it.model.length; k++) await card.locator(`.mrow[data-row="${k}"] [data-m="${it.model[k]}"]`).click(); }
    else if (it.type === 'list') { for (let k = 0; k < it.need; k++) await card.locator(`.list-inputs input[data-k="${k}"]`).fill(it.model[k]); }
    else {
      if (it.model.choice !== undefined) await card.locator(`.choice[data-v="${it.model.choice}"]`).click();
      await card.locator('textarea').fill(it.model.text);
    }
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
  await openCode(page, 'MA-3C9D');
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
  await openCode(page, 'MA-7F3A');
  const items = await plan(page);
  const goTo = async (n) => { await page.click('#f-count'); await page.click(`#drawer [data-go="${n}"]`); };
  const mcq = items.find((i) => i.type === 'mcq'), match = items.find((i) => i.type === 'match'), def = items.find((i) => i.type === 'def');
  await goTo(mcq.n);
  await page.locator(`.qcard .choice[data-v="${(mcq.model + 1) % 4}"]`).click();
  await goTo(match.n);
  await page.locator('.mrow[data-row="0"] [data-m="2"]').click();
  await page.locator('.mrow[data-row="1"] [data-m="0"]').click();
  await page.click('.exam-top [data-view="a4"]');
  await page.waitForSelector('#sheets .sheet');
  await expect(page.locator(`#q${mcq.n} .opt[data-v="${(mcq.model + 1) % 4}"]`)).toHaveAttribute('aria-checked', 'true');
  await expect(page.locator(`#q${match.n} input.mletter`).nth(0)).toHaveValue('C');
  await expect(page.locator(`#q${match.n} input.mletter`).nth(1)).toHaveValue('A');
  // On paper a letter is typed; anything that is not a letter of the list is refused.
  await page.locator(`#q${match.n} input.mletter`).nth(2).fill('z');
  await expect(page.locator(`#q${match.n} input.mletter`).nth(2)).toHaveValue('');
  await page.locator(`#q${match.n} input.mletter`).nth(2).fill('b');
  await page.locator(`#q${def.n} textarea`).fill('typed on paper');
  await page.click('.exam-top [data-view="focus"]');
  await goTo(def.n);
  await expect(page.locator('.qcard textarea')).toHaveValue('typed on paper');
  await goTo(match.n);
  await expect(page.locator('.mrow[data-row="2"] [data-m="1"]')).toHaveAttribute('aria-pressed', 'true');
});

test('matching in Focus mode: a letter is used once, and tapping it again clears it', async ({ page }) => {
  await fresh(page);
  await openCode(page, 'MA-7F3A');
  const match = (await plan(page)).find((i) => i.type === 'match');
  await page.click('#f-count');
  await page.click(`#drawer [data-go="${match.n}"]`);
  const b = (row, v) => page.locator(`.mrow[data-row="${row}"] [data-m="${v}"]`);
  await b(0, 1).click();
  await expect(b(1, 1)).toHaveClass(/used/);
  await b(1, 1).click();
  await expect(b(0, 1)).toHaveAttribute('aria-pressed', 'false');
  await expect(b(1, 1)).toHaveAttribute('aria-pressed', 'true');
  await b(1, 1).click();
  await expect(b(1, 1)).toHaveAttribute('aria-pressed', 'false');
  await b(0, match.model[0]).click();
  await submit(page);
  await expect(page.locator('[data-total2]')).toHaveText('1');
  await expect(page.locator(`#q${match.n} .mleft .fix`)).toHaveCount(match.model.length);
});

test('a blank paper scores zero and self-marking changes the total', async ({ page }) => {
  await fresh(page);
  await openCode(page, 'MA-0A1B');
  await submit(page);
  await expect(page.locator('[data-total2]')).toHaveText('0');
  const written = await page.locator('#sheets .q-def').count();
  const e = page.locator('#sheets .q-def').filter({ has: page.locator('input[data-pt]') }).first();
  const id = await e.getAttribute('data-id');
  const full = String(await page.evaluate((x) => window.__sim.exam().items.find((i) => i.id === x).marks, id));
  const boxes = e.locator('input[data-pt]');
  const n = await boxes.count();
  for (let i = 0; i < n; i++) await boxes.nth(i).check();
  await expect(page.locator('#sheets [data-total]')).toHaveText(full);
  await expect(page.locator('[data-total2]')).toHaveText(full);
  await page.click('#btn-mistakes');
  // The fully self-marked question is no longer a mistake; the other written question still is.
  await expect(page.locator('#sheets .q-def')).toHaveCount(written - 1);
  await page.click('.result-tools [data-view="a4"]');
  expect(await page.locator('#sheets .sheet').count()).toBeGreaterThan(1);
});

test('answers and flags autosave and survive a reload', async ({ page }) => {
  await fresh(page);
  await openCode(page, 'MA-7F3A-1234567M-B');
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
  expect(code).toMatch(/^MA-[0-9A-F]{4}-1234567MH$/);
  await expect(page.locator('.et-title')).toContainText('Hard');
  const EC = load();
  const nodeIds = EC.core.makeExam(code).items.map((i) => i.id);
  expect((await plan(page)).map((i) => i.id)).toEqual(nodeIds);
});

test('keyboard: letters answer and arrows move in Focus mode', async ({ page }) => {
  await fresh(page);
  await openCode(page, 'MA-7F3A-1234567M-B');
  await page.locator('.qcard').focus();
  await page.keyboard.press('c');
  await expect(page.locator('.qcard .choice[data-v="2"]')).toHaveAttribute('aria-checked', 'true');
  await page.keyboard.press('ArrowRight');
  await expect(page.locator('#f-count-t')).toHaveText(/^2 \//);
  await page.locator('.qcard').focus();
  await page.keyboard.press('a');
  await expect(page.locator('.qcard .choice[data-v="0"]')).toHaveAttribute('aria-checked', 'true');
});

test('print copies are real A4 pages, even from Focus mode on a phone', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await fresh(page);
  await openCode(page, 'MA-7F3A');
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
  expect(code).toMatch(/^MA-[0-9A-F]{4}-1234567Q$/);
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
  await openCode(page, 'MA-7F3A-1234567M-BC');
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
  await page.evaluate(() => localStorage.removeItem('ma319.theme'));
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
  await openCode(page, 'MA-7F3A');
  await page.click('.exam-top [data-view="a4"]');
  const bg = await page.locator('#sheets .sheet').first().evaluate((el) => getComputedStyle(el).backgroundColor);
  expect(bg).toBe('rgb(255, 255, 255)');
  await page.evaluate(() => localStorage.removeItem('ma319.theme'));
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

test('code blocks and diagrams are printed, inline code is formatted, and nothing else is offered', async ({ page }) => {
  // A paper with a question that prints code, a diagram, and a short answer about code.
  let found = null;
  for (let s = 0; s < 200 && !found; s++) {
    const c = 'MA-' + (0x500 + s).toString(16).toUpperCase().padStart(4, '0') + '-1234567F';
    const e = load().core.makeExam(c);
    if (e.items.some((i) => i.type === 'mcq' && i.q.code) && e.items.some((i) => i.q.qfig) && e.items.some((i) => i.type === 'def' && i.q.code)) found = c;
  }
  expect(found).not.toBeNull();
  await fresh(page);
  await page.click('summary:has-text("More options")');
  await expect(page.locator('input[name=sec]')).toHaveCount(3);
  await expect(page.locator('input[name=wb]')).toHaveCount(0);
  await openCode(page, found);
  const info = await page.evaluate(() => window.__sim.exam().items.map((i) => ({ n: i.n, type: i.type, code: i.q.code, qfig: !!i.q.qfig, model: i.q.model, marks: i.marks })));
  expect([...new Set(info.map((i) => i.type))].sort()).toEqual(['def', 'list', 'match', 'mcq']);
  const mcq = info.find((i) => i.type === 'mcq' && i.code), short = info.find((i) => i.type === 'def' && i.code), fig = info.find((i) => i.qfig);
  const goTo = async (n) => { await page.click('#f-count'); await page.click(`#drawer [data-go="${n}"]`); };
  await goTo(mcq.n);
  expect(await page.locator('.qcard pre.code').textContent()).toBe(mcq.code);
  await goTo(fig.n);
  await expect(page.locator('.qcard .qfig svg')).toBeVisible();
  await goTo(short.n);
  await page.locator('.qcard textarea').fill(short.model);
  await page.click('.exam-top [data-view="a4"]');
  await page.waitForSelector('#sheets .sheet');
  await expect(page.locator(`#q${short.n} textarea`)).toHaveValue(short.model);
  expect(await page.locator('#sheets pre.code').count()).toBe(info.filter((i) => i.code).length);
  expect(await page.locator('#sheets .qfig svg').count()).toBe(info.filter((i) => i.qfig).length);
  // No raw backticks are ever shown.
  expect(await page.locator('#sheets').textContent()).not.toContain('`');
  await submit(page);
  await expect(page.locator('[data-total2]')).toHaveText(String(short.marks));
  expect(await page.locator('#sheets').textContent()).not.toContain('`');
});

test('a paper left over from the old question types is dropped, and the history stays', async ({ page }) => {
  await fresh(page);
  // Written before the app starts, because the app saves its own state when a page closes.
  await page.addInitScript((k) => { if (sessionStorage.done) return; sessionStorage.done = 1; localStorage.setItem(k, JSON.stringify({
    settings: { sections: 'BDE', wordBank: true }, current: { kind: 'exam', code: 'MA-7F3A-1234567M-ADE', answers: { 'L1-B001': ['x'], 'L1-C001': true }, flags: {}, idx: 3, elapsed: 5, submitted: false },
    history: [{ rid: 'R1', code: 'MA-7F3A', kind: 'exam', level: 'X', date: '2026-11-23T10:00:00.000Z', seconds: 9, got: 20, max: 40, pct: 50, grade: 'D', byLecture: { 1: [2, 4] }, bySection: { D: [1, 2], A: [3, 4] }, items: [['L1-B001', 0, 1], ['L1-A001', 0, 1]] }]
  })); }, KEY);
  await page.reload();
  await expect(page.locator('#start')).toBeVisible();
  await expect(page.locator('.banner')).toHaveCount(0);
  await expect(page.locator('input[name=sec]:checked')).toHaveCount(3);
  await page.goto(URL + '#/progress');
  await expect(page.locator('table.hist tbody tr')).toHaveCount(1);
  await page.goto(URL + '#/result');
  await expect(page.locator('#start')).toBeVisible();
});
