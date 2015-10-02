(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('headerController', headerController);

    headerController.$inject = ['$cookies', 'headerService'];
    function headerController($cookies, headerService, $route) {
        var ctlr = this;
        ctlr.user = $cookies.get('user');
        if (ctlr.user) {
            ctlr.view = 'app/components/header/headerView.html';
            ctlr.links = headerService.links_member();
        } else {
            ctlr.view = 'app/components/header/headerView_pub.html';
            ctlr.links = headerService.links_pub();
        }

        ctlr.formData = {}
        ctlr.login = function() {
            alert('Wellcome ' + ctlr.email + '!');
            $cookies.put('user', ctlr.email);
            window.location.assign("/#/dashboard");
            window.location.reload(true);
        };
        ctlr.logout = function() {
            alert('Thank you ' + ctlr.user + '!');
            $cookies.remove('user');
            window.location.href="/";
        };

    };

})();
