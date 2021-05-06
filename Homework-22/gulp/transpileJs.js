const {src, dest} = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const order = require('gulp-order');

module.exports = function transpileJs(){
  // return src(['./src/js/toDoConstructor.js',
  //             './src/js/ToDoList.js',
  //             './src/js/**/*.js',
  //             './src/js/app.js'])
    return src('./src/js/**/*.js')
    .pipe(order(['src/js/toDoConstructor.js',
                'src/js/ToDoList.js',
                'src/js/**/*.js',
                'src/js/app.js'],
                {base: './'}))
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(concat('bundle.js'))
    .pipe(dest('./build'));
}