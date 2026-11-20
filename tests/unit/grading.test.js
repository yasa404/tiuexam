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
    const s = q.set.slice().reverse();
    q.set.forEach((idx, k) => { rev[idx] = ans[s[k]]; });
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
  const acc = ['e-commerce', 'ecommerce', 'electronic commerce'];
  for (const v of ['E-Commerce', 'ecommerce', 'E COMMERCE', 'e_commerce.', '  e–commerce ', 'Electronic Commerce!']) {
    assert.ok(C.sameTerm(v, acc), v);
  }
  assert.ok(C.sameTerm('The Internet', ['internet']));
  assert.ok(C.sameTerm('many to many', ['many-to-many']));
  assert.ok(C.sameTerm('24/7', ['24 x 7', '24x7', '24/7']));
});

test('fill: typo tolerance follows answer length (0 / 1 / 2)', () => {
  // up to 5 characters: exact only
  assert.ok(!C.sameTerm('mony', ['money']));
  assert.ok(C.sameTerm('money', ['money']));
  // 6-11 characters: one edit
  assert.ok(C.sameTerm('ubiquty', ['ubiquity']));
  assert.ok(!C.sameTerm('ubqty', ['ubiquity']));
  // 12+ characters: two edits
  assert.ok(C.sameTerm('dissintermediaton', ['disintermediation']));
  assert.ok(!C.sameTerm('disntrmediaton', ['disintermediation']));
});

test('fill: a different term that contains the answer is not accepted', () => {
  assert.ok(!C.sameTerm('reinvention', ['invention']));
  assert.ok(!C.sameTerm('invention', ['reinvention']));
  assert.ok(!C.sameTerm('B2C', ['b2b', 'business-to-business']));
  assert.ok(!C.sameTerm('marketplace', ['marketspace']));
  assert.ok(!C.sameTerm('customization', ['personalization']));
  assert.ok(!C.sameTerm('indirect', ['direct']));
});

test('fill: three-stage sentence needs the right order, themes sentence does not', () => {
  const stages = EC.BANK.find((q) => q.type === 'fill' && q.blanks.length === 3 && q.blanks[2][0] === 'reinvention');
  const it = itemFor(stages);
  assert.equal(C.gradeItem(it, ['invention', 'consolidation', 'reinvention']).got, 3);
  assert.equal(C.gradeItem(it, ['reinvention', 'consolidation', 'invention']).got, 1);
  const themes = EC.BANK.find((q) => q.type === 'fill' && q.blanks.length === 3 && q.blanks[2][0] === 'society');
  assert.equal(C.gradeItem(itemFor(themes), ['society', 'technology', 'business']).got, 3);
});

test('list: items are matched by keyword at word boundaries, with partial marks', () => {
  const q = EC.BANK.find((x) => x.type === 'list' && /five major types of e-commerce revenue/i.test(x.q));
  const it = itemFor(q);
  const r = C.gradeItem(it, ['Advertising', 'subscriptions', 'transaction fees', '', '']);
  assert.equal(r.got, C.roundHalf(3 / 5 * q.marks));
  assert.equal(r.status, 'partial');
  // A repeated item only counts once.
  assert.equal(C.gradeItem(it, ['advertising', 'advertising model', 'ads', '', '']).got, C.roundHalf(1 / 5 * q.marks));
  // Keys must start at a word boundary: "wholesale" does not contain the item "sale".
  assert.equal(C.gradeItem(it, ['wholesale', '', '', '', '']).got, 0);
});

test('list: ten factors in any order score full marks', () => {
  const q = EC.BANK.find((x) => x.type === 'list' && /ten factors/i.test(x.q));
  const lines = ['fraud', 'profit', 'Convenience', 'customer interaction', 'physical inspection', 'time accessibility (24x7)',
    'geographical accessibility', 'introduction of new products', 'time saving', 'cost effective'];
  assert.equal(C.gradeItem(itemFor(q), lines).got, q.marks);
});

test('explain: auto-detected points, then self-marking overrides', () => {
  const q = EC.BANK.find((x) => x.type === 'exp' && /direct and indirect competitors/i.test(x.q));
  const it = itemFor(q);
  const text = 'Direct competitors sell very similar products in the same market segment, like Priceline and Travelocity.';
  const r = C.gradeItem(it, { text });
  assert.equal(r.detail.points.filter((p) => p.auto).length, 2);
  assert.equal(r.got, C.roundHalf(2 / 4 * q.marks));
  // The student ticks the two points they covered in other words.
  const r2 = C.gradeItem(it, { text, over: { p2: true, p3: true } });
  assert.equal(r2.got, q.marks);
  // Unticking an auto-detected point removes its credit.
  const r3 = C.gradeItem(it, { text, over: { p0: false } });
  assert.equal(r3.got, C.roundHalf(1 / 4 * q.marks));
});

test('explain with a list part: listing alone earns only the list weight', () => {
  const q = EC.BANK.find((x) => x.type === 'exp' && x.listPart && /eight unique features/i.test(x.q));
  const text = 'Ubiquity, global reach, universal standards, information richness, interactivity, information density, personalization and customization, social technology.';
  const r = C.gradeItem(itemFor(q), { text });
  assert.equal(r.got, C.roundHalf(q.listPart.weight * q.marks));
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
