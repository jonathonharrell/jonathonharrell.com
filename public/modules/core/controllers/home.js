'use strict';

angular.module('core').controller('HomeController', ['$scope', 'Authentication', function ($scope, Authentication) {
    $scope.authentication = Authentication;

    $scope.chartConfig = {
        options: {
            //This is the Main Highcharts chart config. Any Highchart options are valid here.
            //will be ovverriden by values specified below.
            chart: {
                type: 'bar'
            },
            tooltip: {
                style: {
                    padding: 10,
                    fontWeight: 'bold'
                }
            },
        },

        //Series object (optional) - a list of series using normal highcharts series options.
        series: [{
            data: [10, 15, 12, 8, 7]
        }],

        //Title configuration (optional)
        title: {
            text: 'Look at this chart'
        },

        //Boolean to control showng loading status on chart (optional)
        loading: true,

        //Configuration for the xAxis (optional). Currently only one x axis can be dynamically controlled.
        //properties currentMin and currentMax provied 2-way binding to the chart's maximimum and minimum
        xAxis: {
            currentMin: 0,
            currentMax: 20,
            title: {text: 'values'}
        },

        //size (optional) if left out the chart will default to size of the div or something sensible.
        size: {
            width: 400,
            height: 300
        }
    };
}]);