/* Browser test of the subject chooser (index.html): alignment, progress, theme, backup.
   Uses the installed Google Chrome (PW_CHANNEL=msedge for Edge, PW_CHANNEL=bundled for Playwright's Chromium). */
const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');
const { chromium } = require('@playwright/test');

const ROOT = path.join(__dirname, '..');
const URL = pathToFileURL(path.join(ROOT, 'index.html')).href;
const problems = [];
let checks = 0;
const ok = (c, msg) => { checks++; if (!c) problems.push(msg); };
const same = (a, b, msg) => ok(JSON.stringify(a) === JSON.stringify(b), `${msg}: ${JSON.stringify(a)} instead of ${JSON.stringify(b)}`);

const paper = (rid, code, got, max) => ({ rid, code, kind: 'exam', level: 'X', date: '2026-11-01T10:00:00.000Z', seconds: 60, got, max, pct: Math.round(got / max * 100), grade: 'D', byLecture: {}, bySection: {}, items: [['L1-A001', 1, 1]] });
const state = (history, current) => ({ settings: { lectures: [1, 2, 3, 4], length: 'M', sections: 'ABCDE', difficulty: 'X', timer: true, wordBank: true, sound: false, view: 'focus' }, profile: { name: 'A <b> student', sid: '1' }, current: current || null, history, cards: { C001: 'known' } });
const running = (code) => ({ kind: 'exam', code, answers: { 'L1-A001': 2, 'L1-E001': { text: 'if (a < b) { "x" }' } }, flags: {}, idx: 0, elapsed: 5, started: '2026-11-01T10:00:00.000Z', submitted: false });

