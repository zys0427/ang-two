var appServices = angular.module('myappService',['ngResource']);

appServices.factory('Myservice',['$resource',
    function ($resource) {
        return $resource(
            'data/phones.json',
            {}
            ,{
                query:{method:"get",isArray:true}
            });
    }
]);