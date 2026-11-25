# IT 417 Wireless Networking · Midterm Simulator

Practice midterm papers for **IT 417 Wireless Networking** (Tishk International University, 4th Grade, Fall 2026–2027, instructor Mr. Farqad Albajelani), Lectures 1–5.

Same design, features, grading engine and tests as the other subjects in this repository. Plain HTML, CSS and JavaScript with no backend: open `index.html`, or host the folder on any static host.

- Exam codes: `WN-7F3A` (e.g. `WN-7F3A-23FH` = Lectures 2 and 3, Full, Hard)
- Accent colour: green
- Saved data: `wn417.*` in localStorage, so it never mixes with the other subjects

## Question bank

Source of truth: the five lecture PDFs. Title, agenda and course administration pages are not used, and the validator rejects any question that refers to one.

| L1 Electromagnetic Waves and Spectrum | L2 Radio Wave Propagation Principles | L3 Antennas and Arrays | L4 Digital Modulation Techniques | L5 Multiple Access Techniques | Total |
|---|---|---|---|---|---|
| 101 | 122 | 130 | 114 | 114 | **581** |

- By type: 251 multiple choice, 94 fill-in-the-blank, 90 true/false, 41 define, 30 list, 75 written (20 explain, 16 draw, 23 calculate, 16 choice + justification).
- Questions ask about concepts, not about what exactly was shown in a lecture; the validator rejects such wording.
- Slide details that contain a typing error are not used (Lecture 1 gives 30 nm for violet light; Lecture 2 says "three factors" and lists four). The Fresnel example is rounded to 17.68 m; 17.67 m, as on the slide, is also accepted.

Files (loaded in this order by `index.html`): `data/questions.js` (builder and course settings), `data/questions-l1.js` … `data/questions-l5.js`, `data/figures.js` (model drawings and question figures), `data/flashcards.js` (64 cards).

## Exam paper

| Section | Holds |
|---|---|
| **A** Multiple choice | Four options, some with a diagram, table or given data |
| **B** Fill in the blanks | One mark per blank; optional word bank |
| **C** True or false | |
| **D** Define and list | |
| **E** Explain, draw, calculate and justify | Rotates between the written styles |

| Length | A | B | C | D | E | Total | Time |
|---|---|---|---|---|---|---|---|
| Quick | 4 | 2 | 2 | 2 | – | 10 | 15 min |
| Short | 6 | 4 | 3 | 3 | 4 | 20 | 30 min |
| Standard | 12 | 7 | 5 | 6 | 10 | 40 | 60 min |
| Full | 18 | 10 | 7 | 10 | 15 | 60 | 90 min |

The slides do not describe the exam format, so the sections and marks are an assumption: 1 per option, blank and statement; 4 for explain and draw; 5 for a calculation; 3 for choice + justification.

- **Calculations** print their data or formula. Numbers are matched by value with a small tolerance (100 dB and 100.04 dB both count) and the sign matters where it should (−66 dBm). The unit tests recompute every calculation.
- **Choice + justification**: 1 mark for the right letter and 2 for the reasons. A wrong choice earns nothing.
- **Drawings**: draw on paper and list the labels; the model drawing appears after you submit, and you can tick the points you covered.

## Commands

```
npm run validate      # bank checks and skipped pages
npm run test:unit     # grading + generator
npm run test:e2e      # browser tests (installed Chrome)
npm test              # all of the above
npm run screenshots   # screenshots/ at 1280px and 390px
```

Developed by Yasa Sardar.
