# IT 301 Data Communications · Midterm Simulator

Practice midterm papers for **IT 301 Data Communications and Computer Networks I** (Tishk International University, Fall 2026–2027, lecturer Azheen Ghafour), Weeks 2–6.

It is a copy of the IT 355 E-Commerce simulator (one folder up) with the same design, features, grading engine and tests. Only the course content changed. Plain HTML, CSS and JavaScript with no backend: open `index.html`, or host the folder on any static host.

## What changed from the E-Commerce version

| | E-Commerce (`../`) | Data Communications (this folder) |
|---|---|---|
| Course | IT 355 E-Commerce, Dr. Hala Najwan Sabeh | IT 301 Data Communications and Computer Networks I, Azheen Ghafour |
| Units | Lectures 1–4 | Weeks 2–6 |
| Exam codes | `EC-7F3A` | `DC-7F3A` (e.g. `DC-7F3A-24FH` = Weeks 2 and 4, Full, Hard) |
| Accent colour | Blue | Teal |
| Saved data | `ec355.*` in localStorage | `dc301.*`, so the two sites never mix progress, even on the same domain |
| Question IDs | `L1-A001` | `W2-A001` |

All course settings live in one place: `EC.COURSE` and `EC.LECTURES` in `data/questions.js`. `js/core.js` (codes) and `js/app.js` (labels, storage keys) read them.

## Weeks

| Week | Topic | Source |
|---|---|---|
| 2 | Introduction to Data Communications and Networking | Week 2 PDF, 44 pages |
| 3 | Network Models: OSI and TCP/IP | Week 3 PDF, 27 pages |
| 4 | Physical Layer, Addressing and Encapsulation | Week 4 PDF, 23 pages |
| 5 | Transmission Media I: guided media (twisted pair, coaxial, fiber) | Week 5 & 6 PDF, pages 1–25 |
| 6 | Transmission Media II: unguided media (radio, microwave, infrared) and the TIU case study | Week 5 & 6 PDF, pages 26–35 (plus the propagation bands from the outcomes on page 4) |

Weeks 5 and 6 share one PDF, so slide numbers for both refer to that PDF.

## Question bank

Source of truth: the four lecture PDFs only, including image-only slides, tables and diagrams. **704 questions**, each tagged with `id`, `lecture` (the week number), `slide`, `type`, `difficulty` and `marks`.

| | W2 | W3 | W4 | W5 | W6 | Total |
|---|---|---|---|---|---|---|
| All types | 201 | 150 | 128 | 134 | 91 | **704** |

By type: 395 choose-the-option, 150 fill-in-the-blank, 87 true/false, 21 define, 31 list, 20 explain. Run `npm run validate` for the live counts.

- **Calculations** from the slides are included with worked steps in the explanation: mesh links n(n − 1)/2 and ports n − 1, binary conversion, image size (pixels × 24 bits), frame counts at 30 fps, bit duration (1 / bit rate), transfer time, throughput vs bandwidth, the 100-meter rule, attenuation in dB, Snell's law and the critical angle, frequency band and propagation mode from a given frequency.
- **No counting trivia** ("How many … are listed?"), the same rule as the E-Commerce bank.
- **Fill-in-the-blank** answers accept abbreviations and full forms (e.g. `LAN | local area network`, `FCS | frame check sequence`, `SMF | single mode fiber`).
- **Where the slides disagree**, both forms are accepted. Slide 20 of Week 3 names the TCP/IP layers Application, Transport, Network and Physical; slide 22 names the lower two Internet and Network Access.

Files (loaded in this order by `index.html`):

- `data/questions.js`: builder helpers, course settings and week titles.
- `data/questions-w2.js` … `data/questions-w6.js`: the questions, one file per week.
- `data/flashcards.js`: 68 flashcards across Weeks 2–6.

## Exam paper

Same sections and marks as the E-Commerce simulator: **A** choose the correct option · **B** fill in the blanks · **C** true/false · **D** short answer · **E** explain. Lengths: Quick 10 marks / 15 min, Short 20 / 30, Standard 40 / 60, Full 60 / 90. Difficulty: Mixed, Easy, Medium, Hard.

The instructor's question-style file was not provided, so the sections and marks have not yet been matched to it.

## Commands

The tests use the Playwright install in the parent folder (`../node_modules`), so there is nothing extra to install.

```
npm run validate      # bank checks: ids, 4 distinct options, no duplicates, slide ranges, coverage per week
npm run test:unit     # grading + generator (27 tests)
npm run test:e2e      # browser tests (14 tests, installed Chrome)
npm test              # all of the above
npm run screenshots   # screenshots/ at 1280px and 390px
npm run dist          # dist/ for Netlify drag-and-drop
```

## Hosting

On GitHub Pages this folder is served at `https://yasa404.github.io/e-commerce/data-communication/`. The two sites link to each other in the footer.

Developed by Yasa Sardar.
