# IT 319 Mobile Applications · Midterm Simulator

Practice midterm papers for **IT 319 Mobile Applications** (Tishk International University, Fall 2026–2027, instructor Ms. Van Sirwan), Lectures 1–7.

Same design, features, grading engine and tests as the other subjects in this repository. Plain HTML, CSS and JavaScript with no backend: open `index.html`, or host the folder on any static host.

- Exam codes: `MA-7F3A` (e.g. `MA-7F3A-23FH` = Lectures 2 and 3, Full, Hard)
- Accent colour: orange
- Saved data: `ma319.*` in localStorage, so it never mixes with the other subjects

## Question bank

Source of truth: the seven lecture PDFs. Title, course administration and reference pages are not used, and the validator rejects any question that refers to one (in Lecture 1 only pages 11–15 are course content).

| L1 OOP and Class Diagrams | L2 Introduction to Flutter | L3 Stateless and Stateful Widget Apps | L4 Designing a Growing Flutter App | L5 Campus Shop: Product Cards (Practical) | L6 Campus Shop: Eight Tasks (Practical) | L7 Understanding Widget Layout | Total |
|---|---|---|---|---|---|---|---|
| 70 | 99 | 107 | 100 | 86 | 92 | 142 | **696** |

- By type: 305 multiple choice, 122 fill-in-the-blank, 109 true/false, 39 define, 25 list, 96 written (25 explain, 18 draw, 28 code, 25 choice + justification).
- 98 questions print Dart code and 11 print a diagram.
- Lectures 5 and 6 are practical sheets that name the widgets and properties but do not print the code. The code in those questions is standard Flutter code for the same tasks (for example `Colors.green`, `Chip(label: ...)`, `ListTile(leading: ...)`).

Files (loaded in this order by `index.html`): `data/questions.js` (builder and course settings), `data/questions-l1.js` … `data/questions-l7.js`, `data/figures.js` (model drawings and question figures), `data/flashcards.js` (79 cards).

## Exam paper

| Section | Holds |
|---|---|
| **A** Multiple choice | Four options, some with code or a diagram |
| **B** Fill in the blanks | Words and missing code; one mark per blank; optional word bank |
| **C** True or false | |
| **D** Define and list | |
| **E** Explain, draw, code and justify | Rotates between the written styles |

| Length | A | B | C | D | E | Total | Time |
|---|---|---|---|---|---|---|---|
| Quick | 4 | 2 | 2 | 2 | – | 10 | 15 min |
| Short | 6 | 4 | 3 | 3 | 4 | 20 | 30 min |
| Standard | 12 | 7 | 5 | 6 | 10 | 40 | 60 min |
| Full | 18 | 10 | 7 | 10 | 15 | 60 | 90 min |

The slides do not describe the exam format, so the sections and marks are an assumption: 1 per option, blank and statement; 4 for explain and draw; 5 for code; 3 for choice + justification.

- **Code**: typed in a monospace box and marked by five required parts. Spaces and line breaks do not matter; spelling of names does. In “correct the code” questions, capital letters, commas and brackets count too. It is keyword marking, not a compiler, so check it against the model answer.
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
