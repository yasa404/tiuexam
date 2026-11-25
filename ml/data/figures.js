/* Drawings. EC.FIGURES[name] = { title, svg }.
   Question figures (question.qfig) are printed with the question: plots, some with missing labels.
   Built from small helpers so every figure shares one style. Figures sit on white, so they use fixed (light) colours. */
(function (g) {
  'use strict';
  var EC = g.EC = g.EC || {};
  var INK = '#1f2937', MUTED = '#6b7280', AC = '#be185d', SOFT = '#fdf0f6', LINE = '#9aa3af', PALE = '#f3f4f6', GOOD = '#15803d', BAD = '#b91c1c';

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
  function Dot(x, y, c) { return '<circle cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="4.5" fill="' + (c || AC) + '"/>'; }
  function axes(x, y, w, h, tx, ty) { return L(x, y + h, x, y - 4, { arrow: true }) + L(x, y + h, x + w + 8, y + h, { arrow: true }) + T(x + w / 2, y + h + 20, tx, { s: 11.5, c: MUTED }) + (ty ? T(x + 6, y - 10, ty, { s: 11.5, a: 'start', c: MUTED }) : ''); }

  var F = {};
  var PTS = [[0, 3], [1, 12], [2, 25], [3, 39], [4, 45], [5, 59], [6, 70], [7, 86], [8, 90]];
  function px(h) { return 90 + h * 46; }
  function py(g) { return 190 - g * 1.7; }
  F.bestFit = { title: 'Grades and study hours with a straight line', svg: svg(540, 230, axes(70, 26, 420, 170, 'study hours', 'grade') + PTS.map(function (p) { return Dot(px(p[0]), py(p[1])); }).join('') + L(px(0), py(2.5), px(8), py(93), { s: '#2563eb', w: 2.2 })) };
  F.errorBlank = { title: 'A point and the line', svg: svg(540, 230, axes(70, 26, 420, 170, 'study hours', 'grade') + [[0, 3], [1, 18], [2, 30], [4, 52], [6, 72], [7, 88], [8, 92]].map(function (p) { return Dot(px(p[0]), py(p[1])); }).join('') + L(px(0), py(5), px(8), py(95), { s: '#2563eb', w: 2.2 }) +
    Dot(px(5), py(28)) + L(px(5), py(60.5), px(5), py(30.5), { w: 2, d: '4 3' }) + T(px(5) + 16, py(43), '?', { b: true, s: 16, c: BAD })) };
  F.fits = { title: 'Three models of the same data', svg: (function () {
    var D = [[4, 70], [12, 52], [20, 40], [30, 22], [42, 14], [54, 10], [66, 14], [78, 26], [88, 44], [98, 52], [108, 76]], N = [4, -6, 5, -4, 3, -2, 4, -5, 6, -6, 3];
    function plot(x, name, line) { return axes(x, 24, 130, 110, '', '') + D.map(function (p, i) { return Dot(x + 10 + p[0], 126 - p[1] - N[i]); }).join('') + line + T(x + 66, 166, name, { b: true, s: 14 }); }
    function pts(x) { return D.map(function (p, i) { return [x + 10 + p[0], 126 - p[1] - N[i]]; }); }
    function smooth(x) { return D.map(function (p) { return [x + 10 + p[0], 126 - (10 + Math.pow((p[0] - 54) / 54, 2) * 62)]; }); }
    function path(a) { return 'M' + a.map(function (p) { return p[0].toFixed(1) + ' ' + p[1].toFixed(1); }).join(' L'); }
    return svg(540, 178, plot(20, 'A', L(26, 104, 144, 76, { s: '#2563eb', w: 2 })) + plot(200, 'B', P(path(smooth(200)), { s: '#2563eb', w: 2 })) + plot(380, 'C', P(path(pts(380)), { s: '#2563eb', w: 2 })));
  })() };

  EC.FIGURES = F;
})(typeof window !== 'undefined' ? window : globalThis);
