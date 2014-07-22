'use strict';

/**
 * @ngdoc function
 * @name walletApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the walletApp
 */
angular.module('walletApp')
  .controller('MainCtrl', function ($scope, $modal, walletBill, currency) {

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

    $scope.viewSource = function() {
      var innerHTML = ('<!DOCTYPE html>\n<html>\n' + document.documentElement.innerHTML + '\n</html>').replace(/[<>]/g, function (m) 
          { return {'<':'&lt;','>':'&gt;'}[m];});
      $modal.open({
        template: '<pre>' + innerHTML + '</pre>'
      });
    };

    init();
  });
