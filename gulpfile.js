var gulp = require('gulp');
var stylus = require('gulp-stylus');

gulp.task('stylus', function () {
  return gulp.src('./styles')
    .pipe(stylus({ compress: true }))
    .pipe(gulp.dest('./app/styles'));
});

gulp.task('default', ['stylus']);
