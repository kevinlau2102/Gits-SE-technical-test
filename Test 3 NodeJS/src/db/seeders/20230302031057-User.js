'use strict';

const bcrypt = require('bcrypt');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Users', [{
      name: 'Kevin Laurence',
      email: 'kevinlaurence@gmail.com',
      password: await bcrypt.hash('12345', 10),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Nicholas CH',
      email: 'nicholasch@gmail.com',
      password: await bcrypt.hash('12345', 10),
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
