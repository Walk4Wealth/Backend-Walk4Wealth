const router = require("express").Router();
const transaction = require("../controllers/transaction/transaction.controller");
const validate = require("../utils/validatorIndex");
const {
  createTransaction,
} = require("../services/transaction/validators/transaction.validator");
const isAuthenticate = require("../middlewares/authentication");

router.use(isAuthenticate);
router.post("/", validate(createTransaction), transaction.createTransaction);

module.exports = router;
