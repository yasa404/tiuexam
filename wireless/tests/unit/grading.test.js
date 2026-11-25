const test = require('node:test');
const assert = require('node:assert/strict');
const { load } = require('../load');

const EC = load();
const C = EC.core;

// A paper item for a single bank question (MCQ keeps source order: correct = 0).
function itemFor(q) {
  const it = { id: q.id, type: q.type, marks: q.marks, lecture: q.lecture, q };
  if (q.type === 'mcq') { it.opts = q.options.slice(); it.correct = 0; }
  return it;
}
const JUNK = [
  'zzqx vvkj wqpl',
  'the quick brown fox jumps over the lazy dog',
  'asdfgh qwerty'
];
function junkAnswer(it, j) {
  switch (it.type) {
    case 'mcq': return (it.correct + 1) % 4;
    case 'tf': return !it.q.answer;
    case 'fill': return it.q.blanks.map(() => j);
    case 'list': return it.q.items.map(() => j);
    default: return { text: j };
  }
}

test('every model answer in the bank scores full marks', () => {
  const failures = [];
  for (const q of EC.BANK) {
    const it = itemFor(q);
    const r = C.gradeItem(it, C.modelAnswer(it));
    if (r.got !== r.max) failures.push(`${q.id} (${q.type}) scored ${r.got}/${r.max}`);
  }
  assert.deepEqual(failures, []);
});

test('order-independent fill blanks accept any order', () => {
  for (const q of EC.BANK.filter((x) => x.type === 'fill' && x.set)) {
    const it = itemFor(q);
    const ans = q.blanks.map((b) => b[0]);
    const rev = ans.slice();
    const groups = Array.isArray(q.set[0]) ? q.set : [q.set];
    groups.forEach((set) => { const s = set.slice().reverse(); set.forEach((idx, k) => { rev[idx] = ans[s[k]]; }); });
    assert.equal(C.gradeItem(it, rev).got, q.marks, `${q.id} reversed order`);
  }
});

test('junk and empty answers score zero for every question', () => {
  const failures = [];
  for (const q of EC.BANK) {
    const it = itemFor(q);
    for (const j of JUNK) {
      const r = C.gradeItem(it, junkAnswer(it, j));
      if (r.got !== 0) failures.push(`${q.id} gave ${r.got} for "${j}"`);
    }
    const empty = C.gradeItem(it, undefined);
    if (empty.got !== 0) failures.push(`${q.id} gave ${empty.got} for no answer`);
    if (empty.status !== 'blank') failures.push(`${q.id} empty status ${empty.status}`);
  }
  assert.deepEqual(failures, []);
});

test('fill: case, spaces, hyphens and punctuation are ignored', () => {
  const acc = ['read-only', 'readonly'];
  for (const v of ['Read-Only', 'readonly', 'READ ONLY', 'read_only.', '  read–only ', 'Read Only!']) assert.ok(C.sameTerm(v, acc), v);
  assert.ok(C.sameTerm('The Kernel', ['kernel']));
  assert.ok(C.sameTerm('I/O devices', ['I/O devices']));
  assert.ok(C.sameTerm('master boot record', ['Master Boot Record', 'MBR']));
});

test('fill: typo tolerance follows answer length (0 / 1 / 2)', () => {
  assert.ok(!C.sameTerm('fram', ['frame']));
  assert.ok(C.sameTerm('frame', ['frame']));
  assert.ok(C.sameTerm('gestres', ['gestures']));
  assert.ok(!C.sameTerm('gstrs', ['gestures']));
  assert.ok(C.sameTerm('responsivness', ['responsiveness']));
});

test('fill: a different term is not accepted as a typo', () => {
  assert.ok(!C.sameTerm('milliseconds', ['nanoseconds']));
  assert.ok(!C.sameTerm('external', ['internal']));
  assert.ok(!C.sameTerm('minimize', ['maximize']));
  assert.ok(!C.sameTerm('MS-DOS', ['MBR']));
  assert.ok(!C.sameTerm('physical', ['logical', 'virtual']));
  assert.ok(!C.sameTerm('pushed', ['popped']));
});

const PATHS = EC.BANK.find((q) => q.type === 'list' && q.lecture === 2 && /four paths/.test(q.q));

