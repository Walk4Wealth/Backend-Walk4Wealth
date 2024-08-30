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
];

module.exports = {
  registerValidator,
};
