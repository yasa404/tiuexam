/* Drawings. EC.FIGURES[name] = { title, svg }.
   Model drawings (question.figure) appear in the answer key and the marked paper.
   Question figures (question.qfig) are printed with the question: tables and diagrams with missing parts.
   Built from small helpers so every figure shares one style. Figures sit on white, so they use fixed (light) colours. */
(function (g) {
  'use strict';
  var EC = g.EC = g.EC || {};
  var INK = '#1f2937', MUTED = '#6b7280', AC = '#6b3fc0', SOFT = '#efe9fb', LINE = '#9aa3af', PALE = '#f3f4f6', WARN = '#b45309', WARNS = '#fdf0dd', GOOD = '#15803d', BAD = '#b91c1c';

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
  function El(cx, cy, rx, ry, o) { o = o || {}; return '<ellipse cx="' + cx + '" cy="' + cy + '" rx="' + rx + '" ry="' + ry + '" fill="' + (o.f || '#fff') + '" stroke="' + (o.s || INK) + '" stroke-width="1.3"/>'; }
  function box(x, y, w, h, label, o) { o = o || {}; return R(x, y, w, h, o) + T(x + w / 2, y + h / 2 + 4, label, { b: o.b !== false, s: o.fs || 12, c: o.c }); }
  function range(n) { return Array.apply(null, Array(n)).map(function (_, i) { return i; }); }
  /* Vertical strip of labelled cells from top to bottom: [[label, height, fill]] */
  function strip(x, y, w, cells) {
    var b = '', yy = y;
    cells.forEach(function (c) { b += R(x, yy, w, c[1], { f: c[2] || '#fff', r: 0 }) + (c[0] ? T(x + w / 2, yy + c[1] / 2 + 4, c[0], { s: 12 }) : ''); yy += c[1]; });
    return b;
  }
  function table(cols, rows, widths) {
    var rh = 26, w = widths.reduce(function (a, c) { return a + c; }, 0), b = '', x = 4;
    cols.forEach(function (c, i) { b += R(x, 4, widths[i], rh, { f: SOFT, r: 0 }) + T(x + widths[i] / 2, 4 + 17, c, { b: true }); x += widths[i]; });
    rows.forEach(function (r, k) { x = 4; r.forEach(function (v, i) { b += R(x, 4 + rh * (k + 1), widths[i], rh, { r: 0 }) + T(x + widths[i] / 2, 4 + rh * (k + 1) + 17, v); x += widths[i]; }); });
    // Keep tables compact: pad to at least 460 wide so they are not blown up on the page.
    return svg(Math.max(460, w + 8), rh * (rows.length + 1) + 8, b);
  }
  /* Queue drawn as a grey box with n yellow items, growing up from the bottom. */
  function vqueue(x, y, w, h, n) {
    return R(x, y, w, h, { f: '#d6d8dc', s: LINE }) + range(n).map(function (i) { return R(x + 8, y + h - 20 * (i + 1) - 2, w - 16, 16, { f: '#ffe66b', s: WARN, r: 2 }); }).join('');
  }

  var F = {};

  /* ---------- Lecture 1 ---------- */
  F.components = { title: 'Computer system components', svg: svg(540, 300,
    [[90, 'User 1'], [200, 'User 2'], [400, 'User n']].map(function (u) { return box(u[0] - 40, 6, 80, 28, u[1], { f: SOFT, s: AC }) + L(u[0], 34, u[0], 76, { arrow: true }); }).join('') + T(300, 25, '…', { s: 16 }) +
    R(20, 78, 500, 132, { f: PALE }) + T(60, 150, 'Software', { b: true, c: MUTED }) +
    box(150, 92, 140, 36, 'System software') + box(330, 92, 160, 36, 'Application software') + L(220, 128, 220, 160, { arrow: true }) + L(410, 128, 410, 160, { arrow: true }) +
    box(130, 162, 370, 34, 'Operating System', { f: SOFT, s: AC }) + L(315, 196, 315, 236, { arrow: true }) +
    R(20, 238, 500, 54, { f: PALE }) + T(62, 270, 'Hardware', { b: true, c: MUTED }) + box(150, 250, 90, 30, 'CPU') + box(265, 250, 90, 30, 'RAM') + box(380, 250, 90, 30, 'I/O')) };

  F.syscall = { title: 'System Call – OS relationship', svg: svg(540, 220,
    El(290, 34, 110, 26, { f: SOFT, s: AC }) + T(290, 38, 'user application', { b: true }) +
    P('M190 46 C165 60 165 80 180 96', { arrow: true }) + P('M400 96 C415 80 415 60 392 46', { arrow: true }) +
    R(120, 98, 340, 36, { f: PALE }) + T(290, 120, 'system call interface', { b: true }) +
    L(10, 116, 120, 116, { s: LINE }) + L(460, 116, 530, 116, { s: LINE }) + T(50, 106, 'user mode', { c: MUTED }) + T(50, 134, 'kernel mode', { c: MUTED }) +
    P('M160 134 L160 182 L214 182', { arrow: true }) + box(218, 162, 150, 40, 'system call implementation', { fs: 10.5, f: '#fff' }) + P('M368 182 L420 182 L420 138', { arrow: true })) };

  F.singleTaskMap = { title: 'Single-Task OS memory map', svg: svg(540, 270,
    strip(190, 8, 160, [['free memory', 54, '#fff'], ['process', 110, PALE], ['command interpreter', 46, SOFT], ['kernel', 40, '#d6d8dc']]) +
    T(370, 246, '← the kernel is never overwritten', { a: 'start', s: 11, c: MUTED }) + T(370, 120, 'one process, one memory space', { a: 'start', s: 11, c: MUTED })) };
  F.multiTaskMap = { title: 'Multi-Task OS memory map', svg: svg(540, 300,
    strip(190, 8, 160, [['process D', 46, PALE], ['free memory', 38, '#fff'], ['process C', 58, PALE], ['interpreter', 38, SOFT], ['process B', 62, PALE], ['kernel', 40, '#d6d8dc']]) +
    T(360, 150, 'each process has its own', { a: 'start', s: 10.5, c: MUTED }) + T(360, 164, 'memory space', { a: 'start', s: 10.5, c: MUTED })) };

  function startupFig(labels) {
    return svg(540, 52 * labels.length, labels.map(function (t, i) {
      var y = 4 + i * 52;
      return box(140, y, 260, 34, t, { f: /^\d$/.test(t) ? '#fff' : SOFT, s: AC }) + (i < labels.length - 1 ? L(270, y + 34, 270, y + 50, { arrow: true, s: AC, w: 2 }) : '');
    }).join(''));
  }
  F.startup = { title: 'Computer startup operation', svg: startupFig(['BIOS checks hardware', 'BIOS loads MBR', 'MBR loads boot loader', 'Boot loader displays OS options to user', 'Boot loader loads selected OS']) };
  F.startupBlank = { title: 'Computer startup operation with three missing steps', svg: startupFig(['BIOS checks Hardware', '1', '2', 'Boot loader Displays OS options to user', '3']) };

  /* ---------- Lecture 2 ---------- */
  F.processMemory = { title: 'A process in memory', svg: svg(540, 290,
    strip(190, 12, 150, [['stack', 46, PALE], ['', 104, '#fff'], ['heap', 40, PALE], ['data', 40, PALE], ['text', 40, PALE]]) +
    L(265, 58, 265, 88, { arrow: true }) + L(265, 162, 265, 132, { arrow: true }) + T(178, 22, 'max', { a: 'end', c: MUTED }) + T(178, 280, '0', { a: 'end', c: MUTED }) +
    [[35, 'temporary data'], [182, 'dynamic memory'], [222, 'global variables'], [262, 'code']].map(function (r) { return L(398, r[0], 346, r[0], { arrow: true, s: AC }) + T(404, r[0] + 4, r[1], { a: 'start', s: 11 }); }).join('')) };

  function states(names) {
    var b = '';
    b += El(70, 36, 56, 24, { f: SOFT, s: AC }) + T(70, 40, names[0], { b: true }) + El(470, 36, 60, 24, { f: SOFT, s: AC }) + T(470, 40, names[4], { b: true });
    b += El(185, 118, 58, 26, { f: SOFT, s: AC }) + T(185, 122, names[1], { b: true }) + El(355, 118, 58, 26, { f: SOFT, s: AC }) + T(355, 122, names[2], { b: true });
    b += El(270, 214, 58, 24, { f: SOFT, s: AC }) + T(270, 218, names[3], { b: true });
    b += P('M124 42 C160 48 176 66 182 90', { arrow: true }) + T(150, 34, 'admitted', { a: 'start', s: 10.5 });
    b += P('M380 94 C390 66 404 50 410 44', { arrow: true }) + T(372, 46, 'exit', { s: 10.5 });
    b += P('M330 94 C300 66 240 66 212 93', { arrow: true }) + T(271, 64, 'interrupt', { s: 10.5 });
    b += P('M222 138 C250 158 290 158 318 139', { arrow: true }) + T(270, 170, 'scheduler dispatch', { s: 10.5 });
    b += P('M372 143 C372 180 350 206 330 212', { arrow: true }) + T(380, 190, 'I/O or event wait', { a: 'start', s: 10.5 });
    b += P('M212 214 C190 206 172 182 174 146', { arrow: true }) + T(160, 190, 'I/O or event completion', { a: 'end', s: 10.5 });
    return svg(540, 244, b);
  }
  F.processStates = { title: 'Process states', svg: states(['new', 'ready', 'running', 'waiting', 'terminated']) };
  F.statesBlank = { title: 'Process states with two missing labels', svg: states(['new', '1', '2', 'waiting', 'terminated']) };

  F.schedQueues = { title: 'Process scheduling queues', svg: svg(540, 220,
    box(10, 70, 90, 46, 'Job queue', { f: SOFT, s: AC }) + box(180, 70, 110, 46, 'Ready queue', { f: SOFT, s: AC }) + El(400, 93, 42, 28, { f: SOFT, s: AC }) + T(400, 97, 'CPU', { b: true }) +
    L(100, 93, 178, 93, { arrow: true }) + L(290, 93, 356, 93, { arrow: true }) + L(442, 93, 528, 93, { arrow: true }) + T(484, 84, 'Exit', { s: 11 }) +
    P('M400 65 L400 24 L150 24 L150 82 L178 82', { arrow: true, d: '6 4' }) +
    P('M400 121 L400 184 L362 184', { arrow: true }) + box(240, 162, 120, 44, 'I/O waiting queue', { f: PALE, fs: 11 }) + L(240, 184, 172, 184, { arrow: true }) + box(96, 162, 74, 44, 'I/O', { f: PALE }) +
    P('M133 162 L133 106 L178 106', { arrow: true })) };

  F.ipc = { title: 'Inter-process communication models', svg: svg(540, 300,
    T(140, 16, '(a) Message passing', { b: true }) + strip(60, 26, 160, [['process A', 44, SOFT], ['process B', 44, SOFT], ['', 70, '#fff'], ['message queue', 28, PALE]]) +
    ['m0', 'm1', 'm2', 'm3', '…', 'mn'].map(function (m, i) { return R(60 + i * 160 / 6, 212, 160 / 6, 26, { r: 0 }) + T(60 + (i + .5) * 160 / 6, 229, m, { s: 10.5 }); }).join('') + strip(60, 238, 160, [['kernel', 40, '#d6d8dc']]) +
    P('M220 48 L244 48 L244 225 L224 225', { arrow: true, s: AC }) + P('M60 92 L36 92 L36 225 L56 225', { arrow: true, s: AC }) +
    T(410, 16, '(b) Shared memory', { b: true }) + strip(330, 26, 160, [['process A', 44, SOFT], ['shared memory', 30, WARNS], ['process B', 44, SOFT], ['', 94, '#fff'], ['kernel', 40, '#d6d8dc']]) +
    P('M330 46 L306 46 L306 85 L326 85', { arrow: true, s: AC }) + P('M490 122 L514 122 L514 85 L494 85', { arrow: true, s: AC })) };

  F.threadServer = { title: 'Multithreaded server architecture', svg: svg(540, 230,
    box(10, 50, 90, 40, 'client', { f: SOFT, s: AC }) + box(220, 50, 100, 40, 'server', { f: SOFT, s: AC }) + box(440, 50, 90, 40, 'thread', { f: SOFT, s: AC }) +
    L(100, 70, 218, 70, { arrow: true }) + T(158, 60, '(1) request', { s: 11 }) + L(320, 70, 438, 70, { arrow: true }) + T(380, 24, '(2) create new thread', { s: 11 }) + T(380, 40, 'to service the request', { s: 11 }) +
    P('M290 90 C300 150 235 150 248 94', { arrow: true }) + T(200, 160, '(3) resume listening for', { s: 11 }) + T(200, 175, 'additional client requests', { s: 11 }) +
    [110, 152, 194].map(function (y) { return L(316, 90, 436, y + 13, { arrow: true }) + box(440, y, 90, 28, 'thread', { f: PALE, b: false }); }).join('')) };

  function tasks(x, y, names) { return names.map(function (n, i) { return R(x + i * 42, y, 42, 30, { f: n === 'T1' ? SOFT : PALE, r: 0 }) + T(x + i * 42 + 21, y + 19, n, { s: 11 }); }).join(''); }
  F.concurrency = { title: 'Concurrency (single core) and parallelism (two cores)', svg: svg(540, 230,
    T(10, 16, 'Concurrency', { a: 'start', b: true, c: AC }) + T(84, 48, 'single core', { a: 'end', s: 11 }) + tasks(94, 28, ['T1', 'T2', 'T3', 'T4', 'T1', 'T2', 'T3', 'T4', 'T1', '…']) + L(94, 74, 514, 74, { arrow: true, s: LINE }) + T(300, 90, 'time', { s: 11, c: MUTED }) +
    T(10, 122, 'Parallelism', { a: 'start', b: true, c: AC }) + T(84, 152, 'core 1', { a: 'end', s: 11 }) + tasks(94, 132, ['T1', 'T3', 'T1', 'T3', 'T1', '…']) + T(84, 192, 'core 2', { a: 'end', s: 11 }) + tasks(94, 172, ['T2', 'T4', 'T2', 'T4', 'T2', '…']) + L(94, 212, 400, 212, { arrow: true, s: LINE }) + T(246, 226, 'time', { s: 11, c: MUTED })) };

  /* ---------- Lecture 3 ---------- */
  F.bankTable = { title: 'Processes table', svg: table(['Process', 'Burst Time', 'Priority'], [['P1', 10, 4], ['P2', 4, 7], ['P3', 7, 2], ['P4', 18, 6], ['P5', 5, 5], ['P6', 4, 8], ['P7', 9, 1], ['P8', 13, 3]], [80, 100, 90]) };
  F.prioTable = { title: 'Processes table', svg: table(['Process', 'Burst Time', 'Priority'], [['P1', 10, 3], ['P2', 1, 1], ['P3', 2, 4], ['P4', 1, 5], ['P5', 5, 2]], [80, 100, 90]) };
  F.table4 = { title: 'Processes table', svg: table(['Process', 'Burst Time'], [['P1', 5], ['P2', 3], ['P3', 8], ['P4', 2]], [80, 100]) };
  F.table5 = { title: 'Processes table', svg: table(['Process', 'Burst Time', 'Priority'], [['P1', 6, 2], ['P2', 4, 4], ['P3', 2, 1], ['P4', 3, 5], ['P5', 1, 3]], [80, 100, 90]) };
  F.table4b = { title: 'Processes table', svg: table(['Process', 'Burst Time'], [['P1', 12], ['P2', 3], ['P3', 9], ['P4', 5]], [80, 100]) };

  F.multilevelQueue = { title: 'Multilevel queue scheduling', svg: (function () {
    var b = L(112, 262, 112, 26, { arrow: true, d: '5 4' }) + T(112, 14, 'High priority', { s: 10.5, i: true }) + T(112, 280, 'Low priority', { s: 10.5, i: true });
    ['Real-time', 'System', 'Interactive', 'Batch'].forEach(function (n, k) {
      var y = 24 + k * 64;
      b += T(96, y + 24, n, { a: 'end', b: true }) + R(160, y, 230, 40, { f: PALE });
      range(4).forEach(function (i) { b += '<circle cx="' + (190 + i * 55) + '" cy="' + (y + 20) + '" r="15" fill="' + SOFT + '" stroke="' + AC + '"/>' + T(190 + i * 55, y + 24, 'P', { s: 11, b: true }) + (i < 3 ? L(205 + i * 55, y + 20, 228 + i * 55, y + 20, { arrow: true, w: 1.3 }) : ''); });
      b += L(125, y + 20, 158, y + 20, { arrow: true }) + L(390, y + 20, 448, y + 20, { arrow: true }) + box(450, y + 2, 64, 36, 'CPU', { f: '#fff' }) + P('M482 ' + (y + 38) + ' L482 ' + (y + 50) + ' L145 ' + (y + 50) + ' L145 ' + (y + 24), { arrow: true, w: 1.2, s: MUTED }) + T(330, y + 60, 'preempted', { s: 9.5, i: true, c: MUTED });
    });
    return svg(540, 290, b);
  })() };

  F.singleScheduler = { title: 'Asymmetrical scheduling: single scheduler', svg: svg(540, 180,
    R(200, 8, 140, 56, { f: WARNS, s: WARN }) + T(270, 32, 'CPU 3', { b: true }) + T(270, 50, 'Single Scheduler', { s: 11 }) +
    [90, 270, 450].map(function (x, i) { return L(270, 64, x, 126, { arrow: true, s: WARN }) + box(x - 55, 128, 110, 38, 'CPU ' + i, { f: SOFT, s: AC }); }).join('')) };
  F.globalQueue = { title: 'Symmetrical scheduling: global queue', svg: svg(540, 190,
    T(270, 16, 'Queue is locked', { b: true, c: GOOD }) + R(40, 26, 460, 44, { f: '#d6d8dc', s: LINE }) + range(4).map(function (i) { return box(54 + i * 112, 33, 98, 30, 'P' + (i + 1), { f: '#ffe66b', s: WARN }); }).join('') +
    L(100, 64, 88, 112, { arrow: true, s: GOOD, w: 2 }) + range(4).map(function (i) { return box(40 + i * 122, 114, 94, 36, 'CPU ' + i, { f: i ? PALE : '#dcf3e2', s: i ? LINE : GOOD }); }).join('') + T(270, 176, 'Only one CPU at a time uses the queue; others wait.', { s: 11.5 })) };
  F.perCpu = { title: 'Symmetrical scheduling: per CPU queues', svg: svg(540, 220,
    [4, 2, 5, 1].map(function (n, i) { return vqueue(45 + i * 122, 8, 84, 112, n) + box(40 + i * 122, 130, 94, 34, 'CPU ' + i, { f: SOFT, s: AC }); }).join('') +
    T(331, 188, 'CPU 2: very busy', { c: BAD, s: 11.5 }) + T(453, 188, 'CPU 3: almost idle', { c: BAD, s: 11 }) + T(270, 212, 'Each CPU has its own private ready queue → load imbalance', { s: 11, c: MUTED })) };
  F.hybrid = { title: 'Symmetrical scheduling: hybrid approach', svg: svg(540, 240,
    T(270, 14, 'Global queue (shared)', { b: true }) + R(30, 22, 480, 44, { f: '#d6d8dc', s: LINE }) + range(8).map(function (i) { return R(40 + i * 59, 30, 50, 28, { f: '#ffe66b', s: WARN, r: 2 }); }).join('') +
    [3, 3, 2, 3].map(function (n, i) { var x = 38 + i * 122; return L(x + 48, 66, x + 48, 104, { arrow: true, s: AC, w: 2 }) + R(x, 106, 96, 46, { f: '#d6d8dc', s: LINE }) + range(n).map(function (k) { return R(x + 6 + k * 30, 112, 24, 34, { f: '#ffe66b', s: WARN, r: 2 }); }).join('') + L(x + 48, 152, x + 48, 184, { arrow: true }) + box(x + 6, 186, 84, 34, 'CPU ' + i, { f: SOFT, s: AC }); }).join('') + T(270, 236, 'a local queue for each CPU', { s: 10.5, c: MUTED })) };
  F.multiprocTable = { title: 'Summary of multiprocessor scheduling', svg: (function () {
    var rows = [['Single scheduler', 1, 0, 1], ['Global queue', 1, 2, 1], ['Per CPU queues', 1, 1, 0], ['Hybrid', 0, 1, 1]], ws = [170, 110, 130, 130], b = '', x = 0;
    ['Scheme', 'Simple?', 'Scalable?', 'Balanced load?'].forEach(function (h, i) { b += R(x, 2, ws[i], 30, { f: AC, r: 0 }) + T(x + ws[i] / 2, 22, h, { b: true, c: '#fff' }); x += ws[i]; });
    rows.forEach(function (r, k) { x = 0; r.forEach(function (v, i) { var y = 32 + k * 32; b += R(x, y, ws[i], 32, { f: i ? '#fff' : SOFT, r: 0 }) + (i ? T(x + ws[i] / 2, y + 21, v === 1 ? '✔' : v === 2 ? '✘ (locking)' : '✘', { c: v === 1 ? GOOD : BAD, b: true, s: 13 }) : T(x + 10, y + 21, v, { a: 'start', b: true })); x += ws[i]; }); });
    return svg(540, 164, b);
  })() };
  F.pushPull = { title: 'Push and pull migration', svg: svg(540, 230,
    T(130, 14, 'Push migration', { b: true, c: AC }) + box(50, 22, 160, 30, 'Monitor task', { f: SOFT, s: AC }) + L(70, 52, 70, 76, { arrow: true, d: '4 3' }) + L(190, 52, 190, 76, { arrow: true, d: '4 3' }) +
    vqueue(33, 78, 66, 94, 4) + vqueue(161, 78, 66, 94, 1) + L(101, 120, 159, 120, { arrow: true, s: WARN, w: 2.4 }) + T(130, 112, 'push', { s: 11, c: WARN, b: true }) + box(26, 178, 80, 30, 'Busy CPU', { f: PALE, fs: 11 }) + box(154, 178, 80, 30, 'Idle CPU', { f: PALE, fs: 11 }) +
    L(270, 10, 270, 215, { s: '#e5e7eb', w: 1 }) + T(410, 14, 'Pull migration', { b: true, c: AC }) + vqueue(320, 78, 66, 94, 4) + vqueue(434, 78, 66, 94, 1) + L(388, 120, 430, 120, { arrow: true, s: GOOD, w: 2.4 }) + T(409, 112, 'pull', { s: 11, c: GOOD, b: true }) + box(313, 178, 80, 30, 'Busy CPU', { f: PALE, fs: 11 }) + box(427, 178, 80, 30, 'Idle CPU', { f: PALE, fs: 11 }) +
    T(130, 226, 'a special task pushes work', { s: 10.5, c: MUTED }) + T(410, 226, 'the idle CPU itself pulls a waiting task', { s: 10.5, c: MUTED })) };

  /* ---------- Lecture 4 ---------- */
  F.partitionTable = { title: 'Partition table', svg: table(['Memory Address', 'Size', 'Process', 'Usage'], [['0x0', '120k', '4', 'In use'], ['120k', '60k', '1', 'In use'], ['180k', '30k', '', 'Free']], [130, 80, 90, 90]) };
  function bar(x, y, h, parts) { var b = ''; parts.forEach(function (p) { b += R(x, y, p[0], h, { f: p[1] ? '#fff' : SOFT, s: INK, r: 0, d: p[1] ? '4 3' : '' }) + T(x + p[0] / 2, y + h / 2 + 4, p[2] || (p[1] ? 'free' : 'used'), { s: 10, c: p[1] ? BAD : INK }); x += p[0]; }); return b; }
  F.fragmentation = { title: 'External fragmentation, internal fragmentation and compaction', svg: svg(540, 330,
    T(10, 16, 'External fragmentation', { a: 'start', b: true, c: AC }) + bar(10, 24, 32, [[60, 1, '8K'], [60, 0], [70, 1, '12K'], [50, 0], [90, 1, '22K'], [60, 0], [60, 1, '8K'], [70, 0]]) + box(10, 64, 150, 24, 'Request: 40K', { f: WARNS, s: WARN, fs: 11 }) + T(170, 80, 'total free = 50K, but it is not contiguous', { a: 'start', s: 11 }) +
    T(10, 120, 'Internal fragmentation', { a: 'start', b: true, c: AC }) + bar(10, 128, 34, [[130, 0, 'Program A 4 MB'], [98, 0, 'Program B 3 MB'], [32, 1, '1 MB'], [65, 0, 'C 2 MB'], [65, 1, '2 MB'], [130, 1, 'free partition']]) + T(10, 180, 'fixed partitions of 4 MB: the unused space inside a partition is wasted', { a: 'start', s: 11 }) +
    T(10, 214, 'Compaction: before', { a: 'start', b: true, c: AC }) + bar(10, 222, 30, [[80, 0], [30, 1], [130, 0], [40, 1], [90, 0], [30, 1], [100, 0], [20, 1]]) + T(10, 278, 'Compaction: after (all free memory in one large block)', { a: 'start', b: true, c: AC }) + bar(10, 286, 30, [[80, 0], [130, 0], [90, 0], [100, 0], [120, 1]])) };

  F.swapping = { title: 'Schematic view of swapping', svg: svg(540, 230,
    strip(20, 10, 130, [['operating system', 60, SOFT], ['user space', 126, PALE]]) + T(85, 216, 'main memory', { b: true, s: 11 }) +
    P('M360 30 L360 180 C360 204 520 204 520 180 L520 30', { f: SOFT, s: AC }) + El(440, 30, 80, 16, { f: '#fff', s: AC }) + box(380, 62, 80, 44, 'process P1', { f: '#fff', fs: 11 }) + box(425, 128, 80, 44, 'process P2', { f: '#fff', fs: 11 }) + T(440, 222, 'backing store', { b: true, s: 11 }) +
    L(152, 90, 376, 90, { arrow: true, w: 2.2 }) + T(255, 82, '1  swap out', { b: true, c: AC }) + L(422, 152, 154, 152, { arrow: true, w: 2.2 }) + T(255, 144, '2  swap in', { b: true, c: AC })) };

  function paging(showMap) {
    var pt = [1, 4, 3, 7], phys = {}; pt.forEach(function (f, p) { phys[f] = 'page ' + p; });
    var b = strip(20, 30, 110, range(4).map(function (i) { return ['page ' + i, 34, PALE]; })) + T(75, 186, 'logical memory', { s: 11, b: true });
    b += range(4).map(function (i) { return T(218, 52 + i * 34, String(i), { a: 'end', c: MUTED }) + R(228, 30 + i * 34, 46, 34, { f: SOFT, r: 0 }) + T(251, 52 + i * 34, String(pt[i]), { b: true }); }).join('') + T(251, 186, 'page table', { s: 11, b: true });
    b += T(372, 18, 'frame number', { s: 10.5, c: MUTED }) + range(8).map(function (i) { return T(386, 44 + i * 30, String(i), { a: 'end', c: MUTED }) + R(396, 26 + i * 30, 120, 30, { f: phys[i] ? PALE : '#fff', r: 0 }) + (phys[i] && showMap ? T(456, 45 + i * 30, phys[i], { s: 12 }) : ''); }).join('') + T(456, 282, 'physical memory', { s: 11, b: true });
    return svg(540, 290, b);
  }
  F.basicPaging = { title: 'Basic paging', svg: paging(true) };
  F.pagingQ = { title: 'Logical memory, page table and physical memory', svg: paging(false) };

  F.sharedPages = { title: 'Shared pages: the editor code (ed 1, ed 2, ed 3) is shared by P1, P2 and P3', svg: (function () {
    var b = '', phys = { 1: 'data 1', 2: 'data 3', 3: 'ed 1', 4: 'ed 2', 6: 'ed 3', 7: 'data 2' };
    [[10, 24, 'P1', 'data 1', 1], [200, 24, 'P2', 'data 2', 7], [10, 178, 'P3', 'data 3', 2]].forEach(function (p) {
      b += T(p[0] + 42, p[1] - 8, 'process ' + p[2], { b: true, s: 11 }) + strip(p[0], p[1], 84, ['ed 1', 'ed 2', 'ed 3', p[3]].map(function (n, i) { return [n, 26, i < 3 ? SOFT : PALE]; }));
      b += T(p[0] + 126, p[1] - 8, 'page table', { s: 10.5 }) + strip(p[0] + 108, p[1], 36, [3, 4, 6, p[4]].map(function (n) { return [String(n), 26, '#fff']; }));
    });
    b += range(12).map(function (i) { return T(412, 34 + i * 24, String(i), { a: 'end', c: MUTED, s: 11 }) + R(420, 18 + i * 24, 110, 24, { f: /ed/.test(phys[i] || '') ? SOFT : phys[i] ? PALE : '#fff', r: 0 }) + (phys[i] ? T(475, 34 + i * 24, phys[i], { s: 11 }) : ''); }).join('') + T(475, 12, 'physical memory', { s: 10.5, b: true });
    return svg(540, 312, b);
  })() };

  /* Two processes with unknown page tables (Application & Analysis Q3 and Q4). */
  function sharedQ(code, frames, n) {
    var k = code.length + 1, rh = 22, b = '';
    ['P1', 'P2'].forEach(function (p, j) {
      var y = 30 + j * (k * rh + 34);
      b += T(86, y - 8, 'Process ' + p, { b: true, s: 11 }) + T(226, y - 8, 'Page table for ' + p, { s: 11 });
      code.concat(['data ' + (j + 1)]).forEach(function (c, i) {
        b += T(36, y + 15 + i * rh, String(i), { a: 'end', s: 11 }) + R(44, y + i * rh, 84, rh, { f: i < code.length ? '#cfe8f5' : '#dcdcdc', r: 0 }) + T(86, y + 15 + i * rh, c, { s: 11 });
        b += T(204, y + 15 + i * rh, String(i), { a: 'end', s: 11 }) + R(212, y + i * rh, 30, rh, { r: 0 }) + T(227, y + 15 + i * rh, '?', { s: 11 });
      });
    });
    b += T(425, 12, 'Physical memory (frame numbers)', { b: true, s: 11 }) + range(n).map(function (i) { var f = frames[i]; return T(372, 36 + i * rh, String(i), { a: 'end', s: 11 }) + R(380, 21 + i * rh, 90, rh, { f: f ? (/data/.test(f) ? '#dcdcdc' : '#cfe8f5') : '#fff', r: 0 }) + (f ? T(425, 36 + i * rh, f, { s: 11 }) : ''); }).join('');
    return svg(540, Math.max(30 + 2 * k * rh + 44, 30 + n * rh), b);
  }
  F.sharedQ3 = { title: 'Processes P1 and P2 with unknown page tables, and the physical memory', svg: sharedQ(['ed 1', 'ed 2'], { 0: 'data 1', 2: 'ed 2', 5: 'ed 1', 6: 'data 2' }, 8) };
  F.sharedQ4 = { title: 'Processes P1 and P2 with unknown page tables, and the physical memory', svg: sharedQ(['comp 1', 'comp 2', 'comp 3'], { 1: 'comp 2', 2: 'data 2', 4: 'comp 3', 7: 'comp 1', 9: 'data 1' }, 10) };

  F.virtualMemory = { title: 'The general layout of virtual memory', svg: svg(540, 270,
    strip(14, 14, 84, [['page 0', 28, PALE], ['page 1', 28, PALE], ['page 2', 28, PALE], ['⋮', 100, '#fff'], ['page v', 28, PALE]]) + T(56, 244, 'virtual memory', { s: 11, b: true }) +
    L(98, 56, 158, 104, { arrow: true, s: AC, w: 2 }) + T(136, 66, 'logical address', { s: 10, a: 'start' }) + strip(162, 84, 70, range(6).map(function (i) { return ['', 18, i % 2 ? '#fff' : PALE]; })) + T(197, 210, 'MMU', { b: true }) +
    L(232, 112, 296, 78, { arrow: true, s: AC, w: 2 }) + T(212, 46, 'physical address', { s: 10, a: 'start' }) + strip(300, 24, 74, range(9).map(function (i) { return ['', 21, i % 2 ? PALE : SOFT]; })) + T(337, 232, 'physical memory', { s: 11, b: true }) +
    P('M424 46 L424 190 C424 210 530 210 530 190 L530 46', { f: SOFT, s: AC }) + El(477, 46, 53, 12, { f: '#fff', s: AC }) + [80, 112, 144].map(function (y) { return [438, 468, 498].map(function (x) { return R(x, y, 18, 18, { f: '#fff', s: AC, r: 1 }); }).join(''); }).join('') + T(477, 232, 'backing store', { s: 11, b: true }) +
    L(374, 66, 420, 66, { arrow: true, s: AC, w: 2 }) + L(422, 104, 378, 90, { arrow: true, s: AC, w: 2 }) + P('M232 160 L300 182 L420 182', { arrow: true, s: AC, w: 2 })) };

  EC.FIGURES = F;
})(typeof window !== 'undefined' ? window : globalThis);
