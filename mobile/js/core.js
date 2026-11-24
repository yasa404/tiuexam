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

  /* Keyword match for short answers.
     The key must start at a word boundary in the answer (prefix stems allowed,
     e.g. "convenien" matches "convenience"). Keys starting with "=" must equal
     the whole answer. Keys starting with "#" are numbers: some number in the answer must equal them
     ("#28" accepts 28). Keys starting with "!" allow no typos (used for code).
     Keys starting with "~" are exact code: case and punctuation count, spaces, quote style, const and trailing commas do not. Keys of 5+ letters tolerate a small typo. */
  function numbersIn(text) {
    var out = [], re = /(^|[^a-z0-9.])(\d[\d,]*(?:\.\d+)?)/gi, m;
    while ((m = re.exec(String(text)))) { out.push(parseFloat(m[2].replace(/,/g, ''))); re.lastIndex = m.index + m[0].length; }
    return out;
  }
  function exactCode(s) {
    return String(s).replace(/[‘’“”"]/g, "'").replace(/\bconst\s+/g, '').replace(/\s+/g, '').replace(/,+([)\]])/g, '$1');
  }
  function hit(text, key) {
    if (key.charAt(0) === '~') return exactCode(text).indexOf(exactCode(key.slice(1))) > -1;
    var a = norm(text);
    if (!a) return false;
    if (key.charAt(0) === '#') { var want = parseFloat(key.slice(1)); return numbersIn(text).some(function (x) { return Math.abs(x - want) < 0.0061; }); }
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
      case 'match': {
        var a = Array.isArray(ans) ? ans : [];
        var res = item.rows.map(function (r, i) { return a[i] === r.answer; });
        blank = item.rows.every(function (_, i) { return typeof a[i] !== 'number'; });
        got = res.filter(Boolean).length;
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
    if (item.type === 'match') return Array.isArray(ans) && ans.some(function (v) { return typeof v === 'number'; });
    if (item.type === 'list') return Array.isArray(ans) && ans.some(function (v) { return !isBlankText(v); });
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
      case 'match': return item.rows.map(function (r) { return r.answer; });
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
    Q: { label: 'Quick', total: 10, minutes: 15, budget: { A: 3, B: 4, C: 3 } },
    S: { label: 'Short', total: 20, minutes: 30, budget: { A: 6, B: 9, C: 5 } },
    M: { label: 'Standard', total: 40, minutes: 60, budget: { A: 14, B: 16, C: 10 } },
    F: { label: 'Full', total: 60, minutes: 90, budget: { A: 22, B: 23, C: 15 } }
  };
  /* Section keys, in paper order. */
  var KEYS = ['A', 'B', 'C'], ALL = KEYS.join('');
  var SECTION_INFO = {
    A: { title: 'Short answer', instr: '', types: ['def', 'list'] },
    B: { title: 'Multiple choice', instr: '', types: ['mcq'] },
    C: { title: 'Matching', instr: '', types: ['match'] }
  };
  /* A course can rename sections, change which types they hold, and change the mark budgets (EC.COURSE). */
  if (EC.COURSE && EC.COURSE.sectionInfo) Object.keys(EC.COURSE.sectionInfo).forEach(function (k) { Object.assign(SECTION_INFO[k], EC.COURSE.sectionInfo[k]); });
  if (EC.COURSE && EC.COURSE.budgets) Object.keys(EC.COURSE.budgets).forEach(function (k) { LENGTHS[k].budget = EC.COURSE.budgets[k]; });
  function inSection(q, key) { return SECTION_INFO[key].types.indexOf(q.type) > -1; }

  /* Difficulty level of a paper: share of easy / medium / hard questions it aims for.
     X = mixed (default). Codes carry E, N or H after the length letter, e.g. MA-7F3A-1234567MH. */
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
  var DEFAULT_CFG = { lectures: UNITS.slice(), length: 'M', sections: ALL, difficulty: 'X' };

  function normCfg(cfg) {
    cfg = cfg || {};
    var lect = (cfg.lectures || DEFAULT_CFG.lectures).map(Number).filter(function (n) { return UNITS.indexOf(n) > -1; });
    lect = Array.from(new Set(lect)).sort();
    if (!lect.length) lect = DEFAULT_CFG.lectures.slice();
    var length = LENGTHS[cfg.length] ? cfg.length : 'M';
    var secs = String(cfg.sections || ALL).toUpperCase().split('').filter(function (c) { return KEYS.indexOf(c) > -1; });
    secs = Array.from(new Set(secs)).sort().join('');
    if (!secs) secs = ALL;
    var diff = DIFFICULTY[String(cfg.difficulty || 'X').toUpperCase()] ? String(cfg.difficulty || 'X').toUpperCase() : 'X';
    return { lectures: lect, length: length, sections: secs, difficulty: diff };
  }

  function buildCode(seedHex, cfg) {
    cfg = normCfg(cfg);
    var code = PREFIX + '-' + seedHex.toUpperCase();
    var lect = cfg.lectures.join('');
    var diff = cfg.difficulty === 'X' ? '' : cfg.difficulty;
    if (lect !== UNITS.join('') || cfg.length !== 'M' || cfg.sections !== ALL || diff) code += '-' + lect + cfg.length + diff;
    if (cfg.sections !== ALL) code += '-' + cfg.sections;
    return code;
  }

  function parseCode(code) {
    var c = String(code || '').trim().toUpperCase().replace(/\s+/g, '');
    var m = CODE_RE.exec(c);
    if (!m) return null;
    var cfg = normCfg({
      lectures: m[2] ? m[2].split('').map(Number) : UNITS.slice(),
      length: m[3] || 'M',
      sections: m[5] || ALL,
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
  var GENERIC = new Set(['flutter', 'dart', 'widget', 'widgets', 'class', 'object', 'objects', 'text', 'child', 'children', 'state', 'screen', 'app', 'title', 'body',
    'card', 'column', 'row', 'icon', 'button', 'name', 'code', 'data', 'width', 'height', 'parent', 'list', 'layout', 'image', 'color', 'size', 'style', 'build',
    'campus shop', 'student', 'course', 'price', 'product', 'label', 'labels', 'file', 'error', 'value', 'string', 'center', 'wrap', 'chip', 'listview', 'expanded',
    'statelesswidget', 'statefulwidget', 'setstate', 'scaffold', 'appbar', 'study', 'comma', 'lessons', 'method', 'methods', 'route', 'category']);
  function concepts(q) {
    if (q._con) return q._con;
    var out = [];
    if (q.type === 'mcq' && q.options[0].split(' ').length <= 4) out.push(q.options[0]);
    out = out.map(norm).filter(function (t) { return t.length >= 4 && !GENERIC.has(t) && !/^(eight|five|seven|ten|four|three|\d+)$/.test(t); });
    Object.defineProperty(q, '_con', { value: out, enumerable: false });
    return out;
  }
  function visible(q) {
    if (q._vis) return q._vis;
    var t = q.q;
    if (q.type === 'mcq') t += ' ' + q.options[0];
    if (q.type === 'match') t += ' ' + q.pairs.map(function (p) { return p.join(' '); }).join(' ');
    if (q.type === 'list') t += ' ' + q.items.map(function (i) { return i.text; }).join(' ');
    var v = ' ' + norm(t) + ' ';
    Object.defineProperty(q, '_vis', { value: v, enumerable: false });
    return v;
  }
  function givesAway(a, b) {
    var v = visible(b);
    return concepts(a).some(function (c) { return v.indexOf(' ' + c + ' ') > -1; });
  }
  /* A matching question overlaps another question if any of its pairs does. */
  function parts(q) {
    if (q.type !== 'match') return [q];
    if (q._parts) return q._parts;
    var out = q.pairs.map(function (p) { return { type: 'def', q: p[0], model: p[1] }; });
    Object.defineProperty(q, '_parts', { value: out, enumerable: false });
    return out;
  }
  function overlaps(a, b) {
    if (a.type === 'match' || b.type === 'match') {
      if (givesAway(a, b) || givesAway(b, a)) return true;
      return parts(a).some(function (x) { return parts(b).some(function (y) { return overlaps(x, y); }); });
    }
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

  /* Letters for a matching question: which pairs are shown, and the order of the right-hand items. */
  function makeMatch(it, rng, size) {
    var q = it.q, n = Math.min(size || 5, q.pairs.length, 5);
    var order = shuffle(q.pairs.map(function (_, i) { return i; }), rng);
    var shown = order.slice(0, n), right = shuffle(order.slice(0, Math.min(q.pairs.length, n + 1)), rng);
    it.rows = shown.map(function (i) { return { left: q.pairs[i][0], answer: right.indexOf(i) }; });
    it.right = right.map(function (i) { return q.pairs[i][1]; });
    it.marks = n;
  }
  function fillItem(it, rng, letter, size) {
    if (it.type === 'match') makeMatch(it, rng, size);
    if (it.type === 'mcq') {
      var others = shuffle(it.q.options.slice(1), rng);
      it.opts = [];
      for (var p = 0, o = 0; p < 4; p++) it.opts.push(p === letter ? it.q.options[0] : others[o++]);
      it.correct = letter;
    }
  }
  /* Sizes of the matching questions for a number of marks: as equal as possible, 3 to 5 pairs each where possible. */
  function matchSizes(marks) {
    var k = Math.ceil(marks / 5), out = [];
    for (var i = 0; i < k; i++) out.push(Math.floor(marks / k) + (i < marks % k ? 1 : 0));
    return out;
  }

  function makePaper(opts) {
    var cfg = normCfg(opts.cfg);
    var rng = mulberry32(hashString(opts.seedKey));
    var plan = LENGTHS[cfg.length];
    var on = function (k) { return cfg.sections.indexOf(k) > -1; };
    var budget = {}, spare = 0, out = {}, sizes = {};
    KEYS.forEach(function (k) { out[k] = []; budget[k] = on(k) ? plan.budget[k] : 0; if (!on(k)) spare += plan.budget[k]; });
    // Marks of sections that are switched off go to multiple choice, then short answer, then matching.
    budget[['B', 'A', 'C'].filter(on)[0]] += spare;

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
    function take(key, q) { used.add(q.id); picked.push(q); out[key].push(q); }
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
        function (q) { return extra(q) && allowed(q); },
        function (q) { return extra(q) && !clash(q); },
        function (q) { return extra(q); }
      ];
    }
    // Marks a section cannot use move to the next selected section that is still to be filled.
    function spill(from, amount) {
      var later = { C: ['B', 'A'], A: ['B'], B: [] }[from].filter(on)[0];
      if (later && amount > 0) budget[later] += amount;
    }

    // Matching first (fewest questions), then short answers, then multiple choice avoids overlapping them.
    var poolC = poolFor('C'), want = budget.C ? matchSizes(budget.C) : [], leftC = 0, diffsC = diffPlan(want.length, rng, cfg.difficulty);
    var startC = Math.floor(rng() * lects.length);
    want.forEach(function (n, i) {
      var q = choose(poolC, ladder(lects[(startC + i) % lects.length], diffsC[i], function (x) { return x.pairs.length >= n; }));
      if (!q) { leftC += n; return; }
      take('C', q); sizes[q.id] = n;
    });
    spill('C', leftC);

    var remaining = budget.A, poolA = poolFor('A'), turn = rng() < 0.5 ? 0 : 1, diffsA = diffPlan(8, rng, cfg.difficulty);
    for (var i = 0; remaining > 0 && i < 60; i++) {
      var L = lects[i % lects.length], D = diffsA[i % diffsA.length], rem = remaining;
      var fits = function (q) {
        if (q.marks > rem) return false;
        var others = poolA.filter(function (x) { return !used.has(x.id) && x.id !== q.id; }).map(function (x) { return x.marks; });
        return reachable(others, rem - q.marks);
      };
      // One list for every two written answers.
      var type = (turn + i) % 3 === 0 ? 'list' : 'def';
      var q = choose(poolA, ladder(L, D, function (x) { return x.type === type && fits(x); }).concat(ladder(L, D, fits)));
      if (!q && !on('B')) q = choose(poolA, ladder(L, D, function (x) { return x.marks <= rem; }));
      if (!q) break;
      take('A', q); remaining -= q.marks;
    }
    spill('A', remaining);

    var poolB = poolFor('B'), diffsB = diffPlan(budget.B, rng, cfg.difficulty);
    for (i = 0; i < budget.B; i++) {
      var qb = choose(poolB, ladder(lects[i % lects.length], diffsB[i]));
      if (!qb) break;
      take('B', qb);
    }

    return finish(cfg, out, rng, sizes, plan);
  }

  /* Build items in paper order, numbering continuously. */
  function buildSections(out, rng, sizes, keepOrder) {
    var sections = [], items = [], n = 0;
    KEYS.forEach(function (key) {
      var qs = out[key] || [];
      if (!qs.length) return;
      if (key === 'A' && !keepOrder) qs = shuffle(qs, rng);
      var sec = { key: key, title: SECTION_INFO[key].title, instr: SECTION_INFO[key].instr, marks: 0, items: [] };
      var letters = key === 'B' ? letterPlan(qs.length, rng) : null;
      qs.forEach(function (q, idx) {
        var it = makeItem(q);
        it.n = ++n;
        it.section = key;
        fillItem(it, rng, letters && letters[idx], sizes && sizes[q.id]);
        sec.items.push(it); items.push(it); sec.marks += it.marks;
      });
      sections.push(sec);
    });
    return { sections: sections, items: items, total: sections.reduce(function (s, x) { return s + x.marks; }, 0) };
  }
  function finish(cfg, out, rng, sizes, plan) {
    var b = buildSections(out, rng, sizes);
    return { cfg: cfg, minutes: Math.round(plan.minutes * (b.total / plan.total)) || plan.minutes, total: b.total, sections: b.sections, items: b.items };
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
    var out = {};
    KEYS.forEach(function (key) { out[key] = shuffle(qs.filter(function (q) { return inSection(q, key); }), rng); });
    var b = buildSections(out, rng, null, true), sections = b.sections, items = b.items, total = b.total;
    var lectures = Array.from(new Set(qs.map(function (q) { return q.lecture; }))).sort();
    var cfg = normCfg({ lectures: lectures, length: 'M', sections: sections.map(function (s) { return s.key; }).join('') });
    return {
      code: 'RETRY-' + seedHex.toUpperCase(), kind: 'retry', cfg: cfg,
      minutes: Math.max(10, Math.round(total * 1.5)), total: total, sections: sections, items: items
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
    norm: norm, compact: compact, lev: lev, hit: hit, hitAny: hitAny,
    gradeItem: gradeItem, gradeExam: gradeExam, markPoints: markPoints, isAnswered: isAnswered,
    letterGrade: letterGrade, modelAnswer: modelAnswer, roundHalf: roundHalf,
    hashString: hashString, mulberry32: mulberry32, shuffle: shuffle,
    LENGTHS: LENGTHS, DIFFICULTY: DIFFICULTY, SECTION_INFO: SECTION_INFO, KEYS: KEYS, inSection: inSection, DEFAULT_CFG: DEFAULT_CFG, normCfg: normCfg,
    buildCode: buildCode, parseCode: parseCode, randomSeedHex: randomSeedHex,
    makeExam: makeExam, makeRetryExam: makeRetryExam, newCode: newCode, overlaps: overlaps
  };
})(typeof window !== 'undefined' ? window : globalThis);
