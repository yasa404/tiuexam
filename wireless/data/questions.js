/* IT 417 Wireless Networking question bank: builder.
   Source of truth: Mr. Farqad Albajelani's slides for Lectures 1-5 (Fall 2026-2027).
   Course administration pages (plan, grading, contacts, references) are not used.
   This file defines the helpers and the course settings. The questions live in questions-l1.js ... questions-l5.js,
   which must be loaded after this file. Every question is tagged with:
     id, lecture, slide (PDF page number, or a list of pages), type, difficulty (easy/medium/hard), marks.

   Types
     mcq   Section A. options[0] is the correct option in the source; the generator shuffles.
     fill  Section B. Text uses [[answer|synonym|...]] for each blank. One mark per blank.
     tf    Section C. answer is true/false.
     def   Section D. "Define..." and short "Why..." questions marked by key points.
     list  Section D. "List..." questions; each typed line is matched to one expected item.
     exp   Section E. Written questions, with a kind:
             explain  explain / compare (4 marks)
             draw     draw a labeled diagram; figure = model drawing in EC.FIGURES (4 marks)
             calc     calculation with working (5 marks)
             eval     choose A, B or C and justify: 1 mark for the choice, 2 for the reasons (3 marks)
     Any question can print given data or a formula (opt.code) or a diagram (opt.qfig) with it. `Backticks` mark inline code.

   Works as a plain <script> in the browser (file://) and inside Node's vm for tests. */
(function (g) {
  'use strict';
  var EC = g.EC = g.EC || {};
  var BANK = EC.BANK = EC.BANK || [];
  var DIFF = { e: 'easy', m: 'medium', h: 'hard' };
  var CODE = { mcq: 'A', fill: 'B', tf: 'C', def: 'D', list: 'L', exp: 'E' };
  var MARKS = { explain: 4, draw: 4, calc: 5, eval: 3 };
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
  function written(kind, slide, diff, q, pts, model, opt) {
    var o = base('exp', slide, diff, MARKS[kind], opt);
    o.kind = kind; o.q = q; o.points = points(pts); o.model = model;
    o.need = (opt && opt.need) || pts.length;
    if (opt && opt.list) {
      o.listPart = { items: points(opt.list.items), need: opt.list.n || opt.list.items.length, weight: opt.list.weight || 0.4, label: opt.list.label || 'Lists the items' };
    }
    BANK.push(o); return o;
  }

  var api = {
    /* mcq(slide, diff, question, [correct, distractor, distractor, distractor], explanation, opt) */
    mcq: function (slide, diff, q, options, explain, opt) {
      var o = base('mcq', slide, diff, 1, opt);
      o.q = q; o.options = options; o.explain = explain || '';
      BANK.push(o); return o;
    },
    /* tf(slide, diff, statement, true|false, explanation, opt) */
    tf: function (slide, diff, q, answer, explain, opt) {
      var o = base('tf', slide, diff, 1, opt);
      o.q = q; o.answer = answer; o.explain = explain || '';
      BANK.push(o); return o;
    },
    /* fill(slide, diff, "Text with [[answer|synonym]] blanks", explanation, {set: true|[i,j], code}) */
    fill: function (slide, diff, text, explain, opt) {
      var blanks = [];
      var q = text.replace(/\[\[([^\]]+)\]\]/g, function (_, inner) {
        blanks.push(inner.split('|').map(function (s) { return s.trim(); }));
        return '{{' + (blanks.length - 1) + '}}';
      });
      var o = base('fill', slide, diff, blanks.length, opt);
      o.q = q; o.blanks = blanks; o.explain = explain || '';
      if (opt && opt.set) o.set = opt.set === true ? blanks.map(function (_, i) { return i; }) : opt.set;
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
    /* exp(slide, diff, question, points, modelAnswer, {need, list, code, qfig}): explain / compare */
    exp: function (slide, diff, q, pts, model, opt) { return written('explain', slide, diff, q, pts, model, opt); },
    /* draw(slide, diff, question, figure, points (= labels), modelAnswer, opt) */
    draw: function (slide, diff, q, figure, pts, model, opt) { var o = written('draw', slide, diff, q, pts, model, opt); o.figure = figure; return o; },
    /* calc(slide, diff, question, points, modelAnswer, opt) */
    calc: function (slide, diff, q, pts, model, opt) { return written('calc', slide, diff, q, pts, model, opt); },
    /* pick(slide, diff, question, [A, B, C], indexOfAnswer, reasons, modelJustification, opt) */
    pick: function (slide, diff, q, choices, answer, pts, model, opt) {
      var o = written('eval', slide, diff, q, pts, model, opt);
      o.choices = choices; o.answer = answer; return o;
    }
  };

  EC.lecture = function (n, fn) { current = n; fn(api); current = 0; };
  /* Course settings read by core.js (codes) and app.js (labels, storage). */
  EC.COURSE = {
    code: 'IT 417',
    name: 'Wireless Networking',
    short: 'Wireless Networking',
    instructor: 'Mr. Farqad Albajelani',
    prefix: 'WN',
    storage: 'wn417',
    unit: 'Lecture',
    unitsLabel: 'Lectures',
    units: [1, 2, 3, 4, 5],
    /* The slides do not describe the exam format, so the sections and marks are an assumption. */
    sectionInfo: {
      A: { title: 'Multiple choice', instr: 'Choose ONE correct option (A–D) for each question.' },
      B: { title: 'Fill in the blanks', instr: 'Write the missing word or phrase in each blank. Each blank carries one mark.' },
      C: { title: 'True or false', instr: 'Decide whether each statement is True or False.' },
      D: { title: 'Define and list', instr: 'Answer briefly. Write one item per line where a list is asked for.' },
      E: { title: 'Explain, draw, calculate and justify', instr: 'Explain in full sentences, draw labeled diagrams, show your calculations, and justify every choice.', kinds: ['explain', 'draw', 'eval', 'calc'] }
    },
    budgets: {
      Q: { A: 4, B: 2, C: 2, D: 2, E: 0 },
      S: { A: 6, B: 4, C: 3, D: 3, E: 4 },
      M: { A: 12, B: 7, C: 5, D: 6, E: 10 },
      F: { A: 18, B: 10, C: 7, D: 10, E: 15 }
    }
  };
  EC.LECTURES = {
    1: 'Electromagnetic Waves and Spectrum',
    2: 'Radio Wave Propagation Principles',
    3: 'Antennas and Arrays',
    4: 'Digital Modulation Techniques',
    5: 'Multiple Access Techniques'
  };
})(typeof window !== 'undefined' ? window : globalThis);
