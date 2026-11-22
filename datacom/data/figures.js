/* Model drawings for the "draw" questions (Sections D and E), shown in the answer key and the marked paper.
   EC.FIGURES[name] = { title, svg }. Built from small helpers so every figure shares one style.
   Figures sit on the white exam paper, so they use fixed (light) colours. */
(function (g) {
  'use strict';
  var EC = g.EC = g.EC || {};
  var INK = '#1f2937', MUTED = '#6b7280', AC = '#0f7c78', SOFT = '#e3f2f0', LINE = '#9aa3af', PALE = '#f3f4f6', WARN = '#b45309';

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
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="' + (o.r == null ? 5 : o.r) + '" fill="' + (o.f || '#fff') + '" stroke="' + (o.s || INK) + '" stroke-width="' + (o.w || 1.4) + '"' + (o.d ? ' stroke-dasharray="' + o.d + '"' : '') + '/>';
  }
  function L(x1, y1, x2, y2, o) {
    o = o || {};
    return '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="' + (o.s || INK) + '" stroke-width="' + (o.w || 1.6) + '"' +
      (o.d ? ' stroke-dasharray="' + o.d + '"' : '') + (o.arrow ? ' marker-end="url(#ecfig-ah)"' : '') + (o.both ? ' marker-start="url(#ecfig-ah)"' : '') + '/>';
  }
  function C(cx, cy, r, o) {
    o = o || {};
    return '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="' + (o.f || '#fff') + '" stroke="' + (o.s || INK) + '" stroke-width="' + (o.w || 1.4) + '"' + (o.d ? ' stroke-dasharray="' + o.d + '"' : '') + '/>';
  }
  function P(d, o) {
    o = o || {};
    return '<path d="' + d + '" fill="' + (o.f || 'none') + '" stroke="' + (o.s || INK) + '" stroke-width="' + (o.w || 1.6) + '"' + (o.d ? ' stroke-dasharray="' + o.d + '"' : '') + (o.arrow ? ' marker-end="url(#ecfig-ah)"' : '') + '/>';
  }
  function node(x, y, label, o) { o = o || {}; return R(x - (o.w || 26), y - 13, (o.w || 26) * 2, 26, { f: o.f || PALE }) + T(x, y + 4, label, { s: o.s || 11, b: true }); }
  function poly(pts) { return pts.map(function (p, i) { return (i ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1); }).join(''); }

  var F = {};

  /* ---------- Week 2 ---------- */
  F.dataflow = { title: 'The three data flow modes', svg: svg(540, 205,
    T(10, 18, 'Mode', { a: 'start', b: true, c: MUTED, s: 11 }) + T(475, 18, 'Example', { b: true, c: MUTED, s: 11 }) +
    // simplex
    T(10, 56, 'Simplex', { a: 'start', b: true }) + node(140, 52, 'A') + node(360, 52, 'B') +
    L(168, 52, 332, 52, { arrow: true, s: AC, w: 2 }) + T(250, 44, 'one way only', { s: 11, c: AC }) + T(475, 56, 'TV / radio broadcast', { s: 11 }) +
    // half-duplex
    T(10, 112, 'Half-duplex', { a: 'start', b: true }) + node(140, 108, 'A') + node(360, 108, 'B') +
    L(168, 101, 332, 101, { arrow: true, s: AC, w: 2 }) + L(332, 116, 168, 116, { arrow: true, s: AC, w: 2, d: '5 4' }) +
    T(250, 95, 'time 1: A → B', { s: 10.5, c: AC }) + T(250, 130, 'time 2: B → A (take turns)', { s: 10.5, c: AC }) + T(475, 112, 'walkie-talkie', { s: 11 }) +
    // full-duplex
    T(10, 176, 'Full-duplex', { a: 'start', b: true }) + node(140, 172, 'A') + node(360, 172, 'B') +
    L(168, 165, 332, 165, { arrow: true, s: AC, w: 2 }) + L(332, 180, 168, 180, { arrow: true, s: AC, w: 2 }) +
    T(250, 196, 'both directions at the same time', { s: 10.5, c: AC }) + T(475, 176, 'phone call', { s: 11 })) };

  F.topologies = { title: 'The four physical topologies', svg: (function () {
    var b = '';
    // mesh (cell 0,0)
    var m = [[70, 40], [200, 40], [200, 110], [70, 110]];
    for (var i = 0; i < 4; i++) for (var j = i + 1; j < 4; j++) b += L(m[i][0], m[i][1], m[j][0], m[j][1], { s: AC, w: 1.4 });
    m.forEach(function (p, k) { b += node(p[0], p[1], 'PC' + (k + 1), { w: 18, s: 10 }); });
    b += T(135, 142, 'Mesh: every node to every node, n(n−1)/2 links', { s: 10.5 });
    // star (cell 1,0)
    var cx = 405, cy = 75, s = [[335, 35], [475, 35], [475, 115], [335, 115]];
    s.forEach(function (p) { b += L(cx, cy, p[0], p[1], { s: AC, w: 1.4 }); });
    b += R(cx - 30, cy - 13, 60, 26, { f: SOFT, s: AC }) + T(cx, cy + 4, 'Switch/Hub', { s: 10, b: true });
    s.forEach(function (p, k) { b += node(p[0], p[1], 'PC' + (k + 1), { w: 18, s: 10 }); });
    b += T(405, 142, 'Star: one link per node to a central controller', { s: 10.5 });
    // bus (cell 0,1)
    var y = 230;
    b += L(30, y, 240, y, { w: 3 }) + R(22, y - 9, 8, 18, { f: WARN, s: WARN, r: 1 }) + R(240, y - 9, 8, 18, { f: WARN, s: WARN, r: 1 });
    [70, 135, 200].forEach(function (x, k) { b += L(x, y, x, y - 40, { s: AC }) + C(x, y, 3.5, { f: AC, s: AC }) + node(x, y - 52, 'PC' + (k + 1), { w: 18, s: 10 }); });
    b += T(135, 258, 'tap', { s: 10, c: MUTED }) + T(26, 254, 'terminator', { s: 9.5, c: WARN, a: 'start' });
    b += T(135, 282, 'Bus: one backbone, drop lines, taps, terminators', { s: 10.5 });
    // ring (cell 1,1)
    b += C(405, 222, 46, { f: 'none', s: AC, w: 1.6 }) + P('M 451 214 A 46 46 0 0 1 451 230', { s: AC, w: 2, arrow: true });
    [[405, 176], [451, 222], [405, 268], [359, 222]].forEach(function (p, k) { b += node(p[0], p[1], 'PC' + (k + 1), { w: 18, s: 10 }); });
    b += T(405, 296, 'Ring: two neighbours each, token passing, one direction', { s: 10.5 });
    b += L(270, 10, 270, 300, { s: '#e5e7eb', w: 1 }) + L(10, 155, 530, 155, { s: '#e5e7eb', w: 1 });
    return svg(540, 305, b);
  })() };

  F.connections = { title: 'Point-to-point vs multipoint connections', svg: svg(540, 176,
    node(45, 70, 'Station', { w: 32 }) + node(215, 70, 'Station', { w: 32 }) + L(77, 70, 183, 70, { w: 3, s: AC }) + T(130, 60, 'one dedicated link', { s: 10.5, c: AC }) +
    T(130, 125, 'Point-to-point: only two devices,', { s: 11, b: true }) + T(130, 141, 'single transmitter and receiver', { s: 11 }) +
    L(270, 10, 270, 160, { s: '#e5e7eb', w: 1 }) +
    node(320, 90, 'Mainframe', { w: 38 }) + L(358, 90, 530, 90, { w: 3, s: AC }) +
    [400, 450, 505].map(function (x, k) { var up = k % 2 === 0; return L(x, 90, x, up ? 62 : 118, { s: AC }) + C(x, 90, 3.5, { f: AC, s: AC }) + node(x, up ? 50 : 130, 'Station', { w: 26, s: 10 }); }).join('') +
    T(405, 154, 'Multipoint: more than two devices share one link', { s: 10.5, b: true }) + T(405, 168, '(space share or time share)', { s: 10.5 })) };

  F.components = { title: 'The five components of data communication', svg: svg(540, 200,
    R(20, 85, 110, 46, { f: PALE }) + T(75, 113, 'Sender', { b: true }) + T(75, 150, '1 · Sender', { s: 10.5 }) + T(75, 164, '(PC, server, camera)', { s: 10, c: MUTED }) +
    R(410, 85, 110, 46, { f: PALE }) + T(465, 113, 'Receiver', { b: true }) + T(465, 150, '2 · Receiver', { s: 10.5 }) +
    L(130, 108, 410, 108, { w: 4, s: LINE }) + T(270, 128, '3 · Transmission medium (cable, fiber, radio)', { s: 10.5 }) +
    R(240, 72, 60, 26, { f: SOFT, s: AC }) + T(270, 90, '✉ M', { b: true, c: AC }) + L(305, 85, 360, 85, { arrow: true, s: AC, w: 2 }) + T(270, 64, '4 · Message (text, image, audio)', { s: 10.5 }) +
    R(25, 22, 100, 30, { f: SOFT, s: AC }) + T(75, 41, '5 · Protocol', { s: 11, b: true, c: AC }) + L(75, 52, 75, 85, { s: AC, d: '4 3' }) +
    R(415, 22, 100, 30, { f: SOFT, s: AC }) + T(465, 41, 'Protocol', { s: 11, b: true, c: AC }) + L(465, 52, 465, 85, { s: AC, d: '4 3' }) +
    T(270, 36, 'same rules on both sides', { s: 10.5, c: AC, i: true }) +
    T(270, 192, 'Effective when: Delivery · Accuracy · Timeliness · low Jitter', { s: 11, b: true })) };

  /* ---------- Week 3 ---------- */
  F.osiTcpip = { title: 'OSI (7 layers) mapped to TCP/IP (4 layers), with PDU names', svg: (function () {
    var osi = ['7 Application', '6 Presentation', '5 Session', '4 Transport', '3 Network', '2 Data Link', '1 Physical'];
    var y0 = 34, h = 34, gap = 4, b = '';
    b += T(95, 20, 'OSI model', { b: true }) + T(270, 20, 'PDU', { b: true, c: MUTED }) + T(445, 20, 'TCP/IP model', { b: true });
    osi.forEach(function (n, i) { var y = y0 + i * (h + gap); b += R(10, y, 170, h, { f: i < 3 ? PALE : '#fff' }) + T(95, y + 21, n, { s: 11.5, b: true }); });
    function span(from, to) { return [y0 + from * (h + gap), (to - from + 1) * h + (to - from) * gap]; }
    [[0, 2, 'Application', 'HTTP, DNS, SMTP, FTP', 'Data / Message'], [3, 3, 'Transport', 'TCP, UDP, ports', 'Segment / Datagram'],
     [4, 4, 'Internet', 'IP, ICMP, routing', 'Packet'], [5, 6, 'Network Access', 'Ethernet, Wi-Fi, MAC', 'Frame → Bits']].forEach(function (r) {
      var s = span(r[0], r[1]);
      b += R(360, s[0], 170, s[1], { f: SOFT, s: AC }) + T(445, s[0] + s[1] / 2 - 2, r[2], { b: true, c: AC }) + T(445, s[0] + s[1] / 2 + 13, r[3], { s: 10, c: MUTED });
      b += L(184, s[0] + s[1] / 2, 356, s[0] + s[1] / 2, { s: LINE, d: '3 3' });
      b += R(205, s[0] + s[1] / 2 - 11, 130, 22, { f: '#fff', s: LINE, r: 11 }) + T(270, s[0] + s[1] / 2 + 4, r[4], { s: 10.5, b: true });
    });
    b += T(270, 306, 'OSI 5-6-7 merge into Application (“3 in 1”); OSI 1-2 merge into Network Access', { s: 10.5, i: true });
    return svg(540, 314, b);
  })() };

  F.framePacket = { title: 'How the PDUs nest inside each other', svg: (function () {
    var b = '', rows = [
      ['Segment (L4)', [['TCP header: ports, sequence', 150, SOFT], ['Data', 110, PALE]]],
      ['Packet (L3)', [['IP header: src/dst IP', 130, SOFT], ['Segment', 130, PALE]]],
      ['Frame (L2)', [['Header: MACs', 100, SOFT], ['Payload: IP packet', 140, PALE], ['FCS trailer', 80, SOFT]]],
      ['Bits (L1)', [['1 0 1 1 0 0 1 0 1 …  (signals)', 320, '#fff']]]];
    rows.forEach(function (r, i) {
      var y = 18 + i * 44, x = 120;
      b += T(110, y + 21, r[0], { a: 'end', b: true });
      r[1].forEach(function (c) { b += R(x, y, c[1], 30, { f: c[2], s: c[2] === SOFT ? AC : INK, r: 3 }) + T(x + c[1] / 2, y + 19, c[0], { s: 10.5 }); x += c[1]; });
    });
    b += T(280, 198, 'Each layer wraps the PDU from the layer above (header, and a trailer at Layer 2)', { s: 10.5, i: true });
    return svg(540, 206, b);
  })() };

  F.devices = { title: 'Highest OSI layer of a hub, a switch and a router', svg: (function () {
    var b = '', devs = [['Hub', 1, 'repeats bits to ALL ports'], ['Switch', 2, 'reads destination MAC → one port'], ['Router', 3, 'reads destination IP → best path']];
    devs.forEach(function (d, i) {
      var x = 20 + i * 175;
      b += T(x + 75, 18, d[0], { b: true, s: 13 });
      ['Layer 3 · Network', 'Layer 2 · Data Link', 'Layer 1 · Physical'].forEach(function (n, k) {
        var on = 3 - k <= d[1];
        b += R(x, 28 + k * 30, 150, 26, { f: on ? SOFT : '#fff', s: on ? AC : LINE, r: 3 }) + T(x + 75, 45 + k * 30, n, { s: 10.5, c: on ? AC : MUTED, b: on });
      });
      b += T(x + 75, 132, d[2], { s: 10.5 });
    });
    b += T(270, 158, 'Filled = layers the device understands', { s: 10.5, i: true, c: MUTED });
    return svg(540, 166, b);
  })() };

  /* ---------- Week 4 ---------- */
  F.signals = { title: 'Analog vs digital signals', svg: (function () {
    var b = '', pts = [];
    for (var x = 0; x <= 220; x += 4) pts.push([30 + x, 80 - 38 * Math.sin(x / 220 * 4 * Math.PI)]);
    b += L(30, 130, 255, 130, { s: LINE, w: 1 }) + L(30, 30, 30, 130, { s: LINE, w: 1 }) + L(30, 80, 255, 80, { s: '#e5e7eb', w: 1, d: '3 3' });
    b += P(poly(pts), { s: AC, w: 2.2 });
    b += T(142, 152, 'Analog: varies smoothly (sine wave)', { s: 11, b: true }) + T(142, 168, 'amplitude, frequency, phase · e.g. voice, AM/FM', { s: 10 });
    var bits = [1, 0, 1, 1, 0, 1], x0 = 300, w = 36, hi = 45, lo = 115, d = 'M' + x0 + ' ' + (bits[0] ? hi : lo);
    bits.forEach(function (v, i) { var y = v ? hi : lo; d += ' L' + (x0 + i * w) + ' ' + y + ' L' + (x0 + (i + 1) * w) + ' ' + y; b += T(x0 + i * w + w / 2, 36, String(v), { s: 11, b: true, c: MUTED }); });
    b += L(x0, 130, 520, 130, { s: LINE, w: 1 }) + L(x0, 30, x0, 130, { s: LINE, w: 1 });
    b += P(d, { s: AC, w: 2.2 }) + T(x0 - 4, hi + 4, '+5V', { a: 'end', s: 10 }) + T(x0 - 4, lo + 4, '0V', { a: 'end', s: 10 });
    b += T(410, 152, 'Digital: discrete levels (square pulses)', { s: 11, b: true }) + T(410, 168, 'resistant to noise · e.g. Ethernet, computer bus', { s: 10 });
    return svg(540, 176, b);
  })() };

  F.hubSwitch = { title: 'Hub floods every port; a switch forwards to one port', svg: (function () {
    function side(cx, label, dev, flood) {
      var b = R(cx - 34, 82, 68, 30, { f: SOFT, s: AC }) + T(cx, 101, dev, { b: true, c: AC });
      var pcs = [[cx - 95, 32, 'A (sender)'], [cx + 95, 32, 'B (dest.)'], [cx - 95, 160, 'C'], [cx + 95, 160, 'D']];
      pcs.forEach(function (p, i) {
        var active = i === 0 || i === 1 || flood;
        var x2 = p[0] + (p[0] < cx ? 30 : -30), y2 = p[1] + (p[1] < 97 ? 13 : -13);
        b += (i === 0 ? L(x2, y2, cx - 20, 82, { arrow: true, s: AC, w: 2 }) : L(cx + (p[0] < cx ? -20 : 20), p[1] < 97 ? 82 : 112, x2, y2, { arrow: active, s: active ? AC : LINE, w: active ? 2 : 1.2, d: active ? null : '4 3' }));
        b += node(p[0], p[1], p[2], { w: 30, s: 10, f: active ? PALE : '#fff' });
      });
      return b + T(cx, 196, label, { s: 10.5, b: true });
    }
    return svg(540, 206, side(135, 'Hub (Layer 1): floods to ALL ports', 'Hub', true) + L(270, 10, 270, 200, { s: '#e5e7eb', w: 1 }) + side(405, 'Switch (Layer 2): only to B\'s MAC port', 'Switch', false));
  })() };

  F.encapsulation = { title: 'Encapsulation at the sender, decapsulation at the receiver', svg: (function () {
    var b = '', rows = [['L7 Data', [['Data', 70, PALE]]], ['L4 Segment', [['TCP', 34, SOFT], ['Data', 70, PALE]]], ['L3 Packet', [['IP', 30, SOFT], ['TCP', 34, SOFT], ['Data', 70, PALE]]],
      ['L2 Frame', [['MAC', 34, SOFT], ['IP', 30, SOFT], ['TCP', 34, SOFT], ['Data', 50, PALE], ['FCS', 34, SOFT]]], ['L1 Bits', [['1 0 1 1 0 0 1 0 …', 160, '#fff']]]];
    function stack(x0) {
      var s = '';
      rows.forEach(function (r, i) {
        var y = 22 + i * 36, w = r[1].reduce(function (n, c) { return n + c[1]; }, 0), x = x0 + (182 - w) / 2;
        if (x0 < 200) s += T(x0 - 6, y + 19, r[0], { a: 'end', s: 10.5, b: true });
        r[1].forEach(function (c) { s += R(x, y, c[1], 26, { f: c[2], s: c[2] === SOFT ? AC : INK, r: 2, w: 1.1 }) + T(x + c[1] / 2, y + 17, c[0], { s: 10 }); x += c[1]; });
      });
      return s;
    }
    b += T(169, 12, 'Sender: encapsulation ↓', { b: true, s: 11 }) + T(445, 12, 'Receiver: decapsulation ↑', { b: true, s: 11 });
    b += stack(78) + stack(354);
    b += L(284, 28, 284, 190, { arrow: true, s: AC, w: 2 }) + L(324, 190, 324, 28, { arrow: true, s: AC, w: 2 });
    b += T(304, 206, 'add ↓ · strip ↑', { s: 10, c: AC });
    b += P('M 169 214 C 220 240, 394 240, 445 214', { s: LINE, w: 3 }) + T(304, 248, 'medium: copper / fiber / radio', { s: 10.5, c: MUTED });
    return svg(540, 254, b);
  })() };

  /* ---------- Week 5 ---------- */
  F.cables = { title: 'Cross-sections of guided media', svg: (function () {
    var b = '';
    function legend(x, y, items) { return items.map(function (it, i) { return R(x, y + i * 17 - 9, 11, 11, { f: it[0], s: it[1] || INK, r: 2, w: 1 }) + T(x + 17, y + i * 17, it[2], { a: 'start', s: 10.5 }); }).join(''); }
    // twisted pair
    b += C(90, 75, 52, { f: '#dbeafe', s: '#3b82f6', w: 2 });
    [['#f97316', 0], ['#16a34a', 90], ['#2563eb', 180], ['#92400e', 270]].forEach(function (p) {
      var a = p[1] * Math.PI / 180, cx = 90 + 27 * Math.cos(a), cy = 75 + 27 * Math.sin(a), dx = 8 * Math.cos(a + 1.2), dy = 8 * Math.sin(a + 1.2);
      b += C(cx - dx, cy - dy, 8, { f: p[0], s: INK, w: 1 }) + C(cx + dx, cy + dy, 8, { f: '#fff', s: p[0], w: 2.5 });
    });
    b += T(90, 150, 'Twisted pair (UTP)', { b: true }) + legend(30, 172, [['#fff', INK, '8 copper wires in 4 twisted pairs'], ['#fff', INK, 'plastic insulation on each wire'], ['#dbeafe', '#3b82f6', 'outer plastic jacket']]);
    // coaxial
    b += C(270, 75, 52, { f: '#374151', s: INK, w: 1.5 }) + C(270, 75, 40, { f: '#d1d5db', s: '#6b7280', w: 3, d: '3 2' }) + C(270, 75, 30, { f: '#fff', s: LINE }) + C(270, 75, 9, { f: '#c2703d', s: '#7c3f16' });
    b += T(270, 150, 'Coaxial cable', { b: true }) + legend(210, 172, [['#c2703d', '#7c3f16', '1 copper core conductor'], ['#fff', LINE, '2 insulator (plastic foam)'], ['#d1d5db', '#6b7280', '3 braided metal shield'], ['#374151', INK, '4 outer plastic jacket']]);
    // fiber
    b += C(450, 75, 52, { f: '#111827', s: INK }) + C(450, 75, 40, { f: '#fde68a', s: '#b45309' }) + C(450, 75, 28, { f: '#e0f2fe', s: '#0284c7' }) + C(450, 75, 9, { f: '#7dd3fc', s: '#0369a1' });
    b += T(450, 150, 'Fiber optic', { b: true }) + legend(392, 172, [['#7dd3fc', '#0369a1', 'glass core (higher n)'], ['#e0f2fe', '#0284c7', 'glass cladding (lower n)'], ['#fde68a', '#b45309', 'plastic coating / buffer'], ['#111827', INK, 'plastic outer jacket']]);
    return svg(540, 244, b);
  })() };

  F.fiberModes = { title: 'Single-mode vs multimode fiber', svg: (function () {
    var b = '';
    // single-mode
    b += R(20, 20, 380, 50, { f: '#e0f2fe', s: '#0284c7', r: 2 }) + R(20, 41, 380, 8, { f: '#7dd3fc', s: '#0369a1', r: 1 }) + L(24, 45, 396, 45, { s: '#dc2626', w: 2, arrow: true });
    b += T(410, 36, 'Single-mode (SMF)', { a: 'start', b: true, s: 11.5 }) + T(410, 52, '~9 µm core, one ray', { a: 'start', s: 10.5 }) + T(410, 66, 'laser · 10–100+ km', { a: 'start', s: 10.5 });
    // multimode
    b += R(20, 100, 380, 70, { f: '#e0f2fe', s: '#0284c7', r: 2 }) + R(20, 112, 380, 46, { f: '#7dd3fc', s: '#0369a1', r: 1 });
    b += P('M24 135 L80 114 L150 156 L220 114 L290 156 L360 114 L396 128', { s: '#dc2626', w: 1.8, arrow: true }) + P('M24 135 L120 156 L230 114 L340 156 L396 140', { s: '#ea580c', w: 1.4, arrow: true, d: '5 3' });
    b += T(410, 122, 'Multimode (MMF)', { a: 'start', b: true, s: 11.5 }) + T(410, 138, '50–62.5 µm, many rays', { a: 'start', s: 10.5 }) + T(410, 152, 'LED · 500 m – 2 km', { a: 'start', s: 10.5 });
    b += T(210, 192, 'Different ray paths arrive at different times → modal dispersion limits MMF', { s: 10.5, i: true });
    return svg(540, 200, b);
  })() };

  F.tir = { title: 'Snell\'s law and total internal reflection', svg: (function () {
    var b = '', y = 90;
    b += R(10, 10, 520, y - 10, { f: '#f0f9ff', s: 'none', r: 0 }) + R(10, y, 520, 110, { f: '#cbeef9', s: 'none', r: 0 }) + L(10, y, 530, y, { s: '#0284c7', w: 2 });
    b += T(20, 30, 'Cladding: lower refractive index (n₂)', { a: 'start', s: 11 }) + T(20, 192, 'Core: higher refractive index (n₁)', { a: 'start', s: 11 });
    // escaping ray (below critical angle)
    var p1 = 150; b += L(p1, 30, p1, 170, { s: LINE, d: '4 3', w: 1 });
    b += L(p1 - 46, 188, p1, y, { s: MUTED, w: 2, arrow: true }) + L(p1, y, p1 + 70, 28, { s: MUTED, w: 2, arrow: true });
    b += T(p1 + 76, 52, 'θ < θc: refracts and escapes', { a: 'start', s: 10.5, c: MUTED });
    // TIR ray
    var p2 = 380; b += L(p2, 30, p2, 170, { s: LINE, d: '4 3', w: 1 });
    b += L(p2 - 110, 140, p2, y, { s: '#dc2626', w: 2.2, arrow: true }) + L(p2, y, p2 + 110, 140, { s: '#dc2626', w: 2.2, arrow: true });
    b += T(p2, 162, 'θ > θc: total internal reflection', { s: 10.5, b: true, c: '#dc2626' });
    b += T(520, 30, 'n₁ sin θ₁ = n₂ sin θ₂  ·  sin θc = n₂ / n₁', { s: 11, b: true, a: 'end' });
    return svg(540, 204, b);
  })() };

  /* ---------- Week 6 ---------- */
  F.spectrum = { title: 'The wireless spectrum (3 kHz – 400 THz)', svg: (function () {
    var b = '', segs = [['Radio waves', 20, 190, '#dbeafe', '#2563eb', ['omnidirectional', 'penetrate walls', 'AM/FM radio']],
      ['Microwaves', 190, 360, SOFT, AC, ['directional beams', 'line-of-sight', 'Wi-Fi, satellite']],
      ['Infrared', 360, 520, '#fee2e2', '#dc2626', ['short range', 'no walls', 'TV remote, sensors']]];
    segs.forEach(function (s) {
      b += R(s[1], 30, s[2] - s[1], 40, { f: s[3], s: s[4], r: 0 }) + T((s[1] + s[2]) / 2, 55, s[0], { b: true, c: s[4] });
      s[5].forEach(function (t, i) { b += T((s[1] + s[2]) / 2, 92 + i * 15, t, { s: 10.5 }); });
    });
    [[20, '3 kHz'], [190, '1 GHz'], [360, '300 GHz'], [520, '400 THz']].forEach(function (t) { b += L(t[0], 26, t[0], 74, { w: 1.4 }) + T(t[0], 20, t[1], { s: 10.5, b: true }); });
    b += L(20, 148, 520, 148, { arrow: true, s: MUTED, w: 1.4 }) + T(270, 164, 'frequency increases →', { s: 10.5, c: MUTED });
    return svg(540, 170, b);
  })() };

  F.propagation = { title: 'Wireless propagation modes', svg: (function () {
    var b = '';
    function panel(x, title, band) {
      var s = P('M' + x + ' 150 Q ' + (x + 85) + ' 128 ' + (x + 170) + ' 150', { s: '#16a34a', w: 2.5 }) + T(x + 85, 176, title, { b: true, s: 11.5 }) + T(x + 85, 192, band, { s: 10.5, c: AC, b: true });
      return s + L(x + 18, 148, x + 18, 112, { w: 2 }) + P('M' + (x + 10) + ' 112 L' + (x + 18) + ' 100 L' + (x + 26) + ' 112', { w: 1.6 });
    }
    b += panel(5, 'Ground wave', '< 2 MHz') + P('M 30 132 Q 92 116 160 132', { s: AC, w: 2, arrow: true, d: '6 3' });
    b += panel(185, 'Sky wave', '2 – 30 MHz') + P('M 185 40 Q 270 18 355 40', { s: MUTED, w: 1.4, d: '4 3' }) + T(270, 16, 'ionosphere', { s: 10, c: MUTED }) +
      L(205, 104, 268, 32, { s: AC, w: 2 }) + L(268, 32, 334, 128, { s: AC, w: 2, arrow: true });
    b += panel(365, 'Line-of-sight', '> 30 MHz') + L(368 + 18, 148, 368 + 18, 112, { w: 2 }) + L(383 + 135, 148, 383 + 135, 104, { w: 2 }) +
      R(510, 92, 16, 14, { f: PALE, r: 3 }) + L(392, 104, 508, 98, { s: AC, w: 2, arrow: true }) + T(450, 88, 'straight line, no obstacles', { s: 10, c: AC });
    return svg(540, 198, b);
  })() };

  F.tiuLink = { title: 'Linking two TIU buildings 1.5 km apart', svg: svg(540, 222,
    R(20, 60, 70, 100, { f: PALE }) + T(55, 114, 'Bldg A', { b: true }) + R(450, 60, 70, 100, { f: PALE }) + T(485, 114, 'Bldg B', { b: true }) +
    L(55, 60, 55, 46, { w: 2 }) + L(485, 60, 485, 46, { w: 2 }) + L(62, 40, 478, 40, { s: '#2563eb', w: 2, both: true, arrow: true }) +
    T(270, 30, '✓ Microwave P2P (line-of-sight dishes): no trenching, fast · rain fade risk', { s: 10.5, c: '#2563eb' }) +
    L(90, 100, 450, 100, { s: '#dc2626', w: 2, d: '6 4' }) + T(270, 92, '✗ Cat6a copper: maximum 100 m, too short', { s: 10.5, c: '#dc2626' }) +
    R(160, 138, 220, 22, { f: '#d1d5db', s: MUTED, r: 2 }) + T(270, 153, 'public highway · 1.5 km apart', { s: 10.5 }) +
    P('M 90 150 Q 270 222 450 150', { s: AC, w: 2.5 }) + T(270, 214, '✓ Single-mode fiber: 10 Gbps, zero EMI · trenching permit and cost', { s: 10.5, c: AC })) };

  Object.keys(F).forEach(function (k) { F[k].name = k; });
  EC.FIGURES = F;
})(typeof window !== 'undefined' ? window : globalThis);
