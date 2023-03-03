const { Author, Book, Publisher } = require('../models');
// const schema = require('../validation_schema');
// const Validator = require('fastest-validator');
// const v = new Validator;

module.exports = {
    index: async (req, res, next) => {
        try {
            const authors = await Author.findAll();

            if (authors.length > 0) {
                res.status(200).json({
                    status: 'OK',
                    message: 'Get author success',
                    data: authors
                });
           } else {
              res.status(200).json({ 
                status: "OK",
                message: "No data", data: [] });
           }

        } catch (err) {
            return res.status(500).json({
                status: "ERROR",
                message: "There is something wrong when fetch authors"
            });
        }
    },

    create: async (req, res, next) => {
        try {
            const { name, age } = req.body;
            if (!name || !age) {
                return res.status(400).send({
                    status: "BAD REQUEST",
                    message: "Name and age cannot empty"
                });
            }

            const author = await Author.create({name, age});

            return res.status(201).json({
                status: "CREATED",
                message: "New author created",
                data: author
            });

        } catch (err) {
            return res.status(500).json({
                status: "ERROR",
                message: "There is something wrong when creating author"
            });
        }
    },

    update: async (req, res, next) => {
        try {
            const { id } = req.params;
            const { name, age } = req.body;

            const author = await Author.findOne({ where: { id: id } });
            if (!author) {
                return res.status(404).json({
                    status: 'NOT FOUND',
                    message: "Author not found",
                    data: null
                });
            }

            if (!name) name = author.name;
            if (!age) age = author.age;

            const updatedAuthor = await Author.update({
                name,
                age,
            }, {
                where: {
                    id: id
                }
            });

            return res.status(200).json({
                status: 'OK',
                message: 'Update Author successfully',
                data: updatedAuthor
            })
        } catch (err) {
            return res.status(500).json({
                status: "ERROR",
                message: "There is something wrong when updating author"
            });
        }
    },

    delete: async (req, res, next) => {
        try {
            const { id } = req.params;

            const author = await Author.findOne({
                where: {
                    id: id
                }
            });

            if (!author) {
                return res.status(404).json({
                    status: "NOT FOUND",
                    message: "Author not found",
                    data: null
                });
            }

            const deletedAuthor = await Author.destroy({
                where: {
                    id: id
                }
            });

            return res.status(200).json({
                status: 'OK',
                message: "Delete Author Successfully",
                data: deletedAuthor
            });
        } catch (err) {
            return res.status(500).json({
                status: "ERROR",
                message: "There is something wrong when deleting author"
            });
        }
    }
}