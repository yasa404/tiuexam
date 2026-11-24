const test = require('node:test');
const assert = require('node:assert/strict');
const { load } = require('../load');

const EC = load();
const C = EC.core;
const ids = (e) => e.items.map((i) => i.id + ':' + (i.opts ? i.correct : '') + (i.rows ? JSON.stringify([i.rows, i.right]) : ''));
const hex = (n) => n.toString(16).padStart(4, '0');

test('the same code rebuilds exactly the same paper', () => {
  for (const code of ['MA-7F3A', 'MA-0001-14F', 'MA-BEEF-23S-AB']) {
    const a = C.makeExam(code), b = C.makeExam(code.toLowerCase());
    assert.deepEqual(ids(a), ids(b), code);
    assert.equal(a.code, code);
  }
});

test('different codes give different papers', () => {
  assert.notDeepEqual(ids(C.makeExam('MA-0001')), ids(C.makeExam('MA-0002')));
});

test('codes round-trip settings', () => {
  const code = C.buildCode('ab12', { lectures: [4, 2], length: 'F', sections: 'CA' });
  assert.equal(code, 'MA-AB12-24F-AC');
  const p = C.parseCode(code);
  assert.deepEqual(JSON.parse(JSON.stringify(p.cfg)), { lectures: [2, 4], length: 'F', sections: 'AC', difficulty: 'X' });
  assert.equal(C.buildCode('ab12', C.DEFAULT_CFG), 'MA-AB12');
  assert.equal(C.parseCode('EC-AB12'), null, 'E-Commerce codes are not Mobile Applications codes');
  assert.equal(C.parseCode('DC-AB12'), null, 'Data Communications codes are not Mobile Applications codes');
  assert.equal(C.parseCode('OS-AB12'), null, 'Operating Systems codes are not Mobile Applications codes');
  assert.equal(C.parseCode('not a code'), null);
  // Codes made before the exam changed to three sections still open.
  assert.equal(C.parseCode('MA-AB12-24F-ADE').code, 'MA-AB12-24F-A');
  assert.equal(C.parseCode('MA-AB12-24F-DE').code, 'MA-AB12-24F');
});

test('papers hit the target marks and section budgets for every length', () => {
  for (const len of ['Q', 'S', 'M', 'F']) {
    for (let s = 0; s < 30; s++) {
      const code = C.buildCode(hex(s), { lectures: [1, 2, 3, 4, 5, 6, 7], length: len, sections: 'ABC' });
      const e = C.makeExam(code);
      assert.equal(e.total, C.LENGTHS[len].total, `${code} total`);
      for (const sec of e.sections) assert.equal(sec.marks, C.LENGTHS[len].budget[sec.key], `${code} section ${sec.key}`);
    }
  }
});

test('single-lecture papers still reach the target total', () => {
  for (const l of [1, 2, 3, 4, 5, 6, 7]) {
    for (const len of ['Q', 'S', 'M', 'F']) {
      for (let s = 0; s < 10; s++) {
        const e = C.makeExam(C.buildCode(hex(s * 97 + l), { lectures: [l], length: len, sections: 'ABC' }));
        assert.equal(e.total, C.LENGTHS[len].total, `L${l} ${len}`);
        assert.ok(e.items.every((i) => i.lecture === l), 'only the chosen lecture');
      }
    }
  }
});

test('papers hold only short answer, multiple choice and matching', () => {
  const types = { A: ['def', 'list'], B: ['mcq'], C: ['match'] };
  assert.deepEqual([...new Set(EC.BANK.map((q) => q.type))].sort(), ['def', 'list', 'match', 'mcq']);
  for (let s = 0; s < 60; s++) {
    const e = C.makeExam(C.buildCode(hex(s * 13), { length: 'QSMF'[s % 4], difficulty: 'XENH'[(s >> 2) % 4] }));
    assert.deepEqual(Array.from(e.sections, (x) => x.key + ' ' + x.title), ['A Short answer', 'B Multiple choice', 'C Matching']);
    e.sections.forEach((x) => x.items.forEach((i) => assert.ok(types[x.key].includes(i.type), i.id)));
  }
});

