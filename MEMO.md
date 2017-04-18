# gulpについてのメモ

## 操作ファイル対象の指定方法
##### 1つのファイルのみ
``gulp.src('./src/index.html')``
##### 複数ファイル
``gulp.src(['./src/index.html', './src/index2.html'])``
##### ファイル拡張子指定
``gulp.src('./src/*.html')``
##### すべてのフォルダからファイル拡張子指定
``gulp.src('./src/**/*.html')``
##### すべてのフォルダからファイル拡張子指定 + 操作したくないファイル指定
``gulp.src('./src/**/*.html', '!./src/**/donotcopy.html')``

## ファイルのコピータスク
``gulp.src('./index.html').pipe(gulp.dest('./hoge'));``

## 画像ファイルの最適化
事前に以下のようにしてインストール<br>
``$ npm i -D gulp-imagemin``
##### 画像最適化処理
``gulp.src('./src/img/*').pipe(imagemin())``

## スクリプトの最適化（minify + ファイル）
事前に以下のようにしてインストール<br>
``$ npm i -D gulp-concat gulp-uglify``
##### ファイルを結合して圧縮
``gulp.src('./src/js/*.js').pipe(concat('all.min.js')).pipe(uglify())``
##### coffeeスクリプト対応
事前に以下のようにしてインストール<br>
``$ npm i -D gulp-coffee``
指定方法は以下のように<br>
``gulp.src('./src/coffee/*.coffee').pipe(coffee()).pipe(concat('all-coffee.min.js')).pipe(uglify())``

## watch
``gulp.watch('./src/target.file', ['taskName']);``

## エラーが発生してもtaskを実行し続ける
defaultではエラーが出るとwatchのような継続し続けるタスクが止まってしまう。<br>
なので、エラーが出てもタスクが継続し続けるようにする。<br>
事前に以下のようにしてインストール<br>
``$ npm i -D gulp-plumber``
エラーが出そうなところにplumber()を追加<br>
``gulp.src('./src/coffee/*.coffee').pipe(plumber()).pipe(coffee())...etc``
