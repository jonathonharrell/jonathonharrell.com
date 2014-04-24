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
                y: 9.75
            }, {
                name: 'JS',
                color: '#b30406',
                y: 9.25
            }, {
                name: 'Node',
                color: '#80bd01',
                y: 8.5
            }, {
                name: 'RoR',
                color: '#981A21',
                y: 5.5
            }, {
                name: 'Symfony',
                color: '#059',
                y: 8
            }, {
                name: 'Angular',
                color: '#a6120d',
                y: 6.5
            }, {
                name: 'Python',
                color: '#ffd343',
                y: 3.25
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