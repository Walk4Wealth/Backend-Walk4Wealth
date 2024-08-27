const { check } = require("express-validator");

const createProductVendor = [
  check("name")
    .exists()
    .withMessage("Must have name")
    .bail()
    .notEmpty()
    .withMessage("Can not be empty")
    .bail()
    .isString()
    .withMessage("Must be string"),
  check("description")
    .exists()
    .withMessage("Must have description")
    .bail()
    .notEmpty()
    .withMessage("Can not be empty")
    .bail()
    .isString()
    .withMessage("Must be string/text"),
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
];

module.exports = {
  createProductVendor,
};
