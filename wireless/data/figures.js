/* Drawings. EC.FIGURES[name] = { title, svg }.
   Model drawings (question.figure) appear in the answer key and the marked paper.
   Question figures (question.qfig) are printed with the question: tables and diagrams, some with missing parts.
   Built from small helpers so every figure shares one style. Figures sit on white, so they use fixed (light) colours. */
(function (g) {
  'use strict';
  var EC = g.EC = g.EC || {};
  var INK = '#1f2937', MUTED = '#6b7280', AC = '#4d7c0f', SOFT = '#f1f7e4', LINE = '#9aa3af', PALE = '#f3f4f6', GOOD = '#15803d', BAD = '#b91c1c';

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

  function table(cols, rows, widths) {
    var rh = 26, w = widths.reduce(function (a, c) { return a + c; }, 0), b = '', x = 4;
    cols.forEach(function (c, i) { b += R(x, 4, widths[i], rh, { f: SOFT, r: 0 }) + T(x + widths[i] / 2, 21, c, { b: true }); x += widths[i]; });
    rows.forEach(function (r, k) { x = 4; r.forEach(function (v, i) { b += R(x, 4 + rh * (k + 1), widths[i], rh, { r: 0 }) + T(x + widths[i] / 2, 21 + rh * (k + 1), v); x += widths[i]; }); });
    return svg(Math.max(460, w + 8), rh * (rows.length + 1) + 8, b);
  }
  function El(cx, cy, rx, ry, o) { o = o || {}; return '<ellipse cx="' + cx + '" cy="' + cy + '" rx="' + rx + '" ry="' + ry + '" fill="' + (o.f || 'none') + '" stroke="' + (o.s || INK) + '" stroke-width="' + (o.w || 1.4) + '"' + (o.d ? ' stroke-dasharray="' + o.d + '"' : '') + '/>'; }
  /* Path of a function y(x), sampled every 1.5 px. */
  function curve(x0, x1, fn, o) { var d = ''; for (var x = x0; x <= x1 + 0.01; x += 1.5) d += (d ? 'L' : 'M') + x.toFixed(1) + ' ' + fn(x).toFixed(1); return P(d, o); }
  function tower(x, y, h) { return P('M' + (x - 12) + ' ' + y + ' L' + x + ' ' + (y - h) + ' L' + (x + 12) + ' ' + y + ' M' + (x - 7) + ' ' + (y - h * 0.42) + ' L' + (x + 7) + ' ' + (y - h * 0.42) + ' M' + x + ' ' + (y - h) + ' L' + x + ' ' + (y - h - 12)); }

  var F = {};

  /* ---------- Lecture 1 ---------- */
  function em(lambda) {
    return svg(540, 236,
      L(40, 110, 530, 110, { arrow: true }) + T(532, 100, 'Propagation', { a: 'end', s: 10.5 }) + T(532, 128, 'direction', { a: 'end', s: 10.5 }) +
      curve(50, 450, function (x) { return 110 - 70 * Math.sin((x - 50) / 400 * 4 * Math.PI); }, { s: AC, w: 2 }) +
      curve(50, 450, function (x) { return 110 - 30 * Math.sin((x - 50) / 400 * 4 * Math.PI); }, { s: '#2563eb', w: 2, d: '6 4' }) +
      T(100, 24, 'Electric field (E)', { c: AC, b: true, s: 11.5 }) + T(300, 24, 'Magnetic field (B), at right angles', { a: 'start', c: '#2563eb', b: true, s: 11.5 }) +
      L(50, 218, 250, 218) + L(50, 212, 50, 224) + L(250, 212, 250, 224) + T(150, 210, lambda, { b: true, s: 12 }));
  }
  F.emWave = { title: 'Electromagnetic wave', svg: em('Wavelength (λ)') };
  F.emWaveBlank = { title: 'Electromagnetic wave with the symbol λ', svg: em('λ') };
  F.waveform = { title: 'Waveform', svg: svg(540, 216,
    L(50, 20, 50, 170) + L(40, 100, 530, 100, { arrow: true }) + T(530, 120, 'distance (m)', { a: 'end', s: 11 }) +
    curve(50, 450, function (x) { return 100 - 55 * Math.sin((x - 50) / 400 * 4 * Math.PI); }, { s: AC, w: 2.2 }) +
    L(100, 100, 100, 47, { arrow: true, s: '#2563eb' }) + T(100, 34, 'Amplitude', { a: 'middle', c: '#2563eb', s: 11.5, b: true }) +
    L(50, 198, 250, 198) + L(50, 192, 50, 204) + L(250, 192, 250, 204) + T(150, 190, 'Wavelength (λ) = one cycle', { s: 11.5, b: true })) };
  F.bands = { title: 'Radio frequency bands', svg: table(['Band', 'Frequency range', 'Used by'], [
    ['VLF', '3 kHz – 30 kHz', 'Maritime radio'], ['LF', '30 kHz – 300 kHz', 'Navigation'], ['MF', '300 kHz – 3 MHz', 'AM radio'], ['HF', '3 MHz – 30 MHz', 'Shortwave radio'],
    ['VHF', '30 MHz – 300 MHz', 'FM radio, VHF television'], ['UHF', '300 MHz – 3 GHz', 'Mobile phones, GPS'], ['SHF', '3 GHz – 30 GHz', 'Satellite communications'], ['EHF', '30 GHz – 300 GHz', 'Radio astronomy']], [80, 190, 220]) };

  /* ---------- Lecture 2 ---------- */
  function mech(n) {
    return svg(540, 250,
      L(20, 226, 520, 226) + tower(70, 226, 120) + T(70, 244, 'Transmitter', { s: 11.5 }) + R(448, 206, 44, 20, { f: SOFT }) + T(470, 244, 'Receiver', { s: 11.5 }) +
      L(74, 94, 448, 206, { arrow: true, s: '#2563eb', w: 2 }) + T(250, 138, n[0], { s: 11.5, b: true, c: '#2563eb', a: 'start' }) +
      R(380, 34, 56, 110, { f: PALE }) + T(408, 28, 'Building', { s: 10.5, c: MUTED }) + P('M74 92 L380 78 L462 204', { s: GOOD, w: 2, arrow: true }) + T(440, 110, n[1], { s: 11.5, b: true, c: GOOD, a: 'start' }) +
      R(150, 172, 40, 54, { f: PALE }) + P('M74 100 L170 172 L446 214', { s: '#b45309', w: 2, arrow: true }) + T(205, 200, n[2], { s: 11.5, b: true, c: '#b45309', a: 'start' }) +
      L(190, 40, 190, 70) + El(190, 30, 16, 12, { f: '#fee2e2', s: BAD }) + L(74, 88, 172, 34, { s: BAD, w: 2, arrow: true }) + L(206, 26, 236, 16, { s: BAD, arrow: true }) + L(206, 32, 240, 38, { s: BAD, arrow: true }) + L(202, 38, 226, 56, { s: BAD, arrow: true }) + T(246, 36, n[3], { s: 11.5, b: true, c: BAD, a: 'start' }));
  }
  F.mechanisms = { title: 'The four signal paths', svg: mech(['Direct', 'Reflected', 'Diffracted', 'Scattered']) };
  F.mechanismsBlank = { title: 'Signal paths between a transmitter and a receiver', svg: mech(['', '', '', '']) };
  F.ranges = { title: 'Signal propagation ranges', svg: svg(540, 240,
    El(270, 120, 112, 112, { f: '#f3f4f6' }) + El(270, 120, 78, 78, { f: '#e5e7eb' }) + El(270, 120, 44, 44, { f: SOFT, s: AC }) + El(270, 120, 4, 4, { f: INK }) +
    T(270, 112, 'sender', { s: 11 }) + T(270, 146, 'transmission', { s: 10.5, b: true }) + T(270, 184, 'detection', { s: 11, b: true }) + T(270, 219, 'interference', { s: 11, b: true }) +
    L(274, 122, 420, 160, { arrow: true, s: MUTED }) + T(426, 164, 'distance', { a: 'start', s: 11, c: MUTED })) };
  F.fresnel = { title: 'Fresnel zone', svg: svg(540, 210,
    L(20, 186, 520, 186) + tower(70, 186, 76) + tower(470, 186, 76) + P('M200 186 L265 130 L330 186 Z', { f: '#e5efd2', s: GOOD }) +
    El(270, 98, 200, 34, { s: AC, w: 2 }) + L(70, 98, 470, 98, { d: '6 4' }) + T(160, 92, 'Line of sight', { s: 11.5 }) + T(270, 54, 'Fresnel zone', { b: true, c: AC }) +
    L(270, 98, 270, 130, { arrow: true, s: '#2563eb' }) + T(277, 118, 'largest radius (midpoint)', { a: 'start', s: 10.5, c: '#2563eb' }) + T(265, 176, 'obstacle', { s: 10.5 }) + T(70, 204, 'Transmitter', { s: 11 }) + T(470, 204, 'Receiver', { s: 11 })) };

  /* ---------- Lecture 3 ---------- */
  function petal(cx, cy, ang, len, wid) {
    var a = ang * Math.PI / 180, c = Math.cos(a), s = Math.sin(a);
    function pt(x, y) { return (cx + x * c - y * s).toFixed(1) + ' ' + (cy + x * s + y * c).toFixed(1); }
    return P('M' + pt(0, 0) + ' C' + pt(len * 0.35, -wid) + ' ' + pt(len, -wid) + ' ' + pt(len, 0) + ' C' + pt(len, wid) + ' ' + pt(len * 0.35, wid) + ' ' + pt(0, 0), { f: SOFT, s: AC, w: 1.8 });
  }
  function lobes(n) {
    return svg(540, 220, petal(190, 110, 0, 250, 44) + petal(190, 110, 180, 90, 24) + petal(190, 110, 62, 80, 20) + petal(190, 110, -62, 80, 20) + petal(190, 110, 118, 70, 18) + petal(190, 110, -118, 70, 18) +
      L(190, 110, 430, 74, { d: '5 4', s: MUTED }) + L(190, 110, 430, 146, { d: '5 4', s: MUTED }) + (n[3] ? P('M300 94 C306 104 306 116 300 126', { s: '#2563eb' }) + T(312, 114, 'θ', { s: 13, c: '#2563eb', b: true }) : '') +
      T(488, 114, n[0], { b: true }) + T(64, 114, n[1], { b: true }) + T(250, 22, n[2], { b: true }) + (n[3] ? T(440, 176, n[3], { s: 11.5, c: '#2563eb', b: true }) : ''));
  }
  F.lobes = { title: 'Radiation pattern', svg: lobes(['Main lobe', 'Back lobe', 'Side lobes', 'θ = beamwidth (−3 dB points)']) };
  F.lobesBlank = { title: 'Radiation pattern with numbered lobes', svg: lobes(['1', '2', '', '']) };
  F.dipole = { title: 'Half-wave dipole', svg: svg(540, 160,
    L(70, 70, 258, 70, { w: 5, s: AC }) + L(282, 70, 470, 70, { w: 5, s: AC }) + L(262, 70, 262, 120) + L(278, 70, 278, 120) + T(270, 140, 'Feed point (center)', { b: true, s: 11.5 }) +
    L(70, 28, 470, 28) + L(70, 22, 70, 34) + L(470, 22, 470, 34) + T(270, 21, 'L = λ/2', { b: true }) + T(164, 98, 'arm = λ/4', { s: 11.5 }) + T(376, 98, 'arm = λ/4', { s: 11.5 })) };
  F.patch = { title: 'Patch antenna (side view)', svg: svg(540, 170,
    R(190, 34, 160, 16, { f: '#fde68a', s: INK, r: 1 }) + R(90, 50, 360, 56, { f: '#dcedc8', r: 0 }) + R(90, 106, 360, 16, { f: '#9ca3af', r: 0 }) + R(90, 38, 100, 8, { f: '#fcd34d', r: 0 }) +
    T(270, 24, 'Radiating patch', { b: true, s: 11.5 }) + T(270, 83, 'Dielectric substrate', { b: true, s: 11.5 }) + T(270, 142, 'Ground plane', { b: true, s: 11.5 }) + T(60, 30, 'Feed', { b: true, s: 11.5 }) + L(70, 34, 96, 41, { arrow: true })) };
  F.dish = { title: 'Dish antenna', svg: svg(540, 220,
    P('M120 30 C60 80 60 140 120 190', { s: AC, w: 5 }) + El(230, 110, 9, 9, { f: '#fde68a' }) + T(290, 136, 'Feed at the focal point', { b: true, s: 11.5 }) +
    [60, 110, 160].map(function (y) { var xr = y === 110 ? 76 : 90; return L(500, y, xr + 4, y, { arrow: true, s: '#2563eb' }) + (y === 110 ? '' : L(xr, y, 224, y < 110 ? 104 : 116, { arrow: true, s: GOOD })); }).join('') +
    T(430, 50, 'Incoming waves', { s: 11.5, c: '#2563eb', b: true }) + T(120, 212, 'Parabolic reflector', { b: true, s: 11.5 })) };

  /* ---------- Lecture 4 ---------- */
  function blocks(a, b) {
    var top = ['Source', 'Source encoder', 'Channel encoder', a, 'Multiple access'], bot = ['Sink', 'Source decoder', 'Channel decoder', 'Demodulation', 'Multiple de-access'];
    var x = function (i) { return 6 + i * 92; };
    function bx(i, y, t) { var w = t.split(' '); return R(x(i), y, 78, 44, { f: /^\d$/.test(t) ? '#fff' : SOFT, s: AC }) + (w.length > 1 ? T(x(i) + 39, y + 19, w[0], { s: 10.5, b: true }) + T(x(i) + 39, y + 33, w.slice(1).join(' '), { s: 10.5, b: true }) : T(x(i) + 39, y + 27, t, { s: t.length > 11 ? 9.5 : 10.5, b: true })); }
    return svg(540, 190, top.map(function (t, i) { return bx(i, 10, t) + (i < 4 ? L(x(i) + 78, 32, x(i + 1), 32, { arrow: true }) : ''); }).join('') +
      bot.map(function (t, i) { return bx(i, 134, t) + (i < 4 ? L(x(i + 1), 156, x(i) + 78, 156, { arrow: true }) : ''); }).join('') +
      box(456, 72, 78, 44, b, { f: PALE, fs: 11 }) + P('M452 32 L495 32 L495 70', { arrow: true }) + P('M495 116 L495 156 L454 156', { arrow: true }));
  }
  F.blocks = { title: 'Digital communication system', svg: blocks('Modulation', 'Channel') };
  F.blocksBlank = { title: 'Digital communication system with two missing blocks', svg: blocks('1', '2') };
  var BITS = [1, 0, 1, 1, 0];
  function bitsRow(y) { var d = 'M70 ' + (BITS[0] ? y : y + 24), b = ''; BITS.forEach(function (v, i) { var x = 70 + i * 88; d += ' L' + x + ' ' + (v ? y : y + 24) + ' L' + (x + 88) + ' ' + (v ? y : y + 24); b += T(x + 44, y - 6, String(v), { b: true, s: 11.5 }); }); return b + P(d, { w: 2 }); }
  function keyed(kind, y) {
    return curve(70, 510, function (x) {
      var i = Math.min(4, Math.floor((x - 70) / 88)), v = BITS[i], u = (x - 70 - i * 88) / 88 * 2 * Math.PI;
      if (kind === 'ask') return y - (v ? 18 : 0) * Math.sin(4 * u);
      if (kind === 'fsk') return y - 18 * Math.sin((v ? 6 : 2) * u);
      return y - 18 * Math.sin(3 * u + (v ? 0 : Math.PI));
    }, { s: AC, w: 1.8 }) + [0, 1, 2, 3, 4, 5].map(function (i) { return L(70 + i * 88, y - 24, 70 + i * 88, y + 24, { s: '#cbd5e1', w: 1, d: '3 3' }); }).join('');
  }
  function wave(kind) { return svg(540, 130, bitsRow(24) + T(36, 40, 'data', { s: 11.5 }) + keyed(kind, 96) + T(36, 100, 'signal', { s: 11.5 })); }
  F.askWave = { title: 'A modulated signal', svg: wave('ask') };
  F.fskWave = { title: 'A modulated signal', svg: wave('fsk') };
  F.pskWave = { title: 'A modulated signal', svg: wave('psk') };
  F.shiftKeying = { title: 'ASK, FSK and PSK for the bits 1 0 1 1 0', svg: svg(540, 250, bitsRow(24) + T(36, 40, 'data', { s: 11.5 }) + [['ask', 96], ['fsk', 156], ['psk', 216]].map(function (k) { return keyed(k[0], k[1]) + T(36, k[1] + 4, k[0].toUpperCase(), { b: true, s: 11.5 }); }).join('')) };
  F.qpskConst = { title: 'QPSK phases', svg: svg(540, 220,
    L(150, 110, 390, 110) + L(270, 14, 270, 206) + El(270, 110, 72, 72, { d: '4 4', s: LINE }) +
    [[342, 110, '00 (0°)', 352, 100, 'start'], [270, 38, '01 (90°)', 280, 34, 'start'], [198, 110, '10 (180°)', 188, 100, 'end'], [270, 182, '11 (270°)', 280, 198, 'start']].map(function (p) { return El(p[0], p[1], 6, 6, { f: AC, s: AC }) + T(p[3], p[4], p[2], { a: p[5], b: true, s: 12 }); }).join('')) };

  /* ---------- Lecture 5 ---------- */
  var COL = ['#bfdbfe', '#fde68a', '#bbf7d0', '#fecaca'];
  function axes(x, y, w, h, t) { return L(x, y + h, x, y - 8, { arrow: true }) + L(x, y + h, x + w + 12, y + h, { arrow: true }) + T(x - 4, y - 12, 'frequency', { a: 'start', s: 10, c: MUTED }) + T(x + w, y + h + 14, 'time', { a: 'end', s: 10, c: MUTED }) + T(x + w / 2, y + h + 30, t, { b: true, s: 12.5 }); }
  function access(n) {
    var b = '', w = 130, h = 100, y = 30;
    [0, 1, 2, 3].forEach(function (i) { b += R(30, y + i * 25, w, 25, { f: COL[i], r: 0 }) + T(95, y + i * 25 + 17, 'User ' + (i + 1), { s: 10.5 }); });
    [0, 1, 2, 3].forEach(function (i) { b += R(210 + i * 32.5, y, 32.5, h, { f: COL[i], r: 0 }) + T(226 + i * 32.5, y + 54, 'U' + (i + 1), { s: 10.5 }); });
    [3, 2, 1, 0].forEach(function (i) { b += R(390 + i * 5, y - i * 4 + 12, w - 20, h - 12, { f: COL[i], r: 0 }); });
    b += T(445, y + 60, 'all users', { s: 11 });
    return svg(540, 176, b + axes(30, y, w, h, n[0]) + axes(210, y, w, h, n[1]) + axes(390, y, w - 10, h, n[2]));
  }
  F.access = { title: 'FDMA, TDMA and CDMA', svg: access(['FDMA', 'TDMA', 'CDMA (different codes)']) };
  F.accessBlank = { title: 'Three multiple access techniques', svg: access(['A', 'B', 'C']) };
  function tdma(g) {
    var b = '', x = 60;
    ['#1', '#2', '…', '#n', '#1', '#2', '…', '#n'].forEach(function (t, i) { b += R(x + i * 52, 34, 52, 34, { f: i % 4 === 0 ? SOFT : '#fff', r: 0 }) + T(x + 26 + i * 52, 56, t, { s: 11.5 }); });
    [0, 1].forEach(function (i) { b += L(x + i * 208, 26, x + (i + 1) * 208, 26) + L(x + i * 208, 20, x + i * 208, 32) + L(x + (i + 1) * 208, 20, x + (i + 1) * 208, 32) + T(x + 104 + i * 208, 20, 'Frame', { b: true, s: 11.5 }); });
    return svg(540, 170, b + L(60, 68, 60, 106, { d: '4 3', s: MUTED }) + L(112, 68, 476, 106, { d: '4 3', s: MUTED }) +
      R(60, 106, 66, 36, { f: '#bbf7d0', r: 0 }) + R(126, 106, 110, 36, { f: '#fbcfe8', r: 0 }) + R(236, 106, 240, 36, { f: '#e5e7eb', r: 0 }) + T(93, 128, g, { s: 10.5, b: true }) + T(181, 128, 'Header', { s: 11.5, b: true }) + T(356, 128, 'Data', { s: 11.5, b: true }) + T(268, 162, 'one time slot', { s: 11, c: MUTED }));
  }
  F.tdma = { title: 'TDMA frame and slot', svg: tdma('Guard time') };
  F.tdmaBlank = { title: 'TDMA frame and slot with one missing label', svg: tdma('?') };
  F.ofdma = { title: 'OFDM and OFDMA', svg: (function () {
    function grid(x, cells) { var b = ''; cells.forEach(function (c) { b += R(x + c[0] * 20, 30 + c[1] * 17, c[2] * 20, c[3] * 17, { f: COL[c[4] - 1], r: 0 }) + T(x + (c[0] + c[2] / 2) * 20, 30 + (c[1] + c[3] / 2) * 17 + 4, 'U' + c[4], { s: 11, b: true }); }); for (var i = 0; i <= 10; i++) b += L(x + i * 20, 30, x + i * 20, 132, { s: '#cbd5e1', w: 0.8 }); for (var k = 0; k <= 6; k++) b += L(x, 30 + k * 17, x + 200, 30 + k * 17, { s: '#cbd5e1', w: 0.8 }); return b; }
    return svg(540, 176, grid(40, [[0, 0, 2, 6, 1], [2, 0, 3, 6, 2], [5, 0, 2, 6, 3], [7, 0, 2, 6, 4]]) + axes(40, 30, 200, 102, 'OFDM') + grid(310, [[0, 3, 3, 3, 1], [3, 0, 4, 5, 2], [7, 0, 2, 3, 3], [7, 4, 2, 2, 4]]) + axes(310, 30, 200, 102, 'OFDMA'));
  })() };
  F.fdma = { title: 'FDMA', svg: svg(540, 188,
    [0, 1, 2].map(function (i) { var y = 20 + i * 52; return box(6, y, 74, 34, 'User ' + (i + 1), { fs: 11 }) + box(460, y, 74, 34, 'User ' + (i + 1), { fs: 11 }) + L(80, y + 17, 130, y + 17, { arrow: true }) + L(410, y + 17, 458, y + 17, { arrow: true }) + R(174, y + 4, 192, 26, { f: COL[i], r: 0 }) + T(270, y + 21, 'Frequency ' + (i + 1), { s: 11.5 }); }).join('') +
    R(132, 10, 42, 152, { f: SOFT, s: AC }) + R(366, 10, 42, 152, { f: SOFT, s: AC }) + T(153, 178, 'Multiplexing', { s: 10.5, b: true }) + T(387, 178, 'Division', { s: 10.5, b: true })) };

  EC.FIGURES = F;
})(typeof window !== 'undefined' ? window : globalThis);
