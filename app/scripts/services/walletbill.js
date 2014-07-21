'use strict';

/**
 * @ngdoc service
 * @name walletApp.walletBill
 * @description
 * # walletBill
 * Factory in the walletApp.
 */
angular.module('walletApp')
  .factory('walletBill', function () {

    return {
      query: function () {
        var bills = ['bill1', 'bill2'];
        return bills;
      }
    };
  });
