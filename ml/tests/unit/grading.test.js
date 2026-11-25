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
    case 'fill': return it.q.blanks.map(() => j);
    default: return { text: j, out: j };
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

test('fill: numbers are compared by value', () => {
  assert.ok(C.sameTerm('7.50', ['7.5']) && C.sameTerm('7,5', ['7.5']) && C.sameTerm('−30', ['-30']) && C.sameTerm(' - 2 ', ['-2']) && C.sameTerm('50%', ['50', '50%']));
  assert.ok(!C.sameTerm('75', ['7.5']) && !C.sameTerm('30', ['-30']) && !C.sameTerm('8', ['8.33']) && !C.sameTerm('', ['0']));
  assert.ok(C.sameTerm('1,500', ['1500']) && C.sameTerm('zero', ['0', 'zero']));
});

test('fill: blanks inside code allow no typos', () => {
  const q = EC.BANK.find((x) => x.type === 'fill' && x.exact && x.blanks[0][0] === 'dropna');
  const it = itemFor(q);
  assert.equal(C.gradeItem(it, ['dropna']).got, 1);
  assert.equal(C.gradeItem(it, ['dropna()']).got, 1);
  assert.equal(C.gradeItem(it, ['dropnaa']).got, 0);
  assert.equal(C.gradeItem(it, ['fillna']).got, 0);
});

