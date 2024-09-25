const { check } = require("express-validator");

const createUserActivity = [
  check("activity_id")
    .exists()
    .withMessage("Must have activity_id")
    .bail()
    .notEmpty()
    .withMessage("Can not be empty")
    .bail()
    .isNumeric()
    .withMessage("Must be integer"),
  check("duration_seconds")
    .exists()
    .withMessage("Must have duration_seconds")
    .bail()
    .notEmpty()
    .withMessage("Can not be empty")
    .bail()
    .isNumeric()
    .withMessage("Must be integer"),
  check("mileage")
    .exists()
    .withMessage("Must have mileage")
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
