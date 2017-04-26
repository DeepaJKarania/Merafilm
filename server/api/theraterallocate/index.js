'use strict';

var express = require('express');
var controller = require('./theraterallocate.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:m_id', controller.showmovie);


//router.get('/:title', controller.showmovie);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);
// router.delete('/:m_id', controller.destroy);

module.exports = router;
