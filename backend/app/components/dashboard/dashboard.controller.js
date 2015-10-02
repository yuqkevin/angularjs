(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['sessionService'];
    function DashboardController(sessionService) {
        var vm = this;
        if ( !sessionService.getUser() ) {
            window.location.href="/";
        }
    };

})();