(async () => {
  const channel = process.env.PW_CHANNEL || 'chrome';
  const browser = await chromium.launch(channel === 'bundled' ? {} : { channel });
  const open = async (opt, seed) => {
    const ctx = await browser.newContext(Object.assign({ viewport: { width: 1280, height: 860 }, colorScheme: 'light', reducedMotion: 'reduce' }, opt));
    const page = await ctx.newPage();
    page.on('pageerror', (e) => problems.push('page error: ' + e.message));
    await page.goto(URL);
    if (seed) { await page.evaluate((s) => Object.entries(s).forEach(([k, v]) => localStorage.setItem(k, typeof v === 'string' ? v : JSON.stringify(v))), seed); await page.reload(); }
    await page.evaluate(() => document.fonts.ready);
    return page;
  };
  const get = (page, k) => page.evaluate((x) => JSON.parse(localStorage.getItem(x)), k);
  const stats = (page, cls) => page.locator(`.subject.${cls} .stats dd`).allTextContents();
  const choose = async (page, text) => {
    await page.setInputFiles('#file', { name: 'b.json', mimeType: 'application/json', buffer: Buffer.from(text) });
  };
  const answer = async (page, v) => {
    await page.waitForSelector('dialog[open]');
    await page.evaluate(() => { window.__closed = new Promise((r) => document.getElementById('dlg').addEventListener('close', () => setTimeout(r, 0), { once: true })); });
    await page.click(`dialog button[value=${v}]`);
    await page.evaluate(() => window.__closed);
  };
  const SEED = { 'dc301.sim.v1': state([paper('Rmlk1', 'DC-0001', 10, 40), paper('Rmlk2', 'DC-0002', 30, 40)], running('DC-7F3A')), 'os327.sim.v1': state([paper('Rmlk3', 'OS-0001', 40, 40)]) };

  // Alignment: every part sits on the same line across a row of cards, with and without progress.
  for (const seed of [null, SEED]) {
    for (const [width, perRow] of [[1600, 4], [1280, 4], [1200, 4], [1199, 2], [900, 2], [640, 2], [390, 1], [320, 1]]) {
      const page = await open({ viewport: { width, height: 860 } }, seed);
      const rows = await page.evaluate(() => [...document.querySelectorAll('.subject')].map((c) => ['h2', '.facts', '.stats', '.go'].map((s) => Math.round(c.querySelector(s).getBoundingClientRect().top * 10) / 10).concat(Math.round(c.getBoundingClientRect().bottom * 10) / 10)));
      for (let i = 0; i < rows.length; i += perRow) for (let j = i + 1; j < i + perRow; j++) same(rows[j], rows[i], `${width}px: card ${j + 1} lines up`);
      if (perRow < rows.length) ok(rows[perRow][0] > rows[0][0], `${width}px: ${perRow} cards in a row`);
      ok(await page.evaluate(() => [...document.querySelectorAll('.go')].every((g) => g.offsetHeight <= 48)), `${width}px: button text on one line`);
      ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `${width}px: no sideways scrolling`);
      ok(await page.evaluate(() => [...document.querySelectorAll('.subject *')].every((e) => e.closest('svg') || e.scrollWidth <= e.clientWidth + 1 || getComputedStyle(e).display === 'inline' || e.classList.contains('sr'))), `${width}px: nothing is cut off`);
      await page.context().close();
    }
  }

  // Progress, status, button text and where it goes.
  let page = await open({}, SEED);
  same(await stats(page, 'dc'), ['2', '50%', '75%'], 'DC stats');
  same(await stats(page, 'os'), ['1', '100%', '100%'], 'OS stats');
  same(await stats(page, 'ma'), ['0', '–', '–'], 'empty stats');
  same(await page.locator('.status').allTextContents(), ['Not started', 'In Progress', '1 Done', 'Not started'], 'status pills');
  same(await page.locator('.go').allTextContents().then((a) => a.map((t) => t.trim())), ['Open E-Commerce', 'Continue Paper in Data Communications', 'Open Operating Systems', 'Open Mobile Applications'], 'button text');
  same(await page.locator('.go').evaluateAll((a) => a.map((x) => x.getAttribute('href'))), ['ecommerce/index.html', 'datacom/index.html#/exam', 'os/index.html', 'mobile/index.html'], 'links');
  await page.locator('.subject.dc .ico').click({ force: true });
  await page.waitForSelector('.exam-top');
  ok(page.url().includes('datacom/index.html'), 'a click anywhere on the card continues the paper');
  await page.goBack();
  await page.locator('.subject.ma .facts').click({ force: true, position: { x: 4, y: 4 } });
  await page.waitForSelector('#start');
  ok(page.url().includes('mobile/index.html'), 'a click anywhere on the card opens the subject');
  await page.goto(URL + '#/code/MA-7F3A');
  await page.reload();
  await page.waitForURL(/mobile\/index\.html/);
  await page.context().close();

  // The pills in the top-right corner line up, whatever they say.
  page = await open({}, SEED);
  const pills = await page.locator('.subject').evaluateAll((c) => c.map((x) => { const p = x.querySelector('.status').getBoundingClientRect(), r = x.getBoundingClientRect(); return [p.top, p.height, r.right - p.right].map((v) => Math.round(v * 10) / 10); }));
  pills.forEach((p) => same(p, pills[0], 'status pills line up'));
  await page.context().close();

  // Broken saved data never breaks the page.
  page = await open({}, { 'ec355.sim.v1': '{oops', 'os327.sim.v1': '[]', 'dc301.sim.v1': '{"history":"x","current":5}' });
  same(await page.locator('.subject .stats dd').allTextContents(), Array(4).fill(['0', '–', '–']).flat(), 'broken data');
  await page.context().close();

  // Theme: follows the device, is remembered, and the subjects open in the same theme.
  page = await open({ colorScheme: 'dark' });
  const mode = () => page.locator('html').getAttribute('data-mode');
  same(await mode(), 'dark', 'follows the device');
  await page.click('#theme');
  same(await mode(), 'light', 'switched');
  await page.reload();
  same(await mode(), 'light', 'remembered');
  await page.locator('.subject.os .go').click();
  await page.waitForSelector('#start');
  same(await mode(), 'light', 'subject has the same theme');
  await page.click('#theme-btn');
  same(await mode(), 'dark', 'changed inside the subject');
  await page.goto(URL);
  same(await mode(), 'dark', 'the newer choice inside a subject wins');
  await page.context().close();

  // Contrast of the quieter text (WCAG AA is 4.5), against the darkest / lightest point of the background.
  for (const scheme of ['light', 'dark']) {
    page = await open({ colorScheme: scheme }, SEED);
    const low = await page.evaluate(() => {
      const num = (c) => c.match(/[\d.]+/g).map(Number);
      const lum = (c) => { const [r, g, b] = c.slice(0, 3).map((v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); }); return 0.2126 * r + 0.7152 * g + 0.0722 * b; };
      const dark = document.documentElement.dataset.mode === 'dark';
      const worst = dark ? [42, 47, 58] : [205, 218, 240];
      const cr = (a, b) => { const x = lum(a), y = lum(b); return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05); };
      return ['.note', 'footer span', 'footer b', '.tool', '.lead', '.brand span:not(.logo)', '.facts li', '.stats dt', '.status.new'].filter((s) => cr(num(getComputedStyle(document.querySelector(s)).color), worst) < 4.5);
    });
    same(low, [], scheme + ' contrast');
    const btn = await page.locator('.go').evaluateAll((a) => a.map((x) => getComputedStyle(x).color + ' on ' + getComputedStyle(x).backgroundColor));
    ok(btn.every((t) => t.length > 10), 'buttons have colours');
    await page.context().close();
  }

  // Export, then import on a "new device": everything comes back exactly.
  page = await open({}, SEED);
  const [dl] = await Promise.all([page.waitForEvent('download'), page.click('#export')]);
  ok(/^midterm-progress-\d{4}-\d\d-\d\d\.json$/.test(dl.suggestedFilename()), 'file name');
  const text = fs.readFileSync(await dl.path(), 'utf8');
  await page.context().close();
  page = await open({});
  await page.click('#export');
  same(await page.textContent('#msg'), 'There is no progress to export yet.', 'nothing to export');
  await choose(page, text);
  await page.waitForSelector('dialog[open]');
  ok((await page.textContent('#dlg-l')).includes('2 papers + 1 in progress'), 'the dialog says what is inside');
  await answer(page, 'cancel');
  same(await get(page, 'dc301.sim.v1'), null, 'cancel changes nothing');
  await choose(page, text);
  await answer(page, 'merge');
  same(await get(page, 'dc301.sim.v1'), SEED['dc301.sim.v1'], 'restored exactly');
  same(await stats(page, 'dc'), ['2', '50%', '75%'], 'numbers update at once');
  await choose(page, text);
  await answer(page, 'merge');
  same((await get(page, 'dc301.sim.v1')).history.length, 2, 'importing twice adds nothing');
  await page.locator('.subject.dc .go').click();
  await page.waitForSelector('.exam-top');
  await page.context().close();

  // Merge keeps this device's work; Replace overwrites only the subjects in the file.
  const MINE = { 'dc301.sim.v1': state([paper('Rmlk0', 'DC-0009', 4, 40), paper('Rmlk9', 'DC-000A', 8, 40)], running('DC-1111')), 'ec355.sim.v1': state([paper('Rmlk5', 'EC-0001', 1, 2)]) };
  page = await open({}, MINE);
  await choose(page, text);
  await answer(page, 'merge');
  let dc = await get(page, 'dc301.sim.v1');
  same(dc.history.map((h) => h.rid), ['Rmlk0', 'Rmlk1', 'Rmlk2', 'Rmlk9'], 'merged in date order');
  same(dc.current.code, 'DC-1111', 'merge keeps the paper in progress here');
  await choose(page, text);
  await answer(page, 'replace');
  dc = await get(page, 'dc301.sim.v1');
  same(dc, SEED['dc301.sim.v1'], 'replaced');
  same(await get(page, 'ec355.sim.v1'), MINE['ec355.sim.v1'], 'subjects not in the file are untouched');

  // Bad files are refused and change nothing.
  const good = JSON.parse(text);
  const bad = (fn) => { const g = JSON.parse(text); fn(g); return JSON.stringify(g); };
  const before = await page.evaluate(() => JSON.stringify(localStorage));
  for (const [name, t] of Object.entries({
    'not JSON': 'hello', 'another app': bad((g) => { g.app = 'x'; }), 'no subjects': bad((g) => { g.data = { evil: {} }; }),
    'markup in a code': bad((g) => { g.data['dc301.sim.v1'].history[0].code = '<img src=x onerror=alert(1)>'; }),
    'markup in a number': bad((g) => { g.data['dc301.sim.v1'].history[0].max = '<b>'; }),
    'markup in a key': bad((g) => { g.data['dc301.sim.v1'].history[0].byLecture = { '<b>': [1, 2] }; }),
    'prototype key': text.replace('"cards":{', '"cards":{"__proto__":{"x":1},'),
    'history is not a list': bad((g) => { g.data['dc301.sim.v1'].history = {}; }),
    'answers missing': bad((g) => { delete g.data['dc301.sim.v1'].current.answers; })
  })) {
    await page.evaluate(() => { document.getElementById('msg').textContent = ''; });
    await choose(page, t);
    await page.waitForFunction(() => document.getElementById('msg').textContent || document.querySelector('dialog[open]'));
    ok((await page.textContent('#msg')).includes('not a valid progress backup'), 'refuses: ' + name);
    if (await page.locator('dialog[open]').count()) await answer(page, 'cancel');
  }
  same(await page.evaluate(() => JSON.stringify(localStorage)), before, 'refused files change nothing');
  ok(good.data['dc301.sim.v1'].profile.name === 'A <b> student', 'typed names may hold any character');

  await browser.close();
  console.log(`Chooser: ${checks} checks, ${problems.length} problem(s)`);
  problems.forEach((p) => console.error('x ' + p));
  process.exit(problems.length ? 1 : 0);
})();
