var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

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

// jsファイルを結合して圧縮してコピー
gulp.task('js', function() {
  gulp.src('./src/js/*.js')
    .pipe(concat('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('default', ['html', 'img', 'js']);
