'use strict';

describe('Component: OmdbiComponent', function () {

  // load the controller's module
  beforeEach(module('merafilmApp'));

  var OmdbiComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    OmdbiComponent = $componentController('omdbi', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
