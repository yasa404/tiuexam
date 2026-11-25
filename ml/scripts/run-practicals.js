/* Runs every practical model solution in real Python and saves its output in data/practical-outputs.js.
   The site shows these outputs as the expected ones, and the unit tests check that they earn the output marks.
   Needs Python with pandas and scikit-learn: set ML_PYTHON to its path.
   Usage: node scripts/run-practicals.js [--check]   (--check only compares, and changes nothing) */
const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawnSync } = require('child_process');
const { load } = require('../tests/load');

const FILE = path.join(__dirname, '..', 'data', 'practical-outputs.js');
if (!fs.existsSync(FILE)) fs.writeFileSync(FILE, '');
const EC = load();
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'prac-'));
const outputs = {};
let failed = 0;
for (const q of EC.BANK.filter((x) => x.type === 'prac')) {
  const file = path.join(tmp, q.id + '.py');
  fs.writeFileSync(file, q.model);
  const r = spawnSync(process.env.ML_PYTHON || 'python', ['-W', 'error', file], { encoding: 'utf8', env: Object.assign({}, process.env, { PYTHONIOENCODING: 'utf8' }) });
  if (r.status !== 0) { failed++; console.error(q.id + ' failed:\n' + (r.stderr || r.error)); continue; }
  outputs[q.id] = r.stdout.replace(/\r/g, '').split('\n').map((l) => l.trimEnd()).join('\n').trimEnd();
}
fs.rmSync(tmp, { recursive: true, force: true });
if (failed) process.exit(1);
const text = '/* Output of every practical model solution, made by scripts/run-practicals.js. Do not edit by hand. */\n(function (g) {\n  var EC = g.EC = g.EC || {};\n  EC.OUTPUTS = ' +
  JSON.stringify(outputs, null, 2).replace(/\n/g, '\n  ') + ';\n})(typeof window !== \'undefined\' ? window : globalThis);\n';
if (process.argv.includes('--check')) {
  const same = fs.readFileSync(FILE, 'utf8').replace(/\r/g, '') === text;
  console.log(same ? 'Outputs are up to date.' : 'Outputs are different: run this script without --check.');
  process.exit(same ? 0 : 1);
}
fs.writeFileSync(FILE, text);
console.log(`Ran ${Object.keys(outputs).length} solutions.`);
