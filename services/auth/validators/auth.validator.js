const { check } = require("express-validator");

const registerValidator = [
  check("nama")
    .exists()
    .withMessage("Must have nama")
    .bail()
    .notEmpty()
    .withMessage("Can not be empty")
    .bail()
    .isString()
    .withMessage("Must be string"),
  check("age")
    .exists()
    .withMessage("Must have age")
    .bail()
    .notEmpty()
    .withMessage("Can not be empty")
    .bail()
    .isNumeric()
    .withMessage("Must be integer"),
  check("no_telp")
    .exists()
    .withMessage("Must have no_telp")
    .bail()
    .notEmpty()
    .withMessage("Can not be empty")
    .bail()
    .isString()
    .withMessage("Must be string"),
];

module.exports = {
  registerValidator,
};
