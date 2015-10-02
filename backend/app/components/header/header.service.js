(function() {
    'use strict';

    angular
        .module('myApp')
        .factory('headerService', headerService);

    headerService.$inject = ['$resource'];

    function headerService($resource) {
        return $resource('/services/header/:action', {}, {
            login: {method: 'GET', params: {action: 'login.json'}, isArray: false },
            logout: {method: 'GET', params: {action: 'logout.json'}, isArray: false},
            links_member: {method: 'GET', params: {action: 'links.json'}, isArray: true},
            links_pub: {method: 'GET', params: {action: 'links-pub.json'}, isArray: true}  
        });
    };
})();
