'use strict';

describe('Service: currency', function () {

  // load the service's module
  beforeEach(module('walletApp'));

  // instantiate service
  var currency;
  beforeEach(inject(function (_currency_) {
    currency = _currency_;
  }));

  it('should do something', function () {
    expect(!!currency).toBe(true);
  });

});
