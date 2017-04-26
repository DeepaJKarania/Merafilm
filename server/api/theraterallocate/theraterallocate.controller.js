/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/theraterallocates              ->  index
 * POST    /api/theraterallocates              ->  create
 * GET     /api/theraterallocates/:id          ->  show
 * PUT     /api/theraterallocates/:id          ->  update
 * DELETE  /api/theraterallocates/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Theraterallocate from './theraterallocate.model';

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

// Gets a list of Theraterallocates
export function index(req, res) {
  return Theraterallocate.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Theraterallocate from the DB
export function show(req, res) {
  return Theraterallocate.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

//get a singal record on the bassis of movie name1

export function showmovie(req, res) {
  return Theraterallocate.find({m_id: req.params.m_id}).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Theraterallocate in the DB
export function create(req, res) {
  return Theraterallocate.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Theraterallocate in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return Theraterallocate.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Theraterallocate from the DB
export function destroy(req, res) {
  return Theraterallocate.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}


// export function destroy(req, res) {
//
//
//
//   return Theraterallocate.find({m_id: req.params.m_id}).exec()
//
//     .then(handleEntityNotFound(res))
//     .then(removeEntity(res))
//     .catch(handleError(res));
// }
