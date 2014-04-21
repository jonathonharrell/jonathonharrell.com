'use strict';

angular.module('core').controller('BlogController', ['$scope', '$http', 'Authentication',
    function($scope, $http, Authentication) {
        $scope.authentication = Authentication;
        $scope.isCollapsed = false;

        /* $http.get('blogposts').success(function (data) {
            $scope.blogs = data;
        });
        console.log($scope.blogs); */
    }
]);