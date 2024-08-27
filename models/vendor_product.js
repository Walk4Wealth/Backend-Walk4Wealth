"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Vendor_product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Vendor_product.belongsTo(models.Vendor, {
        foreignKey: "vendor_id",
        as: "vendor",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });

      Vendor_product.hasMany(models.Vendor_product_detail, {
        foreignKey: "vendor_product_id",
        as: "term_and_conditions",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  Vendor_product.init(
    {
      vendor_id: DataTypes.STRING,
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      product_img: DataTypes.TEXT,
      points_required: DataTypes.INTEGER,
      expiration: DataTypes.DATEONLY,
      stock: DataTypes.INTEGER,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Vendor_product",
    }
  );
  return Vendor_product;
};
