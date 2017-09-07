angular.module('myApp.services')
    .factory('userList', function ($http, $q) {
        return {
            getList: function (e) {
                var deferred = $q.defer();
                $http({
                    method: 'GET',
                    url: ''
                }).then(function (data) {
                    console.log(data);
                    deferred.resolve(data);
                }, function (e) {
                    deferred.resolve(e);
                });
                return deferred.promise;
            }
        }
    });
