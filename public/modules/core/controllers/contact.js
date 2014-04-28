'use strict';

angular.module('core').controller('ContactController', ['$scope', '$http', 'Authentication',
    function($scope, $http, Authentication) {
        $scope.authentication = Authentication;
    }
]);