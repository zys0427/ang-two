var myAppTwo = angular.module('myAppTwo',[]);

myAppTwo.controller('infoCtrl',['$scope','$http','$routeParams',
    function ($scope,$http,$routeParams) {
        $http.get('data/' + $routeParams.id + '.json').success(function(data) {
            $scope.phone = data;
            $scope.baseImg =data.images[0];
        });

        $scope.getImg = function (src) {
            $scope.baseImg = src;
        }
    }]
);