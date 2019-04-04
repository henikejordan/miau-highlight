var gulp          = require('gulp');
// var browserSync   = require('browser-sync').create();

module.exports = function (files,to) {

    return gulp.task('move-file', function () {
        return gulp.src(files)
            .pipe(gulp.dest(to));
    });
}