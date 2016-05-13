(function() {
    'use strict';
    angular
        .module('myControllers', [])
        .controller('myController', function ($scope, $mdInkRipple, $mdBottomSheet, $mdDialog, $mdToast) {
            $scope.r = 63;
            $scope.g = 81;
            $scope.b = 181;
            $scope.group = 'friends';
            
            $scope.ripple = function($event){
                $mdInkRipple.attach($scope, angular.element($event.target), {
                    center: true,
                    dimBackground: true,
                    colorElement: false,
                    fitRipple: true
                });
            };
            var key = 'string';
            $scope.bottomSheet = function(){
                $mdBottomSheet.show({
                    templateUrl: 'templates/bottomSheet.html',
                    scope: $scope,
                    locals: {
                        key: key
                    },
                    disableBackdrop: false,
                    disableParentScroll: false,
                    preserveScope: true,
                    controller: function($scope, $mdBottomSheet, key){
                        $scope.close = function(){
                            $mdBottomSheet.hide(key);
                        }
                    }
                }).then(function(response){
                    console.log(response);
                }, function(){
                    console.log('cancel');
                });
            };

            $scope.confirm = function(){
                var confirm = $mdDialog.confirm({
                    title: "title",
                    textContent: "content",
                    ok: 'ok',
                    cancel: 'cancel'
                });
                $mdDialog.show(confirm);
            };

            $scope.dialog = function(){
                $mdDialog.show({
                    templateUrl: 'templates/dialog.html',
                    openFrom: '#dialog',
                    closeTo: '#dialog',
                    scope: $scope,
                    clickOutsideToClose: true,
                    preserveScope: true,
                    controller: function($scope, $mdToast){
                        $scope.addUser = function(){
                            $scope.users[$scope.group].push($scope.userData);
                            $scope.userData = null;
                            $mdDialog.hide('closed');
                            $mdToast.showSimple('Added user!');
                        }
                    }
                });
            };

            $scope.toast = function(){
                $mdToast.show({
                    templateUrl: 'templates/toast.html',
                    autoWrap: true,
                    hideDelay: 5000,
                    position: 'right',
                    controller: function($scope, $mdToast){
                        $scope.ok = function(){
                            $mdToast.hide('hide');
                        }
                    }
                }).then(function(){
                    console.log(arguments);
                });
            };

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

            $scope.users = {
                friends: [
                    {
                        name: 'Will Smith',
                        email: 'example@mail.com'
                    },
                    {
                        name: 'Will Smith',
                        email: 'example@mail.com'
                    },
                    {
                        name: 'Will Smith',
                        email: 'example@mail.com'
                    },
                    {
                        name: 'Will Smith',
                        email: 'example@mail.com'
                    },
                    {
                        name: 'Will Smith',
                        email: 'example@mail.com'
                    },
                    {
                        name: 'Will Smith',
                        email: 'example@mail.com'
                    },
                ],
                others: [
                    {
                        name: 'Will Smith',
                        email: 'example@mail.com'
                    },
                    {
                        name: 'Will Smith',
                        email: 'example@mail.com'
                    },
                    {
                        name: 'Will Smith',
                        email: 'example@mail.com'
                    },
                    {
                        name: 'Will Smith',
                        email: 'example@mail.com'
                    },
                    {
                        name: 'Will Smith',
                        email: 'example@mail.com'
                    },
                    {
                        name: 'Will Smith',
                        email: 'example@mail.com'
                    },
                ]
            }
        });
})();