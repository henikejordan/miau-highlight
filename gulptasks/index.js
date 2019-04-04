module.exports = function () {


    function watch(name,files,tasks){
        return require("./single/build-watch.js")(name,files,tasks);
    }

    // IMPORTS

    var gulp = require('gulp');
	var Server = require('karma').Server;
    var runSequence = require('run-sequence'); //runs tasks in sequence
    require("./single/")();
    
    
    /** BUNDLE TASKs */

    gulp.task('build', function (done) {
        runSequence(
            [
                'build-html',
                'build-css',
                'build-fonts',
                'build-img',
            ],
            done
        );
    });

    gulp.task('build-prod', function (done) {
        runSequence('clear',
            require('./single/move-file')(".htaccess"),
            'build-template', [
            'build-html',
            'build-css',
            'build-img',
            'build-fonts',
            'build-js-prod',
            'after-build'
        ], done);
    });

    gulp.task('serve', function (done) {
        runSequence('server', done)
    });

    watch("watch-html-tempalte", ["app/**/*.html"] ,["build-template"]);
    watch("watch-css", ["app/**/*.css"], ["build-css"]);

    gulp.task('basic', function (done) {
        runSequence("build-html","build-css","build-fonts","build-img","build-template", "build-js", "watch-html-tempalte", "watch-css", done);
    });

	gulp.task('test', function(done) {
		new Server({
			configFile: __dirname + '/../karma.conf.js',
			singleRun: true
		}, done).start();
	});

}