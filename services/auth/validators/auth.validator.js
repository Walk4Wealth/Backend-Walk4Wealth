const { check } = require("express-validator");

const registerValidator = [
  check("username")
    .exists()
    .withMessage("Must have username")
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
