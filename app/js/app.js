var myApp = angular.module("myApp",['ngRoute','myAppOne','myAppTwo','phonescatFilter','myappService']);

myApp.config(['$routeProvider',function ($routeProvider) {
    $routeProvider
        .when('/phones',{
            templateUrl:'view/list.html',
            controller:'listCtrl'
        })
        .when('/info/:id',{
            templateUrl:'view/info.html',
            controller:'infoCtrl'
        })
        .otherwise({
            redirectTo:'/phones'
        });
}]);