/* Checks the subject chooser (index.html): every subject link exists and the question counts match the banks. */
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const errors = [];
for (const [, href] of html.matchAll(/class="subject[^"]*" href="([^"]+)"/g)) {
  if (!fs.existsSync(path.join(ROOT, href))) errors.push(`link to missing page: ${href}`);
}
for (const [, folder, shown] of html.matchAll(/data-count="([^"]+)">(\d+)</g)) {
  const { load } = require(path.join(ROOT, folder, 'tests', 'load.js'));
  const real = load().BANK.length;
  if (real !== +shown) errors.push(`${folder}: chooser says ${shown} questions, bank has ${real}`);
  else console.log(`${folder}: ${real} questions ✓`);
}
if (errors.length) { errors.forEach((e) => console.error('x ' + e)); process.exit(1); }
console.log('Subject chooser OK.');
