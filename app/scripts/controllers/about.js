'use strict';

/**
 * @ngdoc function
 * @name walletApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the walletApp
 */
angular.module('walletApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
