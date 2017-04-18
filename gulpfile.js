var gulp = require('gulp');

// $ gulp html
gulp.task('html', function() {
  gulp.src('./src/*.html')
    .pipe(gulp.dest('./dist'));
});

// $ gulp -> $ gulp html
gulp.task('default', ['html']);
