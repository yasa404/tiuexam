/* Loads the browser scripts (data + core) into a Node vm context, exactly in index.html order. */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const FILES = [
  'data/questions.js',
  'data/questions-l2.js',
  'data/questions-l3.js',
  'data/questions-l4.js',
  'data/questions-l5.js',
  'data/practical-outputs.js',
  'data/figures.js',
  'data/flashcards.js',
  'js/core.js'
];

function load() {
  const ctx = vm.createContext({ console });
  for (const f of FILES) {
    vm.runInContext(fs.readFileSync(path.join(ROOT, f), 'utf8'), ctx, { filename: f });
  }
  return ctx.EC;
}

module.exports = { load, FILES, ROOT };
