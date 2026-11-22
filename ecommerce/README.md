# IT 355 E-Commerce: Midterm Exam Simulator

Unlimited practice midterm papers for **IT 355 E-Commerce** (Fall 2026–2027, Dr. Hala Najwan Sabeh), Lectures 1–4.
Answer each paper one question at a time (**Focus** mode, made for phones) or directly on real **A4 exam sheets** (**A4** mode). Then it's marked the way a teacher would mark it.

Developed by Yasa Sardar.

Plain HTML, CSS and JavaScript. No backend, no build step: open `index.html` and it works.

## Run it

This subject lives in `ecommerce/`. The site root (`../index.html`) is a subject chooser that links here and to IT 301 Data Communications (`../datacom/`); the grid button in the top bar and the footer link go back to it.

- **Locally:** double-click `index.html` (works from `file://`), or open `../index.html` to choose a subject.
- **Deploy the whole site to Netlify:** run `npm run dist` in the parent folder, then drag its `dist/` folder onto <https://app.netlify.com/drop>. (`npm run dist` here builds only this subject.)

Fonts come from Google Fonts; offline, the page falls back to Georgia and system fonts.

## What it does

| Area | Details |
|---|---|
| Exam views | **Focus**: one question per card with large tap targets, a tappable word bank, *Flag* for review, a question drawer, and Previous/Next. **A4 paper**: the full exam sheet, answered on the page. A4 pages always use the true A4 layout (the same pages as print). On small screens they are scaled to fit like a PDF viewer, with a − / Fit / + zoom control (and pinch-zoom). Switch between them at any time during the exam; answers carry over. Your choice is remembered. |
| Difficulty | **Mixed** (about 30% easy / 50% medium / 20% hard), **Easy** (no hard questions), **Medium** (mostly medium), **Hard** (no easy questions, about half hard). Every question is tagged; the level is part of the exam code. |
| Paper | A4 sheets (210 × 297 proportion) with page breaks, "Page 1 of 6" footers, exam header (university, course, instructor, duration, total marks, student name/ID, exam code) and an instructions box. On a phone the sheets shrink to the screen width and the paper is re-paginated so text stays readable. |
| Sections | **A** choose the correct option (bubbles a–d) · **B** fill in the blanks (inline, optional word bank with 2–3 distractors) · **C** true/false · **D** short answer (define / list) · **E** explain. |
| Lengths | **Quick 10 marks / 15 min** (Sections A–D: 4 + 2 + 2 + 2) · Short 20 / 30 · Standard 40 / 60 · Full 60 / 90. Sections you switch off give their marks to Section A. |
| Codes | `EC-7F3A` is the seed: the same code always rebuilds the same paper (questions, option order, word bank). Non-default settings are part of the code, e.g. `EC-7F3A-13FH-ABE` = Lectures 1 and 3, Full length, Hard, Sections A, B, E (length letters: Q quick, S short, M standard, F full; difficulty letters: E easy, N medium, H hard; none = mixed). Open a code from the home page or with `#/code/EC-7F3A`. |
| Generator | Balances each paper across the chosen lectures and across easy/medium/hard. It spreads the correct letter evenly over a–d (never three in a row) and keeps True/False roughly balanced. It never puts two questions on one paper where one gives the other away. "New exam" tries up to 40 codes and picks the one that repeats the fewest questions from your last 3 papers. |
| Exam bar | Sticky: leave (answers kept), timer (auto-submits at zero) or elapsed time, Focus/A4 switch, question grid, Print, Submit, and a progress bar. Answers and flags autosave to `localStorage`. |
| Theme | **Auto** (follows the device), **Light** or **Dark**. Switch with the button in the top bar; the choice is remembered and applied before the page paints. A4 exam sheets stay white paper in both themes. |
| Layout | Glass design (including glass primary buttons): frosted, translucent panels over a soft gradient (solid white A4 paper; solid fallback for "reduce transparency" and browsers without blur). App shell with a top navigation bar on desktop and a bottom tab bar on phones. All screens were checked at 1280px and 390px. |
| Keyboard | A–D choose · T/F (or A/B) for true/false · ← → (Focus) or ↑ ↓ (A4) previous/next question (also J/K) · Enter jumps to the next box · Tab between blanks · Esc closes menus. |
| Marked paper | Score ring, grade and breakdown by lecture and section, then the teacher-marked paper in **Flow** (one continuous sheet, best on phones) or **A4** pages. Red-pen ✓/✗ in the margin, marks per question, correct answers written in pen next to wrong ones, circled total and letter grade on page 1. Breakdown by lecture and section, "Review mistakes only", "Retry my mistakes", "New exam". |
| Self-marking | Written answers (D/E) are auto-ticked by keywords. Tick or untick key points you covered in your own words and the total updates. |
| Print | Blank exam paper, my answer sheet, answer key (with slide and difficulty for every question) and marked paper. A separate A4 copy is built for each print, so printing works from Focus mode, A4 mode, the results page and phones. `@page { size: A4 }`. |
| Sound | A short chime when an exam starts, and on submit a sound that matches the result (bright for 75%+, calm for a pass, soft for below 50%, a bell when time runs out). Synthesised with Web Audio (no audio files, works offline). Turn it off under *More options → Sound effects*. |
| Flashcards | 68 cards, filter by lecture, "I know this" / "Still learning", shuffle. Keys: Space flip, ← →, K, L. |
| My progress | Score history (with level), accuracy per lecture, per difficulty and per section, most-missed questions (with "Practise these"), reset. |

