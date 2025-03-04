const { series, parallel, src, dest, pipe } = require('gulp');
const path = require('path');
const gulpClean = require('gulp-clean');
const fs = require('fs');
console.log(__dirname);
const pathSrc = path.resolve(__dirname, '../../packages', './components');
console.log(pathSrc);
function cleanDir(cb) {
  if (fs.existsSync('./dist')) {
    src('./dist', { read: false }).pipe(gulpClean());
  }
  cb();
}
async function copy(cb) {
  await src(`${pathSrc}/**/*.vue`).pipe(dest('./dist'));
  cb();
}

function javascript(cb) {
  // body omitted
  setTimeout(() => {
    console.log('执行js');
    cb();
  }, 2000);
}

function css(cb) {
  // body omitted
  setTimeout(() => {
    console.log('执行css');
    cb();
  }, 1000);
}

exports.build = series(javascript, css);
exports.buildParallel = parallel(javascript, css);
exports.copy = series(cleanDir, copy);
