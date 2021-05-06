const {src, dest} = require('gulp');
const less = require('gulp-less');
const concat = require('gulp-concat');

module.exports = function less2css(){
  return src('./src/less/**/*.less')
    .pipe(less())
    .pipe(concat('style.css'))
    .pipe(dest('./build'))
}