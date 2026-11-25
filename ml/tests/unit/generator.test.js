const test = require('node:test');
const assert = require('node:assert/strict');
const { load } = require('../load');

const EC = load();
const C = EC.core;
const ids = (e) => e.items.map((i) => i.id + ':' + (i.opts ? i.correct : ''));
const hex = (n) => n.toString(16).padStart(4, '0');

test('the same code rebuilds exactly the same paper', () => {
  for (const code of ['ML-7F3A', 'ML-0001-34F', 'ML-BEEF-23S-AB', 'ML-CAFE-345V']) {
    const a = C.makeExam(code), b = C.makeExam(code.toLowerCase());
    assert.deepEqual(ids(a), ids(b), code);
    assert.deepEqual(a.wordBank, b.wordBank, code);
    assert.equal(a.code, code);
  }
});

test('different codes give different papers', () => {
  assert.notDeepEqual(ids(C.makeExam('ML-0001')), ids(C.makeExam('ML-0002')));
});

test('codes round-trip settings', () => {
  const code = C.buildCode('ab12', { lectures: [4, 2], length: 'F', sections: 'CA' });
  assert.equal(code, 'ML-AB12-24F-AC');
  const p = C.parseCode(code);
  assert.deepEqual(JSON.parse(JSON.stringify(p.cfg)), { lectures: [2, 4], length: 'F', sections: 'AC', difficulty: 'X' });
  assert.equal(C.buildCode('ab12', C.DEFAULT_CFG), 'ML-AB12');
  assert.equal(C.parseCode('EC-AB12'), null, 'E-Commerce codes are not Machine Learning codes');
  assert.equal(C.parseCode('DC-AB12'), null, 'Data Communications codes are not Machine Learning codes');
  assert.equal(C.parseCode('OS-AB12'), null, 'Operating Systems codes are not Machine Learning codes');
  assert.equal(C.parseCode('not a code'), null);
});

test('papers hit the target marks and section budgets for every length', () => {
  for (const len of ['Q', 'S', 'M', 'F']) {
    for (let s = 0; s < 30; s++) {
      const code = C.buildCode(hex(s), { lectures: [2, 3, 4, 5], length: len, sections: 'ABC' });
      const e = C.makeExam(code);
      assert.equal(e.total, C.LENGTHS[len].total, `${code} total`);
      for (const sec of e.sections) assert.equal(sec.marks, C.LENGTHS[len].budget[sec.key], `${code} section ${sec.key}`);
    }
  }
});

test('single-lecture papers still reach the target total', () => {
  for (const l of [2, 3, 4, 5]) {
    for (const len of ['Q', 'S', 'M', 'F']) {
      for (let s = 0; s < 10; s++) {
        const e = C.makeExam(C.buildCode(hex(s * 97 + l), { lectures: [l], length: len, sections: 'ABC' }));
        assert.equal(e.total, C.LENGTHS[len].total, `L${l} ${len}`);
        assert.ok(e.items.every((i) => i.lecture === l), 'only the chosen lecture');
      }
    }
  }
});

test('disabled sections move their marks into Section A', () => {
  const e = C.makeExam('ML-1234-2345M-AB');
  assert.deepEqual(Array.from(e.sections, (s) => s.key), ['A', 'B']);
  assert.equal(e.total, 40);
  assert.equal(e.sections[0].marks, 28);
});

test('no question appears twice and items are numbered 1..n', () => {
  for (let s = 0; s < 50; s++) {
    const e = C.makeExam('ML-' + hex(s));
    assert.equal(new Set(e.items.map((i) => i.id)).size, e.items.length);
    e.items.forEach((it, i) => assert.equal(it.n, i + 1));
  }
});

test('correct letters are spread evenly over a-d', () => {
  for (let s = 0; s < 50; s++) {
    const e = C.makeExam('ML-' + hex(s + 300));
    const counts = [0, 0, 0, 0];
    e.items.filter((i) => i.type === 'mcq').forEach((i) => { counts[i.correct]++; assert.equal(i.opts[i.correct], i.q.options[0]); });
    assert.ok(Math.max(...counts) - Math.min(...counts) <= 1, counts.join(','));
  }
});

test('each paper is balanced across the selected lectures', () => {
  for (let s = 0; s < 30; s++) {
    const e = C.makeExam('ML-' + hex(s + 900));
    const a = e.sections.find((x) => x.key === 'A').items;
    const per = [2, 3, 4, 5].map((l) => a.filter((i) => i.lecture === l).length);
    assert.ok(Math.min(...per) >= 2, per.join(','));
    assert.ok(per[1] >= 5, 'Lecture 3 is in focus: ' + per.join(','));
  }
});

