const { check } = require("express-validator");

const createProductVendor = [
  check("vendor_id")
    .exists()
    .withMessage("Must have vendor_id")
    .bail()
    .notEmpty()
    .withMessage("Can not be empty")
    .bail()
    .isNumeric()
    .withMessage("Must be integer"),
  check("points_required")
    .exists()
    .withMessage("Must have points_required")
    .bail()
    .notEmpty()
    .withMessage("Can not be empty")
    .bail()
    .isNumeric()
    .withMessage("Must be integer"),
  check("expiration")
    .exists()
    .withMessage("Must have expiration")
    .bail()
    .notEmpty()
    .withMessage("Can not be empty")
    .bail()
    .isString()
    .withMessage("Must be string/date"),
  check("stock")
    .exists()
    .withMessage("Must have stock")
    .bail()
    .notEmpty()
    .withMessage("Can not be empty")
    .bail()
    .isNumeric()
    .withMessage("Must be integer"),
  check("status")
    .exists()
    .withMessage("Must have status")
    .bail()
    .notEmpty()
    .withMessage("Can not be empty")
    .bail()
    .isString()
    .withMessage("Must be string"),
];

module.exports = {
  createProductVendor,
};
