'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vendor_product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Vendor_product.init({
    vendor_id: DataTypes.STRING,
    product_img: DataTypes.TEXT,
    points_required: DataTypes.INTEGER,
    expiration: DataTypes.DATEONLY,
    stock: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Vendor_product',
  });
  return Vendor_product;
};