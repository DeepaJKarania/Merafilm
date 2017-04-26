'use strict';

describe('Component: UsermovieComponent', function () {

  // load the controller's module
  beforeEach(module('merafilmApp'));

  var UsermovieComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    UsermovieComponent = $componentController('usermovie', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
