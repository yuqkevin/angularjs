(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('authController', authController);

    authController.$inject = ['$cookies'];
    function authController($location, $cookies) {
        var auth = this;
        var loginUser = $cookies.get('user');

        if (loginUser) {
            auth.links = authService.links_member();
        } else {
            auth.links = authService.links_pub();
        }

        auth.formData = {}
        auth.login = function() {
            alert('Wellcome ' + auth.email + '!');
            $cookies.put('user', auth.email);
            $location.url('/dashboard');
        };
        auth.logout = function() {
            alert('Thank you ' + loginUser + '!');
            $cookies.put('user', '');
            $location.url('/');
        }; 
    };

})();

