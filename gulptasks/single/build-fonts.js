var gulp          = require('gulp');

module.exports = function (fontFiles) {
    return gulp.task('build-fonts', function () {
        return gulp.src(fontFiles)
            .pipe(gulp.dest('dist/fonts'));
    });
}