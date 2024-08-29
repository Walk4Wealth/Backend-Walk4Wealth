const { check } = require("express-validator");

const createUserActivity = [
  check("user_id")
    .exists()
    .withMessage("Must have user_id")
    .bail()
    .notEmpty()
    .withMessage("Can not be empty")
    .bail()
    .isNumeric()
    .withMessage("Must be integer"),
  check("activity_id")
    .exists()
    .withMessage("Must have activity_id")
    .bail()
    .notEmpty()
    .withMessage("Can not be empty")
    .bail()
    .isNumeric()
    .withMessage("Must be integer"),
  check("duration_minutes")
    .exists()
    .withMessage("Must have duration_minutes")
    .bail()
    .notEmpty()
    .withMessage("Can not be empty")
    .bail()
    .isNumeric()
    .withMessage("Must be integer"),
];

module.exports = {
  createUserActivity,
};
