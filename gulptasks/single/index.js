var gulp = require('gulp');

module.exports = function(){

    // PATH DEFINITIONS

    var basePath = "app/";
    var assetsPath = basePath + "assets/";
    var distPath = "dist/";

    var cssFiles = [
        basePath + '**/*.css'
    ];
    var cssMainFiles = [
        basePath + '**/assets/sass/main.scss'
    ];
    var htmlFiles = [
        basePath + '**/*.html'
    ];
    var jsFiles = [
        basePath + '**/*.js'
    ];
    var imgFiles = [
        basePath + '**/img/*',
        basePath + '**/img/**/*'
    ];
    var fontFiles = [
        basePath + 'assets/fonts/*.*'
    ];
    var styleGuideFiles = [
        assetsPath + 'sass/components/*.scss',
        assetsPath + 'sass/util/*.scss'
    ];

    var groupTask = [
        'build html',
        'build sass',
        'build css',
        'build img',
        'build fonts',
        'build js',
        'move htacess'
    ];

    /** TASKS */

    // HTML
    require("./build-html.js")(htmlFiles);
    // JAVASCRIPT
    require("./build-js.js")();
    // GIT SUBMODULE FILE
    require("./after-build.js")();
    // JAVASCRIPT PROD
    require("./build-js-prod.js")();
    // IMAGES
    require("./build-img.js")(imgFiles);
    // TEMPLATE CACHE
    require("./build-template.js")(htmlFiles);
    // SYNC BROWSER
    require("./server.js")();
    // CLEAR
    require("./clear.js")();
    // CSS
    require("./build-css.js")(cssFiles);
    // SCSS
    require("./build-sass.js")(cssMainFiles);
    // FONTS
    require("./build-fonts.js")(fontFiles);
};