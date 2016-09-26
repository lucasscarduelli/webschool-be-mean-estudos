'use strict';

angular.module('BeMEAN', ['ngRoute','ngAnimate','ngMessages', 'User'])
.config(['$routeProvider','$locationProvider',function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/users', {
            templateUrl: 'views/users.html',
            controller: 'UserController',
            controllerAs: 'User'
        })
        .when('/users/:id', {
            templateUrl: 'views/users-details.html',
            controller: 'UserDetailsController',
            controllerAs: 'UserDetail'
        })
        .otherwise({
            redirectTo: '/users'
        });
}]);