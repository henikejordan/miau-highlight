var gulp          = require('gulp');
var templateCache = require('gulp-angular-templatecache'); // make templatecache for angular
var path          = require("path");

module.exports = function (htmlFiles) {

    function makeTemplate() {

        var TEMPLATE_HEADER = 'module.exports = /*@ngInject*/ angular.module("<%= module %>"<%= standalone %>).run(["$templateCache", function($templateCache) {';
        function makeUrl(url) {
            var temp_url;
            temp_url = path.normalize(url).split('/');
            
            if(temp_url.length <= 1)
                temp_url = path.normalize(url).split('\\');

            var new_url = [];
            new_url[0] = temp_url[temp_url.length - 2];
            new_url[1] = temp_url[temp_url.length - 1];
            return new_url.join('/');
        }

        return templateCache({
            templateHeader: TEMPLATE_HEADER,
            transformUrl: makeUrl,
            module: 'templateCache',
            standalone: true
        })
    }

    return gulp.task('build-template', function () {
        return gulp.src(htmlFiles)
            .pipe(makeTemplate())
            .pipe(gulp.dest('app/template'));
    });
}