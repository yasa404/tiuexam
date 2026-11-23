/* IT 319 Mobile Applications Midterm Simulator: browser UI.
   Views: home (setup), exam (Focus mode or A4 paper mode), result, flashcards, progress. */
(function () {
  'use strict';
  var EC = window.EC, C = EC.core;
  var CO = EC.COURSE, U = CO.units, UNIT = CO.unit;
  var KEY = CO.storage + '.sim.v1';
  var main = document.getElementById('main');
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* =========================================================
     Icons (inline, stroke = currentColor)
     ========================================================= */
  function icon(d) { return '<svg class="i" viewBox="0 0 24 24" aria-hidden="true">' + d + '</svg>'; }
  var I = {
    x: icon('<path d="M18 6L6 18M6 6l12 12"/>'),
    grid: icon('<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>'),
    print: icon('<path d="M6 9V3h12v6"/><rect x="3" y="9" width="18" height="8" rx="2"/><path d="M6 14h12v7H6z"/>'),
    left: icon('<path d="M15 18l-6-6 6-6"/>'),
    right: icon('<path d="M9 18l6-6-6-6"/>'),
    flag: icon('<path d="M5 21V4M5 4h11l-2 4 2 4H5"/>'),
    clock: icon('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'),
    check: icon('<path d="M20 6L9 17l-5-5"/>'),
    chev: icon('<path d="M9 18l6-6-6-6"/>'),
    key: icon('<circle cx="8" cy="15" r="4"/><path d="M11 12l9-9M17 6l3 3"/>'),
    paper: icon('<path d="M6 3h9l4 4v14H6z"/><path d="M9 12h7M9 16h5"/>'),
    retry: icon('<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/>'),
    plus: icon('<path d="M12 5v14M5 12h14"/>'),
    save: icon('<path d="M5 3h11l3 3v15H5z"/><path d="M8 3v5h7V3M8 21v-7h8v7"/>'),
    focus: icon('<rect x="4" y="5" width="16" height="14" rx="3"/><path d="M8 10h8M8 14h5"/>')
  };

  /* =========================================================
     Storage (guarded: private mode etc.)
     ========================================================= */
  function defaults() {
    return {
      settings: { lectures: U.slice(), length: 'M', sections: 'ABCDE', difficulty: 'X', timer: true, wordBank: true, sound: true, view: 'focus' },
      profile: { name: '', sid: '' },
      current: null,
      history: [],
      cards: {}
    };
  }
  var S = (function () {
    var d = defaults(), raw = null;
    try { raw = JSON.parse(localStorage.getItem(KEY) || 'null'); } catch (e) { raw = null; }
    if (raw && typeof raw === 'object') {
      Object.keys(d).forEach(function (k) { if (raw[k] !== undefined && raw[k] !== null) d[k] = raw[k]; });
      d.settings = Object.assign(defaults().settings, raw.settings || {});
      if (EC.COURSE && EC.COURSE.forceWordBank) d.settings.wordBank = true;
    }
    return d;
  })();
  var saveTimer = null;
  function save(now) {
    clearTimeout(saveTimer);
    var write = function () { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* storage unavailable */ } };
    if (now) write(); else saveTimer = setTimeout(write, 250);
  }

  /* =========================================================
     Theme: Auto (follows the device) -> Light -> Dark
     ========================================================= */
  var THEME_KEY = CO.storage + '.theme';
  var darkQuery = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
  var THEME_ICON = {
    auto: '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="M12 3.5v17a8.5 8.5 0 0 0 0-17z" fill="currentColor" stroke="none"/></svg>',
    light: '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
    dark: '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/></svg>'
  };
  function themeChoice() { return document.documentElement.getAttribute('data-theme') || 'auto'; }
  function applyTheme(t) {
    var root = document.documentElement;
    var dark = t === 'dark' || (t === 'auto' && darkQuery && darkQuery.matches);
    root.setAttribute('data-theme', t);
    root.setAttribute('data-mode', dark ? 'dark' : 'light');
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', dark ? '#0d1220' : '#ffffff');
    var b = document.getElementById('theme-btn');
    if (b) {
      var names = { auto: 'Auto', light: 'Light', dark: 'Dark' };
      b.innerHTML = THEME_ICON[t];
      b.setAttribute('aria-label', 'Theme: ' + names[t] + (t === 'auto' ? ' (' + (dark ? 'dark' : 'light') + ')' : '') + '. Change theme');
      b.title = 'Theme: ' + names[t] + (t === 'auto' ? ' (follows your device)' : '');
    }
  }
  (function initTheme() {
    applyTheme(themeChoice());
    var b = document.getElementById('theme-btn');
    if (b) b.addEventListener('click', function () {
      var next = { auto: 'light', light: 'dark', dark: 'auto' }[themeChoice()] || 'auto';
      try { localStorage.setItem(THEME_KEY, next); } catch (e) { /* storage blocked */ }
      applyTheme(next);
    });
    if (darkQuery) {
      var onChange = function () { if (themeChoice() === 'auto') applyTheme('auto'); };
      if (darkQuery.addEventListener) darkQuery.addEventListener('change', onChange); else if (darkQuery.addListener) darkQuery.addListener(onChange);
    }
  })();

  /* =========================================================
     Helpers
     ========================================================= */
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function el(html) { var t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstElementChild; }
  function fmtMark(x) {
    var whole = Math.floor(x), half = x - whole >= 0.5;
    if (!whole && half) return '½';
    return whole + (half ? '½' : '');
  }
  function clock(sec) {
    sec = Math.max(0, Math.round(sec));
    return String(Math.floor(sec / 60)).padStart(2, '0') + ':' + String(sec % 60).padStart(2, '0');
  }
  function quickSections() {
    var ks = 'ABCDE'.split('').filter(function (k) { return C.LENGTHS.Q.budget[k] > 0; });
    return ks[0] + '–' + ks[ks.length - 1];
  }
  function lectureList(ls) { ls = ls.slice().sort(); return ls.length === U.length ? U[0] + '–' + U[U.length - 1] : ls.join(', '); }
  function slideRef(q) {
    var s = Array.isArray(q.slide) ? q.slide : [q.slide];
    return UNIT + ' ' + q.lecture + ' · slide' + (s.length > 1 ? 's ' : ' ') + s.join(', ');
  }
  /* Text with `inline code`. plain() drops the backticks (labels read by screen readers). */
  function rich(s) { return esc(s).replace(/`([^`]+)`/g, '<code>$1</code>'); }
  function plain(s) { return String(s).replace(/`/g, ''); }
  function codeHtml(q) { return q.code ? '<pre class="code">' + esc(q.code) + '</pre>' : ''; }
  function modelHtml(q) { return q.kind === 'code' ? '<pre class="code">' + esc(q.model) + '</pre>' : rich(q.model); }
  function letter(i) { return 'abcd'.charAt(i); }
  function today() { return new Date().toISOString(); }
  function shortDate(iso) {
    try { var d = new Date(iso); return d.toLocaleDateString(undefined, { day: 'numeric', month: 'short' }) + ', ' + d.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' }); } catch (e) { return iso; }
  }
  var DIFF_NAME = { easy: 'Easy', medium: 'Medium', hard: 'Hard' };
  function diffTag(d) { return '<span class="tag d-' + d + '"><span class="dot"></span>' + DIFF_NAME[d] + '</span>'; }
  function levelName(cfg) { return C.DIFFICULTY[(cfg && cfg.difficulty) || 'X'].label; }
  /* Explanations often start with "Slide 12." which the slide reference already shows. */
  function cleanExplain(s) {
    return String(s || '').replace(/^Slides? [\d\s,–\-and]+(\([^)]*\))?\s*[.:]\s*/, '').trim()
      .replace(/^[a-z]/, function (c) { return c.toUpperCase(); });
  }
  function plural(n, w) { return n + ' ' + w + (n === 1 ? '' : 's'); }

  /* Dialog: resolves true (ok) / false (cancel). */
  function ask(opts) {
    return new Promise(function (resolve) {
      var d = el('<dialog aria-labelledby="dlg-t"><h2 id="dlg-t">' + esc(opts.title) + '</h2>' +
        (opts.body ? '<p>' + opts.body + '</p>' : '') +
        '<div class="actions">' +
        (opts.cancel === false ? '' : '<button class="btn" data-r="0">' + esc(opts.cancel || 'Cancel') + '</button>') +
        '<button class="btn ' + (opts.danger ? 'danger' : 'primary') + '" data-r="1">' + esc(opts.ok || 'OK') + '</button></div></dialog>');
      document.body.appendChild(d);
      var done = function (v) { try { d.close(); } catch (e) { /* closed */ } d.remove(); resolve(v); };
      d.addEventListener('click', function (e) {
        var b = e.target.closest('[data-r]');
        if (b) done(b.getAttribute('data-r') === '1');
      });
      d.addEventListener('cancel', function (e) { e.preventDefault(); done(false); });
      if (d.showModal) d.showModal(); else d.setAttribute('open', '');
      var okBtn = d.querySelector('[data-r="1"]');
      if (okBtn) okBtn.focus();
    });
  }

  /* =========================================================
     Exams
     ========================================================= */
  var examCache = {};
  function examFor(cur) {
    var k = cur.kind === 'retry' ? 'R:' + cur.seed + ':' + cur.ids.join(',') : cur.code;
    if (!examCache[k]) examCache[k] = cur.kind === 'retry' ? C.makeRetryExam(cur.ids, cur.seed) : C.makeExam(cur.code);
    return examCache[k];
  }
  function recentIds() {
    var ids = [];
    S.history.slice(-3).forEach(function (h) { (h.items || []).forEach(function (x) { ids.push(x[0]); }); });
    return ids;
  }
  function freshCurrent(extra) {
    return Object.assign({ answers: {}, flags: {}, idx: 0, elapsed: 0, started: today(), submitted: false }, extra);
  }
  /* ---------- Sound effects (synthesised with Web Audio: no files, works offline) ---------- */
  var SFX = (function () {
    var ctx = null;
    function get() {
      if (ctx) return ctx;
      var AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      try { ctx = new AC(); } catch (e) { ctx = null; }
      return ctx;
    }
    // Browsers only allow audio after a user gesture, so unlock on the first tap/key.
    function unlock() {
      var c = get();
      if (c && c.state === 'suspended') c.resume().catch(function () {});
    }
    ['pointerdown', 'keydown', 'touchstart'].forEach(function (ev) {
      window.addEventListener(ev, unlock, { capture: true, passive: true });
    });
    function tone(c, t0, freq, dur, opt) {
      opt = opt || {};
      var osc = c.createOscillator(), g = c.createGain();
      osc.type = opt.type || 'sine';
      osc.frequency.setValueAtTime(freq, t0);
      if (opt.slide) osc.frequency.exponentialRampToValueAtTime(opt.slide, t0 + dur);
      var peak = opt.vol || 0.18;
      g.gain.setValueAtTime(0.0001, t0);
      g.gain.exponentialRampToValueAtTime(peak, t0 + 0.015);
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
      osc.connect(g); g.connect(c.destination);
      osc.start(t0); osc.stop(t0 + dur + 0.05);
    }
    // Each note: [delay s, frequency Hz, duration s, options]
    var TUNES = {
      // Rising "ready, go" chime.
      start: [[0, 523.25, 0.18], [0.11, 659.25, 0.18], [0.22, 783.99, 0.34, { vol: 0.2 }]],
      // Bright arpeggio with a sparkle on top: a good result.
      great: [[0, 523.25, 0.2], [0.1, 659.25, 0.2], [0.2, 783.99, 0.2], [0.3, 1046.5, 0.5, { vol: 0.2 }],
              [0.3, 1567.98, 0.45, { vol: 0.05, type: 'triangle' }]],
      // Calm two-note "done": a pass.
      done: [[0, 659.25, 0.22], [0.14, 880, 0.45, { vol: 0.2 }]],
      // Soft falling pair: keep practising (not a harsh buzzer).
      low: [[0, 587.33, 0.26, { type: 'triangle' }], [0.18, 440, 0.5, { type: 'triangle', vol: 0.16 }]],
      // Bell for "time is up".
      time: [[0, 880, 0.6, { type: 'triangle', vol: 0.2 }], [0, 1318.5, 0.5, { vol: 0.05 }], [0.32, 880, 0.7, { type: 'triangle', vol: 0.16 }]]
    };
    function play(name) {
      if (!S.settings.sound) return;
      played.push(name);
      var c = get(), tune = TUNES[name];
      if (!c || !tune) return;
      var fire = function () {
        var t = c.currentTime + 0.02;
        tune.forEach(function (n) { tone(c, t + n[0], n[1], n[2], n[3]); });
      };
      try {
        if (c.state === 'suspended') c.resume().then(fire, function () {}); else fire();
      } catch (e) {}
    }
    var played = [];
    return { play: play, played: played };
  })();
  function finishSound(pct, timeUp) {
    SFX.play(timeUp ? 'time' : pct >= 75 ? 'great' : pct >= 50 ? 'done' : 'low');
  }

  function beginExam(code) { S.current = freshCurrent({ kind: 'exam', code: code }); save(true); SFX.play('start'); go('exam'); }
  function beginRetry(ids) {
    var seed = C.randomSeedHex();
    S.current = freshCurrent({ kind: 'retry', code: 'RETRY-' + seed, seed: seed, ids: ids });
    save(true); SFX.play('start'); go('exam');
  }
  function answeredCount(exam, cur) {
    return exam.items.filter(function (it) { return C.isAnswered(it, cur.answers[it.id]); }).length;
  }
  function confirmReplace() {
    var cur = S.current;
    if (!cur || cur.submitted) return Promise.resolve(true);
    var n = answeredCount(examFor(cur), cur);
    if (!n) return Promise.resolve(true);
    return ask({ title: 'Replace the exam in progress?', body: 'Exam <b>' + esc(cur.code) + '</b> has ' + plural(n, 'answered question') + '. Starting a new paper discards it.', ok: 'Discard and start', danger: true });
  }
  function newExam() {
    return confirmReplace().then(function (yes) { if (yes) beginExam(C.newCode(S.settings, recentIds())); });
  }

  /* =========================================================
     Router
     ========================================================= */
  var RT = { view: null, paged: [], timer: null, mistakesOnly: false, keyHandler: null, exam: null, lastBlank: null, setIdx: null, step: null };
  function go(view) { var h = '#/' + (view === 'home' ? '' : view); if (location.hash === h) route(); else location.hash = h; }
  function route() {
    var parts = location.hash.replace(/^#\/?/, '').split('/');
    var view = parts[0] || 'home';
    stopTimer();
    closeDrawer();
    cleanupPrint();
    RT.paged = [];
    RT.keyHandler = null;
    RT.setIdx = null;
    if (view === 'code' && parts[1]) {
      var p = C.parseCode(decodeURIComponent(parts[1]));
      if (p) {
        if (S.current && !S.current.submitted && S.current.code === p.code) { go('exam'); return; }
        confirmReplace().then(function (yes) { if (yes) beginExam(p.code); else go('home'); });
        return;
      }
      view = 'home';
    }
    if (view === 'exam' && (!S.current || S.current.submitted)) view = S.current && S.current.submitted ? 'result' : 'home';
    if (view === 'result' && (!S.current || !S.current.submitted)) view = 'home';
    if (['home', 'exam', 'result', 'cards', 'progress'].indexOf(view) === -1) view = 'home';
    RT.view = view;
    document.body.classList.toggle('in-exam', view === 'exam');
    $$('[data-nav]').forEach(function (a) {
      var nav = a.getAttribute('data-nav');
      var on = nav === view || (nav === 'home' && (view === 'exam' || view === 'result'));
      if (on) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
    ({ home: renderHome, exam: renderExam, result: renderResult, cards: renderCards, progress: renderProgress })[view]();
    if (view !== 'exam') window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', route);

  /* =========================================================
     Home
     ========================================================= */
  function stats() {
    var H = S.history;
    var avg = H.length ? Math.round(H.reduce(function (s, h) { return s + h.pct; }, 0) / H.length) : null;
    var best = H.reduce(function (b, h) { return !b || h.pct > b.pct ? h : b; }, null);
    return { n: H.length, avg: avg, best: best, last: H[H.length - 1] };
  }
  function segRadio(name, options, value, labelledby) {
    return '<div class="seg full" role="radiogroup" aria-labelledby="' + labelledby + '">' + options.map(function (o) {
      return '<label class="' + (o.value === value ? 'on' : '') + '"><input type="radio" name="' + name + '" value="' + o.value + '"' + (o.value === value ? ' checked' : '') + '>' + o.label + '</label>';
    }).join('') + '</div>';
  }
  function bindSeg(root) {
    $$('.seg input[type=radio]', root).forEach(function (inp) {
      inp.addEventListener('change', function () {
        $$('input[name="' + inp.name + '"]', root).forEach(function (o) { o.parentNode.classList.toggle('on', o.checked); });
      });
      // Keyboard focus ring only (not after a mouse click).
      inp.addEventListener('focus', function () { if (inp.matches(':focus-visible')) inp.parentNode.classList.add('focus'); });
      inp.addEventListener('blur', function () { inp.parentNode.classList.remove('focus'); });
    });
  }

  function renderHome() {
    var st = S.settings, cur = S.current, sts = stats();
    var banner = '';
    if (cur && !cur.submitted) {
      var ex = examFor(cur), n = answeredCount(ex, cur);
      banner = '<section class="banner" aria-label="Exam in progress"><div><b>Exam in progress · <span class="mono">' + esc(cur.code) + '</span></b>' +
        '<span>' + n + ' of ' + ex.items.length + ' answered · ' + ex.total + ' marks · saved on this device</span></div>' +
        '<div class="actions"><button class="btn" id="discard">Discard</button><button class="btn primary" id="resume">Resume exam ' + I.right + '</button></div></section>';
    }
    var presets = ['Q', 'S', 'M', 'F'].map(function (k) {
      var L = C.LENGTHS[k];
      return '<label class="preset"><input type="radio" name="len" value="' + k + '"' + (st.length === k ? ' checked' : '') + '>' +
        '<span><b>' + L.label + '</b><em>' + L.total + '</em><small>marks · ' + L.minutes + ' min</small></span></label>';
    }).join('');
    var diffs = segRadio('diff', ['X', 'E', 'N', 'H'].map(function (k) { return { value: k, label: C.DIFFICULTY[k].label }; }), st.difficulty, 'l-diff');
    var lects = U.map(function (l) {
      var count = EC.BANK.filter(function (q) { return q.lecture === l; }).length;
      return '<label class="tog"><input type="checkbox" name="lect" value="' + l + '"' + (st.lectures.indexOf(l) > -1 ? ' checked' : '') + '>' +
        '<span><span class="lt"><b>' + UNIT + ' ' + l + '</b><small>' + esc(EC.LECTURES[l]) + '</small></span><span class="count" aria-label="' + count + ' questions">' + count + ' Qs</span></span></label>';
    }).join('');
    var views = segRadio('view', [{ value: 'focus', label: I.focus + 'Focus' }, { value: 'a4', label: I.paper + 'A4 paper' }], st.view, 'l-view');
    var secs = 'ABCDE'.split('').map(function (k) {
      return '<label class="tog"><input type="checkbox" name="sec" value="' + k + '"' + (st.sections.indexOf(k) > -1 ? ' checked' : '') + '>' +
        '<span><span>' + k + ' · ' + esc(C.SECTION_INFO[k].title) + '</span></span></label>';
    }).join('');
    function sw(name, on, title, sub) {
      return '<label class="switch-row"><span><b>' + title + '</b><small>' + sub + '</small></span><span class="switch"><input type="checkbox" name="' + name + '"' + (on ? ' checked' : '') + '><i></i></span></label>';
    }
    main.innerHTML = '<div class="container">' + banner +
      '<section class="hero"><div><h1>Ready for your ' + CO.code + ' midterm?</h1>' +
      '<p>Practice papers built from ' + EC.BANK.length + ' questions on ' + CO.unitsLabel + ' ' + U[0] + '–' + U[U.length - 1] + ', laid out like the real exam and marked the moment you submit.</p></div>' +
      (sts.n
        ? '<div class="kpis"><div class="kpi"><b>' + sts.n + '</b><span>Papers done</span></div>' +
          '<div class="kpi"><b>' + sts.avg + '%</b><span>Average</span></div>' +
          '<div class="kpi"><b>' + sts.best.grade + '</b><span>Best grade</span></div></div>'
        : '<div class="kpis-empty">' + I.paper + '<div><b>No papers yet</b><span>Your average and best grade show up here after your first paper.</span></div></div>') +
      '</section>' +
      '<div class="grid-2">' +
      '<form class="card" id="settings" novalidate aria-labelledby="new-h"><h2 id="new-h">New exam</h2><p class="sub">Pick a length and a level. Everything else has sensible defaults.</p>' +
      '<span class="label" id="l-len">Paper length</span><div class="presets" role="radiogroup" aria-labelledby="l-len">' + presets + '</div>' +
      '<span class="label" id="l-diff">Difficulty</span>' + diffs + '<p class="muted" id="diff-hint" style="font-size:13px;margin:8px 0 0"></p>' +
      '<span class="label" id="l-lect">' + CO.unitsLabel + '</span><div class="lect-grid" role="group" aria-labelledby="l-lect">' + lects + '</div>' +
      '<span class="label" id="l-view">How to answer</span>' + views + '<p class="muted" id="view-hint" style="font-size:13px;margin:8px 0 0"></p>' +
      '<details class="more"><summary>' + I.chev + 'More options</summary>' +
      '<span class="label" id="l-sec" style="margin-top:6px">Sections</span><div class="chips" role="group" aria-labelledby="l-sec">' + secs + '</div>' +
      '<div style="margin-top:12px">' + sw('timer', st.timer, 'Timer', 'Counts down and collects the paper at zero') + (CO.forceWordBank ? '' : sw('wb', st.wordBank, 'Word bank', 'Show the Section B words plus 2–3 distractors')) + sw('snd', st.sound, 'Sound effects', 'A short chime when the exam starts and when you finish') + '</div>' +
      '</details>' +
      '<p class="form-error" id="set-err" role="alert" hidden></p>' +
      '<div class="start-row"><button class="btn primary big" type="submit" id="start">Start exam ' + I.right + '</button><span class="hint" id="start-hint"></span></div>' +
      '</form>' +
      '<div class="home-aside"><section class="card" aria-labelledby="code-h"><h2 id="code-h">Open a paper by code</h2><p class="sub">The same code always rebuilds the same paper, so you can share it with classmates.</p>' +
      '<form class="code-form" id="codeform" novalidate><label class="sr" for="code-in">Exam code</label>' +
      '<input id="code-in" name="code" placeholder="' + CO.prefix + '-7F3A" autocomplete="off" spellcheck="false" maxlength="24"><button class="btn" type="submit">Open</button></form>' +
      '<p class="form-error" id="code-err" role="alert" hidden></p></section>' +
      '<section class="card" aria-labelledby="how-h"><h2 id="how-h">How it works</h2><ul class="list-plain">' +
      '<li>' + I.focus + '<span><b>Focus</b> shows one question at a time with big buttons. Made for phones.</span></li>' +
      '<li>' + I.paper + '<span><b>A4 paper</b> shows the real exam sheet. Answer right on the page, or print it.</span></li>' +
      '<li>' + I.check + '<span>Marked instantly, teacher style, with the right answer and slide for every mistake.</span></li>' +
      '<li>' + I.save + '<span>Answers save automatically. Close the tab and resume later.</span></li>' +
      '</ul><div class="actions" style="margin-top:12px"><a class="btn" href="#/cards">Flashcards</a><a class="btn" href="#/progress">My progress</a></div></section></div>' +
      '</div></div>';

    var form = $('#settings');
    bindSeg(form);
    function readSettings() {
      return {
        lectures: $$('input[name=lect]:checked', form).map(function (i) { return +i.value; }),
        sections: $$('input[name=sec]:checked', form).map(function (i) { return i.value; }).join(''),
        length: ($('input[name=len]:checked', form) || {}).value || 'M',
        difficulty: ($('input[name=diff]:checked', form) || {}).value || 'X',
        view: ($('input[name=view]:checked', form) || {}).value || 'focus',
        timer: $('input[name=timer]', form).checked,
        wordBank: CO.forceWordBank ? true : $('input[name=wb]', form).checked,
        sound: $('input[name=snd]', form).checked
      };
    }
    function hints() {
      var s = readSettings(), L = C.LENGTHS[s.length];
      var nl = s.lectures.length;
      $('#start-hint').innerHTML = '<b>' + L.total + ' marks · ' + L.minutes + ' min</b><span>' + C.DIFFICULTY[s.difficulty].label + ' · ' +
        (nl === U.length ? 'all ' + CO.unitsLabel.toLowerCase() : nl ? plural(nl, UNIT.toLowerCase()) : 'no ' + CO.unitsLabel.toLowerCase()) + (s.timer ? '' : ' · no timer') + (s.length === 'Q' ? ' · Sections ' + quickSections() : '') + '</span>';
      $('#diff-hint').textContent = {
        X: 'A realistic mix: about 30% easy, 50% medium, 20% hard.',
        E: 'Mostly definitions and direct recall. Good for a first pass.',
        N: 'Mostly medium questions: examples, applications and key questions.',
        H: 'More “which is NOT”, figure-based and comparison questions.'
      }[s.difficulty];
      $('#view-hint').textContent = s.view === 'a4'
        ? 'Answer on real A4 exam sheets with bubbles and blanks. You can switch during the exam.'
        : 'One question at a time with large tap targets. You can switch to A4 during the exam.';
    }
    hints();
    form.addEventListener('change', function () {
      var s = readSettings();
      if (s.lectures.length) S.settings.lectures = s.lectures;
      if (s.sections) S.settings.sections = s.sections;
      ['length', 'difficulty', 'view', 'timer', 'wordBank', 'sound'].forEach(function (k) { S.settings[k] = s[k]; });
      save();
      hints();
    });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var s = readSettings(), err = $('#set-err');
      if (!s.lectures.length || !s.sections) {
        err.textContent = !s.lectures.length ? 'Choose at least one ' + UNIT.toLowerCase() + '.' : 'Choose at least one section (under More options).';
        err.hidden = false; return;
      }
      err.hidden = true;
      newExam();
    });
    $('#codeform').addEventListener('submit', function (e) {
      e.preventDefault();
      var p = C.parseCode($('#code-in').value), err = $('#code-err');
      if (!p) { err.textContent = 'That is not a valid code. Codes look like ' + CO.prefix + '-7F3A or ' + CO.prefix + '-7F3A-24FH.'; err.hidden = false; return; }
      err.hidden = true;
      if (S.current && !S.current.submitted && S.current.code === p.code) { go('exam'); return; }
      confirmReplace().then(function (yes) { if (yes) beginExam(p.code); });
    });
    if (banner) {
      $('#resume').addEventListener('click', function () { go('exam'); });
      $('#discard').addEventListener('click', function () {
        ask({ title: 'Discard this exam?', body: 'Your answers on ' + esc(cur.code) + ' will be deleted.', ok: 'Discard', danger: true }).then(function (y) {
          if (y) { S.current = null; save(true); renderHome(); }
        });
      });
    }
  }

  /* =========================================================
     A4 paper blocks
     ========================================================= */
  function headerBlock(exam, mode, res) {
    var title = exam.kind === 'retry' ? CO.code + ' ' + CO.name + ' · Practice Paper (my mistakes)' : CO.code + ' ' + CO.name + ' · Midterm Exam';
    var nameCell, idCell;
    if (mode === 'answer') {
      nameCell = '<input data-profile="name" autocomplete="name" aria-label="Student name" value="' + esc(S.profile.name) + '">';
      idCell = '<input data-profile="sid" autocomplete="off" aria-label="Student ID" value="' + esc(S.profile.sid) + '">';
    } else if (mode === 'key') {
      nameCell = '<b>ANSWER KEY</b>'; idCell = '&nbsp;';
    } else {
      nameCell = '<span class="given">' + (esc(S.profile.name) || '&nbsp;') + '</span>';
      idCell = '<span class="given">' + (esc(S.profile.sid) || '&nbsp;') + '</span>';
    }
    var ring = '';
    if (mode === 'graded' && res) {
      ring = '<div class="score-ring" aria-label="Score ' + fmtMark(res.got) + ' out of ' + res.max + '"><b data-total>' + fmtMark(res.got) + '</b><span>/' + res.max + '</span></div>' +
        '<div class="grade-pen" data-grade aria-label="Grade ' + res.grade + '">' + res.grade + '</div>';
    }
    return el('<div class="ph' + (ring ? ' graded' : '') + '">' + ring +
      '<div class="ph-uni">Tishk International University</div>' +
      '<div class="ph-fac">Faculty of Applied Science · Department of Information Technology</div>' +
      '<div class="ph-title">' + esc(title) + '</div>' +
      '<table class="ph-meta"><tbody>' +
      '<tr><th scope="row">Semester</th><td>Fall 2026–2027</td><th scope="row">Exam code</th><td><span class="code">' + esc(exam.code) + '</span></td></tr>' +
      '<tr><th scope="row">Instructor</th><td>' + esc(CO.instructor) + '</td><th scope="row">Duration</th><td>' + exam.minutes + ' minutes</td></tr>' +
      '<tr><th scope="row">' + CO.unitsLabel + '</th><td>' + lectureList(exam.cfg.lectures) + '</td><th scope="row">Total marks</th><td>' + exam.total + '</td></tr>' +
      '<tr><th scope="row">Difficulty</th><td>' + levelName(exam.cfg) + '</td><th scope="row">Questions</th><td>' + exam.items.length + '</td></tr>' +
      '<tr><th scope="row">Student name</th><td colspan="3">' + nameCell + '</td></tr>' +
      '<tr><th scope="row">Student ID</th><td colspan="3">' + idCell + '</td></tr>' +
      '</tbody></table></div>');
  }
  function instrBlock(exam, mode) {
    var secs = exam.sections.map(function (s) { return s.key; }).join(', ');
    var body = mode === 'key'
      ? '<b>Answer key.</b> Correct options, accepted answers and marking points for every question, with slide references and difficulty.'
      : '<b>Instructions:</b> Answer all questions. Marks are shown in brackets. This paper has ' + exam.items.length + ' questions in Section' + (exam.sections.length > 1 ? 's ' : ' ') + secs + '.';
    var keys = mode === 'answer' ? '<div class="keys">Keyboard: A–D choose an option · T / F for true or false · ↑ ↓ previous / next question · Tab moves between blanks. Answers save automatically.</div>' : '';
    return el('<div class="instr">' + body + keys + '</div>');
  }
  function sectionHead(sec, mode, res) {
    var m = '[' + plural(sec.marks, 'mark') + ']';
    if (mode === 'graded' && res) m = '<span data-sec="' + sec.key + '">' + fmtMark(res.bySection[sec.key].got) + '</span> / ' + sec.marks;
    return el('<div><div class="sec-head"><span class="sec-k">Section ' + sec.key + '</span><span class="sec-t">' + esc(sec.title) + '</span><span class="sec-m">' + m + '</span></div>' +
      (mode === 'key' ? '' : '<p class="sec-i">' + esc(sec.instr) + '</p>') + '</div>');
  }
  function wordBankBlock(exam) {
    return el('<div class="wordbank" role="note" aria-label="Word bank"><div class="wb-t">Word bank</div><div class="wb-w">' +
      exam.wordBank.map(function (w) { return '<span>' + esc(w.text) + '</span>'; }).join('') +
      '</div><div class="wb-n">Some words are not used.</div></div>');
  }
  function marksLabel(it) { return it.marks === 1 ? '[1]' : '[' + it.marks + ' marks]'; }

  function optsHtml(it, mode, ans, r, pfx) {
    var isTf = it.type === 'tf';
    var values = isTf ? [true, false] : [0, 1, 2, 3];
    var labels = isTf ? ['True', 'False'] : it.opts;
    var correct = isTf ? it.q.answer : it.correct;
    var short = !isTf && labels.every(function (o) { return o.length <= 30; });
    var html = '<div class="opts' + (isTf ? ' tf' : '') + (short ? ' two' : '') + '" role="radiogroup" aria-labelledby="' + pfx + 'qt' + it.n + '">';
    values.forEach(function (v, i) {
      var chosen = ans === v, cls = 'opt';
      if (mode === 'graded') {
        if (v === correct) cls += ' right';
        if (chosen && v !== correct) cls += ' wrongpick';
      }
      html += '<button type="button" class="' + cls + '" role="radio" aria-checked="' + (chosen ? 'true' : 'false') + '" data-v="' + v + '"' +
        (mode !== 'answer' ? ' disabled' : ' tabindex="' + (chosen || (ans === undefined && i === 0) ? '0' : '-1') + '"') +
        ' aria-label="' + esc((isTf ? '' : '(' + letter(i) + ') ') + plain(labels[i])) + '">' +
        '<span class="bub" aria-hidden="true">' + (isTf ? (v ? 'T' : 'F') : letter(i)) + '</span><span class="ot">' + rich(labels[i]) + '</span></button>';
    });
    html += '</div>';
    if (mode === 'graded' && r && r.status !== 'correct') {
      html += '<div class="pen-note pen">' + (isTf ? (correct ? 'True' : 'False') : 'Answer: (' + letter(correct) + ')') + '</div>';
    }
    return html;
  }
  function fillHtml(it, mode, ans, r, pfx) {
    var q = it.q, a = Array.isArray(ans) ? ans : [], many = q.blanks.length > 1;
    return codeHtml(q) + qfigHtml(q) + '<div class="q-text" id="' + pfx + 'qt' + it.n + '">' + rich(q.q).replace(/\{\{(\d+)\}\}/g, function (_, k) {
      k = +k;
      var num = many ? '<span class="blank-num">(' + 'i ii iii iv v'.split(' ')[k] + ')</span>' : '';
      if (mode === 'answer') {
        var v = a[k] || '';
        return '<input class="blank" data-k="' + k + '" value="' + esc(v) + '" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Question ' + it.n + ', blank ' + (k + 1) + '" style="width:' + Math.max(9, v.length + 2) + 'ch">' + num;
      }
      if (mode === 'key') return '<span class="blank-shown"><b>' + esc(q.blanks[k][0]) + '</b></span>' + num;
      var given = String(a[k] || '').trim(), ok = r.detail.res[k];
      return '<span class="blank-shown"><span class="given' + (ok ? '' : given ? ' bad' : ' empty') + '">' + (given ? esc(given) : '______') + '</span></span>' + num +
        (ok ? '<span class="pen fix" aria-label="correct">✓</span>' : '<span class="pen fix">' + esc(q.blanks[k][0]) + '</span>');
    }) + '</div>';
  }
  function listHtml(it, mode, ans, r, pfx) {
    var q = it.q, n = q.need, lines = Array.isArray(ans) ? ans : [], i;
    var html = '<div class="q-text" id="' + pfx + 'qt' + it.n + '">' + rich(q.q) + (q.need < q.items.length ? ' <span style="color:#6a6a66">(any ' + q.need + ')</span>' : '') + '</div>';
    if (mode === 'answer') {
      html += '<ol class="lines">';
      for (i = 0; i < n; i++) html += '<li><input data-k="' + i + '" value="' + esc(lines[i] || '') + '" autocomplete="off" spellcheck="false" aria-label="Question ' + it.n + ', item ' + (i + 1) + '"></li>';
      return html + '</ol>';
    }
    if (mode === 'key') return html + '<ol class="lines">' + q.items.map(function (x) { return '<li>' + rich(x.text) + '</li>'; }).join('') + '</ol>';
    html += '<ol class="lines">';
    for (i = 0; i < n; i++) {
      var t = String(lines[i] || '').trim(), m = r.detail.lineTo[i];
      html += '<li><div class="line-shown"><span class="given' + (t ? (m > -1 ? '' : ' bad') : ' empty') + '">' + (t ? esc(t) : '______') + '</span>' +
        (t ? '<span class="pen tick">' + (m > -1 ? '✓' : '✗') + '</span>' : '') + '</div></li>';
    }
    html += '</ol>';
    var missing = q.items.filter(function (_, k) { return r.detail.itemTo[k] === -1; }).map(function (x) { return x.text; });
    if (r.detail.count < n && missing.length) html += '<div class="pen-note pen">' + (q.need < q.items.length ? 'Could also be: ' : 'Missing: ') + esc(missing.join('; ')) + '</div>';
    return html;
  }
  function pointsList(it, r, editable) {
    var q = it.q, out = '';
    var lst = r ? r.detail.list : (q.listPart ? q.listPart.items.map(function (p, i) { return { key: 'l' + i, text: p.text }; }) : null);
    var pts = r ? r.detail.points : q.points.map(function (p, i) { return { key: 'p' + i, text: p.text }; });
    function row(p) {
      if (!editable) return '<li>• ' + rich(p.text) + '</li>';
      return '<li><label><input type="checkbox" data-pt="' + p.key + '"' + (p.on ? ' checked' : '') + '><span>' + rich(p.text) +
        (p.auto ? '<span class="auto">found in your answer</span>' : '') + '</span></label></li>';
    }
    if (lst) out += '<li class="pt-h">' + esc(q.listPart.label) + ' (' + Math.round(q.listPart.weight * 100) + '% of the marks)</li>' + lst.map(row).join('');
    var needTxt = q.need < q.points.length ? ' (any ' + q.need + ')' : '';
    out += '<li class="pt-h">' + (editable ? 'Key points: tick the ones you covered' : 'Key points') + needTxt + '</li>' + pts.map(row).join('');
    return '<ul class="points">' + out + '</ul>';
  }
  /* Drawing questions (q.figure): a drawing space on the paper, and the model drawing in the key and marked paper. */
  function figureHtml(q) {
    var f = q.figure && EC.FIGURES && EC.FIGURES[q.figure];
    if (!f) return '';
    return '<figure class="fig"><div class="pt-h">Model drawing</div>' + f.svg + '<figcaption>' + esc(f.title) + '</figcaption></figure>';
  }
  /* A diagram or table printed with the question (q.qfig). */
  function qfigHtml(q) {
    var f = q.qfig && EC.FIGURES && EC.FIGURES[q.qfig];
    return f ? '<figure class="qfig" aria-label="' + esc(f.title) + '">' + f.svg + '</figure>' : '';
  }
  /* Choice + justification questions (q.choices): lettered options in the instructor's order. */
  function caseOptsHtml(it, mode, ans, pfx) {
    var q = it.q, chosen = ans && typeof ans.choice === 'number' ? ans.choice : null;
    var html = '<div class="opts" role="radiogroup" aria-labelledby="' + pfx + 'qt' + it.n + '">';
    q.choices.forEach(function (label, i) {
      var cls = 'opt';
      if (mode === 'graded') { if (i === q.answer) cls += ' right'; if (chosen === i && i !== q.answer) cls += ' wrongpick'; }
      html += '<button type="button" class="' + cls + '" role="radio" aria-checked="' + (chosen === i) + '" data-v="' + i + '"' +
        (mode !== 'answer' ? ' disabled' : ' tabindex="' + (chosen === i || (chosen === null && i === 0) ? '0' : '-1') + '"') +
        ' aria-label="' + esc('(' + letter(i) + ') ' + plain(label)) + '"><span class="bub" aria-hidden="true">' + letter(i) + '</span><span class="ot">' + rich(label) + '</span></button>';
    });
    return html + '</div>';
  }
  function drawSpaceHtml(q) {
    if (!q.figure) return '';
    return '<div class="draw-box" aria-hidden="true"><span>Drawing space: draw your labeled diagram here. On screen, draw it on paper and list its labels above; the model drawing appears after you submit.</span></div>';
  }
  function writtenHtml(it, mode, ans, r, pfx) {
    var q = it.q, text = ans && ans.text ? ans.text : '';
    var html = '<div class="q-text" id="' + pfx + 'qt' + it.n + '">' + rich(q.q) + '</div>' + codeHtml(q) + qfigHtml(q);
    if (q.choices) html += mode === 'key' ? '<div><b>(' + letter(q.answer) + ')</b> ' + rich(q.choices[q.answer]) + '</div>' : caseOptsHtml(it, mode, ans, pfx) + '<div class="just-l">Justification</div>';
    if (mode === 'answer') return html + '<textarea class="ruled' + (q.kind === 'code' ? ' codebox' : '') + '" rows="' + (it.type === 'exp' ? (q.choices ? 5 : q.figure ? 6 : 9) : 5) + '"' + (q.kind === 'code' ? ' autocapitalize="off" autocorrect="off"' : '') + ' aria-labelledby="' + pfx + 'qt' + it.n + '" spellcheck="true">' + esc(text) + '</textarea>' + drawSpaceHtml(q);
    if (mode === 'key') return html + pointsList(it, null, false) + '<div class="model"><div class="pt-h">Model answer</div>' + modelHtml(q) + '</div>' + figureHtml(q);
    return html + '<div class="answer-shown' + (q.kind === 'code' ? ' codebox' : '') + (text.trim() ? '' : ' empty') + '">' + (text.trim() ? esc(text) : 'No answer written.') + '</div>' +
      (q.choices && !r.detail.pick.ok ? '<p class="lock-note">' + (r.detail.pick.chosen === null ? 'No option chosen' : 'Wrong option') + ': the correct choice is (' + letter(q.answer) + '), so the justification earns no marks.</p><div class="locked">' + pointsList(it, null, false) + '</div>' : pointsList(it, r, true)) + '<div class="model"><div class="pt-h">Model answer</div>' + modelHtml(q) + '</div>' + figureHtml(q);
  }
  function keyChoice(it) {
    if (it.type === 'tf') return '<div><b>' + (it.q.answer ? 'True' : 'False') + '</b></div>';
    return '<div><b>(' + letter(it.correct) + ')</b> ' + rich(it.opts[it.correct]) + '</div>';
  }
  function questionBlock(it, mode, ans, r, pfx) {
    pfx = pfx || '';
    var body;
    if (it.type === 'mcq' || it.type === 'tf') body = '<div class="q-text" id="' + pfx + 'qt' + it.n + '">' + rich(it.q.q) + '</div>' + codeHtml(it.q) + qfigHtml(it.q) + (mode === 'key' ? keyChoice(it) : optsHtml(it, mode, ans, r, pfx));
    else if (it.type === 'fill') body = fillHtml(it, mode, ans, r, pfx);
    else if (it.type === 'list') body = listHtml(it, mode, ans, r, pfx);
    else body = writtenHtml(it, mode, ans, r, pfx);
    if (mode !== 'answer') {
      var ex = cleanExplain(it.q.explain);
      body += '<div class="q-ref">' + esc(slideRef(it.q)) + ' · ' + DIFF_NAME[it.difficulty] + (ex && (mode === 'key' || (r && r.status !== 'correct')) ? ' · ' + rich(ex) : '') + '</div>';
    }
    var margin = '', marks = marksLabel(it);
    if (mode === 'graded') {
      margin = r.status === 'wrong' || r.status === 'blank' ? '✗' : '✓';
      marks = '<span class="pen" data-mark="' + it.id + '">' + fmtMark(r.got) + '</span>/' + it.marks;
    }
    return el('<div class="q q-' + it.type + (mode === 'graded' ? ' st-' + r.status : '') + '"' + (pfx ? '' : ' id="q' + it.n + '"') + ' data-n="' + it.n + '" data-id="' + it.id + '" data-type="' + it.type + '" tabindex="-1">' +
      '<div class="q-margin" aria-hidden="true" data-tick="' + it.id + '">' + margin + '</div>' +
      '<div class="q-n">' + it.n + '.</div><div class="q-body">' + body + '</div><div class="q-m">' + marks + '</div></div>');
  }
  /* opts: { mistakesOnly, wordBank, pfx } */
  function paperBlocks(exam, mode, res, answers, opts) {
    opts = opts || {};
    var blocks = [{ el: headerBlock(exam, mode, res) }, { el: instrBlock(exam, mode) }];
    exam.sections.forEach(function (sec) {
      var items = sec.items;
      if (mode === 'graded' && opts.mistakesOnly) items = items.filter(function (it) { return res.items[it.id].status !== 'correct'; });
      if (!items.length) return;
      blocks.push({ el: sectionHead(sec, mode, res), keepNext: true });
      if (sec.key === 'B' && opts.wordBank && exam.wordBank.length && mode === 'answer') blocks.push({ el: wordBankBlock(exam), keepNext: true });
      items.forEach(function (it) {
        blocks.push({ el: questionBlock(it, mode, answers[it.id], res ? res.items[it.id] : null, opts.pfx), item: it });
      });
    });
    if (mode === 'graded' && opts.mistakesOnly && blocks.length === 2) {
      blocks.push({ el: el('<p class="pen" style="font-size:1.6em;margin:24px 0">No mistakes on this paper. Well done!</p>') });
    }
    return blocks;
  }
  function keyBlocks(exam) {
    var blocks = [{ el: headerBlock(exam, 'key') }, { el: instrBlock(exam, 'key') }];
    exam.sections.forEach(function (sec) {
      blocks.push({ el: sectionHead(sec, 'key'), keepNext: true });
      sec.items.forEach(function (it) { blocks.push({ el: questionBlock(it, 'key', null, null, 'k-') }); });
    });
    return blocks;
  }
  function footText(exam) { return CO.code + ' ' + CO.short + ' · ' + (exam.kind === 'retry' ? 'Practice paper' : 'Midterm') + ' · ' + exam.code; }

  /* =========================================================
     Pagination into A4 sheets
     ========================================================= */
  function newSheet() {
    return el('<section class="sheet"><div class="sheet-body"></div><footer class="sheet-foot"><span>&nbsp;</span><span>&nbsp;</span></footer></section>');
  }
  function paginate(container, blocks, footLeft) {
    var active = document.activeElement, selStart = null, selEnd = null;
    var hadFocus = active && container.contains(active) ? active : null;
    if (hadFocus && 'selectionStart' in hadFocus) { try { selStart = hadFocus.selectionStart; selEnd = hadFocus.selectionEnd; } catch (e) { /* not text */ } }
    container.innerHTML = '';
    var pages = [], sheet = null, body = null;
    function open() { sheet = newSheet(); container.appendChild(sheet); pages.push(sheet); body = sheet.firstElementChild; }
    open();
    var groups = [], g = [];
    blocks.forEach(function (b) { g.push(b.el); if (!b.keepNext) { groups.push(g); g = []; } });
    if (g.length) groups.push(g);
    groups.forEach(function (group) {
      if (sheet.classList.contains('tall')) open();
      var before = body.children.length;
      group.forEach(function (x) { body.appendChild(x); });
      if (body.scrollHeight > body.clientHeight + 1 && before > 0) {
        open();
        group.forEach(function (x) { body.appendChild(x); });
      }
      if (body.scrollHeight > body.clientHeight + 1) sheet.classList.add('tall');
    });
    pages.forEach(function (p, i) {
      var f = p.lastElementChild;
      f.firstElementChild.textContent = footLeft;
      f.lastElementChild.textContent = 'Page ' + (i + 1) + ' of ' + pages.length;
    });
    if (hadFocus && document.contains(hadFocus)) {
      hadFocus.focus({ preventScroll: true });
      if (selStart !== null) { try { hadFocus.setSelectionRange(selStart, selEnd); } catch (e) { /* ignore */ } }
    }
    return pages.length;
  }
  /* One continuous sheet (no page breaks): the marked paper in Flow view. */
  function flowInto(container, blocks, footLeft) {
    container.innerHTML = '';
    var sheet = newSheet();
    sheet.classList.add('flow');
    blocks.forEach(function (b) { sheet.firstElementChild.appendChild(b.el); });
    sheet.lastElementChild.firstElementChild.textContent = footLeft;
    sheet.lastElementChild.lastElementChild.textContent = '';
    container.appendChild(sheet);
  }
  function layout(entry) {
    if (entry.flow) flowInto(entry.container, entry.blocks, entry.foot);
    else paginate(entry.container, entry.blocks, entry.foot);
  }
  /* A4 zoom: pages are always laid out at true A4 size (same pages as print) and
     scaled to fit the screen, like a PDF viewer. RT.zoom = null means "fit". */
  var A4_PX = 794 + 16;
  function fitZoom() { return Math.min(1, (document.documentElement.clientWidth - 4) / A4_PX); }
  function zoomSteps(fit) {
    var out = [fit];
    [0.6, 0.75, 1, 1.25, 1.5].forEach(function (z) { if (z > fit + 0.03) out.push(z); });
    return out;
  }
  function zoomBarHtml() {
    return '<div class="zoombar no-print" id="zoombar" role="group" aria-label="Page zoom" hidden>' +
      '<button type="button" data-z="-1" aria-label="Zoom out">−</button>' +
      '<button type="button" data-z="0" id="zoom-l" aria-label="Fit page to screen">Fit</button>' +
      '<button type="button" data-z="1" aria-label="Zoom in">+</button></div>';
  }
  function applyZoom(box) {
    if (!box) return;
    var fit = fitZoom(), z = RT.zoom == null ? fit : Math.max(fit, RT.zoom);
    box.style.zoom = String(z);
    var bar = $('#zoombar');
    if (!bar) return;
    bar.hidden = fit >= 0.999 && RT.zoom == null;
    $('#zoom-l').textContent = (RT.zoom == null ? 'Fit ' : '') + Math.round(z * 100) + '%';
    $('[data-z="-1"]', bar).disabled = z <= fit + 0.001;
    $('[data-z="1"]', bar).disabled = z >= 1.5 - 0.001;
  }
  function zoomBy(dir, box) {
    var fit = fitZoom(), steps = zoomSteps(fit), cur = RT.zoom == null ? fit : RT.zoom, next;
    if (dir === 0) next = null;
    else if (dir > 0) { next = steps.filter(function (z) { return z > cur + 0.001; })[0]; if (next === undefined) return; }
    else { var lower = steps.filter(function (z) { return z < cur - 0.001; }); if (!lower.length) return; next = lower[lower.length - 1]; }
    if (next != null && Math.abs(next - fit) < 0.001) next = null;
    var doc = document.documentElement, frac = (window.scrollY + window.innerHeight / 2) / doc.scrollHeight;
    RT.zoom = next;
    applyZoom(box);
    window.scrollTo(0, Math.max(0, frac * doc.scrollHeight - window.innerHeight / 2));
  }
  function bindZoom(box) {
    var bar = $('#zoombar');
    if (bar) bar.addEventListener('click', function (e) { var b = e.target.closest('[data-z]'); if (b && !b.disabled) zoomBy(+b.getAttribute('data-z'), box); });
    applyZoom(box);
  }
  /* Web fonts can arrive after the first layout; re-paginate once they are ready. */
  function afterFonts(fn) { if (document.fonts && document.fonts.status !== 'loaded') document.fonts.ready.then(fn); }

  var lastWidth = window.innerWidth, resizeT = null;
  window.addEventListener('resize', function () {
    clearTimeout(resizeT);
    resizeT = setTimeout(function () {
      if (Math.abs(window.innerWidth - lastWidth) < 2) return;
      lastWidth = window.innerWidth;
      RT.paged.forEach(function (p) {
        if (!p.container.isConnected) return;
        if (p.a4) applyZoom(p.container); else if (!p.flow) paginate(p.container, p.blocks, p.foot);
      });
    }, 180);
  });

  /* =========================================================
     Printing: a separate A4 copy is built for every print, so it works
     from Focus mode, A4 mode, the result page, and on phones.
     ========================================================= */
  function cleanupPrint() { $$('.print-area').forEach(function (x) { x.remove(); }); }
  function preparePrint(kind) {
    cleanupPrint();
    var exam = RT.exam, cur = S.current;
    if (!exam || !cur) return 0;
    var area = el('<div class="print-area" aria-hidden="true"><div class="sheets"></div></div>');
    document.body.appendChild(area);
    var blocks, foot = footText(exam), opts = { wordBank: S.settings.wordBank, pfx: 'p-' };
    if (kind === 'key') { blocks = keyBlocks(exam); foot = 'Answer key · ' + exam.code; }
    else if (kind === 'blank') blocks = paperBlocks(exam, 'answer', null, {}, opts);
    else if (kind === 'marked') blocks = paperBlocks(exam, 'graded', C.gradeExam(exam, cur.answers), cur.answers, { pfx: 'p-' });
    else blocks = paperBlocks(exam, 'answer', null, cur.answers, opts);
    return paginate(area.firstElementChild, blocks, foot);
  }
  function printAs(kind) {
    preparePrint(kind);
    setTimeout(function () { window.print(); setTimeout(cleanupPrint, 500); }, 80);
  }
  window.addEventListener('beforeprint', function () {
    if ($('.print-area')) return;
    if (RT.view === 'exam') preparePrint('mine');
    else if (RT.view === 'result') preparePrint('marked');
  });
  window.addEventListener('afterprint', function () { setTimeout(cleanupPrint, 100); });

  /* =========================================================
     Exam view (shared chrome)
     ========================================================= */
  function viewMode() { return S.settings.view === 'a4' ? 'a4' : 'focus'; }
  function renderExam() {
    var cur = S.current, exam = examFor(cur);
    RT.exam = exam;
    cur.answers = cur.answers || {};
    cur.flags = cur.flags || {};
    cur.idx = Math.max(0, Math.min(exam.items.length - 1, cur.idx || 0));
    var mode = viewMode();
    var title = exam.kind === 'retry' ? 'Practice · my mistakes' : 'Midterm · ' + exam.code;
    main.innerHTML =
      '<div class="exam-top" role="region" aria-label="Exam controls"><div class="et-row">' +
      '<button type="button" class="icon-btn" id="ex-exit" aria-label="Leave exam. Your answers are saved." title="Leave (answers are saved)">' + I.x + '</button>' +
      '<div class="et-title"><b>' + esc(title) + '</b><span>' + levelName(exam.cfg) + ' · ' + plural(exam.total, 'mark') + ' · ' + plural(exam.items.length, 'question') + '</span></div>' +
      '<span class="pill" id="tb-timer" role="timer">' + I.clock + '<span>--:--</span></span>' +
      '<div class="seg sm" role="group" aria-label="Exam view"><button type="button" data-view="focus" aria-pressed="' + (mode === 'focus') + '">Focus</button><button type="button" data-view="a4" aria-pressed="' + (mode === 'a4') + '">A4</button></div>' +
      '<button type="button" class="icon-btn' + (mode === 'focus' ? ' hide-sm' : '') + '" id="btn-nav" aria-label="All questions" title="All questions">' + I.grid + '</button>' +
      '<div class="tb-menu hide-sm"><button type="button" class="icon-btn" id="btn-print" aria-haspopup="true" aria-expanded="false" aria-label="Print" title="Print">' + I.print + '</button>' +
      '<div class="menu" id="menu-print" hidden><button type="button" data-print="blank">' + I.paper + 'Blank exam paper</button><button type="button" data-print="mine">' + I.paper + 'My answer sheet</button><button type="button" data-print="key">' + I.key + 'Answer key</button></div></div>' +
      '<button type="button" class="btn primary sm" id="btn-submit">Submit</button>' +
      '</div><div class="progress" aria-hidden="true"><i id="tb-bar"></i></div></div>' +
      (mode === 'a4'
        ? '<div class="desk a4-desk"><div id="sheets" class="sheets a4" aria-label="Exam paper"></div></div>' + zoomBarHtml()
        : '<div class="focus" id="focus"></div>' +
          '<div class="focus-bar"><div class="focus-bar-in">' +
          '<button type="button" class="btn" id="f-prev" aria-label="Previous question">' + I.left + '<span class="lbl">Previous</span></button>' +
          '<button type="button" class="btn" id="f-flag" aria-pressed="false">' + I.flag + '<span class="lbl">Flag</span></button>' +
          '<div class="grow"><button type="button" class="btn ghost" id="f-count" aria-label="All questions">' + I.grid + '<span class="count" id="f-count-t">1 / ' + exam.items.length + '</span></button></div>' +
          '<button type="button" class="btn primary" id="f-next"><span class="lbl" id="f-next-t">Next</span>' + I.right + '</button>' +
          '</div></div>');

    $('#ex-exit').addEventListener('click', function () { save(true); go('home'); });
    $$('.exam-top [data-view]').forEach(function (b) {
      b.addEventListener('click', function () {
        var v = b.getAttribute('data-view');
        if (v === viewMode()) return;
        S.settings.view = v; save(true);
        stopTimer(); closeDrawer();
        renderExam();
        window.scrollTo(0, 0);
      });
    });
    $('#btn-nav').addEventListener('click', openDrawer);
    var bp = $('#btn-print'), mp = $('#menu-print');
    bp.addEventListener('click', function () { toggleMenu(bp, mp); });
    mp.addEventListener('click', function (e) { var b = e.target.closest('[data-print]'); if (b) { closeMenus(); printAs(b.getAttribute('data-print')); } });
    $('#btn-submit').addEventListener('click', confirmSubmit);

    if (mode === 'a4') renderA4(exam); else renderFocus(exam);
    updateProgress();
    startTimer(exam);
  }

  function updateProgress() {
    var exam = RT.exam, cur = S.current;
    if (!exam || !cur) return 0;
    var n = answeredCount(exam, cur);
    var bar = $('#tb-bar'); if (bar) bar.style.width = (n / exam.items.length * 100) + '%';
    var dr = $('#drawer');
    if (dr && !cur.submitted) exam.items.forEach(function (it) {
      var b = $('[data-go="' + it.n + '"]', dr);
      if (b) { b.classList.toggle('done', C.isAnswered(it, cur.answers[it.id])); b.classList.toggle('flag', !!cur.flags[it.id]); }
    });
    return n;
  }

  /* Shared answer handling (Focus card and A4 sheets). */
  function itemById(id) { var ex = RT.exam; for (var i = 0; i < ex.items.length; i++) if (ex.items[i].id === id) return ex.items[i]; return null; }
  function choose(it, raw) {
    var v = it.type === 'tf' ? (raw === true || raw === 'true') : +raw;
    // Choice + justification keeps the written reason next to the chosen letter.
    if (it.q.choices) S.current.answers[it.id] = Object.assign({ text: '' }, S.current.answers[it.id], { choice: v });
    else S.current.answers[it.id] = v;
    $$('[data-id="' + it.id + '"] [data-v]').forEach(function (o) {
      var on = o.getAttribute('data-v') === String(v);
      o.setAttribute('aria-checked', on ? 'true' : 'false');
      o.tabIndex = on ? 0 : -1;
    });
    save();
    updateProgress();
  }
  function bindAnswers(root) {
    root.addEventListener('click', function (e) {
      var opt = e.target.closest('[data-v]');
      if (opt && !opt.disabled) {
        var it = itemById(opt.closest('[data-id]').getAttribute('data-id'));
        choose(it, opt.getAttribute('data-v'));
        if (RT.setIdx) RT.setIdx(it.n - 1, false);
        return;
      }
      var w = e.target.closest('[data-word]');
      if (w) insertWord(w.getAttribute('data-word'), w.closest('[data-id]'));
    });
    root.addEventListener('input', function (e) {
      var t = e.target;
      if (t.hasAttribute('data-profile')) { S.profile[t.getAttribute('data-profile')] = t.value; save(); return; }
      var host = t.closest('[data-id]');
      if (!host) return;
      var it = itemById(host.getAttribute('data-id'));
      if (it.type === 'fill' || it.type === 'list') {
        var arr = Array.isArray(S.current.answers[it.id]) ? S.current.answers[it.id].slice() : [];
        arr[+t.getAttribute('data-k')] = t.value;
        S.current.answers[it.id] = arr;
        if (t.classList.contains('blank')) t.style.width = Math.max(9, t.value.length + 2) + 'ch';
        if (t.classList.contains('fblank')) t.style.width = Math.max(7, t.value.length + 2) + 'ch';
        if (it.type === 'fill') markUsedWords();
      } else if (it.type === 'def' || it.type === 'exp') {
        S.current.answers[it.id] = Object.assign({}, it.q.choices ? S.current.answers[it.id] : null, { text: t.value });
        var wc = $('#wc'); if (wc) wc.textContent = wordCount(t.value);
      }
      save();
      updateProgress();
    });
    root.addEventListener('focusin', function (e) {
      if (e.target.matches('input.fblank, input.blank')) RT.lastBlank = e.target;
      var host = e.target.closest('[data-id]');
      if (host && RT.setIdx) { var it = itemById(host.getAttribute('data-id')); if (it && it.n - 1 !== S.current.idx) RT.setIdx(it.n - 1, false); }
    });
  }
  function wordCount(t) { var n = String(t || '').trim() ? String(t).trim().split(/\s+/).length : 0; return plural(n, 'word'); }

  /* Word bank (Focus mode): tap a word to drop it into the active or next empty blank. */
  function insertWord(word, host) {
    if (!host) return;
    var blanks = $$('input.fblank', host);
    var target = RT.lastBlank && host.contains(RT.lastBlank) && !RT.lastBlank.value.trim() ? RT.lastBlank : null;
    if (!target) target = blanks.filter(function (b) { return !b.value.trim(); })[0] || (RT.lastBlank && host.contains(RT.lastBlank) ? RT.lastBlank : blanks[0]);
    if (!target) return;
    target.value = word;
    target.dispatchEvent(new Event('input', { bubbles: true }));
    var next = blanks.filter(function (b) { return !b.value.trim(); })[0];
    RT.lastBlank = next || target;
    if (next) next.focus({ preventScroll: true });
  }
  function markUsedWords() {
    var exam = RT.exam, used = new Set();
    exam.items.forEach(function (it) {
      if (it.type !== 'fill') return;
      (S.current.answers[it.id] || []).forEach(function (v) { if (v) used.add(C.compact(v)); });
    });
    $$('[data-word]').forEach(function (b) { b.classList.toggle('used', used.has(C.compact(b.getAttribute('data-word')))); });
  }

  /* =========================================================
     Focus mode: one question at a time
     ========================================================= */
  function renderFocus(exam) {
    var box = $('#focus');
    bindAnswers(box);
    RT.setIdx = function (i, show) {
      i = Math.max(0, Math.min(exam.items.length - 1, i));
      S.current.idx = i;
      if (show) drawCard(exam, i);
      save();
    };
    function step(d, byKey) {
      var i = S.current.idx + d;
      if (i < 0 || i >= exam.items.length) return;
      RT.setIdx(i, true);
      window.scrollTo(0, 0);
      focusCard(byKey);
    }
    RT.step = step;
    $('#f-prev').addEventListener('click', function () { step(-1); });
    $('#f-next').addEventListener('click', function () {
      if (S.current.idx >= exam.items.length - 1) confirmSubmit(); else step(1);
    });
    $('#f-flag').addEventListener('click', function () {
      var it = exam.items[S.current.idx];
      if (S.current.flags[it.id]) delete S.current.flags[it.id]; else S.current.flags[it.id] = true;
      save(); paintFlag(it); updateProgress();
    });
    $('#f-count').addEventListener('click', openDrawer);
    drawCard(exam, S.current.idx);
    RT.keyHandler = function (e) { focusKeys(e, exam); };
  }
  function focusCard(intoInput) {
    var card = $('.qcard');
    if (!card) return;
    var inp = intoInput ? card.querySelector('input, textarea') : null;
    (inp || card).focus({ preventScroll: true });
  }
  function paintFlag(it) {
    var on = !!S.current.flags[it.id], b = $('#f-flag');
    if (!b) return;
    b.setAttribute('aria-pressed', on ? 'true' : 'false');
    b.classList.toggle('flagged', on);
    b.querySelector('.lbl').textContent = on ? 'Flagged' : 'Flag';
  }
  function drawCard(exam, i) {
    var it = exam.items[i], ans = S.current.answers[it.id], q = it.q;
    var sec = exam.sections.filter(function (s) { return s.key === it.section; })[0];
    var body = '', k;
    if (it.type === 'mcq' || it.type === 'tf') {
      var isTf = it.type === 'tf';
      var vals = isTf ? [true, false] : [0, 1, 2, 3];
      var labels = isTf ? ['True', 'False'] : it.opts;
      body = '<div class="choices' + (isTf ? ' tf' : '') + '" role="radiogroup" aria-labelledby="fq">' + vals.map(function (v, j) {
        var on = ans === v;
        return '<button type="button" class="choice" role="radio" aria-checked="' + on + '" data-v="' + v + '">' +
          '<span class="key" aria-hidden="true">' + (isTf ? (v ? 'T' : 'F') : 'ABCD'.charAt(j)) + '</span><span>' + rich(labels[j]) + '</span></button>';
      }).join('') + '</div>';
    } else if (it.type === 'fill') {
      var a = Array.isArray(ans) ? ans : [], many = q.blanks.length > 1;
      body = '<p class="fill-text">' + rich(q.q).replace(/\{\{(\d+)\}\}/g, function (_, kk) {
        kk = +kk; var v = a[kk] || '';
        return '<input class="fblank" data-k="' + kk + '" value="' + esc(v) + '" autocomplete="off" autocapitalize="off" spellcheck="false" enterkeyhint="next" aria-label="Blank ' + (kk + 1) + '" style="width:' + Math.max(7, v.length + 2) + 'ch">' + (many ? '<sup>(' + (kk + 1) + ')</sup>' : '');
      }) + '</p>';
      if (S.settings.wordBank && exam.wordBank.length) {
        body += '<div class="wb"><div class="wb-h">Word bank · Section B</div><div class="wb-list">' +
          exam.wordBank.map(function (w) { return '<button type="button" data-word="' + esc(w.text) + '">' + esc(w.text) + '</button>'; }).join('') +
          '</div><div class="wb-n">Tap a word to place it in the blank. Some words are not used.</div></div>';
      }
    } else if (it.type === 'list') {
      var lines = Array.isArray(ans) ? ans : [];
      body = '<ol class="list-inputs">';
      for (k = 0; k < q.need; k++) body += '<li><input data-k="' + k + '" value="' + esc(lines[k] || '') + '" placeholder="Item ' + (k + 1) + '" autocomplete="off" enterkeyhint="next" aria-label="Item ' + (k + 1) + '"></li>';
      body += '</ol>';
    } else {
      var text = ans && ans.text ? ans.text : '';
      if (q.choices) body = '<div class="choices" role="radiogroup" aria-labelledby="fq">' + q.choices.map(function (label, j) {
        return '<button type="button" class="choice" role="radio" aria-checked="' + (!!ans && ans.choice === j) + '" data-v="' + j + '"><span class="key" aria-hidden="true">' + 'ABC'.charAt(j) + '</span><span>' + rich(label) + '</span></button>';
      }).join('') + '</div><div class="just-l">Justification</div>';
      body += (q.figure ? '<p class="draw-note">✎ This question asks for a <b>labeled drawing</b>. Draw it on paper, list its labels here so they can be marked, then compare with the model drawing after you submit.</p>' : '') +
        '<textarea class="ftext' + (q.kind === 'code' ? ' codebox' : '') + '"' + (q.kind === 'code' ? ' autocapitalize="off" autocorrect="off" spellcheck="false"' : '') + ' aria-labelledby="fq" placeholder="' + (q.choices ? 'Why is this the best choice?' : q.figure ? 'List the parts and labels of your drawing, from top to bottom.' : q.kind === 'code' ? 'Write the code here.' : it.type === 'exp' ? 'Answer in full sentences. Each key point earns marks.' : 'Write a short, precise answer.') + '">' + esc(text) + '</textarea><div class="wc" id="wc">' + wordCount(text) + '</div>';
    }
    var extra = it.type === 'list' && q.need < q.items.length ? ' <span class="muted">(any ' + q.need + ')</span>' : '';
    var qText = it.type === 'fill' ? 'Fill in the blank' + (q.blanks.length > 1 ? 's' : '') + '.' : rich(q.q);
    $('#focus').innerHTML =
      '<article class="qcard" data-id="' + it.id + '" tabindex="-1" aria-labelledby="fq">' +
      '<div class="qc-sec">Section ' + it.section + ' · ' + esc(sec.title) + '</div><p class="qc-sec-i">' + esc(sec.instr) + '</p>' +
      '<div class="qc-meta"><span class="tag">' + UNIT + ' ' + it.lecture + '</span>' + diffTag(it.difficulty) + '<span class="tag marks">' + plural(it.marks, 'mark') + '</span></div>' +
      '<h2 class="qc-q" id="fq"><span class="n">Q' + it.n + '</span>' + qText + extra + '</h2>' + codeHtml(q) + qfigHtml(q) + body + '</article>' +
      '<p class="kbd-hint">Keys: A–D or T / F to answer · ← → to move · Enter for the next box</p>';
    $('#f-count-t').textContent = (i + 1) + ' / ' + exam.items.length;
    $('#f-prev').disabled = i === 0;
    $('#f-next-t').textContent = i === exam.items.length - 1 ? 'Finish' : 'Next';
    paintFlag(it);
    if (it.type === 'fill') markUsedWords();
  }
  function focusKeys(e, exam) {
    if (e.ctrlKey || e.metaKey || e.altKey || $('dialog[open]')) return;
    var t = e.target, k = e.key.toLowerCase();
    if (k === 'escape') { closeMenus(); closeDrawer(); return; }
    if ($('#drawer')) return;
    if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA')) {
      if (k === 'enter' && t.tagName === 'INPUT') {
        e.preventDefault();
        var all = $$('.qcard input'), pos = all.indexOf(t);
        if (pos > -1 && pos < all.length - 1) all[pos + 1].focus(); else RT.step(1, true);
      }
      return;
    }
    var it = exam.items[S.current.idx];
    if (it.type === 'mcq' && k.length === 1 && 'abcd'.indexOf(k) > -1) { e.preventDefault(); choose(it, 'abcd'.indexOf(k)); return; }
    if (it.q.choices && k.length === 1 && 'abc'.indexOf(k) > -1) { e.preventDefault(); choose(it, 'abc'.indexOf(k)); return; }
    if (it.type === 'tf' && (k === 't' || k === 'f' || k === 'a' || k === 'b')) { e.preventDefault(); choose(it, k === 't' || k === 'a'); return; }
    if (k === 'arrowright' || k === 'j') { e.preventDefault(); RT.step(1, true); return; }
    if (k === 'arrowleft' || k === 'k') { e.preventDefault(); RT.step(-1, true); }
  }

  /* =========================================================
     A4 paper mode: answer directly on the sheets
     ========================================================= */
  function renderA4(exam) {
    var box = $('#sheets');
    var blocks = paperBlocks(exam, 'answer', null, S.current.answers, { wordBank: S.settings.wordBank });
    RT.paged = [{ container: box, blocks: blocks, foot: footText(exam), a4: true }];
    paginate(box, blocks, footText(exam));
    bindAnswers(box);
    bindZoom(box);
    afterFonts(function () { if (box.isConnected) paginate(box, blocks, footText(exam)); });
    RT.setIdx = function (i, scroll) {
      i = Math.max(0, Math.min(exam.items.length - 1, i));
      S.current.idx = i;
      $$('.q.current', box).forEach(function (q) { q.classList.remove('current'); });
      var q = document.getElementById('q' + (i + 1));
      if (q) q.classList.add('current');
      if (scroll && q) q.scrollIntoView({ block: 'center', behavior: reduceMotion ? 'auto' : 'smooth' });
      save();
    };
    RT.step = function (d) { goToA4(exam, S.current.idx + d); };
    RT.setIdx(S.current.idx, S.current.idx > 0);
    RT.keyHandler = function (e) { a4Keys(e, exam); };
  }
  function goToA4(exam, i) {
    RT.setIdx(i, true);
    var it = exam.items[S.current.idx], q = document.getElementById('q' + it.n);
    if (!q) return;
    var target = (it.type === 'mcq' || it.type === 'tf' || it.q.choices) ? q : q.querySelector('input, textarea');
    (target || q).focus({ preventScroll: true });
  }
  function a4Keys(e, exam) {
    if (e.ctrlKey || e.metaKey || e.altKey || $('dialog[open]')) return;
    var t = e.target, k = e.key.toLowerCase();
    if (k === 'escape') { closeMenus(); closeDrawer(); return; }
    if ($('#drawer')) return;
    if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA')) return;
    var it = exam.items[S.current.idx];
    if (it && it.type === 'mcq' && k.length === 1 && 'abcd'.indexOf(k) > -1) { e.preventDefault(); choose(it, 'abcd'.indexOf(k)); return; }
    if (it && it.q.choices && k.length === 1 && 'abc'.indexOf(k) > -1) { e.preventDefault(); choose(it, 'abc'.indexOf(k)); return; }
    if (it && it.type === 'tf' && (k === 't' || k === 'f' || k === 'a' || k === 'b')) { e.preventDefault(); choose(it, k === 't' || k === 'a'); return; }
    if (k === 'arrowdown' || k === 'arrowright' || k === 'j') { e.preventDefault(); goToA4(exam, S.current.idx + 1); return; }
    if (k === 'arrowup' || k === 'arrowleft' || k === 'k') { e.preventDefault(); goToA4(exam, S.current.idx - 1); }
  }
  document.addEventListener('keydown', function (e) { if (RT.keyHandler) RT.keyHandler(e); });

  /* =========================================================
     Menus & question drawer
     ========================================================= */
  function closeMenus() {
    $$('.menu').forEach(function (m) { m.hidden = true; });
    $$('[aria-haspopup="true"]').forEach(function (b) { b.setAttribute('aria-expanded', 'false'); });
  }
  function toggleMenu(btn, menu) {
    var open = menu.hidden;
    closeMenus();
    menu.hidden = !open;
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open) { var f = menu.querySelector('button'); if (f) f.focus(); }
  }
  document.addEventListener('click', function (e) { if (!e.target.closest('.tb-menu')) closeMenus(); });

  function closeDrawer() {
    var d = $('#drawer'), b = $('#drawer-back');
    if (d) d.remove();
    if (b) b.remove();
  }
  /* In the exam: answered / flagged grid plus submit. On the result page: marks per question. */
  function openDrawer() {
    closeDrawer();
    var exam = RT.exam, cur = S.current, res = cur.submitted ? C.gradeExam(exam, cur.answers) : null;
    var html = exam.sections.map(function (s) {
      return '<div class="nav-sec">Section ' + s.key + ' · ' + esc(s.title) + '</div><div class="navgrid">' + s.items.map(function (it) {
        var cls = [];
        if (res) { var st = res.items[it.id].status; cls.push(st === 'correct' ? 'ok' : st === 'partial' ? 'part' : 'bad'); }
        else {
          if (C.isAnswered(it, cur.answers[it.id])) cls.push('done');
          if (cur.flags && cur.flags[it.id]) cls.push('flag');
          if ((cur.idx || 0) === it.n - 1) cls.push('cur');
        }
        return '<button type="button" data-go="' + it.n + '" class="' + cls.join(' ') + '" aria-label="Question ' + it.n + (res ? ', ' + res.items[it.id].status : '') + '">' + it.n + '</button>';
      }).join('') + '</div>';
    }).join('');
    var n = answeredCount(exam, cur), flags = Object.keys(cur.flags || {}).length;
    var legend = res
      ? '<div class="legend"><span><i style="background:var(--accent-soft);border-color:var(--accent-line)"></i>Full marks</span><span><i style="background:var(--amber-soft);border-color:#f1d3a1"></i>Part marks</span><span><i style="background:var(--red-soft);border-color:#f3c2c2"></i>No marks</span></div>'
      : '<div class="legend"><span><i class="d"></i>Answered (' + n + '/' + exam.items.length + ')</span><span><i class="f"></i>Flagged (' + flags + ')</span><span><i></i>Not answered</span></div>';
    var back = el('<div class="drawer-back" id="drawer-back"></div>');
    var d = el('<div class="drawer" id="drawer" role="dialog" aria-modal="true" aria-labelledby="drawer-t">' +
      '<h2 id="drawer-t">' + (res ? 'Jump to a question' : 'All questions') + '<button type="button" class="icon-btn" id="drawer-x" aria-label="Close">' + I.x + '</button></h2>' +
      html + legend + (res ? '' : '<div class="actions" style="margin-top:16px"><button type="button" class="btn primary block" id="drawer-submit">Submit exam</button></div>') + '</div>');
    document.body.appendChild(back);
    document.body.appendChild(d);
    back.addEventListener('click', closeDrawer);
    $('#drawer-x').addEventListener('click', closeDrawer);
    var sub = $('#drawer-submit'); if (sub) sub.addEventListener('click', function () { closeDrawer(); confirmSubmit(); });
    d.addEventListener('click', function (e) {
      var b = e.target.closest('[data-go]');
      if (!b) return;
      var n2 = +b.getAttribute('data-go');
      closeDrawer();
      if (RT.view === 'result') { jumpResult(n2); return; }
      if (viewMode() === 'focus') { RT.setIdx(n2 - 1, true); window.scrollTo(0, 0); focusCard(false); }
      else goToA4(exam, n2 - 1);
    });
    d.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeDrawer(); });
    var first = d.querySelector('.cur') || d.querySelector('[data-go]');
    if (first) first.focus();
  }

  /* =========================================================
     Timer
     ========================================================= */
  function startTimer(exam) {
    var cur = S.current, limit = exam.minutes * 60, pill = $('#tb-timer'), txt = pill && pill.lastElementChild;
    function paint() {
      if (!txt) return;
      if (S.settings.timer) {
        var left = limit - cur.elapsed;
        txt.textContent = clock(left);
        pill.classList.toggle('low', left <= 300);
        pill.setAttribute('aria-label', 'Time left ' + clock(left));
        pill.title = 'Time left';
      } else {
        txt.textContent = clock(cur.elapsed);
        pill.setAttribute('aria-label', 'Time used ' + clock(cur.elapsed));
        pill.title = 'Time used (timer off)';
      }
    }
    paint();
    var ticks = 0;
    RT.timer = setInterval(function () {
      cur.elapsed = (cur.elapsed || 0) + 1;
      paint();
      if (++ticks % 5 === 0) save();
      if (S.settings.timer && cur.elapsed >= limit) { stopTimer(); submitExam(true); }
    }, 1000);
  }
  function stopTimer() { if (RT.timer) { clearInterval(RT.timer); RT.timer = null; } }
  window.addEventListener('beforeunload', function () { save(true); });
  document.addEventListener('visibilitychange', function () { if (document.hidden) save(true); });

  /* =========================================================
     Submit & results
     ========================================================= */
  function confirmSubmit() {
    var exam = RT.exam, n = updateProgress(), total = exam.items.length, flags = Object.keys(S.current.flags || {}).length;
    ask({
      title: 'Submit your exam?',
      body: 'You have answered <b>' + n + ' of ' + total + '</b> questions.' + (n < total ? ' Unanswered questions score zero.' : '') +
        (flags ? ' You flagged ' + plural(flags, 'question') + ' to review.' : '') + ' You cannot change answers after submitting.',
      ok: 'Submit exam', cancel: 'Keep working'
    }).then(function (yes) { if (yes) submitExam(false); });
  }
  function historyEntry(exam, res) {
    var byL = {}, byS = {};
    Object.keys(res.byLecture).forEach(function (k) { byL[k] = [res.byLecture[k].got, res.byLecture[k].max]; });
    Object.keys(res.bySection).forEach(function (k) { byS[k] = [res.bySection[k].got, res.bySection[k].max]; });
    return { got: res.got, max: res.max, pct: res.pct, grade: res.grade, byLecture: byL, bySection: byS,
      items: exam.items.map(function (it) { return [it.id, res.items[it.id].got, it.marks]; }) };
  }
  function submitExam(timeUp) {
    stopTimer();
    var cur = S.current, exam = examFor(cur), res = C.gradeExam(exam, cur.answers);
    cur.submitted = true;
    cur.submittedAt = today();
    cur.rid = 'R' + Date.now().toString(36);
    S.history.push(Object.assign({ rid: cur.rid, code: cur.code, kind: cur.kind, level: exam.cfg.difficulty, date: cur.submittedAt, seconds: cur.elapsed }, historyEntry(exam, res)));
    if (S.history.length > 200) S.history = S.history.slice(-200);
    save(true);
    RT.mistakesOnly = false;
    finishSound(res.pct, timeUp);
    go('result');
    if (timeUp) ask({ title: 'Time is up', body: 'Your paper was collected and marked automatically.', ok: 'See my marks', cancel: false });
  }

  function ringSvg(pct) {
    var c = 2 * Math.PI * 52, off = c * (1 - Math.max(0, Math.min(100, pct)) / 100);
    return '<svg viewBox="0 0 120 120" aria-hidden="true"><circle class="ring-track" cx="60" cy="60" r="52" fill="none" stroke-width="12"/>' +
      '<circle class="ring-val" cx="60" cy="60" r="52" fill="none" stroke-width="12" stroke-linecap="round" stroke-dasharray="' + c.toFixed(1) + '" stroke-dashoffset="' + off.toFixed(1) + '"/></svg>';
  }
  function barRows(entries) {
    return '<table class="bars"><tbody>' + entries.map(function (e) {
      var p = e.max ? Math.round(e.got / e.max * 100) : 0;
      return '<tr><th scope="row">' + e.label + '</th><td><div class="bar" role="img" aria-label="' + p + '%"><i style="width:' + p + '%"></i></div></td><td class="num">' + fmtMark(e.got) + '/' + e.max + '<span class="pc"> · ' + p + '%</span></td></tr>';
    }).join('') + '</tbody></table>';
  }
  function summaryHtml(exam, res) {
    var cur = S.current, counts = { correct: 0, partial: 0, wrong: 0 };
    exam.items.forEach(function (it) { var s = res.items[it.id].status; counts[s === 'correct' ? 'correct' : s === 'partial' ? 'partial' : 'wrong']++; });
    var word = { A: 'Excellent work.', B: 'Very good.', C: 'Good. Review your mistakes.', D: 'Getting there.', F: 'Keep practising.' }[res.grade];
    return '<section class="card result-hero" aria-labelledby="res-h">' +
      '<div class="ring">' + ringSvg(res.pct) + '<div class="rt"><div><b data-total2>' + fmtMark(res.got) + '</b><span>of ' + res.max + '</span></div></div></div>' +
      '<div><h1 id="res-h"><span class="grade-chip" aria-label="Grade ' + res.grade + '">' + res.grade + '</span>' + res.pct + '% · ' + word + '</h1>' +
      '<p>' + esc(exam.kind === 'retry' ? 'Practice paper (my mistakes)' : 'Paper ' + exam.code) + ' · ' + levelName(exam.cfg) + ' · ' + clock(cur.elapsed || 0) + ' used</p>' +
      '<div class="stat-chips"><span class="tag">' + I.check + counts.correct + ' full marks</span><span class="tag">' + counts.partial + ' part marks</span><span class="tag">' + counts.wrong + ' no marks</span></div>' +
      '<p style="margin-top:10px">Written answers are auto-marked by key points. Tick or untick points on the paper below to correct the marking.</p></div></section>' +
      '<div class="breakdown"><section class="card" aria-label="By ' + UNIT.toLowerCase() + '"><h2>By ' + UNIT.toLowerCase() + '</h2>' +
      barRows(Object.keys(res.byLecture).sort().map(function (l) { return { label: UNIT + ' ' + l, got: res.byLecture[l].got, max: res.byLecture[l].max }; })) +
      '</section><section class="card" aria-label="By section"><h2>By section</h2>' +
      barRows(exam.sections.map(function (s) { return { label: s.key + ' · ' + esc(s.title), got: res.bySection[s.key].got, max: res.bySection[s.key].max }; })) +
      '</section></div>';
  }

  function renderResult() {
    var cur = S.current, exam = examFor(cur);
    RT.exam = exam;
    var res = C.gradeExam(exam, cur.answers), mode = viewMode();
    main.innerHTML =
      '<div class="container" id="summary" style="padding-bottom:14px">' + summaryHtml(exam, res) + '</div>' +
      '<div class="result-tools" role="region" aria-label="Marked paper tools"><div class="in">' +
      '<button type="button" class="btn sm" id="btn-mistakes" aria-pressed="' + (RT.mistakesOnly ? 'true' : 'false') + '">Mistakes only</button>' +
      '<button type="button" class="btn sm" id="btn-retry">' + I.retry + 'Retry mistakes</button>' +
      '<div class="seg sm" role="group" aria-label="Paper view"><button type="button" data-view="focus" aria-pressed="' + (mode === 'focus') + '">Flow</button><button type="button" data-view="a4" aria-pressed="' + (mode === 'a4') + '">A4</button></div>' +
      '<span class="grow"></span>' +
      '<button type="button" class="icon-btn" id="btn-nav" aria-label="Jump to a question" title="Jump to a question">' + I.grid + '</button>' +
      '<div class="tb-menu hide-sm"><button type="button" class="icon-btn" id="btn-print" aria-haspopup="true" aria-expanded="false" aria-label="Print" title="Print">' + I.print + '</button>' +
      '<div class="menu" id="menu-print" hidden><button type="button" data-print="marked">' + I.paper + 'Marked paper</button><button type="button" data-print="key">' + I.key + 'Answer key</button><button type="button" data-print="blank">' + I.paper + 'Blank exam paper</button></div></div>' +
      '<button type="button" class="btn primary sm" id="btn-new">' + I.plus + 'New exam</button>' +
      '</div></div>' +
      '<div class="desk"><div id="sheets" class="sheets" aria-label="Marked exam paper"></div></div>' + zoomBarHtml();

    var box = $('#sheets');
    function draw() {
      var blocks = paperBlocks(exam, 'graded', C.gradeExam(exam, cur.answers), cur.answers, { mistakesOnly: RT.mistakesOnly });
      var a4 = viewMode() === 'a4';
      var entry = { container: box, blocks: blocks, foot: footText(exam), flow: !a4, a4: a4 };
      RT.paged = [entry];
      box.classList.toggle('a4', a4);
      box.parentNode.classList.toggle('a4-desk', a4);
      layout(entry);
      if (a4) applyZoom(box); else { box.style.zoom = ''; $('#zoombar').hidden = true; }
    }
    draw();
    $('#zoombar').addEventListener('click', function (e) { var b = e.target.closest('[data-z]'); if (b && !b.disabled) zoomBy(+b.getAttribute('data-z'), box); });
    afterFonts(function () { if (box.isConnected && viewMode() === 'a4') draw(); });
    $('#btn-nav').addEventListener('click', openDrawer);
    var bp = $('#btn-print'), mp = $('#menu-print');
    bp.addEventListener('click', function () { toggleMenu(bp, mp); });
    mp.addEventListener('click', function (e) { var b = e.target.closest('[data-print]'); if (b) { closeMenus(); printAs(b.getAttribute('data-print')); } });
    $('#btn-mistakes').addEventListener('click', function () {
      RT.mistakesOnly = !RT.mistakesOnly;
      this.setAttribute('aria-pressed', RT.mistakesOnly ? 'true' : 'false');
      draw();
    });
    $$('.result-tools [data-view]').forEach(function (b) {
      b.addEventListener('click', function () {
        S.settings.view = b.getAttribute('data-view'); save();
        $$('.result-tools [data-view]').forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
        draw();
      });
    });
    $('#btn-retry').addEventListener('click', function () {
      var r = C.gradeExam(exam, cur.answers);
      var ids = exam.items.filter(function (it) { return r.items[it.id].status !== 'correct'; }).map(function (it) { return it.id; });
      if (!ids.length) { ask({ title: 'Nothing to retry', body: 'You did not lose any marks on this paper.', ok: 'OK', cancel: false }); return; }
      beginRetry(ids);
    });
    $('#btn-new').addEventListener('click', function () { beginExam(C.newCode(S.settings, recentIds())); });
    box.addEventListener('change', function (e) {
      var cb = e.target.closest('input[data-pt]');
      if (!cb) return;
      var id = cb.closest('.q').getAttribute('data-id');
      var a = cur.answers[id] && typeof cur.answers[id] === 'object' && !Array.isArray(cur.answers[id]) ? cur.answers[id] : { text: '' };
      a.over = a.over || {};
      a.over[cb.getAttribute('data-pt')] = cb.checked;
      cur.answers[id] = a;
      refreshScores(exam);
    });
  }
  function jumpResult(n) {
    var q = document.getElementById('q' + n);
    if (!q && RT.mistakesOnly) { $('#btn-mistakes').click(); q = document.getElementById('q' + n); }
    if (q) { q.scrollIntoView({ block: 'center', behavior: reduceMotion ? 'auto' : 'smooth' }); q.focus({ preventScroll: true }); }
  }
  function refreshScores(exam) {
    var cur = S.current, res = C.gradeExam(exam, cur.answers);
    exam.items.forEach(function (it) {
      var r = res.items[it.id];
      var m = $('#sheets [data-mark="' + it.id + '"]'); if (m) m.textContent = fmtMark(r.got);
      var t = $('#sheets [data-tick="' + it.id + '"]'); if (t) t.textContent = r.status === 'wrong' || r.status === 'blank' ? '✗' : '✓';
    });
    exam.sections.forEach(function (s) { var x = $('#sheets [data-sec="' + s.key + '"]'); if (x) x.textContent = fmtMark(res.bySection[s.key].got); });
    var tot = $('#sheets [data-total]'); if (tot) tot.textContent = fmtMark(res.got);
    var gr = $('#sheets [data-grade]'); if (gr) gr.textContent = res.grade;
    var sum = $('#summary'); if (sum) sum.innerHTML = summaryHtml(exam, res);
    var h = S.history.filter(function (x) { return x.rid === cur.rid; })[0];
    if (h) Object.assign(h, historyEntry(exam, res));
    save();
  }

  /* =========================================================
     Flashcards
     ========================================================= */
  var FC = { filter: 'all', learning: false, order: null, i: 0, flipped: false };
  function cardDeck() {
    var deck = EC.CARDS.filter(function (c) {
      if (FC.filter !== 'all' && c.lecture !== +FC.filter) return false;
      if (FC.learning && S.cards[c.id] === 'known') return false;
      return true;
    });
    if (FC.order) {
      var pos = {}; FC.order.forEach(function (id, i) { pos[id] = i; });
      deck.sort(function (a, b) { return (pos[a.id] || 0) - (pos[b.id] || 0); });
    }
    return deck;
  }
  function renderCards() {
    var deck = cardDeck();
    if (FC.i >= deck.length) FC.i = 0;
    var c = deck[FC.i];
    var known = EC.CARDS.filter(function (x) { return S.cards[x.id] === 'known'; }).length;
    var pct = Math.round(known / EC.CARDS.length * 100);
    var seg = ['all'].concat(U.map(String)).map(function (f) {
      return '<button type="button" data-f="' + f + '" aria-pressed="' + (FC.filter === f ? 'true' : 'false') + '">' + (f === 'all' ? 'All' : UNIT.charAt(0) + f) + '</button>';
    }).join('');
    main.innerHTML = '<div class="container">' +
      '<div class="page-h"><div><h1>Flashcards</h1><p>Revise the key terms from ' + CO.unitsLabel + ' ' + U[0] + '–' + U[U.length - 1] + '. Tap a card to see the answer.</p></div></div>' +
      '<div class="deck-tools"><div class="seg" role="group" aria-label="Filter by ' + UNIT.toLowerCase() + '">' + seg + '</div>' +
      '<div class="actions"><label class="switch-row" style="border:0;padding:0;gap:8px"><span class="switch"><input type="checkbox" id="fc-learning"' + (FC.learning ? ' checked' : '') + '><i></i></span><span style="font-size:14px;font-weight:600">Still learning only</span></label>' +
      '<button type="button" class="btn sm" id="fc-shuffle">Shuffle</button></div></div>' +
      '<div class="deck-progress"><div class="bar" role="img" aria-label="' + pct + '% of cards known"><i style="width:' + pct + '%"></i></div>' +
      '<span><b>' + known + ' of ' + EC.CARDS.length + '</b> known · ' + pct + '%</span></div>' +
      (c ? '<div class="card-stage"><button type="button" class="flash' + (FC.flipped ? ' flipped' : '') + '" id="fc-card" aria-label="Flashcard: ' + esc(c.front) + '. Press to flip.">' +
        '<div class="face front" aria-hidden="' + (FC.flipped ? 'true' : 'false') + '"><div class="f-meta"><span>' + UNIT + ' ' + c.lecture + '</span><span>Slide ' + c.slide + '</span></div><div class="f-front">' + rich(c.front) + '</div><div class="f-hint">Tap or press Space to see the answer</div></div>' +
        '<div class="face back" aria-hidden="' + (FC.flipped ? 'false' : 'true') + '"><div class="f-meta"><span>' + esc(c.front) + '</span><span>' + UNIT + ' ' + c.lecture + ' · slide ' + c.slide + '</span></div><div class="f-back">' + rich(c.back) + '</div></div>' +
        '</button></div>' +
        '<div class="card-controls"><button type="button" class="btn" id="fc-prev" aria-label="Previous card">' + I.left + '<span class="lbl">Prev</span></button>' +
        '<div class="fc-mid" id="fc-mid" aria-live="polite"></div>' +
        '<button type="button" class="btn" id="fc-next" aria-label="Next card"><span class="lbl">Next</span>' + I.right + '</button></div>' +
        '<p class="card-count">' + (FC.i + 1) + ' / ' + deck.length + '<span class="hide-sm"> · Space flips · K known · L still learning</span></p>'
        : '<div class="card" style="max-width:640px;margin:0 auto"><p class="empty-state">No cards here.' + (FC.learning ? ' You know every card in this set.' : '') + '</p><button class="btn" id="fc-reset">Show all cards</button></div>') +
      '</div>';
    /* Before flipping: one "Show answer" button. After flipping: rate yourself. */
    function paintMid() {
      var mid = $('#fc-mid');
      if (!mid) return;
      mid.innerHTML = FC.flipped
        ? '<button type="button" class="btn" data-act="learn" id="fc-learn">Still learning</button><button type="button" class="btn primary" data-act="know" id="fc-know">' + I.check + 'I know this</button>'
        : '<button type="button" class="btn primary" data-act="flip" id="fc-flip">Show answer</button>';
    }
    function flip() {
      FC.flipped = !FC.flipped;
      var f = $('#fc-card');
      if (f) { f.classList.toggle('flipped', FC.flipped); $$('.face', f).forEach(function (x) { x.setAttribute('aria-hidden', x.classList.contains('back') ? String(!FC.flipped) : String(FC.flipped)); }); }
      paintMid();
    }
    function step(d) { var n = cardDeck().length; if (!n) return; FC.i = (FC.i + d + n) % n; FC.flipped = false; renderCards(); var f = $('#fc-card'); if (f) f.focus(); }
    function mark(v) { if (!c) return; S.cards[c.id] = v; save(); if (FC.learning && v === 'known') { FC.flipped = false; renderCards(); var f = $('#fc-card'); if (f) f.focus(); } else step(1); }
    $$('.seg [data-f]').forEach(function (b) { b.addEventListener('click', function () { FC.filter = b.getAttribute('data-f'); FC.i = 0; FC.flipped = false; renderCards(); }); });
    $('#fc-learning').addEventListener('change', function () { FC.learning = this.checked; FC.i = 0; FC.flipped = false; renderCards(); });
    $('#fc-shuffle').addEventListener('click', function () { FC.order = C.shuffle(EC.CARDS.map(function (x) { return x.id; }), Math.random); FC.i = 0; FC.flipped = false; renderCards(); });
    if (c) {
      paintMid();
      $('#fc-card').addEventListener('click', flip);
      $('#fc-prev').addEventListener('click', function () { step(-1); });
      $('#fc-next').addEventListener('click', function () { step(1); });
      $('#fc-mid').addEventListener('click', function (e) {
        var b = e.target.closest('[data-act]');
        if (!b) return;
        var a = b.getAttribute('data-act');
        if (a === 'flip') flip(); else mark(a === 'know' ? 'known' : 'learning');
      });
    } else {
      $('#fc-reset').addEventListener('click', function () { FC.learning = false; FC.filter = 'all'; renderCards(); });
    }
    RT.keyHandler = function (e) {
      if (e.ctrlKey || e.metaKey || e.altKey || $('dialog[open]')) return;
      var t = e.target;
      if (t && ((t.tagName === 'INPUT' && t.type !== 'checkbox') || t.tagName === 'TEXTAREA')) return;
      if (e.key === 'ArrowRight') { e.preventDefault(); step(1); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); step(-1); }
      else if ((e.key === ' ' || e.key === 'Enter') && t && t.tagName !== 'BUTTON') { e.preventDefault(); flip(); }
      else if (e.key.toLowerCase() === 'k') mark('known');
      else if (e.key.toLowerCase() === 'l') mark('learning');
    };
  }

  /* =========================================================
     Progress
     ========================================================= */
  function renderProgress() {
    var H = S.history, byId = {};
    EC.BANK.forEach(function (q) { byId[q.id] = q; });
    var sts = stats();
    var lect = {}, sec = {}, seen = {}, lost = {}, diff = { 1: [0, 0], 2: [0, 0], 3: [0, 0] };
    U.forEach(function (u) { lect[u] = [0, 0]; });
    var dIdx = { easy: 1, medium: 2, hard: 3 };
    H.forEach(function (h) {
      Object.keys(h.byLecture || {}).forEach(function (l) { lect[l] = lect[l] || [0, 0]; lect[l][0] += h.byLecture[l][0]; lect[l][1] += h.byLecture[l][1]; });
      Object.keys(h.bySection || {}).forEach(function (s) { sec[s] = sec[s] || [0, 0]; sec[s][0] += h.bySection[s][0]; sec[s][1] += h.bySection[s][1]; });
      (h.items || []).forEach(function (x) {
        seen[x[0]] = (seen[x[0]] || 0) + 1;
        if (x[1] < x[2]) lost[x[0]] = (lost[x[0]] || 0) + 1;
        var q = byId[x[0]]; if (q) { diff[dIdx[q.difficulty]][0] += x[1]; diff[dIdx[q.difficulty]][1] += x[2]; }
      });
    });
    var missed = Object.keys(lost).filter(function (id) { return byId[id]; }).sort(function (a, b) {
      return (lost[b] / seen[b]) - (lost[a] / seen[a]) || lost[b] - lost[a];
    }).slice(0, 12);
    function bars(obj, label) {
      var rows = Object.keys(obj).sort().filter(function (k) { return obj[k][1] > 0; }).map(function (k) { return { label: label(k), got: obj[k][0], max: obj[k][1] }; });
      return rows.length ? barRows(rows) : '<p class="empty-state">No data yet.</p>';
    }
    var hist = H.slice().reverse().slice(0, 30).map(function (h) {
      return '<tr><td>' + esc(shortDate(h.date)) + '</td><td class="mono">' + (h.kind === 'retry' ? 'Retry' : '<a href="#/code/' + encodeURIComponent(h.code) + '">' + esc(h.code) + '</a>') + '</td>' +
        '<td class="hide-sm">' + C.DIFFICULTY[h.level || 'X'].label + '</td><td class="num">' + fmtMark(h.got) + '/' + h.max + '</td><td class="num">' + h.pct + '%</td><td class="num"><b>' + h.grade + '</b></td></tr>';
    }).join('');
    main.innerHTML = '<div class="container">' +
      '<div class="page-h"><div><h1>My progress</h1><p>Saved on this device only.</p></div>' + (H.length ? '<button class="btn sm danger" id="reset">Reset progress</button>' : '') + '</div>' +
      '<div class="tiles"><div class="tile"><b>' + sts.n + '</b><span>Papers marked</span></div>' +
      '<div class="tile"><b>' + (sts.avg === null ? '–' : sts.avg + '%') + '</b><span>Average score</span></div>' +
      '<div class="tile"><b>' + (sts.best ? fmtMark(sts.best.got) + '/' + sts.best.max : '–') + '</b><span>Best paper' + (sts.best ? ' (' + sts.best.grade + ')' : '') + '</span></div>' +
      '<div class="tile"><b>' + Object.keys(seen).length + '</b><span>of ' + EC.BANK.length + ' questions seen</span></div></div>' +
      '<div class="grid-2"><section class="card" aria-labelledby="hist-h"><h2 id="hist-h">Score history</h2>' +
      (hist ? '<div style="overflow-x:auto"><table class="hist"><thead><tr><th>Date</th><th>Paper</th><th class="hide-sm">Level</th><th class="num">Score</th><th class="num">%</th><th class="num">Grade</th></tr></thead><tbody>' + hist + '</tbody></table></div>' : '<p class="empty-state">Submit a paper to see your scores here.</p>') +
      '</section><div><section class="card" aria-labelledby="pl-h"><h2 id="pl-h">Accuracy per ' + UNIT.toLowerCase() + '</h2>' + bars(lect, function (k) { return UNIT + ' ' + k; }) + '</section>' +
      '<section class="card" aria-labelledby="pd-h"><h2 id="pd-h">Accuracy per difficulty</h2>' + bars(diff, function (k) { return ['', 'Easy', 'Medium', 'Hard'][k]; }) + '</section>' +
      '<section class="card" aria-labelledby="ps-h"><h2 id="ps-h">Accuracy per section</h2>' + bars(sec, function (k) { return k + ' · ' + C.SECTION_INFO[k].title; }) + '</section></div></div>' +
      '<section class="card" style="margin-top:16px" aria-labelledby="mm-h"><h2 id="mm-h">Most-missed questions</h2>' +
      (missed.length ? '<ul class="missed">' + missed.map(function (id) {
        var q = byId[id];
        return '<li><div>' + rich(q.q.replace(/\{\{\d+\}\}/g, '_____')) + '</div><div class="meta">' + esc(slideRef(q)) + ' · ' + DIFF_NAME[q.difficulty] + ' · missed ' + lost[id] + ' of ' + plural(seen[id], 'time') + '</div></li>';
      }).join('') + '</ul><div class="actions" style="margin-top:14px"><button class="btn primary" id="practice-missed">' + I.retry + 'Practise these questions</button></div>'
        : '<p class="empty-state">Questions you lose marks on will be listed here.</p>') +
      '</section></div>';
    var pm = $('#practice-missed');
    if (pm) pm.addEventListener('click', function () { confirmReplace().then(function (y) { if (y) beginRetry(missed); }); });
    var rs = $('#reset');
    if (rs) rs.addEventListener('click', function () {
      ask({ title: 'Reset progress?', body: 'This deletes your score history and flashcard marks on this device.', ok: 'Reset', danger: true }).then(function (y) {
        if (y) { S.history = []; S.cards = {}; save(true); renderProgress(); }
      });
    });
  }

  /* Hooks for automated tests. */
  window.__sim = {
    state: function () { return S; },
    exam: function () { return RT.exam; },
    sounds: function () { return SFX.played.slice(); },
    modelAnswer: C.modelAnswer,
    preparePrint: preparePrint,
    endPrint: cleanupPrint
  };

  route();
})();
