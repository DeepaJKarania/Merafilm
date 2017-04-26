'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var omdbiendpointCtrlStub = {
  index: 'omdbiendpointCtrl.index',
  show: 'omdbiendpointCtrl.show',
  create: 'omdbiendpointCtrl.create',
  update: 'omdbiendpointCtrl.update',
  destroy: 'omdbiendpointCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var omdbiendpointIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './omdbiendpoint.controller': omdbiendpointCtrlStub
});

describe('Omdbiendpoint API Router:', function() {

  it('should return an express router instance', function() {
    expect(omdbiendpointIndex).to.equal(routerStub);
  });

  describe('GET /api/omdbiendpoints', function() {

    it('should route to omdbiendpoint.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'omdbiendpointCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/omdbiendpoints/:id', function() {

    it('should route to omdbiendpoint.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'omdbiendpointCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/omdbiendpoints', function() {

    it('should route to omdbiendpoint.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'omdbiendpointCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/omdbiendpoints/:id', function() {

    it('should route to omdbiendpoint.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'omdbiendpointCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/omdbiendpoints/:id', function() {

    it('should route to omdbiendpoint.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'omdbiendpointCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/omdbiendpoints/:id', function() {

    it('should route to omdbiendpoint.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'omdbiendpointCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
