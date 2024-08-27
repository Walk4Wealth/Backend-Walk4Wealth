// user_id, vendor_product_id;

const { check } = require("express-validator");

const createTransaction = [
  check("user_id")
    .exists()
    .withMessage("Must have user_id")
    .bail()
    .notEmpty()
    .withMessage("Can not be empty")
    .bail()
    .isNumeric()
    .withMessage("Must be integer"),
  check("vendor_product_id")
    .exists()
    .withMessage("Must have vendor_product_id")
    .bail()
    .notEmpty()
    .withMessage("Can not be empty")
    .bail()
    .isNumeric()
    .withMessage("Must be integer"),
];

module.exports = {
  createTransaction,
};
