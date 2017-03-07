'use strict';

const webpack = require('./.webpack.config.js');
const environment = process.env.NODE_ENV || "development";
const isProduction = environment === 'production';


module.exports = function(config) {
  config.set({
    autoWatch: !isProduction,

    basePath: '',

    browserNoActivityTimeout: 30000,

    browsers: [ 'PhantomJS' ],

    client: { captureConsole: false },

    colors: true,

    concurrency: Infinity,

    coverageReporter: {
      reporters: [
        { type: 'html', subdir: 'report-html' },
        { type: 'lcov', subdir: 'report-lcov' },
        { type: 'text' }
      ]
    },

    files: [
      './node_modules/babel-polyfill/dist/polyfill.min.js',
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      'tests/**/*.js'
    ],

    frameworks: [ 'jasmine' ],

    logLevel: config.LOG_INFO,

    preprocessors: {
      'tests/**/*.js': [ 'webpack' ]
    },

    port: 9876,

    singleRun: isProduction,

    reporters: [
      'spec',
      'coverage'
    ],

    webpack,

    webpackServer: {
      noInfo: true
    }

  });
};
