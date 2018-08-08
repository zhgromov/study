 	var gulp = require('gulp');
 	var sass = require('gulp-sass');
 	var browserSync = require('browser-sync');


 	gulp.task('sass', function() {
 	    gulp.src('./src/sass/*.sass')
 	        .pipe(sass()) // Using gulp-sass
 	        .pipe(gulp.dest('./src/css/'))
 	        .pipe(browserSync.reload({
 	            stream: true
 	        }))
 	})

 	gulp.task('browserSync', function() {
 	    browserSync({
 	        server: {
 	            baseDir: 'src'
 	        },
 	    })
 	})


 	gulp.task('watch', ['browserSync', 'sass'], function() {
 	    gulp.watch('./src/sass/*.sass', ['sass']);
 	    // Обновляем браузер при любых изменениях в HTML или JS
 	    gulp.watch('./src/*.html', browserSync.reload);
 	    gulp.watch('./src/*.css', browserSync.reload);
 	    gulp.watch('./src/js/**/*.js', browserSync.reload);
 	});