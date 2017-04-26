'use strict';

var express = require('express');
var controller = require('./rating.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:movie', controller.showrating);
router.post('/', controller.create);
router.put('/:id', controller.upsert);
router.patch('/:id', controller.patch);
router.delete('/:movie', controller.destroy);

module.exports = router;
