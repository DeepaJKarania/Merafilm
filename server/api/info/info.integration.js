'use strict';

var app = require('../..');
import request from 'supertest';

var newInfo;

describe('Info API:', function() {

  describe('GET /api/infos', function() {
    var infos;

    beforeEach(function(done) {
      request(app)
        .get('/api/infos')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          infos = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(infos).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/infos', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/infos')
        .send({
          name: 'New Info',
          info: 'This is the brand new info!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newInfo = res.body;
          done();
        });
    });

    it('should respond with the newly created info', function() {
      expect(newInfo.name).to.equal('New Info');
      expect(newInfo.info).to.equal('This is the brand new info!!!');
    });

  });

  describe('GET /api/infos/:id', function() {
    var info;

    beforeEach(function(done) {
      request(app)
        .get('/api/infos/' + newInfo._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          info = res.body;
          done();
        });
    });

    afterEach(function() {
      info = {};
    });

    it('should respond with the requested info', function() {
      expect(info.name).to.equal('New Info');
      expect(info.info).to.equal('This is the brand new info!!!');
    });

  });

  describe('PUT /api/infos/:id', function() {
    var updatedInfo;

    beforeEach(function(done) {
      request(app)
        .put('/api/infos/' + newInfo._id)
        .send({
          name: 'Updated Info',
          info: 'This is the updated info!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedInfo = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedInfo = {};
    });

    it('should respond with the updated info', function() {
      expect(updatedInfo.name).to.equal('Updated Info');
      expect(updatedInfo.info).to.equal('This is the updated info!!!');
    });

  });

  describe('DELETE /api/infos/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/infos/' + newInfo._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when info does not exist', function(done) {
      request(app)
        .delete('/api/infos/' + newInfo._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
