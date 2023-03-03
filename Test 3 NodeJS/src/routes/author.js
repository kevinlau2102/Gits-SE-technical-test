const express = require('express');
const router = express.Router();
const c = require('../controllers');
// const authorize = require('../middleware/authorize');
// const roles = require('../utils/user_role');

// get all authors data
router.get('/', c.author.index);

// create author data
router.post('/', c.author.create);

// // update author data
router.put('/:id', c.author.update)

// // delete author data
router.delete('/:id', c.author.delete)

module.exports = router;