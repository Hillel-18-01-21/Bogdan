const {watch, series, task } = require('gulp');
const less2css = require('./gulp/less2css');
const transpileJs = require('./gulp/transpileJs');

task('styles', less2css);
task('transpileJs', transpileJs);

function watchFiles(){
  watch(['./src/less/**/*.less'], less2css);
  watch(['./src/js/**/*.js'], transpileJs);
}

task('default', series(less2css, transpileJs, watchFiles));