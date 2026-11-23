/* Drawings. EC.FIGURES[name] = { title, svg }.
   Model drawings (question.figure) appear in the answer key and the marked paper.
   Question figures (question.qfig) are printed with the question: trees and diagrams, some with missing parts.
   Built from small helpers so every figure shares one style. Figures sit on white, so they use fixed (light) colours. */
(function (g) {
  'use strict';
  var EC = g.EC = g.EC || {};
  var INK = '#1f2937', MUTED = '#6b7280', AC = '#b4500b', SOFT = '#fdf1e6', LINE = '#9aa3af', PALE = '#f3f4f6', GOOD = '#15803d', BAD = '#b91c1c';

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function svg(w, h, body) {
    return '<svg class="fig-svg" viewBox="0 0 ' + w + ' ' + h + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="Inter, Arial, sans-serif" font-size="12" fill="' + INK + '">' +
      '<defs><marker id="ecfig-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="context-stroke"/></marker></defs>' + body + '</svg>';
  }
  function T(x, y, s, o) {
    o = o || {};
    return '<text x="' + x + '" y="' + y + '" text-anchor="' + (o.a || 'middle') + '"' + (o.b ? ' font-weight="700"' : '') +
      (o.s ? ' font-size="' + o.s + '"' : '') + ' fill="' + (o.c || INK) + '"' + (o.i ? ' font-style="italic"' : '') + '>' + esc(s) + '</text>';
  }
  function R(x, y, w, h, o) {
    o = o || {};
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="' + (o.r == null ? 4 : o.r) + '" fill="' + (o.f || '#fff') + '" stroke="' + (o.s || INK) + '" stroke-width="' + (o.w || 1.3) + '"' + (o.d ? ' stroke-dasharray="' + o.d + '"' : '') + '/>';
  }
  function L(x1, y1, x2, y2, o) {
    o = o || {};
    return '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="' + (o.s || INK) + '" stroke-width="' + (o.w || 1.6) + '"' +
      (o.d ? ' stroke-dasharray="' + o.d + '"' : '') + (o.arrow ? ' marker-end="url(#ecfig-ah)"' : '') + '/>';
  }
  function P(d, o) {
    o = o || {};
    return '<path d="' + d + '" fill="' + (o.f || 'none') + '" stroke="' + (o.s || INK) + '" stroke-width="' + (o.w || 1.6) + '"' + (o.d ? ' stroke-dasharray="' + o.d + '"' : '') + (o.arrow ? ' marker-end="url(#ecfig-ah)"' : '') + '/>';
  }
  function box(x, y, w, h, label, o) { o = o || {}; return R(x, y, w, h, o) + T(x + w / 2, y + h / 2 + 4, label, { b: o.b !== false, s: o.fs || 12, c: o.c }); }

  /* Tree of widgets. A node is [label, child, child...]; {t: label, n: note under the node, f: fill} also works as a label. */
  function tree(root, o) {
    o = o || {};
    var rowH = o.rowH || 62, boxH = 30, W = 540, pad = 12, nodes = [], lines = [], maxD = 0;
    function leaves(n) { return n.length === 1 ? 1 : n.slice(1).reduce(function (a, c) { return a + leaves(c); }, 0); }
    function label(n) { return typeof n[0] === 'string' ? { t: n[0] } : n[0]; }
    function width(l) { return Math.max(64, l.t.length * 6.3 + 18); }
    function span(l) { return Math.max(width(l), l.n ? l.n.length * 5.4 + 8 : 0); }
    function own(n) { return Math.max(span(label(n)) + 12, n.length === 1 ? 0 : n.slice(1).reduce(function (a, c) { return a + own(c); }, 0)); }
    function place(n, x, w, d) {
      var l = label(n), cx = x + w / 2, kids = n.slice(1), need = kids.map(own), sum = need.reduce(function (a, c) { return a + c; }, 0), xx = x;
      if (d > maxD) maxD = d;
      kids.forEach(function (k, i) {
        var kw = w * need[i] / sum, kx = place(k, xx, kw, d + 1);
        lines.push(L(cx, 8 + d * rowH + boxH, kx, 8 + (d + 1) * rowH));
        xx += kw;
      });
      var bw = width(l);
      nodes.push(box(cx - bw / 2, 8 + d * rowH, bw, boxH, l.t, { f: l.f || (d === 0 ? SOFT : '#fff'), s: d === 0 ? AC : INK, fs: 11.5 }) + (l.n ? T(cx, 8 + d * rowH + boxH + 14, l.n, { s: 10.5, c: MUTED }) : ''));
      return cx;
    }
    place(root, pad, W - 2 * pad, 0);
    return svg(W, 8 + maxD * rowH + boxH + (o.bottom || 10), lines.join('') + nodes.join(''));
  }
  /* Vertical chain of steps. */
  function chain(steps, w) {
    w = w || 300;
    return svg(540, 50 * steps.length, steps.map(function (t, i) {
      var y = 4 + i * 50;
      return box(270 - w / 2, y, w, 32, t, { f: SOFT, s: AC }) + (i < steps.length - 1 ? L(270, y + 32, 270, y + 48, { arrow: true, s: AC, w: 2 }) : '');
    }).join(''));
  }
  function classBox(x, y, w, name, attrs) {
    return R(x, y, w, 30, { f: SOFT, s: AC, r: 0 }) + T(x + w / 2, y + 20, name, { b: true }) +
      R(x, y + 30, w, 14 + attrs.length * 20, { s: AC, r: 0 }) + attrs.map(function (a, i) { return T(x + 12, y + 50 + i * 20, a, { a: 'start' }); }).join('');
  }

  var F = {};

  /* ---------- Lecture 1 ---------- */
  F.classDiagram = { title: 'Class diagram: Course and Student', svg: svg(540, 124,
    classBox(40, 14, 160, 'Course', ['title']) + classBox(340, 14, 160, 'Student', ['name', 'age']) +
    L(200, 50, 340, 50) + T(270, 42, 'has several', { s: 11.5, c: MUTED })) };
  F.classBlank = { title: 'Class diagram with two missing labels', svg: svg(540, 124,
    classBox(40, 14, 160, 'Course', ['1']) + classBox(340, 14, 160, '2', ['name', 'age']) +
    L(200, 50, 340, 50) + T(270, 42, 'has several', { s: 11.5, c: MUTED })) };
  F.courseObjects = { title: 'One course and its students', svg: svg(540, 150,
    box(30, 58, 170, 34, 'Mobile Applications', { f: SOFT, s: AC }) +
    [['Sara', 12], ['Ali', 60], ['Ahmed', 108]].map(function (p) { return box(350, p[1], 130, 30, p[0]) + L(200, 75, 348, p[1] + 15, { arrow: true }); }).join('')) };

  /* ---------- Lecture 2 ---------- */
  F.appTree = { title: 'Widget tree of the first app', svg: tree(['MaterialApp', ['Scaffold', ['AppBar', ["Text 'My Courses'"]], ['Center', ["Text 'Mobile Apps'"]]]]) };
  F.appTreeBlank = { title: 'Widget tree with two missing widgets', svg: tree(['MaterialApp', ['1', ['AppBar', ["Text 'My Courses'"]], ['2', ["Text 'Mobile Apps'"]]]]) };
  F.columnTree = { title: 'Widget tree of a centred column', svg: tree(['Center', ['Column', ["Text 'Mobile Apps'"], ["Text 'IT319'"]]]) };

  /* ---------- Lecture 3 ---------- */
  F.courseTree = { title: 'Widget tree of CoursePage', svg: tree(['CoursePage', ['Scaffold', ['AppBar', ["Text 'IT Courses'"]], ['Center', ["Text 'Mobile Applications'"]]]]) };
  F.progressTree = { title: 'Widget tree of the progress page body', svg: tree(['Center', ['Column', [{ t: 'Text', n: "'Mobile Applications'" }], [{ t: 'Text', n: "'Completed lessons: $lessons'" }], ['ElevatedButton', ["Text 'Complete lesson'"]]]]) };
  F.tapFlow = { title: 'From a tap to the new count', svg: chain(['User taps the button', 'addLesson() is called', 'setState changes lessons', 'build() shows the new value']) };
  F.tapFlowBlank = { title: 'From a tap to the new count, with one missing step', svg: chain(['User taps the button', 'addLesson() is called', '?', 'build() shows the new value']) };

  /* ---------- Lecture 4 ---------- */
  F.folders = { title: 'Example project structure', svg: (function () {
    var rows = [['project', 0], ['lib', 1], ['models', 2, 'course.dart'], ['widgets', 2, 'course_summary.dart'], ['screens', 2, 'courses_page.dart'], ['assets', 1], ['images', 2, 'logo.png'], ['pubspec.yaml', 1]];
    return svg(540, rows.length * 34 + 8, rows.map(function (r, i) {
      var x = 70 + r[1] * 56, y = 6 + i * 34, p = i, b = '';
      while (p > 0 && rows[p][1] !== r[1] - 1) p--;
      if (i) b = L(x - 36, 6 + p * 34 + 26, x - 36, y + 13) + L(x - 36, y + 13, x, y + 13);
      return b + box(x, y, 112, 26, r[0], { f: r[1] === 0 ? SOFT : '#fff', s: r[1] === 0 ? AC : INK, fs: 11.5 }) + (r[2] ? T(x + 126, y + 17, r[2], { a: 'start', s: 11.5, c: MUTED }) : '');
    }).join(''));
  })() };
  F.listToWidgets = { title: 'One reusable widget for several courses', svg: svg(540, 226,
    T(90, 18, 'List<Course>', { b: true }) + R(20, 28, 140, 186, { f: PALE }) +
    [['IT319', 40], ['IT220', 98], ['IT210', 156]].map(function (p) { return box(36, p[1], 108, 44, p[0]); }).join('') +
    box(204, 98, 90, 44, 'Screen', { f: SOFT, s: AC }) +
    [['Mobile Applications', 'IT319 · 3 credits', 30], ['Web Development', 'IT220 · 3 credits', 92], ['Database Systems', 'IT210 · 4 credits', 154]].map(function (p, i) {
      return L(144, 62 + i * 58, 202, 112 + i * 8, { arrow: true }) + L(294, 112 + i * 8, 348, p[2] + 28, { arrow: true }) +
        R(350, p[2], 170, 56, { f: '#fff', s: AC }) + T(435, p[2] + 23, p[0], { b: true, s: 12 }) + T(435, p[2] + 42, p[1], { s: 11, c: MUTED });
    }).join('') + T(435, 18, 'CourseSummary', { b: true })) };

  /* ---------- Lecture 5 ---------- */
  F.cardTree = { title: 'Widget tree of a product card', svg: tree(['Card', ['Padding', ['Column', ["Text 'Campus Notebook'"], ["Text 'IQD 3,000'"]]]]) };
  F.listCards = { title: 'ListView with two cards', svg: tree(['ListView', ['Card', ['Column', ['Text name'], ['Text price']]], ['Card', ['Column', ['Icon'], ['Text name'], ['Text price']]]]) };
  F.listCardsBlank = { title: 'Widget tree with one missing widget', svg: tree(['?', ['Card', ['Column', ['Text name'], ['Text price']]], ['Card', ['Column', ['Icon'], ['Text name'], ['Text price']]]]) };

  /* ---------- Lecture 6 ---------- */
  F.bookCard = { title: 'Widget tree of the book card', svg: tree(['Card', ['Column', ['Text name'], ['Text price'], ['Chip'], ['Row', ['Icon'], ['Text']], ['ExpansionTile', ['details']]]]) };
  function chips(x, y, list) { return list.map(function (c) { return R(x + c[1], y, c[2], 32, { f: PALE, r: 16 }) + T(x + c[1] + c[2] / 2, y + 20, c[0], { s: 11.5 }); }).join(''); }
  F.wrapLabels = { title: 'Three labels in a Wrap on a narrow screen', svg: svg(540, 150,
    R(110, 8, 320, 132, { s: LINE }) + chips(128, 28, [['Campus pickup', 0, 122], ['Home delivery', 146, 122]]) + chips(128, 88, [['Express delivery', 0, 128]]) +
    L(250, 44, 274, 44, { s: AC, w: 2 }) + T(262, 20, 'spacing', { s: 10.5, c: AC }) + L(189, 60, 189, 88, { s: AC, w: 2 }) + T(196, 78, 'runSpacing', { a: 'start', s: 10.5, c: AC })) };
  F.wrapBlank = { title: 'Labels on two lines, with gaps 1 and 2', svg: svg(540, 150,
    R(110, 8, 320, 132, { s: LINE }) + chips(128, 28, [['Label A', 0, 122], ['Label B', 146, 122]]) + chips(128, 88, [['Label C', 0, 128]]) +
    L(250, 44, 274, 44, { s: AC, w: 2 }) + T(262, 20, '1', { b: true, c: AC }) + L(189, 60, 189, 88, { s: AC, w: 2 }) + T(200, 78, '2', { b: true, c: AC })) };

  /* ---------- Lecture 7 ---------- */
  F.rowExpanded = { title: 'Widget tree of the Row', svg: tree(['Row', ['Icon'], ['SizedBox'], ['Expanded', ['Text bookTitle']]]) };
  F.expandedOrder = { title: 'Suitable and unsuitable order', svg: svg(540, 264,
    [['Suitable', 130, ['Row', 'Expanded', 'Padding', 'Text'], GOOD, 'Expanded is directly in the Row'], ['Unsuitable', 400, ['Row', 'Padding', 'Expanded', 'Text'], BAD, 'Parent-data error']].map(function (c) {
      return T(c[1], 18, c[0], { b: true, c: c[3] }) + c[2].map(function (t, i) { return box(c[1] - 60, 30 + i * 52, 120, 30, t, { s: c[3] }) + (i < 3 ? L(c[1], 60 + i * 52, c[1], 80 + i * 52, { arrow: true }) : ''); }).join('') + T(c[1], 244, c[4], { s: 11, c: MUTED });
    }).join('')) };
  F.layoutSteps = { title: 'Layout steps between parent and child', svg: svg(540, 190,
    box(200, 8, 140, 36, 'Parent', { f: SOFT, s: AC }) + box(200, 146, 140, 36, 'Child') +
    L(222, 44, 222, 144, { arrow: true }) + L(270, 146, 270, 46, { arrow: true, d: '5 4' }) + L(318, 44, 318, 144, { arrow: true }) +
    T(212, 98, '1. gives limits', { a: 'end', s: 11.5 }) + T(258, 98, '2', { s: 11.5, b: true, c: AC }) + T(328, 98, '3. places the child', { a: 'start', s: 11.5 }) + T(350, 168, '2. chooses an allowed size', { a: 'start', s: 11.5 })) };
  F.navStack = { title: 'Navigation with push and pop', svg: svg(540, 170,
    box(40, 62, 150, 46, 'Home screen', { f: SOFT, s: AC }) + box(350, 62, 150, 46, 'Detail screen') +
    P('M190 72 C240 40 300 40 350 72', { arrow: true }) + T(270, 38, 'push', { b: true, c: AC }) +
    P('M350 98 C300 130 240 130 190 98', { arrow: true }) + T(270, 140, 'pop', { b: true, c: AC }) +
    T(115, 128, 'below, keeps its selection', { s: 10.5, c: MUTED }) + T(425, 128, 'above, receives the data', { s: 10.5, c: MUTED })) };
  F.navBlank = { title: 'Navigation with two missing labels', svg: svg(540, 150,
    box(40, 50, 150, 46, 'Home screen', { f: SOFT, s: AC }) + box(350, 50, 150, 46, 'Detail screen') +
    P('M190 60 C240 28 300 28 350 60', { arrow: true }) + T(270, 26, '1', { b: true, c: AC }) +
    P('M350 86 C300 118 240 118 190 86', { arrow: true }) + T(270, 128, '2', { b: true, c: AC })) };
  F.categoryFlow = { title: 'From a selection to the updated view', svg: chain(['User selects Study', 'onSelected callback runs', 'setState updates selectedCategory', 'build describes the updated view']) };
  function phone(labels) {
    return svg(540, 304, R(190, 8, 160, 34, { f: SOFT, s: AC, r: 0 }) + T(270, 29, 'App bar', { b: true }) + R(190, 42, 160, 156, { r: 0, s: AC, w: 2.5 }) +
      [1, 2, 3, 4, 5].map(function (n) { var y = 50 + (n - 1) * 48 + (n > 3 ? 10 : 0); return R(204, y, 132, 40, { f: n < 4 ? '#fff' : PALE, d: n < 4 ? '' : '5 4', s: n < 4 ? INK : LINE }) + T(270, y + 24, 'Card ' + n, { c: n < 4 ? INK : MUTED }); }).join('') +
      (labels ? L(362, 46, 362, 194, { s: AC }) + T(372, 124, labels[0], { a: 'start', b: true, c: AC }) + T(372, 252, labels[1], { a: 'start', s: 11, c: MUTED }) + L(172, 270, 172, 60, { arrow: true, s: MUTED }) + T(162, 168, labels[2], { a: 'end', s: 11, c: MUTED }) : ''));
  }
  F.viewport = { title: 'Viewport and scrolling', svg: phone(['Viewport (visible window)', 'hidden until the user scrolls', 'scrolling']) };
  F.viewportBlank = { title: 'A scrolling page with one missing label', svg: phone(['?', '', '']) };
  F.overflow = { title: 'A Row on a narrow screen', svg: svg(540, 110,
    R(90, 14, 300, 74, { s: LINE, w: 2 }) + R(104, 32, 40, 38, { f: SOFT, s: AC }) + T(124, 55, 'Icon', { s: 11 }) + T(158, 56, 'Introduction to Mobile Application Devel', { a: 'start', s: 13 }) +
    R(372, 16, 18, 70, { f: '#111', r: 0, s: '#111' }) + [0, 1, 2, 3].map(function (i) { return P('M372 ' + (30 + i * 18) + ' L390 ' + (18 + i * 18) + ' L390 ' + (26 + i * 18) + ' L372 ' + (38 + i * 18) + ' Z', { f: '#facc15', s: '#facc15', w: 0.5 }); }).join('') + T(240, 104, 'yellow and black stripes at the edge', { s: 10.5, c: MUTED })) };

  EC.FIGURES = F;
})(typeof window !== 'undefined' ? window : globalThis);
