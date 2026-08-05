const fs = require('fs');
const path = require('path');

const target = path.join(__dirname, '..', 'node_modules', 'tr46', 'index.js');

try {
  if (!fs.existsSync(target)) {
    console.log('tr46 index.js not found, skipping patch.');
    process.exit(0);
  }

  const content = fs.readFileSync(target, 'utf8');
  const patched = content.replace(/require\(["']punycode\/["']\)/g, `require('punycode')`);

  if (content === patched) {
    console.log('tr46 index.js already patched.');
    process.exit(0);
  }

  fs.writeFileSync(target, patched, 'utf8');
  console.log('Patched tr46/index.js to require("punycode")');
} catch (err) {
  console.error('Failed to patch tr46/index.js:', err);
  process.exit(1);
}
