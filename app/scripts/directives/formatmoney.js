'use strict';

/**
 * @ngdoc directive
 * @name walletApp.directive:formatMoney
 * @description
 * # formatMoney
 */
angular.module('walletApp')
  .directive('formatMoney', function () {
    return {
      template: '<span>{{currentCurrency.symbol}}{{money}}</span> <i>{{type}}</i>',
      restrict: 'AE',
      scope: true,
      link: function postLink(scope, element, attrs) {
        scope.$watch(attrs.formatMoney, function(number) {
          scope.money = Math.abs(number);
          scope.type = number > 0 ? 'earn' : 'spent';
        });
      }
    };
  });
