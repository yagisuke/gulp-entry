var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

// htmlファイルをdistディレクトリにコピー
gulp.task('html', function() {
  gulp.src('./src/*.html')
    .pipe(gulp.dest('./dist'));
});

// imgファイルをdistディレクトリにコピー
gulp.task('img', function() {
  gulp.src(['./src/img/*.jpg', './src/img/*.png', './src/img/*.gif'])
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img'));
});

gulp.task('default', ['html', 'img']);
