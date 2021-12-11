'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('candidates', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      studentId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'students',
          key: 'id',
      },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      biography: {
        type: Sequelize.STRING
      },
      positionId: {
        type: Sequelize.INTEGER,
        references: {
            model: 'positions',
            key: 'id',
        },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
      },
      status: {
        type: Sequelize.STRING,
      },
      photo: {
        type: Sequelize.STRING
      },
      votes:{
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('candidates');
  }
};