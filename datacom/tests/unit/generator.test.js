const test = require('node:test');
const assert = require('node:assert/strict');
const { load } = require('../load');

const EC = load();
const C = EC.core;
const ids = (e) => e.items.map((i) => i.id + ':' + (i.opts ? i.correct : ''));
const hex = (n) => n.toString(16).padStart(4, '0');

test('the same code rebuilds exactly the same paper', () => {
  for (const code of ['DC-7F3A', 'DC-0001-26F', 'DC-BEEF-35S-ABE']) {
    const a = C.makeExam(code), b = C.makeExam(code.toLowerCase());
    assert.deepEqual(ids(a), ids(b), code);
    assert.deepEqual(a.wordBank, b.wordBank, code);
    assert.equal(a.code, code);
  }
});

test('different codes give different papers', () => {
  assert.notDeepEqual(ids(C.makeExam('DC-0001')), ids(C.makeExam('DC-0002')));
});

test('codes round-trip settings', () => {
  const code = C.buildCode('ab12', { lectures: [4, 2], length: 'F', sections: 'EDA' });
  assert.equal(code, 'DC-AB12-24F-ADE');
  const p = C.parseCode(code);
  assert.deepEqual(JSON.parse(JSON.stringify(p.cfg)), { lectures: [2, 4], length: 'F', sections: 'ADE', difficulty: 'X' });
  assert.equal(C.buildCode('ab12', C.DEFAULT_CFG), 'DC-AB12');
  assert.equal(C.parseCode('EC-AB12'), null, 'E-Commerce codes are not Data Communications codes');
  assert.equal(C.parseCode('not a code'), null);
});

test('papers hit the target marks and section budgets for every length', () => {
  for (const len of ['Q', 'S', 'M', 'F']) {
    for (let s = 0; s < 30; s++) {
      const code = C.buildCode(hex(s), { lectures: [2, 3, 4, 5, 6], length: len, sections: 'ABCDE' });
      const e = C.makeExam(code);
      assert.equal(e.total, C.LENGTHS[len].total, `${code} total`);
      for (const sec of e.sections) assert.equal(sec.marks, C.LENGTHS[len].budget[sec.key], `${code} section ${sec.key}`);
    }
  }
});

test('single-week papers still reach the target total', () => {
  for (const l of [2, 3, 4, 5, 6]) {
    for (const len of ['Q', 'S', 'M', 'F']) {
      for (let s = 0; s < 10; s++) {
        const e = C.makeExam(C.buildCode(hex(s * 97 + l), { lectures: [l], length: len, sections: 'ABCDE' }));
        assert.equal(e.total, C.LENGTHS[len].total, `W${l} ${len}`);
        assert.ok(e.items.every((i) => i.lecture === l), 'only the chosen week');
      }
    }
  }
});

test('disabled sections move their marks into Section A', () => {
  const e = C.makeExam('DC-1234-23456M-AB');
  assert.deepEqual(Array.from(e.sections, (s) => s.key), ['A', 'B']);
  assert.equal(e.total, 40);
  assert.equal(e.sections[0].marks, 32);
});

test('no question appears twice and items are numbered 1..n', () => {
  for (let s = 0; s < 50; s++) {
    const e = C.makeExam('DC-' + hex(s));
    assert.equal(new Set(e.items.map((i) => i.id)).size, e.items.length);
    e.items.forEach((it, i) => assert.equal(it.n, i + 1));
  }
});

test('correct letters are spread evenly over a-d', () => {
  for (let s = 0; s < 50; s++) {
    const e = C.makeExam('DC-' + hex(s + 300));
    const counts = [0, 0, 0, 0];
    e.items.filter((i) => i.type === 'mcq').forEach((i) => { counts[i.correct]++; assert.equal(i.opts[i.correct], i.q.options[0]); });
    assert.ok(Math.max(...counts) - Math.min(...counts) <= 1, counts.join(','));
  }
});

test('each paper is balanced across the selected weeks', () => {
  for (let s = 0; s < 30; s++) {
    const e = C.makeExam('DC-' + hex(s + 900));
    const a = e.sections.find((x) => x.key === 'A').items;
    const per = [2, 3, 4, 5, 6].map((l) => a.filter((i) => i.lecture === l).length);
    assert.ok(Math.min(...per) >= 3, per.join(','));
  }
});

test('word bank holds every Section B answer plus 2-3 distractors that are not correct answers', () => {
  for (let s = 0; s < 40; s++) {
    const e = C.makeExam('DC-' + hex(s + 77));
    const b = e.sections.find((x) => x.key === 'B');
    const accepted = b.items.flatMap((i) => i.q.blanks);
    const real = e.wordBank.filter((w) => w.real), fake = e.wordBank.filter((w) => !w.real);
    accepted.forEach((alts) => assert.ok(real.some((w) => C.sameTerm(w.text, alts)), alts[0]));
    assert.ok(fake.length >= 2 && fake.length <= 3, String(fake.length));
    fake.forEach((w) => assert.ok(!accepted.some((alts) => C.sameTerm(w.text, alts)), w.text));
  }
});

