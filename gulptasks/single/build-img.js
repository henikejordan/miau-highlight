var gulp          = require('gulp');
var rename        = require('gulp-rename'); //renames a file

module.exports = function (imgFiles) {
    return gulp.task('build-img', function () {
        return gulp.src(imgFiles)
            .pipe(rename({ dirname: '' }))
            .pipe(gulp.dest('dist/img'));
    });
}