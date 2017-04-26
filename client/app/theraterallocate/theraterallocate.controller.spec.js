'use strict';

describe('Component: TheraterallocateComponent', function () {

  // load the controller's module
  beforeEach(module('merafilmApp'));

  var TheraterallocateComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    TheraterallocateComponent = $componentController('theraterallocate', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