test('newCode avoids recently seen questions', () => {
  const first = C.makeExam(C.newCode(C.DEFAULT_CFG, [], () => 0.5));
  const recent = first.items.map((i) => i.id);
  let r = 0.123;
  const next = C.makeExam(C.newCode(C.DEFAULT_CFG, recent, () => { r = (r * 9301 + 0.4927) % 1; return r; }));
  const overlap = next.items.filter((i) => recent.includes(i.id)).length;
  assert.ok(overlap <= 6, `overlap ${overlap}`);
});

test('a perfect answer sheet scores the full paper, a blank one scores zero', () => {
  for (let s = 0; s < 20; s++) {
    const e = C.makeExam('DC-' + hex(s + 4000));
    const answers = {};
    e.items.forEach((it) => { answers[it.id] = C.modelAnswer(it); });
    const res = C.gradeExam(e, answers);
    assert.equal(res.got, e.total);
    assert.equal(res.grade, 'A');
    assert.equal(C.gradeExam(e, {}).got, 0);
  }
});

test('difficulty is part of the code and changes the paper', () => {
  assert.equal(C.buildCode('ab12', { difficulty: 'H' }), 'DC-AB12-23456MH');
  assert.equal(C.parseCode('dc-ab12-26fe-abe').cfg.difficulty, 'E');
  assert.equal(C.parseCode('DC-AB12').cfg.difficulty, 'X');
  const share = (lv, level) => {
    let n = 0, k = 0;
    for (let s = 0; s < 30; s++) {
      const e = C.makeExam(C.buildCode(hex(s + 50), { difficulty: lv }));
      e.items.forEach((i) => { n++; if (i.difficulty === level) k++; });
      assert.equal(e.total, 40);
    }
    return k / n;
  };
  assert.ok(share('E', 'hard') === 0, 'easy papers have no hard questions');
  assert.ok(share('E', 'easy') > 0.6, 'easy papers are mostly easy');
  assert.ok(share('H', 'hard') > share('X', 'hard') * 2, 'hard papers have far more hard questions');
  assert.ok(share('N', 'medium') > 0.6, 'medium papers are mostly medium');
});

test('the 10-mark Quick paper: 4 + 3 + 3 marks (A, B, C only), code letter Q', () => {
  const code = C.buildCode('0bad', { length: 'Q' });
  assert.equal(code, 'DC-0BAD-23456Q');
  const e = C.makeExam(code);
  assert.equal(e.total, 10);
  assert.equal(e.minutes, 15);
  assert.deepEqual(Array.from(e.sections, (s) => s.key + s.marks), ['A4', 'B3', 'C3']);
  assert.equal(C.parseCode('dc-0bad-36qh').cfg.length, 'Q');
});

test('sections follow the instructor\'s style: D = categorize & illustrate, E = explain & map, both drawing-based', () => {
  assert.equal(C.SECTION_INFO.A.title, 'Multiple choice');
  assert.match(C.SECTION_INFO.B.title, /word bank/i);
  assert.equal(C.SECTION_INFO.D.title, 'Categorization & illustration');
  assert.equal(C.SECTION_INFO.E.title, 'Explanation & structural mapping');
  for (let s = 0; s < 40; s++) {
    const e = C.makeExam(C.buildCode(hex(s + 7000), { length: 'F' }));
    const d = e.sections.find((x) => x.key === 'D'), E = e.sections.find((x) => x.key === 'E');
    assert.ok(d && E, 'Full paper has Sections D and E');
    d.items.forEach((it) => { assert.equal(it.q.sec, 'D'); assert.ok(EC.FIGURES[it.q.figure], it.id + ' has a model drawing'); assert.equal(it.marks, 5); });
    E.items.forEach((it) => { assert.equal(it.q.sec, 'E'); assert.equal(it.marks, 5); });
    assert.ok(e.items.every((it) => it.type !== 'def' && it.type !== 'list'), 'no short define/list questions');
  }
});

test('a retry paper keeps D and E questions in their own sections', () => {
  const ids = EC.BANK.filter((q) => q.type === 'exp').slice(0, 6).map((q) => q.id);
  const e = C.makeRetryExam(ids, '00aa');
  e.sections.forEach((sec) => sec.items.forEach((it) => assert.equal(it.q.sec, sec.key)));
  assert.equal(e.items.length, 6);
});

test('unticked sections: leftover marks move to another selected section, so the paper still reaches its total', () => {
  // Bug found in QA: with Section A unticked, marks the written sections could not use were lost (papers came out short or empty).
  for (const secs of ['BC', 'BCE', 'CE', 'BE', 'CDE', 'BD', 'B']) {
    for (const len of ['S', 'M', 'F']) {
      for (let s = 0; s < 6; s++) {
        const code = C.buildCode(hex(s * 31 + secs.length), { length: len, sections: secs });
        const e = C.makeExam(code);
        assert.equal(e.total, C.LENGTHS[len].total, code);
        assert.ok(e.sections.every((x) => secs.includes(x.key)), code + ' only chosen sections');
      }
    }
  }
});
