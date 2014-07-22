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
      setTotal();
    }
    
    $scope.addBill = function() {
      walletBill.save({
        note: $scope.note
      });

      init();
    };

    function setTotal() {
      console.log('alma');
      $scope.total = $scope.bills.reduce(function(sum, bill) {
        console.log(bill, sum);
        return sum + bill.note;
      }, 0);
    }

    init();
  });