test('list: items are matched by keyword at word boundaries, with partial marks', () => {
  const it = itemFor(PATHS);
  const r = C.gradeItem(it, ['direct path', 'the reflected one', '', '']);
  assert.equal(r.got, C.roundHalf(2 / 4 * PATHS.marks));
  assert.equal(r.status, 'partial');
  // A repeated item only counts once; a key must start at a word boundary ("indirect" is not "direct").
  assert.equal(C.gradeItem(it, ['direct', 'DIRECT', 'direct path', '']).got, C.roundHalf(1 / 4 * PATHS.marks));
  assert.equal(C.gradeItem(it, ['indirect', '', '', '']).got, 0);
});

test('list: any order scores full marks', () => {
  assert.equal(C.gradeItem(itemFor(PATHS), ['scattered', 'diffracted path', 'reflected', 'direct']).got, PATHS.marks);
});

test('explain: auto-detected points, then self-marking overrides', () => {
  const q = EC.BANK.find((x) => x.kind === 'explain' && x.lecture === 2 && /Compare reflection/.test(x.q));
  const it = itemFor(q);
  const text = 'In reflection the wave bounces. In diffraction it bends.';
  const r = C.gradeItem(it, { text });
  assert.equal(r.detail.points.filter((p) => p.auto).length, 2);
  assert.equal(r.got, 2);
  assert.equal(C.gradeItem(it, { text, over: { p0: true, p1: true, p2: true, p3: true } }).got, q.marks);
  assert.equal(C.gradeItem(it, { text, over: { p0: false } }).got, 1);
});

test('choice + justification: 1 mark for the choice, 2 for the reasons, nothing for a wrong choice', () => {
  const q = EC.BANK.find((x) => x.kind === 'eval' && x.lecture === 4 && /low SNR/.test(x.q));
  const it = itemFor(q);
  assert.equal(C.gradeItem(it, { choice: 1, text: '' }).got, 1);
  assert.equal(C.gradeItem(it, { choice: 1, text: 'It has better noise immunity.' }).got, 2);
  assert.equal(C.gradeItem(it, { choice: 1, text: q.model }).got, 3);
  assert.equal(C.gradeItem(it, { choice: 0, text: q.model }).got, 0);
  assert.equal(C.gradeItem(it, { choice: 0, text: q.model, over: { p0: true, p1: true } }).got, 0);
  assert.equal(C.gradeItem(it, { text: q.model }).got, 0);
  assert.equal(C.gradeItem(it, { text: q.model }).status, 'wrong');
  assert.ok(C.isAnswered(it, { choice: 0, text: '' }));
});

test('numbers are matched by value, with an optional sign and tolerance', () => {
  assert.ok(C.hit('the size is 100', '#100'));
  assert.ok(!C.hit('1000', '#100'));
  assert.ok(C.hit('FSPL = 100.1 dB', '#100.04~0.1'));
  assert.ok(!C.hit('FSPL = 100.3 dB', '#100.04~0.1'));
  assert.ok(C.hit('Pr = -66 dBm', '#-66'));
  assert.ok(C.hit('Pr = −66 dBm', '#-66'));
  assert.ok(C.hit('Pr is - 66', '#-66'));
  assert.ok(!C.hit('Pr = 66 dBm', '#-66'));
  assert.ok(!C.hit('100 - 66 = 34', '#-66'), 'a subtraction is not a negative number');
  assert.ok(C.hit('(-66) - (-85)', '#-85'));
});

