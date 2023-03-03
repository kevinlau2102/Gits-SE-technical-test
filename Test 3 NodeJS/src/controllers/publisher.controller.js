const { Publisher, Book, Author } = require('../models');
// const schema = require('../validation_schema');
// const Validator = require('fastest-validator');
// const v = new Validator;

module.exports = {
    index: async (req, res, next) => {
        try {
            const publishers = await Publisher.findAll();

            if (publishers.length > 0) {
                res.status(200).json({
                    status: 'OK',
                    message: 'Get publisher success',
                    data: publishers
                });
           } else {
              res.status(200).json({ 
                status: "OK",
                message: "No data", data: [] });
           }

        } catch (err) {
            return res.status(500).json({
                status: "ERROR",
                message: "There is something wrong when fetch publishers"
            });
        }
    },

    create: async (req, res, next) => {
        try {
            const { name, city } = req.body;
            if (!name || !city) {
                return res.status(400).send({
                    status: "BAD REQUEST",
                    message: "Name and city cannot empty"
                });
            }

            const publisher = await Publisher.create({name, city});

            return res.status(201).json({
                status: "CREATED",
                message: "New publisher created",
                data: publisher
            });

        } catch (err) {
            return res.status(500).json({
                status: "ERROR",
                message: "There is something wrong when creating publisher"
            });
        }
    },

    update: async (req, res, next) => {
        try {
            const { id } = req.params;
            const { name, city } = req.body;

            const publisher = await Publisher.findOne({ where: { id: id } });
            if (!publisher) {
                return res.status(404).json({
                    status: 'NOT FOUND',
                    message: "Publisher not found",
                    data: null
                });
            }

            if (!name) name = publisher.name;
            if (!city) city = publisher.city;

            const updatedPublisher = await Publisher.update({
                name,
                city,
            }, {
                where: {
                    id: id
                }
            });

            return res.status(200).json({
                status: 'OK',
                message: 'Update Publisher successfully',
                data: updatedPublisher
            })
        } catch (err) {
            return res.status(500).json({
                status: "ERROR",
                message: "There is something wrong when updating publisher"
            });
        }
    },

    delete: async (req, res, next) => {
        try {
            const { id } = req.params;

            const publisher = await Publisher.findOne({
                where: {
                    id: id
                }
            });

            if (!publisher) {
                return res.status(404).json({
                    status: "NOT FOUND",
                    message: "Publisher not found",
                    data: null
                });
            }

            const deletedPublisher = await Publisher.destroy({
                where: {
                    id: id
                }
            });

            return res.status(200).json({
                status: 'OK',
                message: "Delete Publisher Successfully",
                data: deletedPublisher
            });
        } catch (err) {
            return res.status(500).json({
                status: "ERROR",
                message: "There is something wrong when deleting publisher"
            });
        }
    }
}