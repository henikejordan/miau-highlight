var gulp          = require('gulp');
var sass          = require('gulp-sass'); // sass preprocessor
var gutil         = require('gulp-util'); //beutify the console output
var path          = require('path'); //works with file paths
var rename        = require('gulp-rename'); //renames a file

module.exports = function (cssMainFiles) {
    return gulp.task('build-sass', function () {
        return gulp.src(cssMainFiles)
            .pipe(sass())
            .pipe((function (file) {
                file.dirname =
                    basePath +
                    path.dirname(file.dirname) +
                    '/css';
                return file;
            }))
            .pipe(gulp.dest('.'));
    });
}