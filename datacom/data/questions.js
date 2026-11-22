/* IT 301 Data Communications and Computer Networks I question bank: builder.
   Source of truth: Azheen Ghafour's lecture slides for Weeks 2-6 (Fall 2026-2027).
   This file defines the helpers and the course settings. The questions live in questions-w2.js ... questions-w6.js,
   which must be loaded after this file. Every question is tagged with:
     id, lecture (= week number), slide (PDF page number, or a list of pages), type, difficulty (easy/medium/hard), marks.

   Types
     mcq   Section A. options[0] is the correct option in the source; the generator shuffles.
     fill  Section B. Text uses [[answer|synonym|...]] for each blank. One mark per blank.
     tf    Section C. answer is true/false.
     def   Section D. "Define..." questions marked by key points.
     list  Section D. "List..." questions; each typed line is matched to one expected item.
     exp   Section E. "Explain..." questions; key points (+ optional list part), self-marking allowed.

   Works as a plain <script> in the browser (file://) and inside Node's vm for tests. */
(function (g) {
  'use strict';
  var EC = g.EC = g.EC || {};
  var BANK = EC.BANK = EC.BANK || [];
  var DIFF = { e: 'easy', m: 'medium', h: 'hard' };
  var CODE = { mcq: 'A', fill: 'B', tf: 'C', def: 'D', list: 'L', exp: 'E' };
  var current = 0;
  var counters = {};

  function nextId(type) {
    var k = current + type;
    counters[k] = (counters[k] || 0) + 1;
    return 'W' + current + '-' + CODE[type] + String(counters[k]).padStart(3, '0');
  }
  function base(type, slide, diff, marks) {
    if (!current) throw new Error('Questions must be added inside EC.lecture(week, fn)');
    if (!DIFF[diff]) throw new Error('Bad difficulty "' + diff + '"');
    return { id: nextId(type), lecture: current, slide: slide, type: type, difficulty: DIFF[diff], marks: marks };
  }
  function points(arr) {
    return arr.map(function (p) { return { text: p[0], keys: p.slice(1) }; });
  }

  var api = {
    /* mcq(slide, diff, question, [correct, distractor, distractor, distractor], explanation) */
    mcq: function (slide, diff, q, options, explain) {
      var o = base('mcq', slide, diff, 1);
      o.q = q; o.options = options; o.explain = explain || '';
      BANK.push(o); return o;
    },
    /* tf(slide, diff, statement, true|false, explanation) */
    tf: function (slide, diff, q, answer, explain) {
      var o = base('tf', slide, diff, 1);
      o.q = q; o.answer = answer; o.explain = explain || '';
      BANK.push(o); return o;
    },
    /* fill(slide, diff, "Text with [[answer|synonym]] blanks", explanation, {set:true|[i,j]}) */
    fill: function (slide, diff, text, explain, opt) {
      var blanks = [];
      var q = text.replace(/\[\[([^\]]+)\]\]/g, function (_, inner) {
        blanks.push(inner.split('|').map(function (s) { return s.trim(); }));
        return '{{' + (blanks.length - 1) + '}}';
      });
      var o = base('fill', slide, diff, blanks.length);
      o.q = q; o.blanks = blanks; o.explain = explain || '';
      if (opt && opt.set) o.set = opt.set === true ? blanks.map(function (_, i) { return i; }) : opt.set;
      BANK.push(o); return o;
    },
    /* list(slide, diff, marks, question, [[display, key, key...], ...], {n: itemsRequired, explain}) */
    list: function (slide, diff, marks, q, items, opt) {
      var o = base('list', slide, diff, marks);
      o.q = q; o.items = points(items);
      o.need = (opt && opt.n) || items.length;
      o.explain = (opt && opt.explain) || '';
      BANK.push(o); return o;
    },
    /* def(slide, diff, marks, question, [[point, key, key...], ...], modelAnswer) */
    def: function (slide, diff, marks, q, pts, model) {
      var o = base('def', slide, diff, marks);
      o.q = q; o.points = points(pts); o.need = pts.length; o.model = model;
      BANK.push(o); return o;
    },
    /* exp(slide, diff, marks, question, [[point, key...]...], modelAnswer, {need, sec: 'D'|'E', figure, list:{items, n, weight}})
       sec 'D' = categorize & illustrate, 'E' (default) = explain & map; figure = model drawing in EC.FIGURES. */
    exp: function (slide, diff, marks, q, pts, model, opt) {
      var o = base('exp', slide, diff, marks);
      o.q = q; o.points = points(pts); o.model = model;
      o.need = (opt && opt.need) || pts.length;
      if (opt && opt.sec) o.sec = opt.sec;
      if (opt && opt.figure) o.figure = opt.figure;
      if (opt && opt.list) {
        o.listPart = {
          items: points(opt.list.items),
          need: opt.list.n || opt.list.items.length,
          weight: opt.list.weight || 0.4,
          label: opt.list.label || 'Lists the items'
        };
      }
      BANK.push(o); return o;
    }
  };

  EC.lecture = function (n, fn) { current = n; fn(api); current = 0; };
  /* Course settings read by core.js (codes) and app.js (labels, storage). */
  EC.COURSE = {
    code: 'IT 301',
    name: 'Data Communications and Computer Networks I',
    short: 'Data Communications',
    instructor: 'Azheen Ghafour',
    prefix: 'DC',
    storage: 'dc301',
    unit: 'Week',
    unitsLabel: 'Weeks',
    units: [2, 3, 4, 5, 6],
    /* Sections and marks follow the instructor's question-style file (IT301 - Question Types):
       Type 1 multiple choice · Type 2 fill in the blanks with a word bank · Type 3 true/false ·
       Type 4 categorization & illustration (drawing) · Type 6 architectural explanation & structural mapping (drawing). */
    forceWordBank: true,
    sectionInfo: {
      A: { title: 'Multiple choice', instr: 'Choose ONE correct option (A–D) for each question.' },
      B: { title: 'Fill in the blanks (word bank)', instr: 'Complete the statements by selecting the correct technical terms from the Word Bank. Each blank carries one mark.' },
      C: { title: 'True or false', instr: 'Decide whether each statement is True or False. Read every part of the statement carefully.' },
      D: { title: 'Categorization & illustration', instr: 'Categorize, describe, and draw a clear, labeled diagram. Marks are given for each key point and for the labeled drawing.', types: ['exp'], bySec: true },
      E: { title: 'Explanation & structural mapping', instr: 'Explain in full sentences, then draw the structural mapping asked for. Marks are given for each key point and for the drawing.', types: ['exp'], bySec: true }
    },
    budgets: {
      Q: { A: 4, B: 3, C: 3, D: 0, E: 0 },
      S: { A: 6, B: 4, C: 5, D: 0, E: 5 },
      M: { A: 15, B: 8, C: 7, D: 5, E: 5 },
      F: { A: 20, B: 12, C: 8, D: 10, E: 10 }
    }
  };
  /* Weeks 5 and 6 share one PDF (Transmission Media I and II): Week 5 = guided media, Week 6 = unguided media. */
  EC.LECTURES = {
    2: 'Introduction to Data Communications and Networking',
    3: 'Network Models: OSI and TCP/IP',
    4: 'Physical Layer, Addressing and Encapsulation',
    5: 'Transmission Media I: Guided Media',
    6: 'Transmission Media II: Unguided Media'
  };
})(typeof window !== 'undefined' ? window : globalThis);
