'use strict';

angular.module('core').controller('TwitterController', ['$scope', '$http', 'Authentication',
    function($scope, $http, Authentication) {
        $scope.authentication = Authentication;
        $scope.loading = true;

        $http.get('tweets').success(function (data) {
            $scope.tweets = data;
            $scope.loading = false;
        });
    }
]);