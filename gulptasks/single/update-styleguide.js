var gulp          = require('gulp');
var sass          = require('gulp-sass'); // sass preprocessor
var styleguide    = require('sc5-styleguide'); // styleguide

module.exports = function (styleGuideFiles, assetsPath, distPath) {
	gulp.task('styleguide:generate', function() {
	    return gulp.src(styleGuideFiles)
	        .pipe(styleguide.generate({
	            title: 'Minhas Audiências - Style Guide',
	            server: true,
	            rootPath: distPath + '/styleguide',
	            overviewPath: assetsPath + 'sass/readme.md',
	            commonClass: 'miau-layout'
	        }))
	        .pipe(gulp.dest(distPath + '/styleguide'));
	});
	gulp.task('styleguide:update', function() {
	    return gulp.src(distPath + '/styleguide/styleguide.css')
	        .pipe(styleguide.applyStyles());
	});
	
	return gulp.task('update-styleguide', [
	    'styleguide:generate',
	    'styleguide:update'
	]);
}
