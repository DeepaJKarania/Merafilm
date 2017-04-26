/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/omdbiendpoints              ->  index
 * POST    /api/omdbiendpoints              ->  create
 * GET     /api/omdbiendpoints/:id          ->  show
 * PUT     /api/omdbiendpoints/:id          ->  update
 * DELETE  /api/omdbiendpoints/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Omdbiendpoint from './omdbiendpoint.model';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.save()
      .then(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.remove()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Omdbiendpoints
export function index(req, res) {
  return Omdbiendpoint.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}




// Gets a single Omdbiendpoint from the DB
export function show(req, res) {
  // return Omdbiendpoint.findById(req.params.id).exec()
  //   .then(handleEntityNotFound(res))
  //   .then(respondWithResult(res))
  //   .catch(handleError(res));

  // http://www.omdbapi.com/?t=fan&y=2016

return $http.get('http://www.omdbapi.com/?t=fan&y=2016');
}

// Creates a new Omdbiendpoint in the DB
export function create(req, res) {
  return Omdbiendpoint.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Omdbiendpoint in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return Omdbiendpoint.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

export function showmovie(req, res) {
  return Omdbiendpoint.find({title:req.params.title}).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}


// Deletes a Omdbiendpoint from the DB
export function destroy(req, res) {
  return Omdbiendpoint.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
