'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class votes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      votes.belongsTo(models.students, {
        foreignKey: 'voterId',
      });
      votes.belongsTo(models.candidates, {
        foreignKey: 'candidateId',
      });
      votes.belongsTo(models.positions, {
        foreignKey: 'positionId',
      });
    }
  };
  votes.init({
    voterId: DataTypes.INTEGER,
    candidateId: DataTypes.INTEGER,
    positionId: DataTypes.INTEGER,
    ispublished: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'votes',
  });
  return votes;
};