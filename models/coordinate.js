"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Coordinate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Coordinate.belongsTo(models.User_activity, {
        foreignKey: "user_activity_id",
        as: "user_activity",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  Coordinate.init(
    {
      user_activity_id: DataTypes.STRING,
      lat: DataTypes.STRING,
      long: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Coordinate",
    }
  );
  return Coordinate;
};
