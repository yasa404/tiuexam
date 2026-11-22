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

// Last PDF page of each week, so slide references can be range-checked (Weeks 5 and 6 share one 35-page PDF).
const WEEKS = EC.COURSE.units;
const PAGES = { 2: 44, 3: 27, 4: 23, 5: 35, 6: 35 };
// Minimum questions per week: Week 6 (unguided media) has the fewest slides.
const MIN_PER_WEEK = { 2: 90, 3: 90, 4: 90, 5: 90, 6: 60 };
const TYPES = ['mcq', 'fill', 'tf', 'def', 'list', 'exp'];
const BANNED = /\b(all|none|both|neither) of (the above|these|them|the options)\b/i;

const ids = new Set();
const stems = new Map();
for (const q of BANK) {
  if (ids.has(q.id)) err(q, 'duplicate id');
  ids.add(q.id);
  if (!WEEKS.includes(q.lecture)) err(q, 'bad week');
  if (!TYPES.includes(q.type)) err(q, 'bad type');
  if (!['easy', 'medium', 'hard'].includes(q.difficulty)) err(q, 'bad difficulty');
  if (!(q.marks > 0)) err(q, 'marks must be > 0');
  const slides = Array.isArray(q.slide) ? q.slide : [q.slide];
  if (!slides.length || slides.some((s) => !Number.isInteger(s) || s < 1 || s > PAGES[q.lecture])) err(q, `bad slide reference ${JSON.stringify(q.slide)}`);
  if (!q.q || !String(q.q).trim()) err(q, 'empty question text');

  // Duplicate stems within a type (fill compares the sentence with answers in place).
  const stemText = q.type === 'fill' ? q.q.replace(/\{\{(\d+)\}\}/g, (_, i) => q.blanks[+i][0]) : q.q;
  const key = q.type + '|' + C.norm(stemText);
  if (stems.has(key)) err(q, `duplicate question text (same as ${stems.get(key)})`);
  stems.set(key, q.id);

  switch (q.type) {
    case 'mcq': {
      if (!Array.isArray(q.options) || q.options.length !== 4) { err(q, 'MCQ must have exactly 4 options'); break; }
      const normed = q.options.map((o) => C.norm(o));
      if (new Set(normed).size !== 4) err(q, 'MCQ options are not distinct');
      if (normed.some((o) => !o)) err(q, 'empty MCQ option');
      if (q.options.some((o) => BANNED.test(o))) err(q, '"all/none of the above" style option');
      break;
    }
    case 'tf':
      if (typeof q.answer !== 'boolean') err(q, 'TF answer must be boolean');
      break;
    case 'fill': {
      if (!q.blanks || !q.blanks.length) { err(q, 'fill has no blanks'); break; }
      q.blanks.forEach((alts, i) => {
        if (!q.q.includes(`{{${i}}}`)) err(q, `blank ${i} missing from text`);
        if (!alts.length || alts.some((a) => !C.norm(a))) err(q, `blank ${i} has an empty alternative`);
      });
      if (q.marks !== q.blanks.length) err(q, 'fill marks must equal number of blanks');
      if (q.set) q.set.forEach((i) => { if (!q.blanks[i]) err(q, `set refers to missing blank ${i}`); });
      break;
    }
    case 'list':
      if (!q.items || !q.items.length) err(q, 'list has no items');
      if (!(q.need >= 1 && q.need <= q.items.length)) err(q, 'list need out of range');
      q.items.forEach((it, i) => { if (!it.keys.length) err(q, `list item ${i} has no keys`); });
      break;
    case 'def':
    case 'exp':
      if (!q.points || !q.points.length) err(q, 'no key points');
      q.points.forEach((p, i) => { if (!p.keys.length) err(q, `point ${i} has no keys`); });
      if (!q.model || q.model.length < 20) err(q, 'missing model answer');
      if (q.need > q.points.length) err(q, 'need > points');
      if (q.listPart) q.listPart.items.forEach((p, i) => { if (!p.keys.length) err(q, `list part item ${i} has no keys`); });
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
if (BANK.length < 450) errors.push(`bank has ${BANK.length} questions; need at least 450`);
for (const l of WEEKS) if (byLecture[l] < MIN_PER_WEEK[l]) errors.push(`week ${l} has ${byLecture[l]} questions; need at least ${MIN_PER_WEEK[l]}`);
if (byType.mcq < 220) errors.push(`only ${byType.mcq} MCQs; need at least 220`);
if (byType.fill < 110) errors.push(`only ${byType.fill} fill-in-the-blank items; need at least 110`);

// Every week must be able to fill a Full single-week paper's written sections.
for (const l of WEEKS) {
  const exps = BANK.filter((q) => q.lecture === l && q.type === 'exp');
  if (exps.filter((q) => q.marks === 5).length < 2) errors.push(`week ${l} needs at least two 5-mark explain questions`);
  if (!exps.some((q) => q.marks === 4)) errors.push(`week ${l} needs a 4-mark explain question`);
}

const tfTrue = count((q) => q.type === 'tf' && q.answer);
console.log(`Questions: ${BANK.length}  (flashcards: ${EC.CARDS.length})`);
console.log('By week:   ', byLecture);
console.log('By type:   ', byType);
console.log('By level:  ', byDiff);
console.log(`True/false balance: ${tfTrue} true / ${byType.tf - tfTrue} false`);
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
