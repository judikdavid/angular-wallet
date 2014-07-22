'use strict';

/**
 * @ngdoc function
 * @name walletApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the walletApp
 */
angular.module('walletApp')
  .controller('MainCtrl', function ($scope, walletBill, currency) {

    $scope.currencies = currency.query();
    
    $scope.currentCurrency = currency.getCurrent();

    function init() {
      $scope.bills = walletBill.query();
      $scope.isSpent = false;
      $scope.note = '';
    }
    
    function getTotal() {
      return $scope.bills.reduce(function(sum, bill) {
        return sum + bill.note;
      }, 0);
    }

    $scope.setCurrency = function() {
      currency.setCurrency($scope.currentCurrency);
    };

    $scope.addBill = function() {
      var note = parseFloat($scope.note);
      note = $scope.isSpent ? -note : note;

      walletBill.save({
        note: note
      });

      init();
    };

    $scope.reset = function() {
      walletBill.reset();
      init();
    };

    $scope.$watch('bills', function() {
      $scope.total = getTotal();
    }, true);

    init();
  });
