var gulp          = require('gulp');
var autoprefixer  = require('gulp-autoprefixer'); //autoprefix for compatibility
var concat        = require('gulp-concat'); //concats a file
var rename        = require('gulp-rename'); //renames a file
var minifyCSS     = require('gulp-minify-css'); //minify the css
// var browserSync   = require('browser-sync').create();

module.exports = function (cssFiles) {

    var nameCssBundle = 'style.min.css';

    return gulp.task('build-css', function () {
        return gulp.src(cssFiles)
            .pipe(autoprefixer())
            .pipe(minifyCSS())
            .pipe(concat(nameCssBundle))
            .pipe(gulp.dest("dist/"))
            // .pipe(browserSync.stream());
    });
}