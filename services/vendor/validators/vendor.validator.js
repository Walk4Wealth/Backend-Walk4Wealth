const { check } = require("express-validator");

const createVendor = [
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
];

module.exports = {
  createVendor,
};
