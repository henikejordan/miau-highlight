var gulp          = require('gulp');
var source        = require('vinyl-source-stream');

module.exports = function () {
    return  gulp.task('after-build', function() {
	    var stream = source('.git');

	    stream.end('gitdir: ../.git/modules/dist');
	    stream.pipe(gulp.dest('dist/'));
	});
}