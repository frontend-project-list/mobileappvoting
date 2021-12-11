'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class positions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      positions.hasMany(models.candidates, {
        foreignKey: 'positionId',
      });
      positions.hasMany(models.votes, {
        foreignKey: 'positionId',
      });
    }
  };
  positions.init({
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'positions',
  });
  return positions;
};