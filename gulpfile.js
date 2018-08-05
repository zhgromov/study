 	
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('hello', function() {
    console.log('Hello Zell');
  });

gulp.task('sass', function() {
    gulp.src('./src/sass/*.sass')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('./dist/css/'));
});