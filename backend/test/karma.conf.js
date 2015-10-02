module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
      'assets/libs/bower_components/angular/angular.js',
      'assets/libs/bower_components/angular-route/angular-route.js',
      'assets/libs/bower_components/angular-mocks/angular-mocks.js',
      'assets/components/**/*.js',
      'assets/js/**/*.js',
      'test/unit/**/*.js'
    ],

    autoWatch : true,

    singleRun : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test/report/unit.xml',
      suite: 'unit'
    }

  });
};
