angular.module('myApp.controllers')
    .controller('loginCtrl', function ($scope, userList, $state) {
        $scope.testBtn = function () {
            console.log("button");

            $scope.user = {
                page: 1,
                start: 0
            };
            userList.getList($scope.user).then(function (data) {
                console.log(data)
            })
        }

        $scope.NextPage = function () {
            $state.go('nav', {
                name: 'login'
            })
        }
    });