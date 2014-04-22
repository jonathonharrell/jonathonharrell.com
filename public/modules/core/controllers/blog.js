'use strict';

angular.module('core').controller('BlogController', ['$scope', '$http', 'Authentication',
    function($scope, $http, Authentication) {
        $scope.authentication = Authentication;
        $scope.isCollapsed = false;

        $http.get('blogposts').success(function (data) {
            $scope.blogs = data.items; // individual posts from RSS feed
            $scope.url = data.url; // URL of blog
        });
    }
]);