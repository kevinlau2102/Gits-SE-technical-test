const express = require('express');
const router = express.Router();
const c = require('../controllers');
// const authorize = require('../middleware/authorize');
// const roles = require('../utils/user_role');

// get all publisher data
router.get('/', c.publisher.index);

// create publisher data
router.post('/', c.publisher.create);

// // update publisher data
router.put('/:id', c.publisher.update)

// // delete publisher data
router.delete('/:id', c.publisher.delete)

module.exports = router;