/* Loads the browser scripts (data + core) into a Node vm context, exactly in index.html order. */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const FILES = [
  'data/questions.js',
  'data/questions-w2.js',
  'data/questions-w3.js',
  'data/questions-w4.js',
  'data/questions-w5.js',
  'data/questions-w6.js',
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
