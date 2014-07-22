'use strict';

/**
 * @ngdoc service
 * @name walletApp.walletBill
 * @description
 * # walletBill
 * Factory in the walletApp.
 */
angular.module('walletApp')
  .factory('walletBill', function (localStorageService) {
    var bills = [];

    return {
      query: function() {
        bills = angular.fromJson(localStorageService.get('bills')) || [];
        return bills;
      },

      save: function(note) {
        note.created = new Date();
        bills.push(note); 
        localStorageService.add('bills', angular.toJson(bills));
      },

      reset: function() {
        localStorageService.clearAll();
        bills.length = 0;
      }
    };
  });
