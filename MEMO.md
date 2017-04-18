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
``gulp.src('./src/**/*.html', './src/**/donotcopy.html')``

## ファイルのコピータスク
``gulp.src('./index.html').pipe(gulp.dest('./hoge'));``
