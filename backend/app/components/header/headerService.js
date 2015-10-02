(function() {
    'use strict';

    angular
        .module('myApp')
        .factory('headerService', headerService);

    headerService.$inject = ['$resource'];

    function headerService($resource) {
        return $resource('/services/header/:action.json', {}, {
            login: {method: 'POST', params: {action: 'login'}, isArray: false },
            logout: {method: 'POST', params: {action: 'logout'}, isArray: false},
            links_member: {method: 'GET', params: {action: 'links'}, isArray: true},
            links_pub: {method: 'GET', params: {action: 'links-pub'}, isArray: true}  
        });
    };
})();
