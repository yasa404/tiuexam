/* Copies only the files the site needs into dist/ for Netlify drag-and-drop (no node_modules, tests, etc.). */
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'dist');
fs.rmSync(OUT, { recursive: true, force: true });
for (const item of ['index.html', 'css', 'js', 'data']) {
  fs.cpSync(path.join(ROOT, item), path.join(OUT, item), { recursive: true });
}
const count = (dir) => fs.readdirSync(dir, { withFileTypes: true }).reduce((n, d) => n + (d.isDirectory() ? count(path.join(dir, d.name)) : 1), 0);
console.log(`dist/ ready (${count(OUT)} files). Drag the dist folder onto https://app.netlify.com/drop`);
