var gulp = require('gulp')
var sass = require('gulp-sass')
var babel = require('gulp-babel')

gulp.task('sass', function() {
  return gulp.src('src/sass/style.+(sass|scss)')
    .pipe(sass())
    .pipe(gulp.dest('dist/assets/css/'))
})

gulp.task('sass:watch', function() {
  gulp.watch('src/sass/**/*.+(sass|scss)', ['sass'])
})


gulp.task('babelify', function() {
  return (gulp.src('src/js/index.js'))
    .pipe(babel())
    .pipe(gulp.dest('dist/assets/js/'))
})

gulp.task('babelify:watch', function() {
  gulp.watch('src/js/**/*.+(js|json)', ['babelify'])
})

gulp.task('default', ['sass', 'sass:watch', 'babelify', 'babelify:watch'])
