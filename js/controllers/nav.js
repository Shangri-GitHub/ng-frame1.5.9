angular.module('myApp.controllers')
    .controller('navCtrl', function ($scope,$state,$stateParams) {
        console.log("nav页面");
        console.log($stateParams.name);
        $scope.backPage = function () {
            $state.go('login')
        }
    });