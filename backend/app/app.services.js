(function() {
    'use strict';

    angular
        .module('myApp')
        .factory('sessionService', sessionService);

    sessionService.$inject = ['$cookies'];

    function sessionService($cookies) {
        var userCookieName = 'loggedInUser';
        return {
            getUser: getUser,
            setUser: setUser,
            removeUser: removeUser
        };

        function getUser() {
            return $cookies.get(userCookieName);
        }

        function setUser(value) {
            $cookies.put(userCookieName, value);
            return value;
        }

        function removeUser() {
            $cookies.remove(userCookieName);
            return true;
        }
    }

})();
