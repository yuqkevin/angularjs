(function() {
    'use strict';

    angular
        .module('myApp', [
            'ngRoute',
            'ngResource',
            'ngTouch',
            'ngCookies'
        ])
        .config(config);

    function config($routeProvider) {
        $routeProvider
            .when('/:name*', {
                templateUrl: function(path) {
                    var frags = path.name.split('/');
                    return 'app/components/' + frags[0] + '/' + frags[0] + '.html';
                }
            })
            .otherwise({
                templateUrl:  'app/components/home/home.html',
                controller:  'HomeController',
                controllerAs: 'homeCtlr'
            });
    }

})();
