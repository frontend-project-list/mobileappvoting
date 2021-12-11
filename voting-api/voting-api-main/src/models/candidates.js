'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class candidates extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            candidates.hasMany(models.votes, {
                foreignKey: 'candidateId',
                as: 'votesInfo'
            });

            candidates.belongsTo(models.positions, {
                foreignKey: 'positionId',
            });


            candidates.belongsTo(models.students, {
                foreignKey: 'studentId',
            });
        }
    };
    candidates.init({
        studentId: DataTypes.INTEGER,
        biography: DataTypes.STRING,
        positionId:DataTypes.INTEGER,
        status: DataTypes.STRING,
        photo: DataTypes.STRING,
        votes: DataTypes.INTEGER,
        ispublished: DataTypes.BOOLEAN,
    }, {
        sequelize,
        modelName: 'candidates',
    });
    return candidates;
};