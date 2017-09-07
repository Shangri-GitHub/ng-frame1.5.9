/**
 * Created by shangri-la on 17-9-7.
 */

angular.module('myApp', ['ui.router', 'myApp.controllers', 'myApp.configs', 'myApp.services'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'templates/login.html',
                controller: 'loginCtrl'
            })
            .state('nav', {
                url: '/nav',
                templateUrl: 'templates/nav.html',
                controller: 'navCtrl',
                params:{
                    name:''
                }
            });
        // 默认
        $urlRouterProvider.otherwise('/login');
    });