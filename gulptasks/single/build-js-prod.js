var gulp          = require('gulp');
var uglify        = require('gulp-uglify'); //monifies js files
var ngAnnotate    = require('browserify-ngannotate'); //browserifies angular files
var assign        = require('lodash.assign'); //
var sourcemaps    = require('gulp-sourcemaps'); //creates sourcemaps of files
var gutil         = require('gulp-util'); //beutify the console output
var buffer        = require('vinyl-buffer'); //
var source        = require('vinyl-source-stream'); //
var browserify    = require('browserify'); //browserifies the files
var watchify      = require('watchify'); //whatches for changes in the browserified path

module.exports = function () {

    return gulp.task('build-js-prod', function () {
        var customOpts = {
            entries: ['./app/app.js'],
            debug: true,
            transform: [ngAnnotate]
        };
        var opts = assign({}, watchify.args, customOpts);
        var b = browserify(opts);

        return b.bundle()
            // log errors if they happen
            .on('error', gutil.log.bind(gutil, 'Browserify Error'))
            .pipe(source("bundle.js"))
            // optional, remove if you don't need to buffer file contents
            .pipe(buffer())
            // optional, remove if you dont want sourcemaps
            // .pipe(sourcemaps.init({ loadMaps: true })) // loads map from browserify file
            .pipe(uglify())
            // Add transformation tasks to the pipeline here.
            // .pipe(sourcemaps.write('./')) // writes .map file
            .pipe(gulp.dest("dist/"))
    });
}