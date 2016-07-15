var gulp = require('gulp')
var sass = require('gulp-sass')

gulp.task('sass', function() {
  return gulp.src('src/sass/style.+(sass|scss)')
    .pipe(sass())
    .pipe(gulp.dest('dist/assets/css/'))
})

gulp.task('sass:watch', function() {
  gulp.watch('src/sass/**/*.+(sass|scss)', ['sass'])
})

gulp.task('default', ['sass', 'sass:watch'])
