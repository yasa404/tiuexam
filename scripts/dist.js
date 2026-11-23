/* Builds the whole site into dist/ (subject chooser + every subject) for Netlify drag-and-drop. */
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'dist');
const SUBJECTS = ['ecommerce', 'datacom', 'os', 'mobile'];
fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT);
fs.copyFileSync(path.join(ROOT, 'index.html'), path.join(OUT, 'index.html'));
for (const s of SUBJECTS) {
  for (const item of ['index.html', 'css', 'js', 'data']) {
    fs.cpSync(path.join(ROOT, s, item), path.join(OUT, s, item), { recursive: true });
  }
}
const count = (dir) => fs.readdirSync(dir, { withFileTypes: true }).reduce((n, d) => n + (d.isDirectory() ? count(path.join(dir, d.name)) : 1), 0);
console.log(`dist/ ready (${count(OUT)} files): chooser + ${SUBJECTS.join(', ')}. Drag the dist folder onto https://app.netlify.com/drop`);
