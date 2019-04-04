var gulp          = require('gulp');
var browserSync   = require('browser-sync').create(); //browser sync on file changes
var spa           = require("browser-sync-spa"); //browser sync module for angular

module.exports = function () {
    return gulp.task('server', function () {
        browserSync.use(spa({
            selector: "[ng-app]"
        }));

        var url = require('url'),
            proxy = require('proxy-middleware');

        var proxyOptions = url.parse('http://localhost:3030/api');
        proxyOptions.route = '/api';

        browserSync.init({
            browser: 'chrome',
            logFileChanges: false,
            port: '8080',
            notify: false,
            server: {
                baseDir: "dist/",
                middleware: [proxy(proxyOptions)]
            }
        });
    });
}