var gulp          = require('gulp');
var clean         = require('gulp-clean'); //clean a folder

module.exports = function () {
    return gulp.task('clear', function () {
        return gulp.src("dist")
            .pipe(clean());
    });
}