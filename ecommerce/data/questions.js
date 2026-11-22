/* IT 355 E-Commerce question bank: builder.
   Source of truth: Dr. Hala Najwan Sabeh's Lectures 1-4 (Fall 2026-2027), adapted from Laudon & Traver.
   This file defines the helpers. The questions themselves live in questions-l1.js ... questions-l4.js,
   which must be loaded after this file. Every question is tagged with:
     id, lecture, slide (PDF page number, or a list of pages), type, difficulty (easy/medium/hard), marks.

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
    return 'L' + current + '-' + CODE[type] + String(counters[k]).padStart(3, '0');
  }
  function base(type, slide, diff, marks) {
    if (!current) throw new Error('Questions must be added inside EC.lecture(n, fn)');
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
    /* exp(slide, diff, marks, question, [[point, key...]...], modelAnswer, {need, list:{items, n, weight}}) */
    exp: function (slide, diff, marks, q, pts, model, opt) {
      var o = base('exp', slide, diff, marks);
      o.q = q; o.points = points(pts); o.model = model;
      o.need = (opt && opt.need) || pts.length;
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
  EC.LECTURES = {
    1: 'Introduction to E-commerce I',
    2: 'Introduction to E-commerce II',
    3: 'Introduction to E-commerce III',
    4: 'E-commerce Business Strategies'
  };
})(typeof window !== 'undefined' ? window : globalThis);
