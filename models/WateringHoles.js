const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class WateringHole extends Model {}

WateringHole.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    watering_hole_score: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        max: 10,
        min: 0
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'WateringHole',
  }
);

module.exports = WateringHole;