/* Recompute every calculation from its data, independently of the written model answers. */
test('calculations: the numbers in the model answers are right', () => {
  const calcs = EC.BANK.filter((q) => q.kind === 'calc');
  const by = (l, re) => { const m = calcs.filter((q) => q.lecture === l && re.test(q.q)); assert.equal(m.length, 1, l + ' ' + re); return m[0]; };
  const has = (q, ...vs) => vs.forEach((v) => assert.ok(C.hit(q.model, '#' + v + '~0.006'), q.id + ' should contain ' + v));
  const c = 3e8, lg = Math.log10, round = (x, n) => Math.round(x * 10 ** n) / 10 ** n;
  has(by(1, /900 MHz/), round(c / 900e6, 3));
  has(by(1, /0\.125 m/), c / 0.125 / 1e9, round(1e9 / (c / 0.125), 3));
  has(by(1, /50 MHz/), 1e6 / 50e6, c / 50e6);
  has(by(2, /Convert 50 mW/), round(10 * lg(50), 2), 10 ** 2);
  const fspl = (d, f) => 32.44 + 20 * lg(d) + 20 * lg(f);
  has(by(2, /2400 MHz/), round(fspl(1, 2400), 2));
  has(by(2, /1000 MHz link over 10 km/), fspl(10, 1000), fspl(100, 1000));
  const fr = (D, f) => 17.32 * Math.sqrt((D / 2) * (D / 2) / (f * D));
  has(by(2, /2\.4 GHz link has a distance of 10 km/), round(fr(10, 2.4), 2), round(0.6 * fr(10, 2.4), 1));
  has(by(2, /5 GHz link has a distance of 8 km/), round(fr(8, 5), 2), round(0.6 * fr(8, 5), 2));
  // Link budgets: read the printed table.
  calcs.filter((q) => q.code && /Transmit power/.test(q.code)).forEach((q) => {
    const v = [...q.code.matchAll(/(-?\d+) dB/g)].map((m) => +m[1]);
    assert.equal(v.length, 7);
    const [pt, gt, gr, lt, lr, pl, sens] = v, pr = pt + gt + gr - lt - lr - pl;
    assert.ok(C.hit(q.model, '#' + pr), q.id + ' Pr ' + pr);
    has(q, pr - sens);
    if (/EIRP/.test(q.q)) has(q, pt + gt - lt);
  });
  has(by(3, /150 MHz/), c / 150e6, c / 150e6 / 2, c / 150e6 / 4);
  has(by(3, /600 MHz/), c / 600e6, c / 600e6 / 2, c / 600e6 / 4);
  has(by(3, /Each arm of a half-wave dipole is 0\.25 m/), 4 * 0.25, c / 1 / 1e6);
  has(by(3, /directivity of 20/), 0.75 * 20, 0.9 * 20);
  has(by(4, /64-QAM/), Math.log2(64), 2000 * 6);
  has(by(4, /1200 bits/), 1200, 600, 300);
  has(by(4, /quarter of the wavelength/), c / 3e3 / 4 / 1e3, c / 100e6 / 4);
  has(by(4, /5000 symbols/), 10000, 40000, 4);
  has(by(5, /1 MHz of spectrum/), 1000 / 25);
  has(by(5, /lasts 4 ms/), 4 / 8, 200 / 8);
  has(by(5, /500 kHz/), 500 / 50, 10 * 40, 80);
  const s1 = [1, 1, -1, -1], s2 = [1, -1, 1, -1].map((x) => x * -1), sum = s1.map((x, i) => x + s2[i]);
  assert.deepEqual(sum, [0, 2, -2, 0]);
  assert.equal(sum.reduce((t, x, i) => t + x * s1[i], 0) / 4, 1);
  assert.equal(calcs.length, 23);
});

test('the numbers in the multiple choice options are right', () => {
  const ans = (re) => EC.BANK.find((q) => q.type === 'mcq' && re.test(q.q)).options[0];
  assert.equal(ans(/wavelength of a 100 MHz radio wave/), 3e8 / 100e6 + ' m');
  assert.equal(ans(/wavelength of 0\.1 m/), 3e8 / 0.1 / 1e9 + ' GHz');
  assert.equal(ans(/How much is 100 mW/), 10 * Math.log10(100) + ' dBm');
  assert.equal(ans(/each arm of a dipole for 100 MHz/), 3e8 / 100e6 / 4 + ' m');
  assert.equal(ans(/1000 symbols per second with 16-QAM/), 4000 + ' bit/s');
});

test('mcq and tf are exact', () => {
  const m = itemFor(EC.BANK.find((x) => x.type === 'mcq'));
  assert.equal(C.gradeItem(m, 0).got, 1);
  assert.equal(C.gradeItem(m, 2).got, 0);
  const t = itemFor(EC.BANK.find((x) => x.type === 'tf'));
  assert.equal(C.gradeItem(t, t.q.answer).got, 1);
  assert.equal(C.gradeItem(t, !t.q.answer).got, 0);
});

test('letter grades', () => {
  assert.equal(C.letterGrade(95), 'A');
  assert.equal(C.letterGrade(80), 'B');
  assert.equal(C.letterGrade(72.5), 'C');
  assert.equal(C.letterGrade(50), 'D');
  assert.equal(C.letterGrade(49.9), 'F');
});
