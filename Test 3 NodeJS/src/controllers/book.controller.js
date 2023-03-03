const { Book, Author, Publisher } = require('../models');
// const schema = require('../validation_schema');
// const Validator = require('fastest-validator');
// const v = new Validator;

module.exports = {
    index: async (req, res, next) => {
        try {
            const books = await Book.findAll();

            if (books.length > 0) {
                res.status(200).json({
                    status: 'OK',
                    message: 'Get books success',
                    data: books
                });
           } else {
              res.status(200).json({ 
                status: "OK",
                message: "No data", data: [] });
           }

        } catch (err) {
            return res.status(500).json({
                status: "ERROR",
                message: "There is something wrong when fetch books"
            });
        }
    },

    create: async (req, res, next) => {
        try {
            const { isbn, title, author_id, publisher_id } = req.body;
            if (!isbn || !title || !author_id || !publisher_id) {
                return res.status(400).send({
                    status: "BAD REQUEST",
                    message: "ISBN, Title, ID Author, and ID Publisher cannot empty"
                });
            }

            const book = await Book.create({isbn, title, author_id, publisher_id});

            return res.status(201).json({
                status: "OK",
                message: "New book created",
                data: book
            });

        } catch (err) {
            return res.status(500).json({
                status: "ERROR",
                message: "There is something wrong when creating book"
            });
        }
    },

    update: async (req, res, next) => {
        try {
            const { id } = req.params;
            const { isbn, title, author_id, publisher_id } = req.body;

            const book = await Book.findOne({ where: { id: id } });
            if (!book) {
                return res.status(404).json({
                    status: 'NOT FOUND',
                    message: "Book not found",
                    data: null
                });
            }

            if (!isbn) isbn = book.isbn;
            if (!title) title = book.title;
            if (!author_id) author_id = book.author_id;
            if (!publisher_id) publisher_id = book.publisher_id;

            const updatedBook = await Book.update({
                isbn, title, author_id, publisher_id,
            }, {
                where: {
                    id: id
                }
            });

            return res.status(200).json({
                status: 'OK',
                message: 'Update Book successfully',
                data: updatedBook
            })
        } catch (err) {
            return res.status(500).json({
                status: "ERROR",
                message: "There is something wrong when updating book"
            });
        }
    },

    delete: async (req, res, next) => {
        try {
            const { id } = req.params;

            const book = await Book.findOne({
                where: {
                    id: id
                }
            });

            if (!book) {
                return res.status(404).json({
                    status: "NOT FOUND",
                    message: "Book not found",
                    data: null
                });
            }

            const deletedBook = await Book.destroy({
                where: {
                    id: id
                }
            });

            return res.status(200).json({
                status: 'OK',
                message: "Delete Book Successfully",
                data: deletedBook
            });
        } catch (err) {
            return res.status(500).json({
                status: "ERROR",
                message: "There is something wrong when deleting book"
            });
        }
    }
}