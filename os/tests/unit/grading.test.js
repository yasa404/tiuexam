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

test('fill: the CLI sentence accepts any order inside each pair, but not across the pairs', () => {
  const q = EC.BANK.find((x) => x.lecture === 1 && x.qb === 'Q13');
  const it = itemFor(q);
  assert.equal(C.gradeItem(it, ['system program', 'kernel', 'other programs', 'built-in']).got, 4);
  assert.equal(C.gradeItem(it, ['built-in', 'other programs', 'kernel', 'system program']).got, 0);
});

const STATES = EC.BANK.find((q) => q.type === 'list' && q.lecture === 2 && /five process states/.test(q.q));

test('list: items are matched by keyword at word boundaries, with partial marks', () => {
  const it = itemFor(STATES);
  const r = C.gradeItem(it, ['New', 'running state', 'Ready', '', '']);
  assert.equal(r.got, C.roundHalf(3 / 5 * STATES.marks));
  assert.equal(r.status, 'partial');
  // A repeated item only counts once; a key must start at a word boundary ("already" is not "ready").
  assert.equal(C.gradeItem(it, ['new', 'NEW', 'new state', '', '']).got, C.roundHalf(1 / 5 * STATES.marks));
  assert.equal(C.gradeItem(it, ['already', '', '', '', '']).got, 0);
});

test('list: any order scores full marks', () => {
  assert.equal(C.gradeItem(itemFor(STATES), ['terminated', 'waiting', 'ready', 'running', 'new']).got, STATES.marks);
});

test('explain: auto-detected points, then self-marking overrides', () => {
  const q = EC.BANK.find((x) => x.lecture === 1 && x.qb === 'Q37');
  const it = itemFor(q);
  const text = 'A hardware interrupt is a signal sent to the CPU, like a keyboard click.';
  const r = C.gradeItem(it, { text });
  assert.equal(r.detail.points.filter((p) => p.auto).length, 2);
  assert.equal(r.got, 2);
  assert.equal(C.gradeItem(it, { text, over: { p2: true, p3: true } }).got, q.marks);
  assert.equal(C.gradeItem(it, { text, over: { p0: false } }).got, 1);
});

test('choice + justification: 1 mark for the choice, 2 for the reasons, nothing for a wrong choice', () => {
  const q = EC.BANK.find((x) => x.lecture === 3 && x.qb === 'CE5');
  const it = itemFor(q);
  assert.equal(C.gradeItem(it, { choice: 1, text: '' }).got, 1);
  assert.equal(C.gradeItem(it, { choice: 1, text: 'The process is not to be moved between processors.' }).got, 2);
  assert.equal(C.gradeItem(it, { choice: 1, text: q.model }).got, 3);
  assert.equal(C.gradeItem(it, { choice: 0, text: q.model }).got, 0);
  assert.equal(C.gradeItem(it, { choice: 0, text: q.model, over: { p0: true, p1: true } }).got, 0);
  assert.equal(C.gradeItem(it, { text: q.model }).got, 0);
  assert.equal(C.gradeItem(it, { text: q.model }).status, 'wrong');
  assert.ok(C.isAnswered(it, { choice: 0, text: '' }));
});

test('the official choice questions have the right answers', () => {
  const key = { 'L1 CE1': 'B', 'L1 CE2': 'A', 'L1 CE3': 'C', 'L1 CE4': 'A', 'L2 CE1': 'B', 'L2 CE2': 'A', 'L2 CE3': 'A', 'L3 CE1': 'C', 'L3 CE2': 'B', 'L3 CE3': 'A', 'L3 CE4': 'B', 'L3 CE5': 'B',
    'L4 CE1': 'A', 'L4 CE2': 'A', 'L4 CE3': 'B', 'L4 CE4': 'B', 'L4 CE5': 'A', 'L4 AA1': 'B', 'L4 AA2': 'C', 'L4 AA3': 'A', 'L4 AA4': 'C' };
  const got = {};
  EC.BANK.filter((q) => q.qb && q.choices).forEach((q) => { got['L' + q.lecture + ' ' + q.qb] = 'ABC'[q.answer]; });
  assert.deepEqual(got, key);
});

