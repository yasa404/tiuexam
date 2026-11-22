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
  const acc = ['half-duplex', 'half duplex'];
  for (const v of ['Half-Duplex', 'halfduplex', 'HALF DUPLEX', 'half_duplex.', '  half–duplex ', 'Half Duplex!']) {
    assert.ok(C.sameTerm(v, acc), v);
  }
  assert.ok(C.sameTerm('The Internet', ['internet']));
  assert.ok(C.sameTerm('point to point', ['point-to-point']));
  assert.ok(C.sameTerm('SSL/TLS', ['ssl/tls', 'tls', 'ssl']));
  assert.ok(C.sameTerm('local area network', ['LAN', 'local area network']));
});

test('fill: typo tolerance follows answer length (0 / 1 / 2)', () => {
  // up to 5 characters: exact only
  assert.ok(!C.sameTerm('fram', ['frame']));
  assert.ok(C.sameTerm('frame', ['frame']));
  // 6-11 characters: one edit
  assert.ok(C.sameTerm('protcol', ['protocol']));
  assert.ok(!C.sameTerm('prtcl', ['protocol']));
  // 12+ characters: two edits
  assert.ok(C.sameTerm('encapsullaton', ['encapsulation']));
  assert.ok(!C.sameTerm('encpslaton', ['encapsulation']));
});

test('fill: a different term that contains the answer is not accepted', () => {
  assert.ok(!C.sameTerm('decapsulation', ['encapsulation']));
  assert.ok(!C.sameTerm('encapsulation', ['decapsulation']));
  assert.ok(!C.sameTerm('UDP', ['tcp', 'transmission control protocol']));
  assert.ok(!C.sameTerm('full-duplex', ['half-duplex', 'half duplex']));
  assert.ok(!C.sameTerm('analog', ['digital']));
  assert.ok(!C.sameTerm('MAN', ['LAN', 'local area network']));
});

test('fill: the PDU-order sentence needs the right order, the criteria sentence does not', () => {
  const pdus = EC.BANK.find((q) => q.type === 'fill' && q.blanks.length === 2 && q.blanks[0][0] === 'Packet' && q.blanks[1][0] === 'Frame');
  const it = itemFor(pdus);
  assert.equal(C.gradeItem(it, ['packet', 'frame']).got, 2);
  assert.equal(C.gradeItem(it, ['frame', 'packet']).got, 0);
  const criteria = EC.BANK.find((q) => q.type === 'fill' && q.set && q.blanks[0][0] === 'reliability');
  assert.equal(C.gradeItem(itemFor(criteria), ['security', 'reliability']).got, 2);
});

// This course has no list questions on its papers (the instructor's style has none), but the grading engine
// still supports them, so they are tested on a built-in example.
const OSI_LIST = { id: 'T-L001', type: 'list', marks: 4, lecture: 3, q: 'List the seven layers of the OSI model.', need: 7,
  items: [['Physical', 'physical'], ['Data Link', 'data link', 'datalink'], ['Network', 'network'], ['Transport', 'transport'],
    ['Session', 'session'], ['Presentation', 'presentation'], ['Application', 'application']].map((p) => ({ text: p[0], keys: p.slice(1) })) };

test('list: items are matched by keyword at word boundaries, with partial marks', () => {
  const q = OSI_LIST;
  const it = itemFor(q);
  const r = C.gradeItem(it, ['Physical', 'data link', 'Network', '', '', '', '']);
  assert.equal(r.got, C.roundHalf(3 / 7 * q.marks));
  assert.equal(r.status, 'partial');
  // A repeated item only counts once.
  assert.equal(C.gradeItem(it, ['physical', 'physical layer', 'PHYSICAL', '', '', '', '']).got, C.roundHalf(1 / 7 * q.marks));
  // Keys must start at a word boundary: "geophysical" does not contain the item "physical".
  assert.equal(C.gradeItem(it, ['geophysical', '', '', '', '', '', '']).got, 0);
});

test('list: the seven OSI layers in any order score full marks', () => {
  const q = OSI_LIST;
  const lines = ['Application', 'presentation layer', 'Session', 'transport', 'Network', 'Data-link', 'physical'];
  assert.equal(C.gradeItem(itemFor(q), lines).got, q.marks);
});

test('explain: auto-detected points, then self-marking overrides', () => {
  const q = EC.BANK.find((x) => x.type === 'exp' && /role of the Physical layer and its four duties/i.test(x.q));
  const it = itemFor(q);
  const text = 'Data is the meaning, bits are the digital language and signals are the physical carrier.';
  const r = C.gradeItem(it, { text });
  assert.equal(r.detail.points.filter((p) => p.auto).length, 2);
  assert.equal(r.got, C.roundHalf(2 / 4 * q.marks));
  // The student ticks the two points they covered in other words.
  const r2 = C.gradeItem(it, { text, over: { p1: true, p2: true } });
  assert.equal(r2.got, q.marks);
  // Unticking an auto-detected point removes its credit.
  const r3 = C.gradeItem(it, { text, over: { p0: false } });
  assert.equal(r3.got, C.roundHalf(1 / 4 * q.marks));
});

test('explain with a list part: listing alone earns only the list weight', () => {
  const q = EC.BANK.find((x) => x.type === 'exp' && x.listPart && /five components of data communication, explain/i.test(x.q));
  const text = 'Message, sender, receiver, medium and protocol.';
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
