const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/demo-primeng/polyfill-webcomp-es5.js',
    './dist/demo-primeng/polyfill-webcomp.js',
    './dist/demo-primeng/polyfills.js',
    './dist/demo-primeng/scripts.js',
    './dist/demo-primeng/main.js'
  ];

  await fs.ensureDir('./dist/demo-primeng/elements');
  await concat(files, './dist/demo-primeng/elements/demo-primeng-es5.js');
})();
