var gulp          = require('gulp');
var htmlmin       = require('gulp-htmlmin'); //minify the html

module.exports = function (htmlFiles) {
    return gulp.task('build-html', function () {
        return gulp.src("app/index.html")
            .pipe(htmlmin({ collapseWhitespace: true }))
            .pipe(gulp.dest("dist/"));
    });
}