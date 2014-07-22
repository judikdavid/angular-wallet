'use strict';

describe('Directive: formatMoney', function () {

  // load the directive's module
  beforeEach(module('walletApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<format-money></format-money>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the formatMoney directive');
  }));
});