test('python code is compared without comments, spaces and quote style; capital letters count', () => {
  assert.equal(C.pyCode('df = pd.DataFrame( data )  # table\n\n# x\nprint("a # b")'), "df=pd.DataFrame(data)\nprint('a#b')");
  assert.ok(C.hit('df2 = df . dropna ( )', /\.dropna\(/));
  assert.ok(!C.hit('# df.dropna()', /\.dropna\(/));
  assert.ok(!C.hit('df.DropNa()', /\.dropna\(/));
  assert.ok(C.hit('  Ali   NaN \r\n Sara  8.0', /ali nan\nsara 8/, true));
});

const PRAC = EC.BANK.filter((q) => q.type === 'prac');

test('practical: code earns the code marks, output earns the output marks', () => {
  for (const q of PRAC) {
    const it = itemFor(q), outs = q.points.filter((p) => p.out).length, real = EC.OUTPUTS[q.id];
    assert.equal(C.gradeItem(it, { text: q.model, out: '' }).got, q.marks - outs, q.id + ' code');
    assert.equal(C.gradeItem(it, { text: '', out: real }).got, outs, q.id + ' output');
    assert.equal(C.gradeItem(it, { text: q.model, out: real }).got, q.marks, q.id);
    assert.ok(C.isAnswered(it, { out: 'x' }) && !C.isAnswered(it, { text: ' ', out: '' }));
  }
});

test('practical: the given data alone earns at most one mark, and commented code earns none', () => {
  for (const q of PRAC) {
    const it = itemFor(q);
    assert.ok(C.gradeItem(it, { text: q.given, out: '' }).got <= 1, q.id + ' ' + C.gradeItem(it, { text: q.given }).got);
    assert.equal(C.gradeItem(it, { text: q.model.split('\n').map((l) => '# ' + l).join('\n') }).got, 0, q.id);
    // The steps of the question pasted as the answer.
    assert.ok(C.gradeItem(it, { text: q.steps.join('\n'), out: q.steps.join('\n') }).got <= 2, q.id + ' steps');
  }
});

test('practical: other correct ways earn the marks too', () => {
  const by = (l, re) => PRAC.find((q) => q.lecture === l && re.test(q.q));
  const got = (q, text) => C.gradeItem(itemFor(q), { text, out: EC.OUTPUTS[q.id] }).got;
  assert.equal(got(by(3, /Remove the incomplete rows/), 'import numpy as np\nimport pandas as pd\nd=pd.DataFrame({"Name":["Sara"]})\nprint(d.dropna())'), 5);
  assert.equal(got(by(3, /Fill the missing values of a dataset with the mean/), "import pandas as pd\nimport numpy as np\ndf=pd.DataFrame(data)\ndf['Temp']=df['Temp'].fillna(df['Temp'].mean())\nprint(df)"), 5);
  assert.equal(got(by(5, /Calculate the mean and the standard deviation/), 'import numpy as np\nprint(np.mean(data))\nprint(np.std(data))'), 5);
  assert.equal(got(by(4, /Calculate the points/), 'for i in range(-1, 3):\n    print(i * 2 + 1)'), 5);
});

test('practical: self-marking overrides', () => {
  const q = PRAC[0], it = itemFor(q);
  assert.equal(C.gradeItem(it, { text: '', out: '', over: { p0: true, p1: true } }).got, 2);
  assert.equal(C.gradeItem(it, { text: q.model, out: EC.OUTPUTS[q.id], over: { p0: false } }).got, q.marks - 1);
});

/* Recompute the numbers in the theory questions, independently of the bank. */
test('numbers in the questions are right', () => {
  const mean = (a) => a.reduce((x, y) => x + y, 0) / a.length;
  const med = (a) => { const s = a.slice().sort((x, y) => x - y), n = s.length; return n % 2 ? s[(n - 1) / 2] : (s[n / 2 - 1] + s[n / 2]) / 2; };
  const mcq = (re) => { const m = EC.BANK.filter((q) => q.type === 'mcq' && re.test(q.q)); assert.equal(m.length, 1, String(re)); return m[0].options[0]; };
  const fill = (re) => { const m = EC.BANK.filter((q) => q.type === 'fill' && re.test(q.q)); assert.equal(m.length, 1, String(re)); return Array.from(m[0].blanks, (b) => b[0]); };
  const r = (x) => String(Math.round(x * 100) / 100);
  assert.equal(mcq(/missing .Quiz. value is filled/), r(mean([8, 6, 10])));
  assert.equal(mcq(/missing .Project. value is filled/), r(mean([12, 10, 14])));
  assert.equal(mcq(/10, 20, 30, NaN and 100/), r(med([10, 20, 30, 100])));
  assert.equal(mcq(/2, 4, NaN and 12/), 'mean ' + mean([2, 4, 12]) + ', median ' + med([2, 4, 12]));
  assert.deepEqual(fill(/6, NaN, 9 and 9/), [r(mean([6, 9, 9]))]);
  assert.deepEqual(fill(/10, NaN, 7 and 8/), [r(mean([10, 7, 8]))]);
  assert.deepEqual(fill(/18, 30, NaN, 20 and 24/), [r(med([18, 30, 20, 24]))]);
  const A = [10, 20, 30], P = [12, 17, 31], A2 = [5, 10, 15, 20], P2 = [6, 8, 15, 24];
  const mae = (a, p) => mean(a.map((x, i) => Math.abs(x - p[i]))), mse = (a, p) => mean(a.map((x, i) => (x - p[i]) ** 2));
  assert.equal(mcq(/What is the MAE of these/), r(mae(A, P)));
  assert.equal(mcq(/MSE of these predictions, rounded/), r(mse(A, P)));
  assert.equal(mcq(/What is the MSE of these predictions\?/), r(mse(A2, P2)));
  assert.deepEqual(fill(/The MAE of these predictions/), [r(mae(A2, P2))]);
  assert.deepEqual(fill(/sum of the squared errors/), [r(4 * mse(A2, P2)), r(mse(A2, P2))]);
  const price = (a, b, g) => 200 * a + 10000 * b - 500 * g + 30000;
  assert.equal(mcq(/area 100, 2 bedrooms and age 10/), String(price(100, 2, 10)));
  assert.deepEqual(fill(/area 50, 1 bedroom and age 0/), [String(price(50, 1, 0))]);
  assert.equal(mcq(/Z-score of 95/), r((95 - 70) / 10));
  assert.equal(mcq(/Z-score of 38/).replace('−', '-'), r((38 - 50) / 4));
  assert.deepEqual(fill(/Z-score of 30 is/), [r((30 - 40) / 8)]);
  const iqr = (a) => { const s = a.slice().sort((x, y) => x - y), n = s.length, h = Math.floor(n / 2); return [med(s.slice(0, h)), med(s.slice(n - h))]; };
  assert.equal(mcq(/What are Q1 and Q3 of this sorted data\?/), 'Q1 = ' + iqr([2, 4, 6, 8, 10, 12, 14, 16])[0] + ', Q3 = ' + iqr([2, 4, 6, 8, 10, 12, 14, 16])[1]);
  assert.equal(mcq(/middle value is excluded/), 'Q1 = ' + iqr([1, 3, 5, 7, 9, 11, 13])[0] + ', Q3 = ' + iqr([1, 3, 5, 7, 9, 11, 13])[1]);
  assert.deepEqual(fill(/Q1 = 10 and Q3 = 18/), [r(8), r(10 - 12), r(18 + 12)]);
  assert.deepEqual(fill(/2, 4, 6 and 8, so the mean/), [r(mean([2, 4, 6, 8].map((x) => (x - 5) ** 2)))]);
});

test('mcq is exact', () => {
  const m = itemFor(EC.BANK.find((x) => x.type === 'mcq'));
  assert.equal(C.gradeItem(m, 0).got, 1);
  assert.equal(C.gradeItem(m, 2).got, 0);
});

test('letter grades', () => {
  assert.equal(C.letterGrade(95), 'A');
  assert.equal(C.letterGrade(72.5), 'C');
  assert.equal(C.letterGrade(49.9), 'F');
});
