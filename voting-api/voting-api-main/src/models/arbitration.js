'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class arbitration extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  arbitration.init({
    email: DataTypes.STRING,
    f_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    l_name: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    regID: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'arbitration',
  });
  return arbitration;
};