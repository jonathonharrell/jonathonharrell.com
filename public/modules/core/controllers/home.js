'use strict';

angular.module('core').controller('HomeController', ['$scope', 'Authentication', function ($scope, Authentication) {
    $scope.authentication = Authentication;

    $scope.chartConfig = {
        options: {
            //This is the Main Highcharts chart config. Any Highchart options are valid here.
            //will be ovverriden by values specified below.
            chart: {
                type: 'column'
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
            data: [{
                name: 'PHP',
                color: '#8892BF',
                y: 10
            }, {
                name: 'Javascript',
                color: '#b30406',
                y: 9
            }, {
                name: 'Node.js',
                color: '#80bd01',
                y: 8
            }, {
                name: 'Ruby on Rails',
                color: '#981A21',
                y: 5
            }, {
                name: 'Symfony 2',
                color: '#059',
                y: 8
            }],

            showInLegend: false
        }],

        //Title configuration (optional)
        title: {
            text: 'Awesome Web Dev Chops'
        },

        //Boolean to control showng loading status on chart (optional)
        loading: true,

        //Configuration for the xAxis (optional). Currently only one x axis can be dynamically controlled.
        //properties currentMin and currentMax provied 2-way binding to the chart's maximimum and minimum
        xAxis: {
            currentMin: 0,
            currentMax: 6,
            type: 'category'
        },

        yAxis: {
            currentMin: 0,
            currentMax: 10,
            title: { text: 'Skill Level' }
        }

    };
}]);