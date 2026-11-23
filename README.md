# TIU Midterm Simulators

Practice midterm papers for Tishk International University IT courses, Fall 2026–2027. The front page (`index.html`) lets students **choose a subject first**, then opens that subject's simulator.

| Folder | Subject | Units | Questions |
|---|---|---|---|
| `ecommerce/` | IT 355 E-Commerce (Dr. Hala Najwan Sabeh) | Lectures 1–4 | 621 |
| `datacom/` | IT 301 Data Communications and Computer Networks I (Azheen Ghafour) | Weeks 2–6 | 723 |
| `os/` | IT 327 Operating Systems (Mr. Alaa Ghazi) | Lectures 1–4 | 675 |

Each subject is a self-contained static app (plain HTML, CSS and JavaScript, no backend) with its own README, question bank, tests and screenshots. All share the same design and features; each keeps its own papers, flashcards and progress in the browser (`ec355.*`, `dc301.*` and `os327.*` keys), so they never mix.

The subject cards show the student's own progress (papers done, average, best). Inside a subject, the “← Subjects” button in the top bar and the “All subjects” footer link return to the chooser. Old links that pointed at the E-Commerce app at the site root (for example `#/code/EC-7F3A`) are forwarded to the right subject.

## Commands (run in this folder)

```
npm install           # once: Playwright test runner, shared by all subjects
npm test              # chooser check + all subjects' bank checks, unit tests and browser tests
npm run check         # chooser only: links exist and question counts match the banks
npm run screenshots   # screenshots for all subjects
npm run dist          # dist/ with the chooser and all subjects, for Netlify drag-and-drop
```

## Adding another subject

1. Copy `datacom/` (or `os/`) to a new folder and change `EC.COURSE`, `EC.LECTURES` and the question files in its `data/` folder (see `datacom/README.md`).
2. Add a card for it in `index.html` (with `data-count` set to its number of questions) and add the folder to `SUBJECTS` in `scripts/dist.js` and to the `test` script in `package.json`.

## Hosting

The repository is `yasa404/tiuexam`. GitHub Pages serves its root, so the chooser is at `https://yasa404.github.io/tiuexam/`, with the subjects at `https://yasa404.github.io/tiuexam/ecommerce/`, `https://yasa404.github.io/tiuexam/datacom/` and `https://yasa404.github.io/tiuexam/os/`.

Developed by Yasa Sardar.
