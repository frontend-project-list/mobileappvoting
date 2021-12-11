'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

      await queryInterface.bulkInsert('positions', [{
        id: 1,
        name:'GUILD TO THE PRESIDENT',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        id: 2,
        name:'MINISTER OF INFORMATION',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        id: 3,
        name:'VICE PRESIDENT',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        id: 4,
        name:'MINISTER OF HEALTH',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: async (queryInterface, Sequelize) => {

     await queryInterface.bulkDelete('positions', null, {});
  }
};
