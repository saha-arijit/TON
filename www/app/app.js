// Creating anugular Module
var kibanaApp = angular.module('kibanaApp', ['ngRoute', 'ui.router','ngFileUpload']);
// creating configuration
kibanaApp.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('hai', {
            url: '/hai',
            templateUrl: 'app/views/hai.html'
            // contoller : ' homeController'
        })
            .state('home', {
                    url: '/home',
                    templateUrl: 'app/views/home.html',
                    controller: 'homeController'
                }
            ).state('everyWeb', {
                url: '/everyWeb',
                templateUrl: 'app/views/everyWeb.html',
                controller: 'everyWebController'
            }).state('everyApi', {
                url: '/everyApi',
                templateUrl: 'app/views/everyApi.html',
                controller: 'everyApiController'
            }).state('everyMobile', {
                url: '/everyMobile',
                templateUrl: 'app/views/everyMobile.html',
                controller: 'everyMobileController'
            })


        // Using UrlRouterProvider

        $urlRouterProvider.otherwise('everyWeb')
    }]);