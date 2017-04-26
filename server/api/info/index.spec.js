'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var infoCtrlStub = {
  index: 'infoCtrl.index',
  show: 'infoCtrl.show',
  create: 'infoCtrl.create',
  update: 'infoCtrl.update',
  destroy: 'infoCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var infoIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './info.controller': infoCtrlStub
});

describe('Info API Router:', function() {

  it('should return an express router instance', function() {
    expect(infoIndex).to.equal(routerStub);
  });

  describe('GET /api/infos', function() {

    it('should route to info.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'infoCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/infos/:id', function() {

    it('should route to info.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'infoCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/infos', function() {

    it('should route to info.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'infoCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/infos/:id', function() {

    it('should route to info.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'infoCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/infos/:id', function() {

    it('should route to info.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'infoCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/infos/:id', function() {

    it('should route to info.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'infoCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
