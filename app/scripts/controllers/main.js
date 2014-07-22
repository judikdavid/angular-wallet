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

    $scope.currencies = [
      {'symbol': '$', 'name': 'dollar'},
      {'symbol': '€', 'name': 'euro'},
      {'symbol': '£', 'name': 'gbp'},
    ];
    
    $scope.currentCurrency = $scope.currencies[0];

    function init() {
      $scope.bills = walletBill.query();
      $scope.note = '';
    }
    
    function getTotal() {
      return $scope.bills.reduce(function(sum, bill) {
        return sum + bill.note;
      }, 0);
    }

    $scope.addBill = function() {
      var note = parseFloat($scope.note);

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
