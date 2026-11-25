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
  /* A number such as "7.5" or "−30", or null. */
  function asNumber(s) {
    var m = /^\s*([-−–]?)\s*(\d+(?:[.,]\d+)?|\.\d+)\s*%?\s*$/.exec(String(s == null ? '' : s));
    return m ? (m[1] ? -1 : 1) * parseFloat(m[2].replace(/,(\d{3})\b/g, '$1').replace(',', '.')) : null;
  }
  function compact(s) { var n = asNumber(s); return n === null ? norm(s).replace(/ /g, '') : 'n' + n; }
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
    ['supervised', 'unsupervised', 'reinforcement', 'feature', 'features', 'label', 'target', 'reward', 'penalty', 'training', 'test', 'testing', 'mean', 'median', 'dependent', 'independent',
      'slope', 'intercept', 'mse', 'mae', 'rmse', 'underfitting', 'overfitting', 'dropna', 'fillna', 'dropduplicates', 'getdummies', 'labelencoder', 'ordinalencoder', 'fit', 'predict', 'fittransform',
      'pandas', 'numpy', 'q1', 'q3', 'iqr', 'nominal', 'ordinal', 'numerical', 'categorical', 'record', 'row', 'column', 'maximize', 'minimize', 'actual', 'predicted', 'squared', 'absolute', 'x', 'y']
      .forEach(function (t) { glossary.add(t); });
    return glossary;
  }

  /* Fill-in-the-blank comparison: exact after normalisation, or a small typo,
     but never a different known term. */
  function sameTerm(input, accepted, exact) {
    // Numbers are compared by value: "7.50" equals "7.5", but "75" does not.
    var want = accepted.map(asNumber).filter(function (n) { return n !== null; });
    if (want.length) {
      var given = asNumber(input);
      if (given !== null) return want.some(function (n) { return Math.abs(n - given) < 0.0051; });
      if (want.length === accepted.length) return false;
    }
    var a = compact(stripArticle(norm(input)));
    if (!a) return false;
    var acc = accepted.map(function (x) { return compact(stripArticle(norm(x))); });
    if (acc.indexOf(a) > -1) return true;
    if (exact) return false; // code: no typos
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
     ("#28" accepts 28). Keys of 5+ letters tolerate a small typo.
     Regular expressions are tested on Python code (see pyCode) or on the program output (see outText). */
  function numbersIn(text, signed) {
    var out = [], re = /(^|[^a-z0-9.])(\d[\d,]*(?:\.\d+)?)/gi, m, s = String(text);
    while ((m = re.exec(s))) {
      var x = parseFloat(m[2].replace(/,/g, ''));
      if (signed) {
        var before = s.slice(0, m.index + m[1].length), neg = /[-−–]\s*$/.exec(before);
        if (neg && !/[\d)]\s*$/.test(before.slice(0, neg.index))) x = -x;
      }
      out.push(x); re.lastIndex = m.index + m[0].length;
    }
    return out;
  }
  /* Python code without comments, spaces and empty lines; every quote becomes '. Capital letters count. */
  function pyCode(s) {
    var depth = 0;
    return String(s == null ? '' : s).replace(/\r/g, '').replace(/[‘’“”"]/g, "'").split('\n').map(function (line) {
      var q = false, i;
      for (i = 0; i < line.length; i++) {
        if (line[i] === "'") q = !q;
        else if (line[i] === '#' && !q) { line = line.slice(0, i); break; }
      }
      return line.replace(/\s+/g, '');
    }).filter(Boolean).reduce(function (all, line) {
      // A statement that continues on the next line (open brackets) is one line.
      all += (all && depth <= 0 ? '\n' : '') + line;
      depth += (line.match(/[([{]/g) || []).length - (line.match(/[)\]}]/g) || []).length;
      return all;
    }, '');
  }
  /* Program output: lower case, single spaces, one line per printed line. */
  function outText(s) {
    return String(s == null ? '' : s).replace(/\r/g, '').replace(/−/g, '-').toLowerCase().split('\n').map(function (l) { return l.replace(/\s+/g, ' ').trim(); }).filter(Boolean).join('\n');
  }
  function isRe(k) { return Object.prototype.toString.call(k) === '[object RegExp]'; }
  function hit(text, key, out) {
    if (isRe(key)) return key.test(out ? outText(text) : pyCode(text));
    if (key.charAt(0) === '#') {
      var nk = /^#(-?[\d.]+)(?:~([\d.]+))?$/.exec(key), want = parseFloat(nk[1]), tol = nk[2] ? parseFloat(nk[2]) + 1e-9 : 0.0061;
      return numbersIn(text, nk[1].charAt(0) === '-').some(function (x) { return Math.abs(x - want) <= tol; });
    }
    if (key.charAt(0) === '=') return a === norm(key.slice(1));
    var b = norm(key);
    if (!b) return false;
    var B = b.replace(/ /g, '');
    var starts = [0];
    for (var i = 0; i < a.length; i++) if (a[i] === ' ') starts.push(i + 1);
    for (var s = 0; s < starts.length; s++) {
      var tail = a.slice(starts[s]);
      if (tail.indexOf(b) === 0) return true;
      var T = tail.slice(0, B.length + 24).replace(/ /g, '');
      if (T.indexOf(B) === 0) return true;
      if (B.length >= 5) {
        var tol = B.length >= 10 ? 2 : 1;
        for (var w = B.length - 1; w <= B.length + 1; w++) {
          if (w <= T.length && lev(T.slice(0, w), B) <= tol) return true;
        }
      }
    }
    return false;
  }
  function hitAny(text, keys, out) {
    for (var i = 0; i < keys.length; i++) if (hit(text, keys[i], out)) return true;
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

  /* Key-point marking for def / exp with optional self-marking overrides.
     over: { "p0": true, "l3": false, ... } */
  function markPoints(q, ans) {
    ans = ans || {};
    var text = String(ans.text || ''), outp = String(ans.out || '');
    var over = ans.over || {};
    function decide(key, auto) { return Object.prototype.hasOwnProperty.call(over, key) ? !!over[key] : auto; }
    var pts = q.points.map(function (p, i) {
      var auto = p.out ? hitAny(outp, p.keys, true) : hitAny(text, p.keys);
      return { key: 'p' + i, text: p.text, out: !!p.out, auto: auto, on: decide('p' + i, auto) };
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
    return { points: pts, list: lst, frac: frac, pick: pick, blank: !text.trim() && !outp.trim() && (!pick || pick.chosen === null) };
  }

  /* item: a paper item (see makePaper). ans: the student's answer for it. */
  function gradeItem(item, ans) {
    var q = item.q, max = item.marks, got = 0, detail = {}, blank = false;
    switch (item.type) {
      case 'mcq':
        blank = ans === undefined || ans === null;
        got = !blank && ans === item.correct ? max : 0;
        break;
      case 'fill': {
        var a = Array.isArray(ans) ? ans : [];
        var res = q.blanks.map(function () { return false; });
        // q.set: blanks that accept any order, as one group [0, 1] or several groups [[0, 1], [2, 3]].
        var groups = q.set ? (Array.isArray(q.set[0]) ? q.set : [q.set]) : [];
        var grouped = [].concat.apply([], groups);
        q.blanks.forEach(function (acc, i) { if (grouped.indexOf(i) === -1) res[i] = sameTerm(a[i], acc, q.exact); });
        groups.forEach(function (set) {
          var free = set.slice();
          set.forEach(function (i) {
            var j = -1;
            for (var f = 0; f < free.length; f++) if (sameTerm(a[i], q.blanks[free[f]], q.exact)) { j = f; break; }
            if (j > -1) { res[i] = true; free.splice(j, 1); }
          });
        });
        blank = q.blanks.every(function (_, i) { return isBlankText(a[i]); });
        got = res.filter(Boolean).length * (max / q.blanks.length);
        detail.res = res;
        break;
      }
      case 'prac': {
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
    if (item.type === 'fill') return Array.isArray(ans) && ans.some(function (v) { return !isBlankText(v); });
    return !isBlankText(ans.text) || !isBlankText(ans.out);
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
      case 'fill': return q.blanks.map(function (b) { return b[0]; });
      case 'prac': return { text: q.model, out: (EC.OUTPUTS || {})[q.id] || '' };
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
    // Theory papers: tasks = the marks of the practical question.
    Q: { label: 'Quick', total: 10, minutes: 15, budget: { A: 3, B: 2, C: 5 }, tasks: [5] },
    S: { label: 'Short', total: 20, minutes: 30, budget: { A: 9, B: 6, C: 5 }, tasks: [5] },
    M: { label: 'Standard', total: 40, minutes: 60, budget: { A: 18, B: 12, C: 10 }, tasks: [10] },
    F: { label: 'Full', total: 60, minutes: 90, budget: { A: 30, B: 20, C: 10 }, tasks: [10] },
    // Practical papers
    T: { label: 'One task', total: 10, minutes: 25, practical: true, budget: { A: 0, B: 0, C: 10 }, tasks: [10] },
    U: { label: 'Short', total: 20, minutes: 45, practical: true, budget: { A: 0, B: 0, C: 20 }, tasks: [10, 5, 5] },
    V: { label: 'Standard', total: 30, minutes: 70, practical: true, budget: { A: 0, B: 0, C: 30 }, tasks: [10, 10, 5, 5] },
    W: { label: 'Full', total: 40, minutes: 90, practical: true, budget: { A: 0, B: 0, C: 40 }, tasks: [10, 10, 10, 5, 5] }
  };
  /* Section keys, in paper order. */
  var KEYS = ['A', 'B', 'C'], ALL = KEYS.join('');
  var LENGTH_KEYS = { theory: ['Q', 'S', 'M', 'F'], practical: ['T', 'U', 'V', 'W'] };
  var SECTION_INFO = {
    A: { title: 'Multiple choice', instr: '', types: ['mcq'] },
    B: { title: 'Fill in the blanks', instr: '', types: ['fill'] },
    C: { title: 'Practical', instr: '', types: ['prac'] }
  };
  /* A course can rename sections, change which types they hold, and change the mark budgets (EC.COURSE). */
  if (EC.COURSE && EC.COURSE.sectionInfo) Object.keys(EC.COURSE.sectionInfo).forEach(function (k) { Object.assign(SECTION_INFO[k], EC.COURSE.sectionInfo[k]); });
  function inSection(q, key) { return SECTION_INFO[key].types.indexOf(q.type) > -1; }

  /* Difficulty level of a paper: share of easy / medium / hard questions it aims for.
     X = mixed (default). Codes carry E, N or H after the length letter, e.g. ML-7F3A-2345MH. */
  var DIFFICULTY = {
    X: { label: 'Mixed', mix: [0.3, 0.5, 0.2] },
    E: { label: 'Easy', mix: [0.7, 0.3, 0] },
    N: { label: 'Medium', mix: [0.15, 0.7, 0.15] },
    H: { label: 'Hard', mix: [0, 0.4, 0.6] }
  };
  /* Course units (weeks) and code prefix come from EC.COURSE (data/questions.js). */
  var UNITS = (EC.COURSE && EC.COURSE.units) || [1, 2, 3, 4];
  var PREFIX = (EC.COURSE && EC.COURSE.prefix) || 'EC';
  var CODE_RE = new RegExp('^' + PREFIX + '-?([0-9A-F]{4})(?:-([' + UNITS.join('') + ']{1,' + UNITS.length + '})([QSMFTUVW])([ENH])?)?(?:-([A-C]{1,3}))?$');
  var DEFAULT_CFG = { lectures: UNITS.slice(), length: 'M', sections: ALL, difficulty: 'X' };
  /* Lectures that have practical tasks. */
  function pracUnits() { return UNITS.filter(function (u) { return (EC.BANK || []).some(function (q) { return q.type === 'prac' && q.lecture === u; }); }); }

  function normCfg(cfg) {
    cfg = cfg || {};
    var lect = (cfg.lectures || DEFAULT_CFG.lectures).map(Number).filter(function (n) { return UNITS.indexOf(n) > -1; });
    lect = Array.from(new Set(lect)).sort();
    if (!lect.length) lect = DEFAULT_CFG.lectures.slice();
    var length = LENGTHS[cfg.length] ? cfg.length : 'M';
    var secs = String(cfg.sections || ALL).toUpperCase().split('').filter(function (c) { return KEYS.indexOf(c) > -1; });
    secs = Array.from(new Set(secs)).sort().join('');
    if (!secs) secs = ALL;
    if (LENGTHS[length].practical) {
      var pu = pracUnits(), pl = lect.filter(function (u) { return pu.indexOf(u) > -1; });
      lect = pl.length ? pl : pu;
      secs = ALL;
    }
    // A theory paper cannot be only practical when its lectures have no tasks.
    if (secs === 'C' && !lect.some(function (u) { return pracUnits().indexOf(u) > -1; })) secs = ALL;
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
    if (q.type === 'fill') txt = q.q.replace(/\{\{(\d+)\}\}/g, function (_, i) { return q.blanks[+i][0]; });
    if (q.type === 'prac') txt += ' ' + q.steps.join(' ');
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
  var GENERIC = new Set(['data', 'dataset', 'model', 'table', 'column', 'columns', 'rows', 'record', 'value', 'values', 'pandas', 'numpy', 'dataframe', 'mean', 'median', 'number', 'text', 'feature',
    'features', 'target', 'label', 'test', 'training', 'error', 'actual', 'predicted', 'input', 'output', 'price', 'score', 'fit', 'predict', 'sum', 'len', 'append', 'categories', 'line', 'slope',
    'outlier', 'duplicates', 'supervised learning', 'linear regression', 'age', 'final', 'average', 'head', 'finance', 'nan', 'true', 'false', 'prediction', 'predictions', 'examples', 'points', 'standard', 'straight']);
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
    if (q.type === 'prac') t += ' ' + q.steps.join(' ');
    if (q.code) t += ' ' + q.code;
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

  function makePaper(opts) {
    var cfg = normCfg(opts.cfg);
    var rng = mulberry32(hashString(opts.seedKey));
    var plan = LENGTHS[cfg.length];
    var on = function (k) { return plan.practical ? k === 'C' : cfg.sections.indexOf(k) > -1; };
    var budget = {}, spare = 0, out = { A: [], B: [], C: [] };
    KEYS.forEach(function (k) { budget[k] = on(k) ? plan.budget[k] : 0; if (!on(k)) spare += plan.budget[k]; });
    var tasks = on('C') ? plan.tasks.slice() : [];
    // Marks of sections that are switched off go to multiple choice, then fill in the blanks, then practical tasks.
    var sink = ['A', 'B', 'C'].filter(on)[0];
    budget[sink] += spare;
    if (sink === 'C') { for (; spare >= 10; spare -= 10) tasks.push(10); if (spare >= 5) tasks.push(5); }

    var picked = [], used = new Set();
    // The lecture in focus comes up more often than the others (EC.COURSE.focus).
    var focus = (EC.COURSE && EC.COURSE.focus) || {};
    function weighted(extra) {
      var list = [];
      cfg.lectures.forEach(function (l) { var n = (focus[l] || 1) + (focus[l] ? extra : 0); for (var i = 0; i < n; i++) list.push(l); });
      return shuffle(list, rng);
    }
    function poolFor(key) { return shuffle((EC.BANK || []).filter(function (q) { return inSection(q, key) && cfg.lectures.indexOf(q.lecture) > -1; }), rng); }
    // Levels with a 0% share never use that difficulty unless nothing else is left.
    var mix = DIFFICULTY[cfg.difficulty].mix;
    function allowed(q) { return mix[['easy', 'medium', 'hard'].indexOf(q.difficulty)] > 0; }
    function clash(q) { for (var i = 0; i < picked.length; i++) if (overlaps(q, picked[i])) return true; return false; }
    function take(key, q) { used.add(q.id); picked.push(q); out[key].push(q); }
    function choose(pool, tests) {
      for (var t = 0; t < tests.length; t++) for (var i = 0; i < pool.length; i++) if (!used.has(pool[i].id) && tests[t](pool[i])) return pool[i];
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

    // Practical tasks first (fewest), then blanks, then multiple choice; each avoids overlapping what is already there.
    var poolC = poolFor('C'), lectC = weighted(1).filter(function (l) { return poolC.some(function (q) { return q.lecture === l; }); }), leftC = 0, diffsC = diffPlan(tasks.length, rng, cfg.difficulty);
    tasks.forEach(function (marks, i) {
      var q = choose(poolC, ladder(lectC[i % lectC.length], diffsC[i], function (x) { return x.marks === marks; }));
      if (q) { take('C', q); return; }
      // No task of this size left: use the other size.
      for (var rest = marks; rest > 0;) {
        q = choose(poolC, ladder(lectC[i % lectC.length], diffsC[i], function (x) { return x.marks <= rest; }));
        if (!q) { leftC += rest; break; }
        take('C', q); rest -= q.marks;
      }
    });
    if (on('A')) budget.A += leftC; else if (on('B')) budget.B += leftC;

    var lects = weighted(0);
    var poolB = poolFor('B'), remB = budget.B, diffsB = diffPlan(Math.max(4, budget.B), rng, cfg.difficulty), multi = 0;
    for (var iB = 0; remB > 0 && iB < 120; iB++) {
      var okB = function (q) { return q.blanks.length <= remB && (q.blanks.length === 1 || multi < Math.ceil(budget.B / 4)); };
      var qB = choose(poolB, ladder(lects[iB % lects.length], diffsB[iB % diffsB.length], okB));
      if (!qB) qB = choose(poolB, ladder(lects[iB % lects.length], diffsB[iB % diffsB.length], function (q) { return q.blanks.length <= remB; }));
      if (!qB) break;
      if (qB.blanks.length > 1) multi++;
      take('B', qB); remB -= qB.blanks.length;
    }
    if (on('A')) budget.A += remB;

    var poolA = poolFor('A'), diffsA = diffPlan(budget.A, rng, cfg.difficulty);
    for (var iA = 0; iA < budget.A; iA++) {
      var qA = choose(poolA, ladder(lects[iA % lects.length], diffsA[iA]));
      if (!qA) break;
      take('A', qA);
    }

    var b = buildSections(out, rng);
    return { cfg: cfg, practical: !!plan.practical, minutes: Math.round(plan.minutes * (b.total / plan.total)) || plan.minutes, total: b.total, sections: b.sections, items: b.items, wordBank: buildWordBank(b.sections, cfg, rng) };
  }

  /* Build items in paper order, numbering continuously. */
  function buildSections(out, rng) {
    var sections = [], items = [], n = 0;
    KEYS.forEach(function (key) {
      var qs = out[key] || [];
      if (!qs.length) return;
      if (key === 'B') qs = shuffle(qs, rng);
      var sec = { key: key, title: SECTION_INFO[key].title, instr: SECTION_INFO[key].instr, marks: 0, items: [] };
      var letters = key === 'A' ? letterPlan(qs.length, rng) : null;
      qs.forEach(function (q, idx) {
        var it = makeItem(q);
        it.n = ++n;
        it.section = key;
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
    return { sections: sections, items: items, total: sections.reduce(function (s, x) { return s + x.marks; }, 0) };
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
    var out = {};
    KEYS.forEach(function (key) { out[key] = shuffle(qs.filter(function (q) { return inSection(q, key); }), rng); });
    var b = buildSections(out, rng), sections = b.sections, items = b.items, total = b.total;
    var lectures = Array.from(new Set(qs.map(function (q) { return q.lecture; }))).sort();
    var cfg = normCfg({ lectures: lectures, length: 'M', sections: sections.map(function (s) { return s.key; }).join('') });
    return {
      code: 'RETRY-' + seedHex.toUpperCase(), kind: 'retry', cfg: cfg,
      practical: sections.length === 1 && sections[0].key === 'C', minutes: Math.max(10, Math.round(total * 1.5)), total: total, sections: sections, items: items,
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
    LENGTHS: LENGTHS, DIFFICULTY: DIFFICULTY, SECTION_INFO: SECTION_INFO, KEYS: KEYS, LENGTH_KEYS: LENGTH_KEYS, pracUnits: pracUnits, pyCode: pyCode, outText: outText, asNumber: asNumber, inSection: inSection, DEFAULT_CFG: DEFAULT_CFG, normCfg: normCfg,
    buildCode: buildCode, parseCode: parseCode, randomSeedHex: randomSeedHex,
    makeExam: makeExam, makeRetryExam: makeRetryExam, newCode: newCode, overlaps: overlaps,
    resetGlossary: function () { glossary = null; }
  };
})(typeof window !== 'undefined' ? window : globalThis);
