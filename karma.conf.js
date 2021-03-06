// Karma configuration
// Generated on Thu Dec 17 2015 01:35:02 GMT-0200 (BRST)


module.exports = function(config) {
	
    config.set({
		
        // base path that will be used to resolve all patterns (eg. files, exclude)
        // basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine', 'browserify'],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {

			'app/*.js': ['browserify'],
            
			//The tests
            '**/tests/*Test.js': ['browserify'],

            //The templates
            '**/*.html': ['ng-html2js']
        },


        // list of files / patterns to load in the browser
        files: [
		
			'node_modules/angular/angular.js', 
			'node_modules/angular-mocks/angular-mocks.js',
			'node_modules/angular-router/angular-router.js',
			'node_modules/angular-sanitize/angular-sanitize.js',
			'app/*.js',

            //The tests
            '**/tests/*Test.js',

            //The templates
            '**/*.html',
        ],


        // list of files to exclude
        exclude: [
        ],

		plugins: [
			'karma-chrome-launcher',
			'karma-jasmine',
			'karma-browserify',
			'karma-ng-html2js-preprocessor'
		],

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_ERROR,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: [
            // 'PhantomJS',
            'Chrome',
            // 'Safari',
        ],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultanous
        concurrency: Infinity,

        browserify: {
            debug: true,
            transform: [
                'browserify-ngannotate',
                'brfs'
            ],
            extensions: ['.js']
        },

        ngHtml2JsPreprocessor: {
            // strip this from the file path
            // stripPrefix: 'app/components/correspondents/correspondent-register/',
            // prependPrefix: 'app/components/correspondents/correspondent-register/'
            // - setting this option will create only a single module that contains templates
            //   from all the files, so you can load them all with module('foo')
            // - you may provide a function(htmlPath, originalPath) instead of a string
            //   if you'd like to generate modules dynamically
            //   htmlPath is a originalPath stripped and/or prepended
            //   with all provided suffixes and prefixes
            moduleName: 'template'
        }
    })
	
};
