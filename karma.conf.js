'use strict';

// Karma configuration
// Generated on Tue Jul 07 2015 20:44:56 GMT-0500 (CDT)

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    plugins: [
      'karma-mocha',
      'karma-chai-plugins',
      'karma-phantomjs-launcher',
      'karma-sourcemap-loader'
    ],

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai', 'sinon-chai'],

    // File load order: Vendors (includes angular) -> angular-mocks -> app -> specs
    files: [
      'build/vendors*.js',
      {pattern: 'build/vendors**.js.map', served: true, watched: true, included: false},
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/mockfirebase/browser/mockfirebase.js',
      'build/app**.js',
      {pattern: 'build/app**.js.map', served: true, watched: true, included: false},
      'test/test_helper.js',
      'test/fixtures.js',
      'test/**/*.spec.js'
    ],

    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      '**/*.js': ['sourcemap']
    },

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
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
