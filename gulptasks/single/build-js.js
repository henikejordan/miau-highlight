var gulp = require('gulp');
var uglify = require('gulp-uglify'); //monifies js files
var ngAnnotate = require('browserify-ngannotate'); //browserifies angular files
var assign = require('lodash.assign'); //
var sourcemaps = require('gulp-sourcemaps'); //creates sourcemaps of files
var gutil = require('gulp-util'); //beutify the console output
var buffer = require('vinyl-buffer'); //
var source = require('vinyl-source-stream'); //
var browserify = require('browserify'); //browserifies the files
var watchify = require('watchify'); //whatches for changes in the browserified path

module.exports = function () {

    var customOpts = {
        entries: ['./app/app.js'],
        debug: true,
        transform: [ngAnnotate]
    };
    var opts = assign({}, watchify.args, customOpts);
    var b = watchify(browserify(opts));
    b.on('update', bundle); // on any dep update, runs the bundler
    b.on('log', gutil.log); // output build logs to terminal


    function bundle() {
        return b.bundle()
            // log errors if they happen
            .on('error', gutil.log.bind(gutil, 'Browserify Error'))
            .pipe(source('bundle.js'))
            .pipe(buffer()) // optional, remove if you don't need to buffer file contents
            .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file // optional, remove if you dont want sourcemaps
            .pipe(uglify())
            // .pipe(sourcemaps.write('./')) // writes .map file // optional, remove if you dont want sourcemaps
            .pipe(gulp.dest('dist/'));
    }
    return gulp.task('build-js', bundle);
}