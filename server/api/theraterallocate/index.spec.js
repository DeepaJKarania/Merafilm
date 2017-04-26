'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var theraterallocateCtrlStub = {
  index: 'theraterallocateCtrl.index',
  show: 'theraterallocateCtrl.show',
  create: 'theraterallocateCtrl.create',
  update: 'theraterallocateCtrl.update',
  destroy: 'theraterallocateCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var theraterallocateIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './theraterallocate.controller': theraterallocateCtrlStub
});

describe('Theraterallocate API Router:', function() {

  it('should return an express router instance', function() {
    expect(theraterallocateIndex).to.equal(routerStub);
  });

  describe('GET /api/theraterallocates', function() {

    it('should route to theraterallocate.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'theraterallocateCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/theraterallocates/:id', function() {

    it('should route to theraterallocate.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'theraterallocateCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/theraterallocates', function() {

    it('should route to theraterallocate.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'theraterallocateCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/theraterallocates/:id', function() {

    it('should route to theraterallocate.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'theraterallocateCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/theraterallocates/:id', function() {

    it('should route to theraterallocate.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'theraterallocateCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/theraterallocates/:id', function() {

    it('should route to theraterallocate.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'theraterallocateCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
