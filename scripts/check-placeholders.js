// Run with `npm run check`.
// Looks for any leftover placeholder text before you submit. Exits with an error if it finds one.
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const PLACEHOLDERS = ['FILL' + '_ME', 'Lorem ipsum', 'Your name here'];
const TARGETS = ['src', 'index.html', 'README.md'];
const hits = [];

function scan(path) {
  const stats = statSync(path);
  if (stats.isDirectory()) {
    for (const entry of readdirSync(path)) scan(join(path, entry));
    return;
  }
  if (!/\.(jsx?|css|html|md)$/.test(path)) return;
  readFileSync(path, 'utf8')
    .split('\n')
    .forEach((line, i) => {
      if (PLACEHOLDERS.some((word) => line.includes(word))) {
        hits.push(`  ${path}:${i + 1}  ${line.trim()}`);
      }
    });
}

TARGETS.forEach(scan);

if (hits.length) {
  console.error(`\n✗ Found ${hits.length} placeholder(s) still to fill in:\n`);
  console.error(hits.join('\n'));
  console.error('\nFill these in, then run `npm run check` again.\n');
  process.exit(1);
}

console.log('✓ No placeholders left. Ready to submit.');
