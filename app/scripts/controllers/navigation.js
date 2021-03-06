'use strict';

/**
 * @ngdoc function
 * @name foodPlanOrganizerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the foodPlanOrganizerApp
 */
angular.module('foodPlanOrganizerApp')
.controller('NavigationCtrl', function($scope) {
  $scope.activeCtrl = 'CalendarCtrl';
  $scope.$on('$routeChangeSuccess', function(evt, toState) {
    $scope.activeCtrl = toState.$$route.controller;
  });
});