var myAppOne = angular.module("myAppOne",[]);

myAppOne.controller("listCtrl",['$scope','$routeParams','$http','Myservice',function($scope,$routeParams,$http,appService){

    $scope.data = appService.query();
	$scope.field ='age';

}]);