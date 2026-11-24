const test = require('node:test');
const assert = require('node:assert/strict');
const { load } = require('../load');

const EC = load();
const C = EC.core;

// A paper item for a single bank question (MCQ keeps source order: correct = 0).
function itemFor(q) {
  const it = { id: q.id, type: q.type, marks: q.marks, lecture: q.lecture, q };
  if (q.type === 'mcq') { it.opts = q.options.slice(); it.correct = 0; }
  if (q.type === 'match') { it.rows = q.pairs.slice(0, 5).map((p, i) => ({ left: p[0], answer: i })); it.right = q.pairs.slice(0, 6).map((p) => p[1]); it.marks = it.rows.length; }
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
    case 'match': return it.rows.map((r) => (r.answer + 1) % it.right.length);
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

test('matching: one mark per correct letter', () => {
  const it = itemFor(EC.BANK.find((q) => q.type === 'match'));
  assert.equal(C.gradeItem(it, [0, 1, 2, 3, 4]).got, 5);
  const r = C.gradeItem(it, [0, 1, 3, 2, null]);
  assert.equal(r.got, 2);
  assert.equal(r.status, 'partial');
  assert.deepEqual(Array.from(r.detail.res), [true, true, false, false, false]);
  assert.equal(C.gradeItem(it, [null, null, null, null, null]).status, 'blank');
  assert.equal(C.gradeItem(it, [1, 2, 3, 4, 0]).status, 'wrong');
  assert.ok(!C.isAnswered(it, [null, null]) && C.isAnswered(it, [null, 2]));
});

const WIDGETS = EC.BANK.find((q) => q.type === 'list' && q.lecture === 4 && /adding a local image/.test(q.q));

test('list: items are matched by keyword at word boundaries, with partial marks', () => {
  const it = itemFor(WIDGETS);
  const r = C.gradeItem(it, ['Save the image', 'declare it in pubspec', '', '']);
  assert.equal(r.got, C.roundHalf(2 / 4 * WIDGETS.marks));
  assert.equal(r.status, 'partial');
  // A repeated item only counts once; a key must start at a word boundary ("undeclared" is not "declare").
  assert.equal(C.gradeItem(it, ['save', 'SAVE', 'saving the image', '']).got, C.roundHalf(1 / 4 * WIDGETS.marks));
  assert.equal(C.gradeItem(it, ['undeclared', '', '', '']).got, 0);
});

test('list: any order scores full marks', () => {
  assert.equal(C.gradeItem(itemFor(WIDGETS), ['check the result', 'display it with Image.asset', 'declare the asset', 'save the file']).got, WIDGETS.marks);
});

test('explain: auto-detected points, then self-marking overrides', () => {
  const q = EC.BANK.find((x) => x.type === 'def' && x.lecture === 1 && /class and an object/.test(x.q));
  const it = itemFor(q);
  const text = 'A class is a blueprint. An object is an instance.';
  const r = C.gradeItem(it, { text });
  assert.equal(r.detail.points.filter((p) => p.auto).length, 2);
  assert.equal(r.got, 2);
  assert.equal(C.gradeItem(it, { text, over: { p0: true, p1: true, p2: true, p3: true } }).got, q.marks);
  assert.equal(C.gradeItem(it, { text, over: { p0: false } }).got, 1);
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

test('short answers: reversed answers earn nothing', () => {
  const by = (l, re) => itemFor(EC.BANK.find((q) => q.type === 'def' && q.lecture === l && re.test(q.q)));
  assert.equal(C.gradeItem(by(1, /Phone class/), { text: 'brand is a method and call is an attribute' }).got, 0);
  assert.equal(C.gradeItem(by(4, /Is “IT319” data/), { text: 'IT319 is presentation. Larger text is data.' }).got, 0);
});

test('short answers with code: the printed code alone earns at most half', () => {
  for (const q of EC.BANK.filter((x) => x.type === 'def' && x.code)) {
    const got = C.gradeItem(itemFor(q), { text: q.code }).got;
    if (!/^(Which text|Describe|What are the values|What is the title|In this code, how large|Read these|Is CoursePage|In this code, what|Write the two|Look at this code|What does this code)/.test(q.q)) assert.ok(got <= q.marks / 2, q.id + ' ' + got);
  }
});

test('mcq is exact', () => {
  const m = itemFor(EC.BANK.find((x) => x.type === 'mcq'));
  assert.equal(C.gradeItem(m, 0).got, 1);
  assert.equal(C.gradeItem(m, 2).got, 0);
});

test('letter grades', () => {
  assert.equal(C.letterGrade(95), 'A');
  assert.equal(C.letterGrade(80), 'B');
  assert.equal(C.letterGrade(72.5), 'C');
  assert.equal(C.letterGrade(50), 'D');
  assert.equal(C.letterGrade(49.9), 'F');
});
