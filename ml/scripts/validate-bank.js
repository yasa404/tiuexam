/* Validates the question bank. Exit code 1 on any error.
   Usage: node scripts/validate-bank.js [--verbose] */
const { load } = require('../tests/load');

const EC = load();
const BANK = EC.BANK;
const C = EC.core;
const verbose = process.argv.includes('--verbose');
const errors = [];
const warnings = [];
const err = (q, msg) => errors.push(`${q ? q.id : '-'}: ${msg}`);

// Last PDF page of each lecture, and the pages no question may use (titles, course administration, references).
const WEEKS = EC.COURSE.units;
const PAGES = { 2: 14, 3: 33, 4: 26, 5: 35 };
const SKIPPED = { 2: [1, 2, 13, 14], 3: [1, 2, 32, 33], 4: [1, 2, 25, 26], 5: [1, 2, 34, 35] };
const MIN_PER_WEEK = { 2: 60, 3: 130, 4: 75, 5: 100 };
// The only kinds of question on the exam: multiple choice, fill in the blanks, practical.
const TYPES = ['mcq', 'fill', 'prac'];
const BANNED = /\b(all|none|both|neither) of (the above|these|them|the options)\b/i;

const ids = new Set();
const stems = new Map();
for (const q of BANK) {
  if (ids.has(q.id)) err(q, 'duplicate id');
  ids.add(q.id);
  if (!WEEKS.includes(q.lecture)) err(q, 'bad lecture');
  if (!TYPES.includes(q.type)) err(q, 'bad type');
  if (!['easy', 'medium', 'hard'].includes(q.difficulty)) err(q, 'bad difficulty');
  if (!(q.marks > 0)) err(q, 'marks must be > 0');
  const slides = Array.isArray(q.slide) ? q.slide : [q.slide];
  if (!slides.length || slides.some((s) => !Number.isInteger(s) || s < 1 || s > PAGES[q.lecture])) err(q, `bad slide reference ${JSON.stringify(q.slide)}`);
  if (slides.some((s) => SKIPPED[q.lecture].includes(s))) err(q, `uses a skipped page (${JSON.stringify(q.slide)})`);
  if (!q.q || !String(q.q).trim()) err(q, 'empty question text');

  // Duplicate stems within a type (fill compares the sentence with answers in place).
  const stemText = q.type === 'fill' ? q.q.replace(/\{\{(\d+)\}\}/g, (_, i) => q.blanks[+i][0]) : q.q;
  const key = q.type + '|' + C.norm(stemText) + '|' + (q.code || '');
  if (stems.has(key)) err(q, `duplicate question text (same as ${stems.get(key)})`);
  stems.set(key, q.id);

  switch (q.type) {
    case 'mcq': {
      if (!Array.isArray(q.options) || q.options.length !== 4) { err(q, 'MCQ must have exactly 4 options'); break; }
      // Code options may differ only in punctuation, so compare the text itself.
      const normed = q.options.map((o) => String(o).replace(/\s+/g, ' ').trim());
      if (new Set(normed).size !== 4) err(q, 'MCQ options are not distinct');
      if (normed.some((o) => !o)) err(q, 'empty MCQ option');
      if (q.options.some((o) => BANNED.test(o))) err(q, '"all/none of the above" style option');
      // The correct option must not give itself away by being much longer than every wrong option.
      const lens = q.options.map((o) => o.length);
      if (lens[0] > 30 && lens[0] > 1.25 * Math.max(...lens.slice(1))) err(q, `correct option is much longer than every wrong option (${lens.join('/')} chars)`);
      break;
    }
    case 'fill': {
      if (!q.blanks || !q.blanks.length) { err(q, 'fill has no blanks'); break; }
      q.blanks.forEach((alts, i) => {
        if (!q.q.includes(`{{${i}}}`)) err(q, `blank ${i} missing from text`);
        if (!alts.length || alts.some((a) => !C.norm(a))) err(q, `blank ${i} has an empty alternative`);
      });
      if (q.marks !== q.blanks.length) err(q, 'fill marks must equal number of blanks');
      if (q.set) [].concat(...q.set).forEach((i) => { if (!q.blanks[i]) err(q, `set refers to missing blank ${i}`); });
      break;
    }
    case 'prac':
      if (![5, 10].includes(q.marks) || q.points.length !== q.marks) err(q, 'a task has 5 or 10 points, one mark each');
      if (!q.points.some((p) => p.out) || q.points.filter((p) => p.out).length > 2) err(q, 'a task has one or two output points');
      q.points.forEach((p, i) => { if (!p.keys.length) err(q, `point ${i} has no keys`); });
      if (!q.given || q.steps.length < 2 || !q.model) err(q, 'a task needs data, steps and a model solution');
      if (!q.model.includes(q.given.split('\n')[0])) err(q, 'the model solution does not use the given data');
      if (!(EC.OUTPUTS || {})[q.id]) err(q, 'no output: run scripts/run-practicals.js');
      if (q.steps.some((s) => /dropna|fillna|get_dummies|drop_duplicates|fit_transform|LabelEncoder|OrdinalEncoder\(/.test(s))) err(q, 'the steps must not name the function that is asked for');
      break;
  }
}

// Near-duplicates inside a type (warnings only: the generator also avoids putting them on one paper).
for (let i = 0; i < BANK.length; i++) {
  for (let j = i + 1; j < BANK.length; j++) {
    const a = BANK[i], b = BANK[j];
    if (a.type !== b.type || a.type === 'fill') continue;
    if (a.type === 'mcq' && C.norm(a.options[0]) === C.norm(b.options[0]) && C.overlaps(a, b)) warnings.push(`${a.id} ~ ${b.id}: similar stem and same answer`);
  }
}

// Coverage requirements.
const count = (f) => BANK.filter(f).length;
const byType = Object.fromEntries(TYPES.map((t) => [t, count((q) => q.type === t)]));
const byLecture = Object.fromEntries(WEEKS.map((l) => [l, count((q) => q.lecture === l)]));
const byDiff = Object.fromEntries(['easy', 'medium', 'hard'].map((d) => [d, count((q) => q.difficulty === d)]));
if (BANK.length < 370) errors.push(`bank has ${BANK.length} questions; need at least 370`);
if (byType.prac < 30) errors.push(`only ${byType.prac} practical tasks; need at least 30`);
// Questions test concepts, not what exactly was shown in a lecture.
for (const q of BANK) if (/\b(in|of|from|by) (the|this|our) (lecture|slides?)\b|lecture[’']s/i.test(q.q)) err(q, 'asks what was in the lecture');
for (const l of WEEKS) if (byLecture[l] < MIN_PER_WEEK[l]) errors.push(`lecture ${l} has ${byLecture[l]} questions; need at least ${MIN_PER_WEEK[l]}`);
if (byType.mcq < 200) errors.push(`only ${byType.mcq} MCQs; need at least 200`);
if (byType.fill < 110) errors.push(`only ${byType.fill} fill-in-the-blank items; need at least 110`);

for (const q of BANK) if (q.qfig && !EC.FIGURES[q.qfig]) err(q, `unknown figure "${q.qfig}"`);
for (const name of Object.keys(EC.FIGURES)) if (!BANK.some((q) => q.qfig === name)) errors.push(`figure "${name}" is not used`);
for (const c of EC.CARDS) if (SKIPPED[c.lecture].includes(c.slide) || c.slide > PAGES[c.lecture]) errors.push(`flashcard ${c.id}: bad slide ${c.slide}`);
const mcqs = BANK.filter((q) => q.type === 'mcq');
const longest = mcqs.filter((q) => q.options[0].length >= Math.max(...q.options.slice(1).map((o) => o.length))).length;
console.log(`Questions: ${BANK.length}  (flashcards: ${EC.CARDS.length})`);
console.log('By lecture:', byLecture);
console.log('By type:   ', byType);
console.log('By level:  ', byDiff);
console.log(`MCQ length check: correct option is the longest in ${Math.round(100 * longest / mcqs.length)}% (chance is 25%)`);
if (warnings.length) {
  console.log(`\n${warnings.length} warning(s)` + (verbose ? ':' : ' (run with --verbose to list)'));
  if (verbose) warnings.forEach((w) => console.log('  ! ' + w));
}
if (errors.length) {
  console.error(`\n${errors.length} error(s):`);
  errors.forEach((e) => console.error('  x ' + e));
  process.exit(1);
}
console.log('\nBank OK.');
