// Creating anugular Module
var kibanaApp = angular.module('kibanaApp', ['ngRoute', 'ui.router','ngFileUpload']);
// creating configuration
kibanaApp.config(['$stateProvider', '$urlRouterProvider','$locationProvider',
    function ($stateProvider, $urlRouterProvider,$locationProvider) {
        $stateProvider
            .state("home", {
                    url: '/home',
                    templateUrl:"app/views/home.html",
                    controller: "homeController"
                }
            ).state("home.popup", {
                url: '/popup',
                templateUrl: "app/views/popup.html",
                controller: "popupController"
            }).state("home.everyWeb", {
                url: '/everyWeb',
                templateUrl: "app/views/everyWeb.html",
                controller: "everyWebController"
            }).state("home.everyAPI", {
                url: '/everyAPI',
                templateUrl: "app/views/everyApi.html",
                controller: "everyApiController"
            }).state("home.everyMobile", {
                url: '/everyMobile',
                templateUrl: "app/views/everyMobile.html",
                controller: "everyMobileController"
            }).state("home.everyDesktop", {
                url: '/everyDesktop',
                templateUrl: "app/views/everyDesktop.html",
                controller: "everyDesktopController"
            }).state("home.visualization", {
                url: '/visualization',
                templateUrl: "app/views/visualization.html",
                controller: "visualizationController"
            });


        // Using UrlRouterProvider

        // $urlRouterProvider.otherwise("/home/everyWeb");
        $urlRouterProvider.otherwise("/home/popup");
        $locationProvider.html5Mode(true);
    }]);