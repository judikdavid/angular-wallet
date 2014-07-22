'use strict';

/**
 * @ngdoc service
 * @name walletApp.currency
 * @description
 * # currency
 * Factory in the walletApp.
 */
angular.module('walletApp')
  .factory('currency', function (localStorageService) {
    var currencies = [
      {'symbol': '$', 'name': 'dollar'},
      {'symbol': '€', 'name': 'euro'},
      {'symbol': '£', 'name': 'gbp'},
    ];
    
    return {
      query: function () {
        return currencies;
      },
      getCurrent: function () {
        var name = localStorageService.get('currency');
        var storedIndex = 0;

        if (name === undefined) {
          return currencies[0];
        }
        currencies.some(function(element, index) {
          if (element.name === name) {
            storedIndex = index;
          }
        });

        return currencies[storedIndex];
      },
      setCurrency: function (currency) {
        localStorageService.add('currency', currency.name);
      }
    };
  });