test('matching: pairs, letters and one extra item are consistent', () => {
  for (let s = 0; s < 80; s++) {
    const e = C.makeExam(C.buildCode(hex(s * 7 + 3), { length: 'QSMF'[s % 4] }));
    e.items.filter((i) => i.type === 'match').forEach((i) => {
      assert.equal(i.marks, i.rows.length);
      assert.ok(i.rows.length >= 3 && i.rows.length <= 5, i.id + ' ' + i.rows.length);
      assert.equal(i.right.length, Math.min(i.q.pairs.length, i.rows.length + 1));
      assert.equal(new Set(i.rows.map((r) => r.answer)).size, i.rows.length, 'each letter once');
      i.rows.forEach((r) => assert.ok(i.q.pairs.some((p) => p[0] === r.left && p[1] === i.right[r.answer]), r.left));
    });
  }
});

test('disabled sections move their marks into Section B', () => {
  const e = C.makeExam('MA-1234-1234567M-BC');
  assert.deepEqual(Array.from(e.sections, (s) => s.key), ['B', 'C']);
  assert.equal(e.total, 40);
  assert.equal(e.sections[0].marks, 30);
});

test('no question appears twice and items are numbered 1..n', () => {
  for (let s = 0; s < 50; s++) {
    const e = C.makeExam('MA-' + hex(s));
    assert.equal(new Set(e.items.map((i) => i.id)).size, e.items.length);
    e.items.forEach((it, i) => assert.equal(it.n, i + 1));
  }
});

test('correct letters are spread evenly over a-d', () => {
  for (let s = 0; s < 50; s++) {
    const e = C.makeExam('MA-' + hex(s + 300));
    const counts = [0, 0, 0, 0];
    e.items.filter((i) => i.type === 'mcq').forEach((i) => { counts[i.correct]++; assert.equal(i.opts[i.correct], i.q.options[0]); });
    assert.ok(Math.max(...counts) - Math.min(...counts) <= 1, counts.join(','));
  }
});

test('each paper is balanced across the selected lectures', () => {
  for (let s = 0; s < 30; s++) {
    const e = C.makeExam('MA-' + hex(s + 900));
    const a = e.sections.find((x) => x.key === 'B').items;
    const per = [1, 2, 3, 4, 5, 6, 7].map((l) => a.filter((i) => i.lecture === l).length);
    assert.ok(Math.min(...per) >= 1, per.join(','));
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
    const e = C.makeExam('MA-' + hex(s + 4000));
    const answers = {};
    e.items.forEach((it) => { answers[it.id] = C.modelAnswer(it); });
    const res = C.gradeExam(e, answers);
    assert.equal(res.got, e.total);
    assert.equal(res.grade, 'A');
    assert.equal(C.gradeExam(e, {}).got, 0);
  }
});

test('difficulty is part of the code and changes the paper', () => {
  assert.equal(C.buildCode('ab12', { difficulty: 'H' }), 'MA-AB12-1234567MH');
  assert.equal(C.parseCode('ma-ab12-14fe-ab').cfg.difficulty, 'E');
  assert.equal(C.parseCode('MA-AB12').cfg.difficulty, 'X');
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

test('the 10-mark Quick paper: 3 + 4 + 3 marks, code letter Q', () => {
  const code = C.buildCode('0bad', { length: 'Q' });
  assert.equal(code, 'MA-0BAD-1234567Q');
  const e = C.makeExam(code);
  assert.equal(e.total, 10);
  assert.equal(e.minutes, 15);
  assert.deepEqual(Array.from(e.sections, (s) => s.key + s.marks), ['A3', 'B4', 'C3']);
  assert.equal(C.parseCode('ma-0bad-23qh').cfg.length, 'Q');
});

test('a retry paper keeps each question in its section', () => {
  const pick = (t, n) => EC.BANK.filter((q) => q.type === t).slice(0, n).map((q) => q.id);
  const e = C.makeRetryExam([...pick('match', 2), ...pick('def', 2), ...pick('mcq', 2), 'L1-B001'], '00aa');
  assert.deepEqual(Array.from(e.sections, (s) => s.key + s.items.length), ['A2', 'B2', 'C2']);
  assert.equal(C.gradeExam(e, Object.fromEntries(e.items.map((i) => [i.id, C.modelAnswer(i)]))).got, e.total);
});

test('unticked sections: leftover marks move to another selected section, so the paper still reaches its total', () => {
  // Bug found in QA: with Section A unticked, marks the written sections could not use were lost (papers came out short or empty).
  for (const secs of ['AB', 'BC', 'AC', 'A', 'B']) {
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
