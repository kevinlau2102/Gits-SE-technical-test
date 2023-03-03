'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Books', [{
      isbn: '978-979-794-651-7',
      title: 'Jagat Lingga Erlangga',
      author_id : 1,
      publisher_id : 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      isbn: '978-623-5512-61-7',
      title: 'Erlangga bad fiance',
      author_id : 2,
      publisher_id : 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      isbn: '978-123-4567-89-0',
      title: 'Dummy Book ',
      author_id : 1,
      publisher_id : 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
