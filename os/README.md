# IT 327 Operating Systems · Midterm Simulator

Practice midterm papers for **IT 327 Operating Systems** (Tishk International University, 3rd Grade, Fall 2026–2027, instructor Mr. Alaa Ghazi), Lectures 1–4.

Same design, features, grading engine and tests as the other subjects in this repository. Plain HTML, CSS and JavaScript with no backend: open `index.html`, or host the folder on any static host.

- Exam codes: `OS-7F3A` (e.g. `OS-7F3A-24FH` = Lectures 2 and 4, Full, Hard)
- Accent colour: violet
- Saved data: `os327.*` in localStorage, so it never mixes with the other subjects

## Question bank

Source of truth: the four lecture PDFs and the official midterm question bank (*OS-MT-QB-Fall-26-27-v3*). Slides marked “(not required in the exam)” are not used, and the validator rejects any question that refers to one.

| | L1 Introduction to OS | L2 Processes and Threads | L3 CPU Scheduling | L4 Memory Management | Total |
|---|---|---|---|---|---|
| All questions | 159 | 159 | 172 | 185 | **675** |
| From the official bank | 44 | 37 | 48 | 65 | **194** |

- **Every official question is included** (194 of 194), tagged with `qb`: `Q5`, `AA1` (Application & Analysis), `CE2` (Creation & Evaluation), `S1` (Sample). In the app it shows a “Question bank” tag, and the marked paper names the question. `npm run validate` fails if one is missing or duplicated.
- The other 481 questions are extra practice in the same styles.
- The official bank has no answers. Answers come from the slides. Where a Creation & Evaluation reason goes past the slides (for example, why a CLI suits a slow network), it is common reasoning from the scenario itself.
- By type: 271 multiple choice, 116 fill-in-the-blank, 99 true/false, 44 define, 36 list, 109 written (38 explain, 23 draw, 15 calculation, 33 choice + justification).

Files (loaded in this order by `index.html`): `data/questions.js` (builder and course settings), `data/questions-l1.js` … `data/questions-l4.js`, `data/figures.js` (model drawings and question figures), `data/flashcards.js` (67 cards).

## Exam paper

| Section | Holds |
|---|---|
| **A** Multiple choice | Four options, some with a diagram or table (both official samples are here) |
| **B** Fill in the blanks | One mark per blank; optional word bank |
| **C** True or false | |
| **D** Define and list | |
| **E** Explain, draw, calculate and justify | Rotates between the written styles of the official bank |

| Length | A | B | C | D | E | Total | Time |
|---|---|---|---|---|---|---|---|
| Quick | 4 | 2 | 2 | 2 | – | 10 | 15 min |
| Short | 6 | 4 | 3 | 3 | 4 | 20 | 30 min |
| Standard | 12 | 7 | 5 | 6 | 10 | 40 | 60 min |
| Full | 18 | 10 | 7 | 10 | 15 | 60 | 90 min |

The official bank gives no marks (except one 2-mark sample), so the marks are an assumption: 1 per option, blank and statement; 4 for explain and draw; 5 for a calculation; 3 for choice + justification.

- **Choice + justification**: 1 mark for the right letter and 2 for the reasons. A wrong choice earns nothing.
- **Drawings**: draw on paper and list the labels; the model drawing appears after you submit, and you can tick the points you covered.
- **Calculations**: numbers are matched by value (2.777 and 2.78 both count). The unit tests recompute every scheduling, Amdahl and paging answer.

## Commands

```
npm run validate      # bank checks, official-question coverage, "not required" slides
npm run test:unit     # grading + generator
npm run test:e2e      # browser tests (installed Chrome)
npm test              # all of the above
npm run screenshots   # screenshots/ at 1280px and 390px
```

Developed by Yasa Sardar.
