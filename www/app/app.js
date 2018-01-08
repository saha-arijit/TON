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
            ).state('rough', {
                url: '/rough',
                templateUrl: 'app/views/rough.html',
                controller: 'roughController'
            }
        );

        // Using UrlRouterProvider

        $urlRouterProvider.otherwise('rough')
    }]);