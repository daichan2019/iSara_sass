// プラグインの読み込み
const gulp = require("gulp");
const sass = require("gulp-sass");
const sassGlob = require("gulp-sass-glob");

// Sassコンパイルタスクの定義
gulp.task("default", function () {
  return gulp.src("scss/style.scss")
    .pipe(sassGlob()) // Sassの@importにおけるglobを有効にする
    .pipe(sass())
    .pipe(gulp.dest("css"));
});

