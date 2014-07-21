'use strict';

/**
 * @ngdoc function
 * @name walletApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the walletApp
 */
angular.module('walletApp')
  .controller('MainCtrl', function ($scope, walletBill) {
    function init() {
      $scope.bills = walletBill.query();
    }
    
    init();
  });
