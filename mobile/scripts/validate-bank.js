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
const PAGES = { 1: 17, 2: 33, 3: 35, 4: 21, 5: 16, 6: 18, 7: 29 };
const SKIPPED = { 1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 16, 17], 2: [1, 2, 3, 19, 33], 3: [1, 2, 3, 19, 35], 4: [1, 2, 3, 21], 5: [1, 2, 16], 6: [1, 2], 7: [1, 2, 25] };
const MIN_PER_WEEK = { 1: 40, 2: 60, 3: 60, 4: 55, 5: 40, 6: 40, 7: 90 };
// The only kinds of question on the exam: short answer (def, list), multiple choice, matching.
const TYPES = ['mcq', 'def', 'list', 'match'];
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

  // Duplicate stems within a type (matching questions share their instructions).
  const key = q.type + '|' + (q.type === 'match' ? q.pairs.map((p) => p.join('=')).join('|') : C.norm(q.q) + '|' + (q.code || ''));
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
    case 'match': {
      if (!Array.isArray(q.pairs) || q.pairs.length < 5) { err(q, 'matching needs at least 5 pairs'); break; }
      if (q.pairs.some((p) => p.length !== 2 || p.some((t) => !String(t).trim()))) err(q, 'bad pair');
      for (const side of [0, 1]) if (new Set(q.pairs.map((p) => p[side].trim())).size !== q.pairs.length) err(q, 'items on one side are not distinct');
      // The answer must not be copied from the left item (e.g. "Card margin" = "the margin of a card").
      q.pairs.forEach((p) => {
        const words = (t) => new Set(C.norm(t).split(' ').filter((w) => w.length >= 5));
        const R = words(p[1]);
        words(p[0]).forEach((w) => { if (R.has(w) && q.pairs.filter((x) => words(x[1]).has(w)).length === 1) warnings.push(`${q.id}: "${w}" is on both sides of the pair "${p[0]}"`); });
      });
      break;
    }
    case 'list':
      if (!q.items || !q.items.length) err(q, 'list has no items');
      if (!(q.need >= 1 && q.need <= q.items.length)) err(q, 'list need out of range');
      q.items.forEach((it, i) => { if (!it.keys.length) err(q, `list item ${i} has no keys`); });
      break;
    case 'def':
      if (!q.points || !q.points.length) err(q, 'no key points');
      q.points.forEach((p, i) => { if (!p.keys.length) err(q, `point ${i} has no keys`); });
      if (!q.model || q.model.length < 20) err(q, 'missing model answer');
      if (q.need > q.points.length) err(q, 'need > points');
      break;
  }
}

// Near-duplicates inside a type (warnings only: the generator also avoids putting them on one paper).
for (let i = 0; i < BANK.length; i++) {
  for (let j = i + 1; j < BANK.length; j++) {
    const a = BANK[i], b = BANK[j];
    if (a.type !== b.type) continue;
    if (a.type === 'mcq' && C.norm(a.options[0]) === C.norm(b.options[0]) && C.overlaps(a, b)) warnings.push(`${a.id} ~ ${b.id}: similar stem and same answer`);
  }
}

// Coverage requirements.
const count = (f) => BANK.filter(f).length;
const byType = Object.fromEntries(TYPES.map((t) => [t, count((q) => q.type === t)]));
const byLecture = Object.fromEntries(WEEKS.map((l) => [l, count((q) => q.lecture === l)]));
const byDiff = Object.fromEntries(['easy', 'medium', 'hard'].map((d) => [d, count((q) => q.difficulty === d)]));
if (BANK.length < 430) errors.push(`bank has ${BANK.length} questions; need at least 430`);
// Questions test concepts, not what exactly was shown in a lecture.
for (const q of BANK) if (/\b(in|of|from|by) (the|this|our) (lecture|slides?|practical|lab|starter|progress app)\b|lecture[’']s|\bour (course )?app\b|Campus Shop/i.test(q.q)) err(q, 'asks what was in the lecture');
for (const l of WEEKS) if (byLecture[l] < MIN_PER_WEEK[l]) errors.push(`lecture ${l} has ${byLecture[l]} questions; need at least ${MIN_PER_WEEK[l]}`);
if (byType.mcq < 220) errors.push(`only ${byType.mcq} MCQs; need at least 220`);
if (byType.match < 28) errors.push(`only ${byType.match} matching questions; need at least 28`);
if (byType.def + byType.list < 120) errors.push(`only ${byType.def + byType.list} short-answer questions; need at least 120`);

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
console.log(`Matching pairs: ${BANK.reduce((s, q) => s + (q.pairs ? q.pairs.length : 0), 0)}`);
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
