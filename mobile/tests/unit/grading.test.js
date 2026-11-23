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

const WIDGETS = EC.BANK.find((q) => q.type === 'list' && q.lecture === 4 && /four situations/.test(q.q));

test('list: items are matched by keyword at word boundaries, with partial marks', () => {
  const it = itemFor(WIDGETS);
  const r = C.gradeItem(it, ['There are no courses', 'data is loading', '', '']);
  assert.equal(r.got, C.roundHalf(2 / 4 * WIDGETS.marks));
  assert.equal(r.status, 'partial');
  // A repeated item only counts once; a key must start at a word boundary ("unavailable" is not "available").
  assert.equal(C.gradeItem(it, ['fails', 'FAILS', 'loading fails', '']).got, C.roundHalf(1 / 4 * WIDGETS.marks));
  assert.equal(C.gradeItem(it, ['unavailable', '', '', '']).got, 0);
});

test('list: any order scores full marks', () => {
  assert.equal(C.gradeItem(itemFor(WIDGETS), ['online loading fails', 'online data is loading', 'no courses', 'courses are available']).got, WIDGETS.marks);
});

test('explain: auto-detected points, then self-marking overrides', () => {
  const q = EC.BANK.find((x) => x.kind === 'explain' && x.lecture === 1 && /class and an object/.test(x.q));
  const it = itemFor(q);
  const text = 'A class is a blueprint. An object is an instance.';
  const r = C.gradeItem(it, { text });
  assert.equal(r.detail.points.filter((p) => p.auto).length, 2);
  assert.equal(r.got, 2);
  assert.equal(C.gradeItem(it, { text, over: { p0: true, p1: true, p2: true, p3: true } }).got, q.marks);
  assert.equal(C.gradeItem(it, { text, over: { p0: false } }).got, 1);
});

test('choice + justification: 1 mark for the choice, 2 for the reasons, nothing for a wrong choice', () => {
  const q = EC.BANK.find((x) => x.kind === 'eval' && x.lecture === 3 && /count how many lessons/.test(x.q));
  const it = itemFor(q);
  assert.equal(C.gradeItem(it, { choice: 1, text: '' }).got, 1);
  assert.equal(C.gradeItem(it, { choice: 1, text: 'It can call setState.' }).got, 2);
  assert.equal(C.gradeItem(it, { choice: 1, text: q.model }).got, 3);
  assert.equal(C.gradeItem(it, { choice: 0, text: q.model }).got, 0);
  assert.equal(C.gradeItem(it, { choice: 0, text: q.model, over: { p0: true, p1: true } }).got, 0);
  assert.equal(C.gradeItem(it, { text: q.model }).got, 0);
  assert.equal(C.gradeItem(it, { text: q.model }).status, 'wrong');
  assert.ok(C.isAnswered(it, { choice: 0, text: '' }));
});

test('numbers are matched by value', () => {
  assert.ok(C.hit('the size is 100', '#100'));
  assert.ok(!C.hit('1000', '#100'));
  assert.ok(!C.hit('IT319', '#319'));
});

test('code keys ("!") need the exact words: no typos, any spacing and punctuation', () => {
  assert.ok(C.hit('style: TextStyle(fontSize:28)', '!fontsize 28'));
  assert.ok(C.hit('fontSize : 28', '!fontsize 28'));
  assert.ok(!C.hit('fontSize: 24', '!fontsize 28'));
  assert.ok(!C.hit('fontsze: 28', '!fontsize 28'));
  assert.ok(C.hit('lessons = lessons + 2;', '!lessons lessons 2'));
  assert.ok(!C.hit('lessons = lessons + 1;', '!lessons lessons 2'));
});

test('exact code keys ("~"): case and punctuation count; spaces, quotes, const and trailing commas do not', () => {
  assert.ok(C.hit('Row( children: [ const Icon(Icons.school), ], )', '~Row(children: [Icon(Icons.school)])'));
  assert.ok(C.hit('Text("Flutter")', "~Text('Flutter')"));
  assert.ok(!C.hit("text('Flutter')", "~Text('Flutter')"));
  assert.ok(!C.hit("Text('A') Text('B')", "~Text('A'), Text('B')"));
  assert.ok(!C.hit("fontSize: '24'", '~fontSize: 24'));
});

test('code questions: the model earns 5, the broken code printed with a question does not', () => {
  const codes = EC.BANK.filter((x) => x.kind === 'code');
  assert.ok(codes.length >= 20);
  for (const q of codes) {
    assert.equal(q.points.length, 5, q.id);
    assert.equal(C.gradeItem(itemFor(q), { text: q.model }).got, 5, q.id);
    // Copying the broken code from the question earns nothing.
    if (q.code) assert.equal(C.gradeItem(itemFor(q), { text: q.code }).got, 0, q.id);
  }
});

test('code questions: one line without spaces scores the same as the formatted model', () => {
  for (const q of EC.BANK.filter((x) => x.kind === 'code')) {
    const oneLine = q.model.replace(/\s+/g, ' ');
    assert.equal(C.gradeItem(itemFor(q), { text: oneLine }).got, 5, q.id);
  }
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
