"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User_activity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User_activity.belongsTo(models.Activity, {
        foreignKey: "activity_id",
        as: "activity",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });

      User_activity.belongsTo(models.User, {
        foreignKey: "user_id",
        as: "user",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  User_activity.init(
    {
      user_id: DataTypes.INTEGER,
      activity_id: DataTypes.INTEGER,
      steps: DataTypes.INTEGER,
      distanceKm: DataTypes.FLOAT,
      duration_minutes: DataTypes.INTEGER,
      points_earned: DataTypes.INTEGER,
      calories_burn: DataTypes.INTEGER,
      timestamp: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "User_activity",
    }
  );
  return User_activity;
};
