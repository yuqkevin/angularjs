(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('HeaderController', HeaderController);

    HeaderController.$inject = ['headerService', 'sessionService'];
    function HeaderController(headerService, sessionService) {
        var vm = this;
        vm.user = sessionService.getUser();
        vm.view = 'app/components/header/header.html';
        if (vm.user) {
            vm.isMember = 1;
            vm.links = headerService.links_member();
        } else {
            vm.isMember = 0;
            vm.links = headerService.links_pub();
        }

        vm.formData = {}
        vm.login = function() {
            var res = headerService.login({username: vm.email, passowrd: vm.password}, function(){
                console.log(res);
                if ( res.isOk === true ) {
                    alert('Welcome ' + vm.email + '!');
                    sessionService.setUser(vm.email);
                    window.location.assign("/#/dashboard");
                    window.location.reload(true);
                } else {
                    alert('Invalid user ' + vm.email + '!');
                }
            });
        };
        vm.logout = function() {
            var res = headerService.logout({username: vm.user}, function() {
                alert('Thank you ' + vm.user + '!');
                sessionService.removeUser();
                window.location.href="/";
            });
        };

    };

})();
