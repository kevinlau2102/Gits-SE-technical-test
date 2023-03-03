const auth = require('./auth.controller');
const book = require('./book.controller');
const author = require('./author.controller');
const publisher = require('./publisher.controller');

module.exports = {
    auth,
    book,
    author,
    publisher
};