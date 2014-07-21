'use strict';

describe('Service: walletBill', function () {

  // load the service's module
  beforeEach(module('walletApp'));

  // instantiate service
  var walletBill;
  beforeEach(inject(function (_walletBill_) {
    walletBill = _walletBill_;
  }));

  it('should do something', function () {
    expect(!!walletBill).toBe(true);
  });

});
