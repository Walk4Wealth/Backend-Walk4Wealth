"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Vendor_product_detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Vendor_product_detail.belongsTo(models.Vendor_product, {
        foreignKey: "vendor_product_id",
        as: "vendor_product",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  Vendor_product_detail.init(
    {
      vendor_product_id: DataTypes.INTEGER,
      number: DataTypes.INTEGER,
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Vendor_product_detail",
    }
  );
  return Vendor_product_detail;
};
