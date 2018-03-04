// https://markgoodyear.com/2014/01/getting-started-with-gulp/

var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    imagemin = require('gulp-imagemin'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    rename = require('gulp-rename'),
    cssnano = require('gulp-cssnano'),
    del = require('del');

gulp.task('default', ['clean'], function() {
	gulp.start('styles', 'scripts', 'images', 'copy', 'serve'); 
});

gulp.task('styles', function() {
  return sass('src/styles/main.scss', { style: 'expanded' })
    .pipe(rename({suffix: '.min'}))
    .pipe(cssnano())
    .pipe(gulp.dest('dist/assets/css'));
});

gulp.task('scripts', function() {
  return gulp.src('src/scripts/**/*.js')
    .pipe(concat('main.js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/assets/js'));
});

gulp.task('images', function() {
  return gulp.src('src/images/**/*')
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest('dist/assets/img'));
});

gulp.task('copy', function () {
    return gulp.src('src/index.html')
        .pipe(gulp.dest('./dist/assets/'));
});

gulp.task('watch', function() {
  gulp.watch('src/styles/**/*.scss', ['styles']);
  gulp.watch('src/scripts/**/*.js', ['scripts']);
  gulp.watch('src/images/**/*.png', ['images']);
  gulp.watch('src/index.html', ['copy']);
});

gulp.task('clean', function() {
    return del(['dist/assets/css', 'dist/assets/js', 'dist/assets/img']);
});

    var connect = require('gulp-connect-php'),
    browserSync = require('browser-sync');
 
gulp.task('serve', function() {
  connect.server({}, function (){
    browserSync({
      proxy: 'localhost/bianca/dist/assets'
    });
  });
 
});