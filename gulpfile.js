var gulp = require('gulp')
var sourcemaps = require('gulp-sourcemaps')
var livereload = require('gulp-livereload')

var cssnano = require('gulp-cssnano')
var sass = require('gulp-sass')

var babel = require('gulp-babel')
var webpack = require('webpack-stream')
var webpackConfig = require('./webpack.config.js')

gulp.task('sass', function() {
  return gulp.src('src/sass/main.+(sass|scss)')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(cssnano())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/assets/css/'))
    .pipe(livereload())
})

gulp.task('babelify', function() {
  return (gulp.src('src/js/index.js'))
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('dist/assets/js/'))
    .pipe(livereload())
})

gulp.task('build', [ 'sass', 'babelify' ])

gulp.task('watch', function() {
  livereload.listen()
  gulp.watch('src/js/**/*.+(js|json)', ['babelify'])
  gulp.watch('src/sass/**/*.+(sass|scss)', ['sass'])
})

gulp.task('default', [ 'build', 'watch' ])
