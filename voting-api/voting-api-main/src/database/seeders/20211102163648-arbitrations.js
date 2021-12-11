'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

      await queryInterface.bulkInsert('arbitrations', [{
        email:'admin@admin.com',
        password:'password',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: async (queryInterface, Sequelize) => {

     await queryInterface.bulkDelete('arbitrations', null, {});
  }
};
