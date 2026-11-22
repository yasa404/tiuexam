# IT 301 Data Communications · Midterm Simulator

Practice midterm papers for **IT 301 Data Communications and Computer Networks I** (Tishk International University, Fall 2026–2027, lecturer Azheen Ghafour), Weeks 2–6.

It is a copy of the IT 355 E-Commerce simulator (`../ecommerce/`) with the same design, features, grading engine and tests. Only the course content changed. Plain HTML, CSS and JavaScript with no backend: open `index.html`, or host the folder on any static host.

## What changed from the E-Commerce version

| | E-Commerce (`../ecommerce/`) | Data Communications (`datacom/`, this folder) |
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

Source of truth: the four lecture PDFs only, including image-only slides, tables and diagrams. **723 questions**, each tagged with `id`, `lecture` (the week number), `slide`, `type`, `difficulty` and `marks`.

| | W2 | W3 | W4 | W5 | W6 | Total |
|---|---|---|---|---|---|---|
| All types | 202 | 155 | 133 | 137 | 96 | **723** |

By type: 419 multiple choice, 169 fill-in-the-blank, 108 true/false, 27 written (11 categorize & illustrate, 16 explain & map), each written question worth 5 marks. Run `npm run validate` for the live counts.

- **Calculations** from the slides are included with worked steps in the explanation: mesh links n(n − 1)/2 and ports n − 1, binary conversion, image size (pixels × 24 bits), frame counts at 30 fps, bit duration (1 / bit rate), transfer time, throughput vs bandwidth, the 100-meter rule, attenuation in dB, Snell's law and the critical angle, frequency band and propagation mode from a given frequency.
- **No counting trivia** ("How many … are listed?"), the same rule as the E-Commerce bank.
- **Fill-in-the-blank** answers accept abbreviations and full forms (e.g. `LAN | local area network`, `FCS | frame check sequence`, `SMF | single mode fiber`).
- **Where the slides disagree**, both forms are accepted. Slide 20 of Week 3 names the TCP/IP layers Application, Transport, Network and Physical; slide 22 names the lower two Internet and Network Access.

Files (loaded in this order by `index.html`):

- `data/questions.js`: builder helpers, course settings and week titles.
- `data/questions-w2.js` … `data/questions-w6.js`: the questions, one file per week.
- `data/figures.js`: the 16 model drawings used by Sections D and E.
- `data/flashcards.js`: 68 flashcards across Weeks 2–6.

## Exam paper

The sections follow Azheen Ghafour's question-style file (*IT301 - Question Types*):

| Section | Instructor's type | What it looks like |
|---|---|---|
| **A** Multiple choice | Type 1 | A–D options, long technical stems (her sample: “Which Layer 2 PDU header component contains the physical source and destination addresses…?” is in the bank). |
| **B** Fill in the blanks (word bank) | Type 2 | Definition with the term missing (“…is known as ____”). The word bank, with 2–3 distractors, is always shown; the switch to hide it is removed. |
| **C** True or false | Type 3 | Includes “trap” statements that swap two facts, including both of her samples (IP vs MAC changing per hop; STP “100% immune”). |
| **D** Categorization & illustration | Type 4 | Categorize, describe, and draw a labeled diagram, e.g. her sample: guided vs unguided media with labeled cable cross-sections. |
| **E** Explanation & structural mapping | Type 6 | Explain, then draw a structural mapping, e.g. her sample: benefits of layering + OSI ↔ TCP/IP mapping with PDU names. |

| Length | A | B | C | D | E | Total | Time |
|---|---|---|---|---|---|---|---|
| Quick | 4 | 3 | 3 | – | – | 10 | 15 min |
| Short | 6 | 4 | 5 | – | 5 | 20 | 30 min |
| Standard | 15 | 8 | 7 | 5 | 5 | 40 | 60 min |
| Full | 20 | 12 | 8 | 10 | 10 | 60 | 90 min |

The style file gives no marks, so these are an assumption: 1 mark per option, blank and true/false statement, and 5 marks per drawing question.

**Drawing questions.** Every Section D question (and the Section E questions whose answer is a diagram) has a model drawing in `data/figures.js` (16 SVG figures: data flow modes, topologies, connection types, the five components, OSI ↔ TCP/IP with PDUs, PDU nesting, hub/switch/router layers, analog vs digital, hub vs switch, encapsulation, cable cross-sections, fiber modes, Snell's law, the wireless spectrum, propagation modes, and the TIU link). On the A4 paper these questions get a drawing space; in Focus mode a note says to draw on paper. After submitting, the marked paper and the answer key show the model drawing, and the student ticks the “Labeled drawing” key point if their drawing matches. Difficulty: Mixed, Easy, Medium, Hard (unchanged).

## Commands

The tests use the Playwright install in the parent folder (`../node_modules`), so there is nothing extra to install.

```
npm run validate      # bank checks: ids, 4 distinct options, no duplicates, slide ranges, coverage per week
npm run test:unit     # grading + generator (29 tests)
npm run test:e2e      # browser tests (15 tests, installed Chrome)
npm test              # all of the above
npm run screenshots   # screenshots/ at 1280px and 390px
npm run dist          # dist/ for Netlify drag-and-drop
```

## Hosting

The site root (`../index.html`) is a subject chooser: students pick IT 355 E-Commerce or IT 301 Data Communications first. The grid button in the top bar and the “All subjects” footer link return to it.

On GitHub Pages this folder is served at `https://yasa404.github.io/tiuexam/datacom/`. To deploy the whole site to Netlify, run `npm run dist` in the parent folder and drag its `dist/` folder onto <https://app.netlify.com/drop>.

Developed by Yasa Sardar.