test('word bank holds every Section B answer plus 2-3 distractors that are not correct answers', () => {
  for (let s = 0; s < 40; s++) {
    const e = C.makeExam('ML-' + hex(s + 77));
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
    const e = C.makeExam('ML-' + hex(s + 4000));
    const answers = {};
    e.items.forEach((it) => { answers[it.id] = C.modelAnswer(it); });
    const res = C.gradeExam(e, answers);
    assert.equal(res.got, e.total);
    assert.equal(res.grade, 'A');
    assert.equal(C.gradeExam(e, {}).got, 0);
  }
});

test('difficulty is part of the code and changes the paper', () => {
  assert.equal(C.buildCode('ab12', { difficulty: 'H' }), 'ML-AB12-2345MH');
  assert.equal(C.parseCode('ml-ab12-34fe-ab').cfg.difficulty, 'E');
  assert.equal(C.parseCode('ML-AB12').cfg.difficulty, 'X');
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

test('the 10-mark Quick paper: 3 + 2 + 5 marks, code letter Q', () => {
  const code = C.buildCode('0bad', { length: 'Q' });
  assert.equal(code, 'ML-0BAD-2345Q');
  const e = C.makeExam(code);
  assert.equal(e.total, 10);
  assert.equal(e.minutes, 15);
  assert.deepEqual(Array.from(e.sections, (s) => s.key + s.marks), ['A3', 'B2', 'C5']);
});

test('theory papers: multiple choice, fill in the blanks and exactly one practical question', () => {
  for (let s = 0; s < 60; s++) {
    const e = C.makeExam(C.buildCode(hex(s * 17), { length: 'QSMF'[s % 4], difficulty: 'XENH'[(s >> 2) % 4] }));
    assert.deepEqual(Array.from(e.sections, (x) => x.title), ['Multiple choice', 'Fill in the blanks', 'Practical']);
    assert.equal(e.items.filter((i) => i.type === 'prac').length, 1);
    assert.equal(e.practical, false);
  }
});

test('practical papers hold only tasks and reach their marks for every lecture choice', () => {
  for (const len of ['T', 'U', 'V', 'W']) for (const l of [[2, 3, 4, 5], [3], [4], [5], [3, 5], [2], [2, 4]]) for (const d of 'XENH') for (let s = 0; s < 5; s++) {
    const code = C.buildCode(hex(s * 101 + 7), { lectures: l, length: len, difficulty: d });
    const e = C.makeExam(code);
    assert.equal(e.code, code);
    assert.ok(e.practical && e.items.every((i) => i.type === 'prac'), code);
    assert.equal(e.total, C.LENGTHS[len].total, code);
    assert.equal(new Set(e.items.map((i) => i.id)).size, e.items.length);
    const want = l.filter((x) => x !== 2);
    if (want.length) assert.ok(e.items.every((i) => want.includes(i.lecture)), code);
  }
  assert.equal(C.parseCode('ML-7F3A-2345V').code, 'ML-7F3A-345V');
});

test('the practical question of a theory paper is mostly about data cleaning', () => {
  let n = 0;
  for (let s = 0; s < 200; s++) if (C.makeExam('ML-' + hex(s * 31)).items.find((i) => i.type === 'prac').lecture === 3) n++;
  assert.ok(n > 80 && n < 170, String(n));
});

test('a retry paper keeps each question in its section', () => {
  const pick = (t, n) => EC.BANK.filter((q) => q.type === t).slice(0, n).map((q) => q.id);
  const e = C.makeRetryExam([...pick('prac', 2), ...pick('fill', 2), ...pick('mcq', 2)], '00aa');
  assert.deepEqual(Array.from(e.sections, (s) => s.key + s.items.length), ['A2', 'B2', 'C2']);
  assert.equal(C.makeRetryExam(pick('prac', 2), '00aa').practical, true);
});

test('unticked sections: leftover marks move to another selected section, so the paper still reaches its total', () => {
  // Bug found in QA: with Section A unticked, marks the written sections could not use were lost (papers came out short or empty).
  for (const secs of ['AB', 'BC', 'AC', 'A', 'B', 'C']) {
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

test('a paper is never empty when the lecture has no practical tasks', () => {
  const e = C.makeExam(C.buildCode('ab12', { lectures: [2], length: 'S', sections: 'C' }));
  assert.ok(e.items.length > 0);
  assert.equal(e.total, C.LENGTHS.S.total);
});
