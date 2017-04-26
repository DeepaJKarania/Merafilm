'use strict';

describe('Component: InfoComponent', function () {

  // load the controller's module
  beforeEach(module('merafilmApp'));

  var InfoComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    InfoComponent = $componentController('info', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
