'use strict';

var app = require('../..');
import request from 'supertest';

var newOmdbiendpoint;

describe('Omdbiendpoint API:', function() {

  describe('GET /api/omdbiendpoints', function() {
    var omdbiendpoints;

    beforeEach(function(done) {
      request(app)
        .get('/api/omdbiendpoints')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          omdbiendpoints = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(omdbiendpoints).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/omdbiendpoints', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/omdbiendpoints')
        .send({
          name: 'New Omdbiendpoint',
          info: 'This is the brand new omdbiendpoint!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newOmdbiendpoint = res.body;
          done();
        });
    });

    it('should respond with the newly created omdbiendpoint', function() {
      expect(newOmdbiendpoint.name).to.equal('New Omdbiendpoint');
      expect(newOmdbiendpoint.info).to.equal('This is the brand new omdbiendpoint!!!');
    });

  });

  describe('GET /api/omdbiendpoints/:id', function() {
    var omdbiendpoint;

    beforeEach(function(done) {
      request(app)
        .get('/api/omdbiendpoints/' + newOmdbiendpoint._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          omdbiendpoint = res.body;
          done();
        });
    });

    afterEach(function() {
      omdbiendpoint = {};
    });

    it('should respond with the requested omdbiendpoint', function() {
      expect(omdbiendpoint.name).to.equal('New Omdbiendpoint');
      expect(omdbiendpoint.info).to.equal('This is the brand new omdbiendpoint!!!');
    });

  });

  describe('PUT /api/omdbiendpoints/:id', function() {
    var updatedOmdbiendpoint;

    beforeEach(function(done) {
      request(app)
        .put('/api/omdbiendpoints/' + newOmdbiendpoint._id)
        .send({
          name: 'Updated Omdbiendpoint',
          info: 'This is the updated omdbiendpoint!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedOmdbiendpoint = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedOmdbiendpoint = {};
    });

    it('should respond with the updated omdbiendpoint', function() {
      expect(updatedOmdbiendpoint.name).to.equal('Updated Omdbiendpoint');
      expect(updatedOmdbiendpoint.info).to.equal('This is the updated omdbiendpoint!!!');
    });

  });

  describe('DELETE /api/omdbiendpoints/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/omdbiendpoints/' + newOmdbiendpoint._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when omdbiendpoint does not exist', function(done) {
      request(app)
        .delete('/api/omdbiendpoints/' + newOmdbiendpoint._id)
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
