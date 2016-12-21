var gulp = require('gulp'),
    sass = require('gulp-sass')
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    imgmin = require('gulp-imagemin');


gulp.task('sass', function() {
  return gulp.src('css/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('/css'));
});

gulp.task('sass:watch', function() {
  gulp.watch('css/*.scss', ['sass']);
});

gulp.task('cssmin', function () {
  gulp.src('css/*.css')
  .pipe(cssmin())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('dist/css'));

});

gulp.task('imagemin', function() {
  gulp.src('img/*')
  .pipe(imgmin())
  .pipe(gulp.dest('dist/img'))
})
