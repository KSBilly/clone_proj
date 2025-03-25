const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function style(){
    return gulp.src("./src/styles/*.scss")
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./build/styles'))
}

function images(){
    return gulp.src("./src/images/**/*")
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'));
}

exports.default = gulp.parallel(style);

exports.watch = function(){
    gulp.watch('./scr/styles/*.scss', gulp.parallel(style));
}