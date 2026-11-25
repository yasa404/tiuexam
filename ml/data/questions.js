/* Machine Learning Fundamentals question bank: builder.
   Source of truth: Akam H. Ahmed's slides for Lectures 2-5 (2026-2027).
   The instructor announced: multiple choice, fill in the blanks and one practical question; theory and lab are included,
   with a focus on data cleaning (Lecture 3).
   This file defines the helpers and the course settings. The questions live in questions-l2.js ... questions-l5.js,
   which must be loaded after this file. Every question is tagged with:
     id, lecture, slide (PDF page number, or a list of pages), type, difficulty (easy/medium/hard), marks.

   Types
     mcq   Section A. options[0] is the correct option in the source; the generator shuffles.
     fill  Section B. Text uses [[answer|synonym|...]] for each blank. One mark per blank. Blanks inside code allow no typos.
     prac  Section C. A Python task (5 or 10 marks, one mark per point). Students write it in Visual Studio and paste the code
           and the output. Points are regular expressions tested on the code without spaces and comments, or on the output.
   Any question can print code (opt.code) or a diagram (opt.qfig). `Backticks` mark inline code.

   Works as a plain <script> in the browser (file://) and inside Node's vm for tests. */
(function (g) {
  'use strict';
  var EC = g.EC = g.EC || {};
  var BANK = EC.BANK = EC.BANK || [];
  var DIFF = { e: 'easy', m: 'medium', h: 'hard' };
  var CODE = { mcq: 'A', fill: 'B', prac: 'P' };
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

  var api = {
    /* mcq(slide, diff, question, [correct, distractor, distractor, distractor], explanation, opt) */
    mcq: function (slide, diff, q, options, explain, opt) {
      var o = base('mcq', slide, diff, 1, opt);
      o.q = q; o.options = options; o.explain = explain || '';
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
      if (opt && opt.code && /____/.test(opt.code)) o.exact = true;
      if (opt && opt.set) o.set = opt.set === true ? blanks.map(function (_, i) { return i; }) : opt.set;
      BANK.push(o); return o;
    },
    /* prac(slide, diff, title, data, [steps], [[point, key...]...] for the code, modelCode, [[point, key...]...] for the output) */
    prac: function (slide, diff, q, given, steps, pts, model, outs) {
      var o = base('prac', slide, diff, pts.length + outs.length);
      o.q = q; o.given = given; o.steps = steps; o.model = model;
      o.points = pts.map(function (p) { return { text: p[0], keys: p.slice(1) }; }).concat(outs.map(function (p) { return { text: p[0], keys: p.slice(1), out: true }; }));
      o.need = o.points.length;
      BANK.push(o); return o;
    }
  };

  EC.lecture = function (n, fn) { current = n; fn(api); current = 0; };
  /* Course settings read by core.js (codes) and app.js (labels, storage). */
  EC.COURSE = {
    code: 'ML',
    name: 'Machine Learning Fundamentals',
    short: 'Machine Learning',
    instructor: 'Akam H. Ahmed',
    prefix: 'ML',
    storage: 'ml',
    unit: 'Lecture',
    unitsLabel: 'Lectures',
    units: [2, 3, 4, 5],
    focus: { 3: 2 }, // Lecture 3 (data cleaning) comes up twice as often
    /* The instructor gave the kinds of question but not their marks, so the marks are an assumption. */
    sectionInfo: {
      A: { title: 'Multiple choice', instr: 'Choose ONE correct option (A–D) for each question.' },
      B: { title: 'Fill in the blanks', instr: 'Write the missing word, number or code in each blank. Each blank carries one mark.' },
      C: { title: 'Practical', instr: 'Write the program in Visual Studio and run it. Then paste your code and its output. Nothing is run on this page.' }
    }
  };
  EC.LECTURES = {
    2: 'Introduction to Machine Learning',
    3: 'Datasets and Data Cleaning',
    4: 'Regression',
    5: 'Model Building and Outliers'
  };
})(typeof window !== 'undefined' ? window : globalThis);
