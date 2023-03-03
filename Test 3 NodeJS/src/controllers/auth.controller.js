const bcrypt = require('bcrypt');
const { User } = require('../models');

module.exports = {
    register: async (req, res, next) => {
        try {
            const { name, email, password } = req.body;

            const exist = await User.findOne({ where: { email: email } });

            if (exist) {
                return res.status(400).json({
                    status: 'BAD REQUEST',
                    message: 'User Already Exist',
                    data: null
                });
            }

            const bcryptPass = await bcrypt.hash(password, 10);

            const newUser = await User.create({
                name,
                email,
                password: bcryptPass,
            });

            return res.status(201).json({
                status: 'CREATED',
                message: 'User Registered',
                data: newUser
            });
        } catch (err) {
            next(err);
        }
    },

    login: async (req, res, next) => {
        try {
            const user = await User.authenticate(req.body);
            const loginToken = user.generateToken();

            return res.status(200).json({
                status: 'OK',
                message: 'Login Success',
                data: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    token: loginToken
                }
            });
        } catch (err) {
            next(err);
        }
    },

}