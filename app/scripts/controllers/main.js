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
      $scope.note = '';
    }
    
    $scope.addBill = function() {
      walletBill.save({
        note: $scope.note
      });

      init();
    };

    $scope.reset = function() {
      walletBill.reset();
      init();
    };

    function getTotal() {
      return $scope.bills.reduce(function(sum, bill) {
        return sum + bill.note;
      }, 0);
    }

    $scope.$watch('bills', function() {
      $scope.total = getTotal();
    }, true);

    init();
  });
