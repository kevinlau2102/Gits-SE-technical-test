const express = require('express');
const router = express.Router();
const c = require('../controllers');
// const authorize = require('../middleware/authorize');
// const roles = require('../utils/user_role');

// get all books data
router.get('/', c.book.index);

// create book data
router.post('/', c.book.create);

// // update book data
router.put('/:id', c.book.update)

// // delete book data
router.delete('/:id', c.book.delete)

module.exports = router;