test('numbers in calculations are matched by value', () => {
  assert.ok(C.hit('the speedup is 2.777', '#2.78'));
  assert.ok(C.hit('= 2.78 times', '#2.78'));
  assert.ok(C.hit('73,728 bytes', '#73728'));
  assert.ok(!C.hit('about 27.8', '#2.78'));
  assert.ok(!C.hit('278', '#2.78'));
  assert.ok(C.hit('6KB wasted', '#6'));
  assert.ok(!C.hit('P6 is first', '#6'));
});

/* Recompute every calculation from its data, independently of the written model answers. */
const PROC = {
  bankTable: { b: [10, 4, 7, 18, 5, 4, 9, 13], p: [4, 7, 2, 6, 5, 8, 1, 3] },
  prioTable: { b: [10, 1, 2, 1, 5], p: [3, 1, 4, 5, 2] },
  table4: { b: [5, 3, 8, 2] }, table5: { b: [6, 4, 2, 3, 1], p: [2, 4, 1, 5, 3] }, table4b: { b: [12, 3, 9, 5] }
};
function avgWait(b, keyOf) {
  const order = b.map((_, i) => i);
  if (keyOf) order.sort((x, y) => keyOf[x] - keyOf[y] || x - y);
  let t = 0, sum = 0;
  order.forEach((i) => { sum += t; t += b[i]; });
  return sum / b.length;
}
test('scheduling calculations: the averages in the model answers are right', () => {
  const inModel = (q, v) => assert.ok(C.hit(q.model, '#' + v), q.id + ' should contain ' + v);
  const calcs = EC.BANK.filter((q) => q.kind === 'calc' && q.lecture === 3);
  assert.equal(calcs.length, 5);
  calcs.forEach((q) => {
    const { b, p } = PROC[q.qfig];
    if (/FCFS/.test(q.q)) inModel(q, avgWait(b));
    if (/SJF/.test(q.q)) inModel(q, avgWait(b, b));
    if (/Priority/.test(q.q)) inModel(q, avgWait(b, p));
  });
  assert.equal(avgWait(PROC.bankTable.b), 29.125);
  assert.equal(avgWait(PROC.bankTable.b, PROC.bankTable.b), 20.625);
  assert.equal(avgWait(PROC.bankTable.b, PROC.bankTable.p), 33.125);
  const m = EC.BANK.find((q) => q.type === 'mcq' && q.qfig === 'prioTable');
  assert.equal(+m.options[0], avgWait(PROC.prioTable.b, PROC.prioTable.p));
  // The table drawn with the question shows the same numbers.
  for (const [name, t] of Object.entries(PROC)) {
    const cells = [...EC.FIGURES[name].svg.matchAll(/<text[^>]*>([^<]*)<\/text>/g)].map((x) => x[1]).filter((x) => /^P?\d+$/.test(x));
    const want = t.b.flatMap((b, i) => ['P' + (i + 1), String(b)].concat(t.p ? [String(t.p[i])] : []));
    assert.deepEqual(cells, want, name);
  }
});

test('Amdahl and paging calculations: the final numbers in the model answers are right', () => {
  const has = (q, v) => assert.ok(C.hit(q.model, '#' + v), q.id + ' should contain ' + v);
  const speed = (s, n) => Math.round(100 / (s + (1 - s) / n)) / 100;
  const by = (l, re) => EC.BANK.find((q) => q.kind === 'calc' && q.lecture === l && re.test(q.q));
  has(by(2, /five processors/), speed(0.2, 5)); has(by(2, /ten processors/), speed(0.4, 10));
  has(by(2, /eight processors/), speed(0.25, 8)); has(by(2, /three processors/), speed(0.1, 3));
  has(by(2, /60% parallel/), speed(0.4, 4)); has(by(2, /60% parallel/), 2.5);
  has(by(2, /Program A/), speed(0.1, 2)); has(by(2, /Program A/), speed(0.5, 10));
  const frames = (size, page) => [Math.ceil(size / page), Math.ceil(size / page) * page - size];
  [[/72,766/, 72766, 2048], [/50,000/, 50000, 4096], [/100 KB/, 100, 16], [/21 KB/, 21, 8], [/21 KB/, 21, 2]].forEach(([re, s, p]) => frames(s, p).forEach((v) => has(by(4, re), v)));
  assert.deepEqual(frames(18, 4), [5, 2]);
  assert.deepEqual(frames(50, 8), [7, 6]);
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
