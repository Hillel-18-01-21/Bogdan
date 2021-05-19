const {src, dest, task, watch} = require('gulp');
const sass = require('gulp-sass');
// const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');

function css(){
  return src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(autoprefixer({
            cascade: false
        }))
    .pipe(dest('./src/css'));
}

function wathFiles(){
  watch('./src/scss/**/*.scss', css)
}

task('css', css);
task('default', wathFiles);
