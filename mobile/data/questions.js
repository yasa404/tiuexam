/* IT 319 Mobile Applications question bank: builder.
   Source of truth: Ms. Van Sirwan's slides for Lectures 1-7 (Fall 2026-2027).
   Course administration pages (plan, grading, contacts, references) are not used.
   This file defines the helpers and the course settings. The questions live in questions-l1.js ... questions-l7.js,
   which must be loaded after this file. Every question is tagged with:
     id, lecture, slide (PDF page number, or a list of pages), type, difficulty (easy/medium/hard), marks.

   Types (the only three kinds of question on the exam)
     def, list  Section A, Short answer. def is marked by key points (opt.code / opt.qfig print code or a diagram);
                list matches each typed line to one expected item.
     mcq        Section B, Multiple choice. options[0] is the correct option in the source; the generator shuffles.
     match      Section C, Matching. Pairs [left, right]. A paper shows up to five pairs, one mark each,
                plus one extra right-hand item when the question has more pairs.
     Any question can print code (opt.code) or a diagram (opt.qfig) with it. `Backticks` mark inline code.

   Works as a plain <script> in the browser (file://) and inside Node's vm for tests. */
(function (g) {
  'use strict';
  var EC = g.EC = g.EC || {};
  var BANK = EC.BANK = EC.BANK || [];
  var DIFF = { e: 'easy', m: 'medium', h: 'hard' };
  var CODE = { mcq: 'A', def: 'D', list: 'L', match: 'M' };
  var current = 0;
  var counters = {};

  function nextId(type) {
    var k = current + type;
    counters[k] = (counters[k] || 0) + 1;
    return 'L' + current + '-' + CODE[type] + String(counters[k]).padStart(3, '0');
  }
  function base(type, slide, diff, marks, opt) {
    if (!current) throw new Error('Questions must be added inside EC.lecture(n, fn)');
    if (!DIFF[diff]) throw new Error('Bad difficulty "' + diff + '"');
    var o = { id: nextId(type), lecture: current, slide: slide, type: type, difficulty: DIFF[diff], marks: marks };
    if (opt && opt.code) o.code = opt.code;
    if (opt && opt.qfig) o.qfig = opt.qfig;
    return o;
  }
  function points(arr) {
    return arr.map(function (p) { return { text: p[0], keys: p.slice(1) }; });
  }

  var api = {
    /* mcq(slide, diff, question, [correct, distractor, distractor, distractor], explanation, opt) */
    mcq: function (slide, diff, q, options, explain, opt) {
      var o = base('mcq', slide, diff, 1, opt);
      o.q = q; o.options = options; o.explain = explain || '';
      BANK.push(o); return o;
    },
    /* list(slide, diff, marks, question, [[display, key, key...], ...], {n: itemsRequired}) */
    list: function (slide, diff, marks, q, items, opt) {
      var o = base('list', slide, diff, marks, opt);
      o.q = q; o.items = points(items);
      o.need = (opt && opt.n) || items.length;
      o.explain = (opt && opt.explain) || '';
      BANK.push(o); return o;
    },
    /* def(slide, diff, marks, question, [[point, key, key...], ...], modelAnswer, opt) */
    def: function (slide, diff, marks, q, pts, model, opt) {
      var o = base('def', slide, diff, marks, opt);
      o.q = q; o.points = points(pts); o.need = (opt && opt.need) || pts.length; o.model = model;
      BANK.push(o); return o;
    },

    /* match(slide, diff, question, [[left, right], ...], opt): every right item fits exactly one left item */
    match: function (slide, diff, q, pairs, opt) {
      var o = base('match', slide, diff, Math.min(5, pairs.length), opt);
      o.q = q; o.pairs = pairs;
      BANK.push(o); return o;
    }
  };

  EC.lecture = function (n, fn) { current = n; fn(api); current = 0; };
  /* Course settings read by core.js (codes) and app.js (labels, storage). */
  EC.COURSE = {
    code: 'IT 319',
    name: 'Mobile Applications',
    short: 'Mobile Applications',
    instructor: 'Ms. Van Sirwan',
    prefix: 'MA',
    storage: 'ma319',
    unit: 'Lecture',
    unitsLabel: 'Lectures',
    units: [1, 2, 3, 4, 5, 6, 7],
    /* The instructor announced three kinds of question: short answer, multiple choice and matching.
       The marks of each section are an assumption. */
    sectionInfo: {
      A: { title: 'Short answer', instr: 'Answer briefly. Write one item per line where a list is asked for.' },
      B: { title: 'Multiple choice', instr: 'Choose ONE correct option (A–D) for each question.' },
      C: { title: 'Matching', instr: 'Match each item with the correct letter. Each letter is used once at most; one mark for each match.' }
    },
    budgets: {
      Q: { A: 3, B: 4, C: 3 },
      S: { A: 6, B: 9, C: 5 },
      M: { A: 14, B: 16, C: 10 },
      F: { A: 22, B: 23, C: 15 }
    }
  };
  EC.LECTURES = {
    1: 'OOP and Class Diagrams',
    2: 'Introduction to Flutter',
    3: 'Stateless and Stateful Widget Apps',
    4: 'Designing a Growing Flutter App',
    5: 'Campus Shop: Product Cards (Practical)',
    6: 'Campus Shop: Eight Tasks (Practical)',
    7: 'Understanding Widget Layout'
  };
})(typeof window !== 'undefined' ? window : globalThis);
