(function() {
    'use strict';
    angular
        .module('myControllers', [])
        .controller('myController', function ($scope) {
            
            $scope.pages = [
                {
                    name: 'Dashboard',
                    icon: 'dashboard'
                },{
                    name: 'Friends',
                    icon: 'supervisor_account'
                },{
                    name: 'Messages',
                    icon: 'message'
                },
            ];

            $scope.management = [
                {
                    name: 'Trash',
                    icon: 'delete'
                },{
                    name: 'Settings',
                    icon: 'settings',
                },
            ];
        });
})();