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
      // define association here
    }
  }
  User_activity.init(
    {
      user_id: DataTypes.INTEGER,
      activity_id: DataTypes.INTEGER,
      steps: DataTypes.INTEGER,
      duration_miutes: DataTypes.INTEGER,
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
