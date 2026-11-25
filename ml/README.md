# Machine Learning Fundamentals · Midterm Simulator

Practice papers for **Machine Learning Fundamentals** (Tishk International University, Grade 3, 2026–2027, instructor Akam H. Ahmed), Lectures 2–5. The slides give no course code, so the site uses `ML`.

Same design, features and tests as the other subjects in this repository. Plain HTML, CSS and JavaScript with no backend: open `index.html`, or host the folder on any static host.

- Exam codes: `ML-7F3A` (theory, e.g. `ML-7F3A-35FH` = Lectures 3 and 5, Full, Hard) and `ML-7F3A-345V` (practical)
- Accent colour: rose
- Saved data: `ml.*` in localStorage, so it never mixes with the other subjects

## Question bank

Source of truth: the four lecture PDFs (title, content and reference pages are not used). The instructor announced multiple choice, fill in the blanks and one practical question, theory and lab together, with a focus on data cleaning (Lecture 3).

| L2 Introduction to Machine Learning | L3 Datasets and Data Cleaning | L4 Regression | L5 Model Building and Outliers | Total |
|---|---|---|---|---|
| 66 | 133 | 79 | 106 | **384** |

- By type: 221 multiple choice, 128 fill in the blanks, 35 practical tasks (18 on data cleaning).
- Questions ask about concepts and code, not about what exactly was shown in a lecture; the validator rejects such wording.
- Slide details that do not agree with each other are not used. In Lecture 3, page 18 fills a missing quiz with 7.33 (the mean of 8, 7, 9 and 6 is 7.5), and the table on page 15 does not match the data on page 14. Lecture 5, page 11 uses `y_pred` without the `predict` line.

Files (loaded in this order by `index.html`): `data/questions.js` (builder and course settings), `data/questions-l2.js` … `data/questions-l5.js`, `data/practical-outputs.js` (made by a script), `data/figures.js`, `data/flashcards.js` (54 cards).

## Two exams on one page

**Theory exam** (Lecture 3 comes up twice as often):

| Length | A Multiple choice | B Blanks | C Practical | Total | Time |
|---|---|---|---|---|---|
| Quick | 3 | 2 | 5 | 10 | 15 min |
| Short | 9 | 6 | 5 | 20 | 30 min |
| Standard | 18 | 12 | 10 | 40 | 60 min |
| Full | 30 | 20 | 10 | 60 | 90 min |

**Practical exam** (only tasks): One task 10 marks / 25 min, Short 20 / 45, Standard 30 / 70, Full 40 / 90. Lecture 2 has no code, so it has no tasks.

The instructor gave the kinds of question but not their marks, so the marks are an assumption.

- **Practical tasks** are not run on the page. Students write the program in Visual Studio, run it, and paste the code and the output on the exam sheet (Focus or A4). Each point is one mark: points on the code ignore spaces, comments and quote style but not capital letters; one or two points are on the output. It is pattern marking, so students can tick a point they did in another way.
- **Every model solution is run in real Python** by `node scripts/run-practicals.js` (needs pandas and scikit-learn, `ML_PYTHON` = path of Python). The outputs shown on the site come from those runs.
- **Blanks inside code** allow no typos. **Numbers** are compared by value (7.5 = 7.50, but not 75).

## Commands

```
npm run validate                 # bank checks and skipped pages
npm run test:unit                # grading + generator
npm run test:e2e                 # browser tests (installed Chrome)
npm test                         # all of the above
npm run screenshots              # screenshots/ at 1280px and 390px
node scripts/run-practicals.js   # run every solution in Python and save the outputs
```

Developed by Yasa Sardar.
