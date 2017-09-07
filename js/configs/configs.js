angular.module("myApp.configs", [])
    .constant('API', (function () {
        var service = '';
        return {
            user: {
                auth: service + 'api/user/auth.api',
                show: service + 'api/user/show.api',
            }
        }
    })());