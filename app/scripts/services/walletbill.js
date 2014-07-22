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

    var bills = [{'note': 12}, {'note': 2}];

    return {
      query: function() {
        return bills;
      },

      save: function(note) {
        note.created = new Date();
        bills.push(note); 
      },

      reset: function() {
        bills.length = 0;
      }
    };
  });
