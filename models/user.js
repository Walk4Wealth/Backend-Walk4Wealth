'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    email: DataTypes.STRING,
    nama: DataTypes.STRING,
    profile_img: DataTypes.TEXT,
    password: DataTypes.STRING,
    age: DataTypes.INTEGER,
    no_telp: DataTypes.STRING,
    role: DataTypes.STRING,
    total_points: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};