"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Vendor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Vendor.hasMany(models.Vendor_product, {
        foreignKey: "vendor_id",
        as: "vendor_product",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  Vendor.init(
    {
      name: DataTypes.STRING,
      logo_url: DataTypes.TEXT,
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Vendor",
    }
  );
  return Vendor;
};
