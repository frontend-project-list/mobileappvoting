module.exports = {
  up: (queryInterface, Sequelize) => Promise.all([
    queryInterface.addColumn('votes', 'positionId', {
      type: Sequelize.INTEGER,
      allowNull: true
    }),
  ]),

  down: (queryInterface, Sequelize) => Promise.all([queryInterface.removeColumn('votes', 'positionId')]),
};