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

// Last PDF page of each lecture, and the pages marked "(not required in the exam)", which no question may use.
const WEEKS = EC.COURSE.units;
const PAGES = { 1: 24, 2: 28, 3: 40, 4: 36 };
const NOT_REQUIRED = { 1: [9, 16, 17, 20, 24], 2: [9, 14, 20, 27], 3: [6, 18, 20, 26], 4: [5, 8, 20] };
const MIN_PER_WEEK = { 1: 150, 2: 150, 3: 150, 4: 150 };
// The official midterm question bank (OS-MT-QB-Fall-26-27-v3): how many questions each part has.
const OFFICIAL = { 1: { Q: 37, CE: 4, S: 3 }, 2: { Q: 32, AA: 2, CE: 3 }, 3: { Q: 42, AA: 1, CE: 5 }, 4: { Q: 56, CE: 5, AA: 4 } };
const TYPES = ['mcq', 'fill', 'tf', 'def', 'list', 'exp'];
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
  if (slides.some((s) => NOT_REQUIRED[q.lecture].includes(s))) err(q, `uses a slide marked "not required in the exam" (${JSON.stringify(q.slide)})`);
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
      // The correct option must not give itself away by being much longer than every wrong option.
      const lens = q.options.map((o) => o.length);
      if (lens[0] > 30 && lens[0] > 1.25 * Math.max(...lens.slice(1))) err(q, `correct option is much longer than every wrong option (${lens.join('/')} chars)`);
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
      if (q.set) [].concat(...q.set).forEach((i) => { if (!q.blanks[i]) err(q, `set refers to missing blank ${i}`); });
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
for (const l of WEEKS) if (byLecture[l] < MIN_PER_WEEK[l]) errors.push(`lecture ${l} has ${byLecture[l]} questions; need at least ${MIN_PER_WEEK[l]}`);
if (byType.mcq < 220) errors.push(`only ${byType.mcq} MCQs; need at least 220`);
if (byType.fill < 110) errors.push(`only ${byType.fill} fill-in-the-blank items; need at least 110`);

// Written questions: right marks for each kind, figures exist, choices are well formed.
const KIND_MARKS = { explain: 4, draw: 4, calc: 5, eval: 3 };
for (const q of BANK) {
  if (q.qfig && !EC.FIGURES[q.qfig]) err(q, `unknown figure "${q.qfig}"`);
  if (q.type !== 'exp') continue;
  if (KIND_MARKS[q.kind] !== q.marks) err(q, 'wrong kind or marks');
  if ((q.kind === 'draw') !== !!q.figure) err(q, 'drawing questions (and only those) need a model drawing');
  if (q.figure && !EC.FIGURES[q.figure]) err(q, `unknown figure "${q.figure}"`);
  if ((q.kind === 'eval') !== !!q.choices) err(q, 'choice questions (and only those) need choices');
  if (q.choices && (q.choices.length !== 3 || !(q.answer >= 0 && q.answer < 3))) err(q, 'choice questions need three choices and an answer');
}
for (const c of EC.CARDS) if (NOT_REQUIRED[c.lecture].includes(c.slide) || c.slide > PAGES[c.lecture]) errors.push(`flashcard ${c.id}: bad slide ${c.slide}`);
// Every question of the official bank is included exactly once.
let official = 0;
for (const l of WEEKS) {
  for (const [part, n] of Object.entries(OFFICIAL[l])) {
    for (let i = 1; i <= n; i++) {
      const hits = BANK.filter((q) => q.lecture === l && q.qb === part + i);
      if (hits.length !== 1) errors.push(`official question L${l} ${part}${i}: found ${hits.length} times`); else official++;
    }
  }
}
const tagged = count((q) => q.qb);
if (tagged !== official) errors.push(`${tagged} questions are tagged as official, but only ${official} match the official list`);

const mcqs = BANK.filter((q) => q.type === 'mcq');
const longest = mcqs.filter((q) => q.options[0].length >= Math.max(...q.options.slice(1).map((o) => o.length))).length;
const tfTrue = count((q) => q.type === 'tf' && q.answer);
console.log(`Questions: ${BANK.length}  (flashcards: ${EC.CARDS.length})`);
console.log('By lecture:', byLecture);
console.log('By type:   ', byType);
console.log('By level:  ', byDiff);
console.log(`Official question bank: ${official} of ${Object.values(OFFICIAL).reduce((s, o) => s + Object.values(o).reduce((a, b) => a + b, 0), 0)} questions included`);
console.log(`MCQ length check: correct option is the longest in ${Math.round(100 * longest / mcqs.length)}% (chance is 25%)`);
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