Grades: A ≥ 90%, B ≥ 80%, C ≥ 70%, D ≥ 50%, F below 50%.

## Question bank

Source of truth: the four lecture PDFs only. **621 questions**, each tagged with `id`, `lecture`, `slide` (PDF page), `type`, `difficulty`, `marks`:

| | L1 | L2 | L3 | L4 | Total |
|---|---|---|---|---|---|
| All types | 126 | 127 | 139 | 229 | **621** |

By type: 331 choose-the-option, 147 fill-in-the-blank, 57 true/false, 27 define, 27 list, 32 explain. Run `npm run validate` for the live counts. Number trivia is deliberately left out: no "How many unique features…?" counting questions and no memorised statistics (revenue figures, growth percentages). Questions test the content itself; the e-commerce era years stay because they are core content.

Files (loaded in this order by `index.html`):

- `data/questions.js`: the builder helpers (`mcq`, `fill`, `tf`, `def`, `list`, `exp`) and the field reference.
- `data/questions-l1.js` … `data/questions-l4.js`: the questions, one file per lecture.
- `data/flashcards.js`: flashcards.

Authoring format, for example:

```js
mcq(13, 'e', "Information density is…", ["correct option first", "distractor", "distractor", "distractor"], "Explanation");
fill(14, 'm', "Price discrimination maximizes [[sales|sale]] and [[profits|profit]].", "Slide 14.", { set: true }); // set = order-free
list(5, 'e', 4, "List the eight key elements…", [["Value proposition", "value"], ...]);  // keywords per item
exp(29, 'm', 4, "Explain direct vs indirect competitors…", [["key point", "keyword", ...], ...], "Model answer", { need: 3 });
```

The original 257-question bank and the earlier app are kept for reference in `reference/`.

## Grading rules (`js/core.js`)

- **MCQ / true-false:** exact.
- **Fill in the blank:** ignores case, spaces, hyphens and punctuation (`E-Commerce` = `ecommerce`), and accepts the synonyms listed per blank. It allows small typos by answer length: 0 edits up to 5 characters, 1 edit for 6–11, 2 edits for 12+. A different course term is never accepted, even when it contains the answer (`invention` ≠ `reinvention`, `B2C` ≠ `B2B`). Blanks marked `set` can be in any order (technology, business, society).
- **List / short answer:** each typed line is matched to one expected item by keywords that must start at a word boundary (`wholesale` does not count as `sale`). The matching is maximal, so each line counts once. Partial marks are per item, rounded to ½.
- **Explain:** auto-detected key points, self-marking overrides, model answer. "List X, then explain two" questions give 40% for the list and 60% for the explanations.

## Tests

```bash
npm install            # run once in the parent folder (Playwright test runner)
npm run validate       # bank checks: unique ids, 4 distinct options, no "all/none of the above",
                       # no duplicate questions, slide references in range, coverage minimums
npm run test:unit      # Node: every model answer scores 100%, junk scores 0, fill/list/explain rules,
                       # seeded generator (same code = same paper), mark budgets, letter spread, word bank
npm run test:e2e       # Playwright: a whole paper answered through Focus mode → 40/40, and through A4 mode → 40/40;
                       # switching views keeps answers; blank → 0; self-marking; autosave and flags across reload;
                       # difficulty from the home page lands in the code; keyboard; word bank chips;
                       # print copies are A4 even from Focus mode on a phone; flashcards; credit line
npm test               # all of the above
npm run screenshots    # desktop (1280px) and phone (390px) screenshots into screenshots/
```

The e2e tests and screenshots use the installed **Google Chrome** by default. Use `PW_CHANNEL=msedge` for Edge, or
`PW_CHANNEL=bundled` after `npx playwright install chromium` for Playwright's own browser.

## Project layout

```
index.html            app shell
css/app.css           paper, toolbar, marking and print styles
js/core.js            grading + seeded generator (no DOM; also used by the Node tests)
js/app.js             UI: routing, pagination into A4 sheets, exam, marking, flashcards, progress
data/                 question bank + flashcards
scripts/              validate-bank.js, screenshots.js, dist.js
tests/unit/           node:test suites      tests/e2e/   Playwright suite
reference/            original question_bank.js and reference_app.html
```
