var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var coffee = require('gulp-coffee');
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

// coffeeスクリプトを結合して圧縮してコピー
gulp.task('coffee', function() {
  gulp.src('./src/coffee/*.coffee')
    .pipe(coffee())
    .pipe(concat('all-coffee.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
});

// coffeeスクリプトが変更された時に、coffeeタスクを実施するようにwatch
gulp.task('coffee_watch', function() {
  gulp.watch('./src/coffee/*.coffee', ['coffee']);
});

gulp.task('default', ['html', 'img', 'js', 'coffee', 'coffee_watch']);
