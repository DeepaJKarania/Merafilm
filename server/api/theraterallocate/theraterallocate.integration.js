'use strict';

var app = require('../..');
import request from 'supertest';

var newTheraterallocate;

describe('Theraterallocate API:', function() {

  describe('GET /api/theraterallocates', function() {
    var theraterallocates;

    beforeEach(function(done) {
      request(app)
        .get('/api/theraterallocates')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          theraterallocates = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(theraterallocates).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/theraterallocates', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/theraterallocates')
        .send({
          name: 'New Theraterallocate',
          info: 'This is the brand new theraterallocate!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newTheraterallocate = res.body;
          done();
        });
    });

    it('should respond with the newly created theraterallocate', function() {
      expect(newTheraterallocate.name).to.equal('New Theraterallocate');
      expect(newTheraterallocate.info).to.equal('This is the brand new theraterallocate!!!');
    });

  });

  describe('GET /api/theraterallocates/:id', function() {
    var theraterallocate;

    beforeEach(function(done) {
      request(app)
        .get('/api/theraterallocates/' + newTheraterallocate._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          theraterallocate = res.body;
          done();
        });
    });

    afterEach(function() {
      theraterallocate = {};
    });

    it('should respond with the requested theraterallocate', function() {
      expect(theraterallocate.name).to.equal('New Theraterallocate');
      expect(theraterallocate.info).to.equal('This is the brand new theraterallocate!!!');
    });

  });

  describe('PUT /api/theraterallocates/:id', function() {
    var updatedTheraterallocate;

    beforeEach(function(done) {
      request(app)
        .put('/api/theraterallocates/' + newTheraterallocate._id)
        .send({
          name: 'Updated Theraterallocate',
          info: 'This is the updated theraterallocate!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedTheraterallocate = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedTheraterallocate = {};
    });

    it('should respond with the updated theraterallocate', function() {
      expect(updatedTheraterallocate.name).to.equal('Updated Theraterallocate');
      expect(updatedTheraterallocate.info).to.equal('This is the updated theraterallocate!!!');
    });

  });

  describe('DELETE /api/theraterallocates/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/theraterallocates/' + newTheraterallocate._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when theraterallocate does not exist', function(done) {
      request(app)
        .delete('/api/theraterallocates/' + newTheraterallocate._id)
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
