(function() {
    'use strict';

    angular
        .module('myApp')
        .factory('authService', authService);

    authService.$inject = ['$resource'];

    function authService($resource) {
        return $resource('/services/auth/:action.json', {}, {
            login: {method: 'POST', params: {action: 'login'}, isArray: false },
            logout: {method: 'POST', params: {action: 'logout'}, isArray: false},
            links_member: {method: 'GET', params: {action: 'links'}, isArray: true},
            links_pub: {method: 'GET', params: {action: 'links-pub'}, isArray: true}  
        });
    };
})();
