/* Core logic shared by the browser app and the Node tests:
   text normalisation, grading, and the seeded exam-paper generator.
   No DOM access in this file. */
(function (g) {
  'use strict';
  var EC = g.EC = g.EC || {};

  /* =========================================================
     Text helpers
     ========================================================= */
  function norm(s) {
    return String(s == null ? '' : s).toLowerCase()
      .replace(/&/g, ' and ')
      .replace(/[‐-―−\-_/\\]/g, ' ')
      .replace(/[^a-z0-9 ]/g, ' ')
      .replace(/\s+/g, ' ').trim();
  }
  function compact(s) { return norm(s).replace(/ /g, ''); }
  function stripArticle(n) { return n.replace(/^(the|a|an) /, ''); }

  function lev(a, b) {
    if (a === b) return 0;
    var m = a.length, n = b.length;
    if (!m) return n;
    if (!n) return m;
    var prev = new Array(n + 1), cur = new Array(n + 1), i, j;
    for (j = 0; j <= n; j++) prev[j] = j;
    for (i = 1; i <= m; i++) {
      cur[0] = i;
      for (j = 1; j <= n; j++) {
        cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a.charCodeAt(i - 1) === b.charCodeAt(j - 1) ? 0 : 1));
      }
      var t = prev; prev = cur; cur = t;
    }
    return prev[n];
  }

  /* Typo tolerance by length of the expected answer (spaces removed). */
  function tolerance(len) { return len <= 5 ? 0 : (len <= 11 ? 1 : 2); }

  /* Every accepted fill-in answer in the bank. Used so a typed answer that is
     itself a different course term (e.g. "invention" for "reinvention")
     is never accepted as a typo. */
  var glossary = null;
  function getGlossary() {
    if (glossary) return glossary;
    glossary = new Set();
    (EC.BANK || []).forEach(function (q) {
      if (q.type === 'fill') q.blanks.forEach(function (alts) {
        alts.forEach(function (a) { glossary.add(compact(stripArticle(norm(a)))); });
      });
    });
    ['amplitude', 'frequency', 'phase', 'wavelength', 'period', 'velocity', 'electric', 'magnetic', 'reflection', 'diffraction', 'scattering', 'absorption',
      'transmission', 'detection', 'interference', 'gain', 'loss', 'margin', 'sensitivity', 'bandwidth', 'beamwidth', 'directivity', 'efficiency',
      'linear', 'circular', 'vertical', 'horizontal', 'dipole', 'patch', 'sector', 'dish', 'array', 'constructive', 'destructive', 'omnidirectional', 'directional',
      'ask', 'fsk', 'psk', 'bpsk', 'qpsk', 'qam', 'fdma', 'tdma', 'cdma', 'ofdma', 'ofdm', 'time', 'code', 'subcarriers', 'encoder', 'decoder',
      'inverse', 'direct', 'shorter', 'longer', 'higher', 'lower', 'guardband', 'guardtime', 'increases', 'decreases', 'ultraviolet', 'infrared']
      .forEach(function (t) { glossary.add(t); });
    return glossary;
  }

  /* Fill-in-the-blank comparison: exact after normalisation, or a small typo,
     but never a different known term. */
  function sameTerm(input, accepted) {
    var a = compact(stripArticle(norm(input)));
    if (!a) return false;
    var acc = accepted.map(function (x) { return compact(stripArticle(norm(x))); });
    if (acc.indexOf(a) > -1) return true;
    if (getGlossary().has(a)) return false;
    for (var i = 0; i < acc.length; i++) {
      if (lev(a, acc[i]) <= tolerance(acc[i].length)) return true;
    }
    return false;
  }

  /* Keyword match for list / short-answer / explain grading.
     The key must start at a word boundary in the answer (prefix stems allowed,
     e.g. "convenien" matches "convenience"). Keys starting with "=" must equal
     the whole answer. Keys starting with "#" are numbers: some number in the answer must equal them
     ("#28" accepts 28, "#-66" needs the minus sign, "#100.04~0.1" accepts 99.94 to 100.14). Keys starting with "!" allow no typos (used for code).
     Keys of 5+ letters tolerate a small typo. */
  function numbersIn(text, signed) {
    var out = [], re = /(^|[^a-z0-9.])(\d[\d,]*(?:\.\d+)?)/gi, m, s = String(text);
    while ((m = re.exec(s))) {
      var x = parseFloat(m[2].replace(/,/g, ''));
      // A minus sign counts when it is not a subtraction: "= -70", "(−70)", "is - 70".
      if (signed) {
        var before = s.slice(0, m.index + m[1].length), neg = /[-−–]\s*$/.exec(before);
        if (neg && !/[\d)]\s*$/.test(before.slice(0, neg.index))) x = -x;
      }
      out.push(x); re.lastIndex = m.index + m[0].length;
    }
    return out;
  }
  function hit(text, key) {
    var a = norm(text);
    if (!a) return false;
    if (key.charAt(0) === '#') {
      var nk = /^#(-?[\d.]+)(?:~([\d.]+))?$/.exec(key), want = parseFloat(nk[1]), tol = nk[2] ? parseFloat(nk[2]) + 1e-9 : 0.0061;
      return numbersIn(text, nk[1].charAt(0) === '-').some(function (x) { return Math.abs(x - want) <= tol; });
    }
    if (key.charAt(0) === '=') return a === norm(key.slice(1));
    var exact = key.charAt(0) === '!';
    var b = norm(exact ? key.slice(1) : key);
    if (!b) return false;
    var B = b.replace(/ /g, '');
    var starts = [0];
    for (var i = 0; i < a.length; i++) if (a[i] === ' ') starts.push(i + 1);
    for (var s = 0; s < starts.length; s++) {
      var tail = a.slice(starts[s]);
      if (tail.indexOf(b) === 0) return true;
      var T = tail.slice(0, B.length + 24).replace(/ /g, '');
      if (T.indexOf(B) === 0) return true;
      if (!exact && B.length >= 5) {
        var tol = B.length >= 10 ? 2 : 1;
        for (var w = B.length - 1; w <= B.length + 1; w++) {
          if (w <= T.length && lev(T.slice(0, w), B) <= tol) return true;
        }
      }
    }
    return false;
  }
  function hitAny(text, keys) {
    for (var i = 0; i < keys.length; i++) if (hit(text, keys[i])) return true;
    return false;
  }

  /* =========================================================
     Grading
     ========================================================= */
  function roundHalf(x) { return Math.round(x * 2) / 2; }
  function status(got, max, blank) {
    if (got >= max) return 'correct';
    if (got <= 0) return blank ? 'blank' : 'wrong';
    return 'partial';
  }
  function isBlankText(v) { return !String(v == null ? '' : v).trim(); }

  /* Maximum bipartite matching: typed lines -> expected items. */
  function matchLines(lines, items) {
    var adj = lines.map(function (line) {
      if (isBlankText(line)) return [];
      var out = [];
      items.forEach(function (it, k) { if (hitAny(line, it.keys)) out.push(k); });
      return out;
    });
    var itemTo = items.map(function () { return -1; });
    function tryLine(li, seen) {
      for (var x = 0; x < adj[li].length; x++) {
        var k = adj[li][x];
        if (seen[k]) continue;
        seen[k] = true;
        if (itemTo[k] === -1 || tryLine(itemTo[k], seen)) { itemTo[k] = li; return true; }
      }
      return false;
    }
    lines.forEach(function (_, li) { tryLine(li, {}); });
    var lineTo = lines.map(function () { return -1; });
    itemTo.forEach(function (li, k) { if (li > -1) lineTo[li] = k; });
    return { lineTo: lineTo, itemTo: itemTo, count: itemTo.filter(function (x) { return x > -1; }).length };
  }

  /* Key-point marking for def / exp with optional self-marking overrides.
     over: { "p0": true, "l3": false, ... } */
  function markPoints(q, ans) {
    ans = ans || {};
    var text = String(ans.text || '');
    var over = ans.over || {};
    function decide(key, auto) { return Object.prototype.hasOwnProperty.call(over, key) ? !!over[key] : auto; }
    var pts = q.points.map(function (p, i) {
      var auto = hitAny(text, p.keys);
      return { key: 'p' + i, text: p.text, auto: auto, on: decide('p' + i, auto) };
    });
    var lst = null;
    if (q.listPart) {
      lst = q.listPart.items.map(function (p, i) {
        var auto = hitAny(text, p.keys);
        return { key: 'l' + i, text: p.text, auto: auto, on: decide('l' + i, auto) };
      });
    }
    var ptsOn = pts.filter(function (p) { return p.on; }).length;
    var frac = Math.min(ptsOn, q.need) / q.need;
    if (lst) {
      var w = q.listPart.weight;
      var lOn = lst.filter(function (p) { return p.on; }).length;
      frac = w * Math.min(lOn, q.listPart.need) / q.listPart.need + (1 - w) * frac;
    }
    // Choice + justification (q.choices): 1 mark for the right choice, the rest for the reasons. A wrong choice earns nothing.
    var pick = null;
    if (q.choices) {
      pick = { chosen: typeof ans.choice === 'number' ? ans.choice : null, ok: ans.choice === q.answer };
      frac = pick.ok ? (1 + (q.marks - 1) * frac) / q.marks : 0;
    }
    return { points: pts, list: lst, frac: frac, pick: pick, blank: !text.trim() && (!pick || pick.chosen === null) };
  }

  /* item: a paper item (see makePaper). ans: the student's answer for it. */
  function gradeItem(item, ans) {
    var q = item.q, max = item.marks, got = 0, detail = {}, blank = false;
    switch (item.type) {
      case 'mcq':
        blank = ans === undefined || ans === null;
        got = !blank && ans === item.correct ? max : 0;
        break;
      case 'tf':
        blank = ans !== true && ans !== false;
        got = !blank && ans === q.answer ? max : 0;
        break;
      case 'fill': {
        var a = Array.isArray(ans) ? ans : [];
        var res = q.blanks.map(function () { return false; });
        // q.set: blanks that accept any order, as one group [0, 1] or several groups [[0, 1], [2, 3]].
        var groups = q.set ? (Array.isArray(q.set[0]) ? q.set : [q.set]) : [];
        var grouped = [].concat.apply([], groups);
        q.blanks.forEach(function (acc, i) { if (grouped.indexOf(i) === -1) res[i] = sameTerm(a[i], acc); });
        groups.forEach(function (set) {
          var free = set.slice();
          set.forEach(function (i) {
            var j = -1;
            for (var f = 0; f < free.length; f++) if (sameTerm(a[i], q.blanks[free[f]])) { j = f; break; }
            if (j > -1) { res[i] = true; free.splice(j, 1); }
          });
        });
        blank = q.blanks.every(function (_, i) { return isBlankText(a[i]); });
        got = res.filter(Boolean).length * (max / q.blanks.length);
        detail.res = res;
        break;
      }
      case 'list': {
        var lines = Array.isArray(ans) ? ans : [];
        var m = matchLines(lines, q.items);
        blank = lines.every(isBlankText);
        got = roundHalf(Math.min(m.count, q.need) / q.need * max);
        detail.lineTo = m.lineTo; detail.itemTo = m.itemTo; detail.count = m.count;
        break;
      }
      case 'def':
      case 'exp': {
        var mk = markPoints(q, ans);
        blank = mk.blank && !(ans && ans.over && Object.keys(ans.over).some(function (k) { return ans.over[k]; }));
        got = roundHalf(mk.frac * max);
        detail = mk;
        break;
      }
    }
    return { got: got, max: max, status: status(got, max, blank), detail: detail };
  }

  function isAnswered(item, ans) {
    if (ans === undefined || ans === null) return false;
    if (item.type === 'mcq') return typeof ans === 'number';
    if (item.type === 'tf') return ans === true || ans === false;
    if (item.type === 'fill' || item.type === 'list') return Array.isArray(ans) && ans.some(function (v) { return !isBlankText(v); });
    return !isBlankText(ans.text) || typeof ans.choice === 'number';
  }

  function gradeExam(exam, answers) {
    answers = answers || {};
    var res = { got: 0, max: 0, items: {}, byLecture: {}, bySection: {} };
    exam.sections.forEach(function (sec) {
      var s = res.bySection[sec.key] = { got: 0, max: 0, title: sec.title };
      sec.items.forEach(function (it) {
        var r = gradeItem(it, answers[it.id]);
        res.items[it.id] = r;
        res.got += r.got; res.max += r.max;
        s.got += r.got; s.max += r.max;
        var L = res.byLecture[it.lecture] = res.byLecture[it.lecture] || { got: 0, max: 0 };
        L.got += r.got; L.max += r.max;
      });
    });
    res.pct = res.max ? Math.round(res.got / res.max * 1000) / 10 : 0;
    res.grade = letterGrade(res.pct);
    return res;
  }

  function letterGrade(pct) {
    if (pct >= 90) return 'A';
    if (pct >= 80) return 'B';
    if (pct >= 70) return 'C';
    if (pct >= 50) return 'D';
    return 'F';
  }

  /* Model answer for an item (used by the answer key and the tests). */
  function modelAnswer(item) {
    var q = item.q;
    switch (item.type) {
      case 'mcq': return item.correct;
      case 'tf': return q.answer;
      case 'fill': return q.blanks.map(function (b) { return b[0]; });
      case 'list': return q.items.slice(0, Math.max(q.need, q.items.length)).map(function (it) { return it.text; });
      case 'def':
      case 'exp': return q.choices ? { text: q.model, choice: q.answer } : { text: q.model };
    }
  }

  /* =========================================================
     Seeded randomness
     ========================================================= */
  function hashString(str) {
    var h = 1779033703 ^ str.length;
    for (var i = 0; i < str.length; i++) {
      h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
      h = (h << 13) | (h >>> 19);
    }
    h = Math.imul(h ^ (h >>> 16), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return (h ^= h >>> 16) >>> 0;
  }
  function mulberry32(a) {
    return function () {
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      var t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function shuffle(arr, rng) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(rng() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  /* =========================================================
     Exam codes
     ========================================================= */
  var LENGTHS = {
    Q: { label: 'Quick', total: 10, minutes: 15, budget: { A: 4, B: 2, C: 2, D: 2, E: 0 } },
    S: { label: 'Short', total: 20, minutes: 30, budget: { A: 6, B: 4, C: 3, D: 3, E: 4 } },
    M: { label: 'Standard', total: 40, minutes: 60, budget: { A: 15, B: 8, C: 5, D: 7, E: 5 } },
    F: { label: 'Full', total: 60, minutes: 90, budget: { A: 20, B: 12, C: 8, D: 10, E: 10 } }
  };
  var SECTION_INFO = {
    A: { title: 'Choose the correct option', instr: 'Choose ONE option for each question.', types: ['mcq'] },
    B: { title: 'Fill in the blanks', instr: 'Write the missing word or phrase in each blank. Each blank carries one mark.', types: ['fill'] },
    C: { title: 'True or false', instr: 'Decide whether each statement is True or False.', types: ['tf'] },
    D: { title: 'Short answer', instr: 'Answer briefly. Write one item per line where a list is asked for.', types: ['def', 'list'] },
    E: { title: 'Explain', instr: 'Answer in full sentences. Marks are given for each key point.', types: ['exp'] }
  };
  /* A course can rename sections, change which types they hold, and change the mark budgets (EC.COURSE). */
  if (EC.COURSE && EC.COURSE.sectionInfo) Object.keys(EC.COURSE.sectionInfo).forEach(function (k) { Object.assign(SECTION_INFO[k], EC.COURSE.sectionInfo[k]); });
  if (EC.COURSE && EC.COURSE.budgets) Object.keys(EC.COURSE.budgets).forEach(function (k) { LENGTHS[k].budget = EC.COURSE.budgets[k]; });
  /* Does question q belong in section key? Written questions carry sec: 'D' or 'E' when both sections hold 'exp'. */
  function inSection(q, key) {
    if (SECTION_INFO[key].types.indexOf(q.type) === -1) return false;
    return q.type !== 'exp' || !SECTION_INFO[key].bySec || (q.sec || 'E') === key;
  }

  /* Difficulty level of a paper: share of easy / medium / hard questions it aims for.
     X = mixed (default). Codes carry E, N or H after the length letter, e.g. WN-7F3A-12345MH. */
  var DIFFICULTY = {
    X: { label: 'Mixed', mix: [0.3, 0.5, 0.2] },
    E: { label: 'Easy', mix: [0.7, 0.3, 0] },
    N: { label: 'Medium', mix: [0.15, 0.7, 0.15] },
    H: { label: 'Hard', mix: [0, 0.4, 0.6] }
  };
  /* Course units (weeks) and code prefix come from EC.COURSE (data/questions.js). */
  var UNITS = (EC.COURSE && EC.COURSE.units) || [1, 2, 3, 4];
  var PREFIX = (EC.COURSE && EC.COURSE.prefix) || 'EC';
  var CODE_RE = new RegExp('^' + PREFIX + '-?([0-9A-F]{4})(?:-([' + UNITS.join('') + ']{1,' + UNITS.length + '})([QSMF])([ENH])?)?(?:-([A-E]{1,5}))?$');
  var DEFAULT_CFG = { lectures: UNITS.slice(), length: 'M', sections: 'ABCDE', difficulty: 'X' };

  function normCfg(cfg) {
    cfg = cfg || {};
    var lect = (cfg.lectures || DEFAULT_CFG.lectures).map(Number).filter(function (n) { return UNITS.indexOf(n) > -1; });
    lect = Array.from(new Set(lect)).sort();
    if (!lect.length) lect = DEFAULT_CFG.lectures.slice();
    var length = LENGTHS[cfg.length] ? cfg.length : 'M';
    var secs = String(cfg.sections || 'ABCDE').toUpperCase().split('').filter(function (c) { return 'ABCDE'.indexOf(c) > -1; });
    secs = Array.from(new Set(secs)).sort().join('');
    if (!secs) secs = 'ABCDE';
    var diff = DIFFICULTY[String(cfg.difficulty || 'X').toUpperCase()] ? String(cfg.difficulty || 'X').toUpperCase() : 'X';
    return { lectures: lect, length: length, sections: secs, difficulty: diff };
  }

  function buildCode(seedHex, cfg) {
    cfg = normCfg(cfg);
    var code = PREFIX + '-' + seedHex.toUpperCase();
    var lect = cfg.lectures.join('');
    var diff = cfg.difficulty === 'X' ? '' : cfg.difficulty;
    if (lect !== UNITS.join('') || cfg.length !== 'M' || cfg.sections !== 'ABCDE' || diff) code += '-' + lect + cfg.length + diff;
    if (cfg.sections !== 'ABCDE') code += '-' + cfg.sections;
    return code;
  }

  function parseCode(code) {
    var c = String(code || '').trim().toUpperCase().replace(/\s+/g, '');
    var m = CODE_RE.exec(c);
    if (!m) return null;
    var cfg = normCfg({
      lectures: m[2] ? m[2].split('').map(Number) : UNITS.slice(),
      length: m[3] || 'M',
      sections: m[5] || 'ABCDE',
      difficulty: m[4] || 'X'
    });
    var seed = m[1];
    return { seed: seed, cfg: cfg, code: buildCode(seed, cfg) };
  }

  function randomSeedHex(rand) {
    rand = rand || Math.random;
    return ('000' + Math.floor(rand() * 65536).toString(16)).slice(-4).toUpperCase();
  }

  /* =========================================================
     Overlap detection (so one question doesn't give away another)
     ========================================================= */
  var STOP = new Set(('the and for are that with this from into what which when where who whom does each they their them than then '
    + 'also only most more many such some other others very much have has had been being will would should could can '
    + 'about between among within your you its it\'s used uses using called refers refer describes describe describing '
    + 'example examples true false following list define explain give name state slides slide lecture week according both').split(' '));
  function tokens(q) {
    if (q._tok) return q._tok;
    var txt = q.q || '';
    if (q.type === 'mcq') txt += ' ' + q.options[0];
    if (q.type === 'fill') txt = q.q.replace(/\{\{(\d+)\}\}/g, function (_, i) { return q.blanks[+i][0]; });
    if (q.type === 'def') txt += ' ' + q.model;
    if (q.type === 'list') txt += ' ' + q.items.map(function (i) { return i.text; }).join(' ');
    var set = new Set();
    norm(txt).split(' ').forEach(function (w) {
      if (w.length < 4 || STOP.has(w)) return;
      set.add(w.replace(/(ies)$/, 'y').replace(/s$/, ''));
    });
    Object.defineProperty(q, '_tok', { value: set, enumerable: false });
    return set;
  }
  /* Concept terms a question asks for (short MCQ answers, fill answers). If one question's
     concept is printed in another question's stem or correct answer, the two would give each
     other away, so they are not put on the same paper. Very general words are ignored. */
  var GENERIC = new Set(['signal', 'signals', 'antenna', 'antennas', 'wave', 'waves', 'frequency', 'frequencies', 'amplitude', 'phase', 'wavelength', 'time', 'code', 'codes',
    'power', 'gain', 'loss', 'noise', 'interference', 'transmitter', 'receiver', 'channel', 'bandwidth', 'radio', 'data', 'bits', 'symbol', 'carrier', 'distance',
    'dipole', 'patch', 'sector', 'dish', 'array', 'qpsk', 'qam', 'fdma', 'tdma', 'cdma', 'ofdma', 'user', 'users', 'modulation', 'energy', 'satellite', 'high', 'medium',
    'low', 'higher', 'lower', 'increases', 'decreases', 'metres', 'seconds', 'hertz', 'bpsk', 'phase shift keying', 'path', 'zero', 'obstacles', 'radio waves', 'multipath']);
  function concepts(q) {
    if (q._con) return q._con;
    var out = [];
    if (q.type === 'mcq' && q.options[0].split(' ').length <= 4) out.push(q.options[0]);
    if (q.type === 'fill') q.blanks.forEach(function (b) { out.push(b[0]); });
    out = out.map(norm).filter(function (t) { return t.length >= 4 && !GENERIC.has(t) && !/^(eight|five|seven|ten|four|three|\d+)$/.test(t); });
    Object.defineProperty(q, '_con', { value: out, enumerable: false });
    return out;
  }
  function visible(q) {
    if (q._vis) return q._vis;
    var t = q.q;
    if (q.type === 'mcq') t += ' ' + q.options[0];
    if (q.type === 'fill') t = q.q.replace(/\{\{\d+\}\}/g, ' ');
    if (q.type === 'list') t += ' ' + q.items.map(function (i) { return i.text; }).join(' ');
    var v = ' ' + norm(t) + ' ';
    Object.defineProperty(q, '_vis', { value: v, enumerable: false });
    return v;
  }
  function givesAway(a, b) {
    var v = visible(b);
    return concepts(a).some(function (c) { return v.indexOf(' ' + c + ' ') > -1; });
  }
  function overlaps(a, b) {
    if (givesAway(a, b) || givesAway(b, a)) return true;
    var A = tokens(a), B = tokens(b);
    var small = A.size <= B.size ? A : B, big = small === A ? B : A;
    if (small.size < 3) return false;
    var inter = 0;
    small.forEach(function (w) { if (big.has(w)) inter++; });
    return inter >= 3 && inter / small.size >= 0.5;
  }

  /* =========================================================
     Paper generator
     ========================================================= */
  function diffPlan(n, rng, level) {
    var mix = (DIFFICULTY[level] || DIFFICULTY.X).mix;
    var e = Math.round(n * mix[0]), h = Math.round(n * mix[2]), m = Math.max(0, n - e - h), out = [];
    for (var i = 0; i < e; i++) out.push('easy');
    for (i = 0; i < m; i++) out.push('medium');
    for (i = 0; i < h; i++) out.push('hard');
    return shuffle(out, rng);
  }

  function makeItem(q) {
    return { id: q.id, type: q.type, marks: q.marks, lecture: q.lecture, slide: q.slide, difficulty: q.difficulty, q: q };
  }

  /* Can `target` be made from a subset of these mark values? */
  function reachable(values, target) {
    if (target === 0) return true;
    if (target < 0) return false;
    var dp = new Array(target + 1).fill(false); dp[0] = true;
    values.forEach(function (v) { for (var t = target; t >= v; t--) if (dp[t - v]) dp[t] = true; });
    return dp[target];
  }

  function makePaper(opts) {
    var cfg = normCfg(opts.cfg);
    var rng = mulberry32(hashString(opts.seedKey));
    var plan = LENGTHS[cfg.length];
    var budget = {};
    'ABCDE'.split('').forEach(function (k) { budget[k] = cfg.sections.indexOf(k) > -1 ? plan.budget[k] : 0; });
    var spare = 0;
    'ABCDE'.split('').forEach(function (k) { if (cfg.sections.indexOf(k) === -1) spare += plan.budget[k]; });
    var sink = ['A', 'B', 'C', 'D', 'E'].filter(function (k) { return cfg.sections.indexOf(k) > -1; })[0];
    budget[sink] += spare;

    var picked = [];
    var used = new Set();
    var lects = shuffle(cfg.lectures, rng);
    function poolFor(key) {
      return shuffle((EC.BANK || []).filter(function (q) {
        return inSection(q, key) && cfg.lectures.indexOf(q.lecture) > -1;
      }), rng);
    }
    // Levels with a 0% share never use that difficulty unless nothing else is left.
    var mix = DIFFICULTY[cfg.difficulty].mix;
    function allowed(q) { return mix[['easy', 'medium', 'hard'].indexOf(q.difficulty)] > 0; }
    function clash(q) { for (var i = 0; i < picked.length; i++) if (overlaps(q, picked[i])) return true; return false; }
    function take(q) { used.add(q.id); picked.push(q); return q; }
    function choose(pool, tests) {
      for (var t = 0; t < tests.length; t++) {
        for (var i = 0; i < pool.length; i++) {
          var q = pool[i];
          if (used.has(q.id)) continue;
          if (tests[t](q)) return q;
        }
      }
      return null;
    }
    function ladder(L, D, extra) {
      extra = extra || function () { return true; };
      return [
        function (q) { return extra(q) && q.lecture === L && q.difficulty === D && !clash(q); },
        function (q) { return extra(q) && q.lecture === L && allowed(q) && !clash(q); },
        function (q) { return extra(q) && q.difficulty === D && !clash(q); },
        function (q) { return extra(q) && allowed(q) && !clash(q); },
        function (q) { return extra(q) && !clash(q); },
        function (q) { return extra(q); }
      ];
    }

    var out = {};
    // Marks a section cannot use move to the next selected section that is still to be filled (A, then C, then B).
    var done = {};
    function spillTarget(from) {
      var ks = ['A', 'C', 'B'];
      for (var s = 0; s < ks.length; s++) if (ks[s] !== from && !done[ks[s]] && cfg.sections.indexOf(ks[s]) > -1) return ks[s];
      return null;
    }
    function spill(from, amount) { var k = spillTarget(from); if (k && amount > 0) budget[k] += amount; }
    // Written sections first (fewest candidates), then the rest avoid overlapping them.
    ['E', 'D'].forEach(function (key) {
      out[key] = [];
      var target = budget[key];
      if (!target) return;
      var pool = poolFor(key);
      var remaining = target, i = 0;
      var typeTurn = rng() < 0.5 ? 0 : 1;
      var diffs = diffPlan(8, rng, cfg.difficulty);
      // Section E rotates through the kinds of written question (explain, draw, calculate, choose + justify).
      var kinds = SECTION_INFO[key].kinds ? shuffle(SECTION_INFO[key].kinds, rng) : null;
      while (remaining > 0 && i < 40) {
        var L = lects[i % lects.length], D = diffs[i % diffs.length];
        var types = SECTION_INFO[key].types;
        var wantType = types.length > 1 ? types[typeTurn++ % types.length] : types[0];
        var rem = remaining;
        var fits = function (q) {
          if (q.marks > rem) return false;
          var others = pool.filter(function (x) { return !used.has(x.id) && x.id !== q.id; }).map(function (x) { return x.marks; });
          return reachable(others, rem - q.marks);
        };
        var q = choose(pool, ladder(L, D, function (x) { return x.type === wantType && (!kinds || x.kind === kinds[i % kinds.length]) && fits(x); }).concat(ladder(L, D, fits)));
        // Nowhere to send leftover marks (only written sections chosen): fill as close to the target as the bank allows.
        if (!q && !spillTarget(key)) q = choose(pool, ladder(L, D, function (x) { return x.marks <= rem; }));
        if (!q) break;
        take(q); out[key].push(q); remaining -= q.marks; i++;
      }
      done[key] = true;
      if (remaining > 0) spill(key, remaining);
    });
    // Section B: one mark per blank.
    out.B = [];
    done.B = true;
    if (budget.B) {
      var poolB = poolFor('B');
      var remB = budget.B, iB = 0, diffsB = diffPlan(Math.max(4, budget.B), rng, cfg.difficulty), multi = 0;
      while (remB > 0 && iB < 80) {
        var LB = lects[iB % lects.length], DB = diffsB[iB % diffsB.length], r = remB;
        var okB = function (q) { return q.blanks.length <= r && (q.blanks.length === 1 || multi < Math.ceil(budget.B / 6)); };
        var qB = choose(poolB, ladder(LB, DB, okB));
        if (!qB) break;
        if (qB.blanks.length > 1) multi++;
        take(qB); out.B.push(qB); remB -= qB.blanks.length; iB++;
      }
      if (remB > 0) spill('B', remB);
    }
    // Section C and A: one mark each.
    ['C', 'A'].forEach(function (key) {
      out[key] = [];
      done[key] = true;
      var n = budget[key];
      if (!n) return;
      var pool = poolFor(key);
      var diffs = diffPlan(n, rng, cfg.difficulty);
      var tfTrue = 0, tfFalse = 0;
      for (var i = 0; i < n; i++) {
        var L = lects[i % lects.length], D = diffs[i];
        var extra = function () { return true; };
        if (key === 'C') {
          // Keep True/False roughly balanced.
          var wantTrue = tfTrue <= tfFalse ? (tfTrue < tfFalse ? true : rng() < 0.5) : false;
          extra = function (q) { return q.answer === wantTrue; };
        }
        var q = choose(pool, ladder(L, D, extra).concat(ladder(L, D)));
        if (!q) { spill(key, n - i); break; }
        if (key === 'C') { if (q.answer) tfTrue++; else tfFalse++; }
        take(q); out[key].push(q);
      }
    });

    // Build items in paper order, numbering continuously.
    var sections = [], items = [], n = 0;
    'ABCDE'.split('').forEach(function (key) {
      var qs = out[key] || [];
      if (!qs.length) return;
      if (key !== 'A') qs = shuffle(qs, rng);
      var sec = { key: key, title: SECTION_INFO[key].title, instr: SECTION_INFO[key].instr, marks: 0, items: [] };
      var letters = key === 'A' ? letterPlan(qs.length, rng) : null;
      qs.forEach(function (q, idx) {
        var it = makeItem(q);
        it.n = ++n;
        it.section = key;
        if (q.type === 'mcq') {
          var pos = letters[idx];
          var others = shuffle(q.options.slice(1), rng);
          it.opts = [];
          for (var p = 0, o = 0; p < 4; p++) it.opts.push(p === pos ? q.options[0] : others[o++]);
          it.correct = pos;
        }
        sec.items.push(it); items.push(it); sec.marks += it.marks;
      });
      sections.push(sec);
    });

    var total = sections.reduce(function (s, x) { return s + x.marks; }, 0);
    return {
      cfg: cfg,
      minutes: Math.round(plan.minutes * (total / plan.total)) || plan.minutes,
      total: total,
      sections: sections,
      items: items,
      wordBank: buildWordBank(sections, cfg, rng)
    };
  }

  /* Spread correct letters evenly over a-d and avoid three in a row. */
  function letterPlan(n, rng) {
    var base = [];
    for (var i = 0; i < n; i++) base.push(i % 4);
    var best = null;
    for (var tries = 0; tries < 30; tries++) {
      var s = shuffle(base, rng), ok = true;
      for (var k = 2; k < s.length; k++) if (s[k] === s[k - 1] && s[k] === s[k - 2]) { ok = false; break; }
      best = s;
      if (ok) break;
    }
    return best || base;
  }

  function buildWordBank(sections, cfg, rng) {
    var secB = sections.filter(function (s) { return s.key === 'B'; })[0];
    if (!secB) return [];
    var accepted = [], words = [], seen = new Set();
    secB.items.forEach(function (it) {
      it.q.blanks.forEach(function (alts) {
        accepted.push(alts);
        var k = compact(alts[0]);
        if (!seen.has(k)) { seen.add(k); words.push({ text: alts[0], real: true }); }
      });
    });
    var inPaper = new Set(secB.items.map(function (it) { return it.id; }));
    var lectures = new Set(secB.items.map(function (it) { return it.lecture; }));
    var cands = shuffle((EC.BANK || []).filter(function (q) {
      return q.type === 'fill' && !inPaper.has(q.id) && cfg.lectures.indexOf(q.lecture) > -1;
    }), rng);
    cands.sort(function (a, b) { return (lectures.has(b.lecture) ? 1 : 0) - (lectures.has(a.lecture) ? 1 : 0); });
    var want = words.length >= 6 ? 3 : 2, added = 0;
    for (var i = 0; i < cands.length && added < want; i++) {
      var w = cands[i].blanks[0][0];
      var k = compact(w);
      if (seen.has(k) || k.length < 3) continue;
      if (accepted.some(function (alts) { return sameTerm(w, alts); })) continue;
      seen.add(k); words.push({ text: w, real: false }); added++;
    }
    return shuffle(words, rng);
  }

  /* Public: build the exam for a code (pure function of the code). */
  function makeExam(code) {
    var p = parseCode(code);
    if (!p) return null;
    var paper = makePaper({ cfg: p.cfg, seedKey: p.code });
    paper.code = p.code;
    paper.kind = 'exam';
    return paper;
  }

  /* Retry paper from a list of question ids (not shareable by code). */
  function makeRetryExam(ids, seedHex) {
    var rng = mulberry32(hashString('RETRY-' + seedHex));
    var byId = {};
    (EC.BANK || []).forEach(function (q) { byId[q.id] = q; });
    var qs = ids.map(function (id) { return byId[id]; }).filter(Boolean);
    var sections = [], items = [], n = 0;
    'ABCDE'.split('').forEach(function (key) {
      var sq = shuffle(qs.filter(function (q) { return inSection(q, key); }), rng);
      if (!sq.length) return;
      var sec = { key: key, title: SECTION_INFO[key].title, instr: SECTION_INFO[key].instr, marks: 0, items: [] };
      var letters = key === 'A' ? letterPlan(sq.length, rng) : null;
      sq.forEach(function (q, idx) {
        var it = makeItem(q);
        it.n = ++n; it.section = key;
        if (q.type === 'mcq') {
          var pos = letters[idx], others = shuffle(q.options.slice(1), rng);
          it.opts = [];
          for (var p = 0, o = 0; p < 4; p++) it.opts.push(p === pos ? q.options[0] : others[o++]);
          it.correct = pos;
        }
        sec.items.push(it); items.push(it); sec.marks += it.marks;
      });
      sections.push(sec);
    });
    var total = sections.reduce(function (s, x) { return s + x.marks; }, 0);
    var lectures = Array.from(new Set(qs.map(function (q) { return q.lecture; }))).sort();
    var cfg = normCfg({ lectures: lectures, length: 'M', sections: sections.map(function (s) { return s.key; }).join('') });
    return {
      code: 'RETRY-' + seedHex.toUpperCase(), kind: 'retry', cfg: cfg,
      minutes: Math.max(10, Math.round(total * 1.5)), total: total, sections: sections, items: items,
      wordBank: buildWordBank(sections, cfg, rng)
    };
  }

  /* Pick a fresh code that overlaps least with recently seen questions. */
  function newCode(cfg, recentIds, rand) {
    cfg = normCfg(cfg);
    var recent = new Set(recentIds || []);
    var best = null, bestScore = Infinity;
    for (var i = 0; i < 40; i++) {
      var code = buildCode(randomSeedHex(rand), cfg);
      if (!recent.size) return code;
      var exam = makeExam(code);
      var score = exam.items.reduce(function (s, it) { return s + (recent.has(it.id) ? 1 : 0); }, 0);
      if (score < bestScore) { best = code; bestScore = score; }
      if (score === 0) break;
    }
    return best;
  }

  EC.core = {
    norm: norm, compact: compact, lev: lev, tolerance: tolerance, sameTerm: sameTerm, hit: hit, hitAny: hitAny,
    gradeItem: gradeItem, gradeExam: gradeExam, markPoints: markPoints, isAnswered: isAnswered,
    letterGrade: letterGrade, modelAnswer: modelAnswer, roundHalf: roundHalf,
    hashString: hashString, mulberry32: mulberry32, shuffle: shuffle,
    LENGTHS: LENGTHS, DIFFICULTY: DIFFICULTY, SECTION_INFO: SECTION_INFO, inSection: inSection, DEFAULT_CFG: DEFAULT_CFG, normCfg: normCfg,
    buildCode: buildCode, parseCode: parseCode, randomSeedHex: randomSeedHex,
    makeExam: makeExam, makeRetryExam: makeRetryExam, newCode: newCode, overlaps: overlaps,
    resetGlossary: function () { glossary = null; }
  };
})(typeof window !== 'undefined' ? window : globalThis);
