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
| 43 | 70 | 72 | 64 | 47 | 48 | 102 | **446** |

- The instructor announced three kinds of question, and the bank holds only those: **short answer** (144: 134 written, 10 lists), **multiple choice** (272) and **matching** (30 questions with 197 pairs). The validator rejects any other type.
- 78 questions print Dart code and 20 print a diagram.
- Lectures 5 and 6 are practical sheets that name the widgets and properties but do not print the code. The code in those questions is standard Flutter code for the same tasks (for example `Colors.green`, `Chip(label: ...)`, `ListTile(leading: ...)`).

Files (loaded in this order by `index.html`): `data/questions.js` (builder and course settings), `data/questions-l1.js` … `data/questions-l7.js`, `data/figures.js` (diagrams printed with questions), `data/flashcards.js` (79 cards).

## Exam paper

| Section | Holds |
|---|---|
| **A** Short answer | Definitions, differences, reasons, short lists, and questions about code or a diagram (2–4 marks each) |
| **B** Multiple choice | Four options, some with code or a diagram (1 mark each) |
| **C** Matching | Up to five items and one extra letter (1 mark for each match) |

| Length | A | B | C | Total | Time |
|---|---|---|---|---|---|
| Quick | 3 | 4 | 3 | 10 | 15 min |
| Short | 6 | 9 | 5 | 20 | 30 min |
| Standard | 14 | 16 | 10 | 40 | 60 min |
| Full | 22 | 23 | 15 | 60 | 90 min |

The instructor gave the kinds of question but not their marks, so the marks are an assumption.

- **Short answers** are marked by key points; students can tick the points they covered.
- **Matching**: each paper picks its own pairs and order, so the same question looks different on different papers. In Focus mode a letter is tapped; on the A4 paper it is typed.
- Questions ask about concepts and code, not about what exactly was shown in a lecture; the validator rejects such wording. Removed questions keep their ids unused (`Q.skip`).
- Codes made before the sections changed still open (sections D and E are ignored). A paper that was in progress is dropped, because it cannot be rebuilt; the score history stays.

## Commands

```
npm run validate      # bank checks, question types and skipped pages
npm run test:unit     # grading + generator
npm run test:e2e      # browser tests (installed Chrome)
npm test              # all of the above
npm run screenshots   # screenshots/ at 1280px and 390px
```

Developed by Yasa Sardar.
