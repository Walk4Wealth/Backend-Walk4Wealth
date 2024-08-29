const router = require("express").Router();
const transaction = require("../controllers/transaction/transaction.controller");
const validate = require("../utils/validatorIndex");
const {
  createTransaction,
} = require("../services/transaction/validators/transaction.validator");
const isAuthenticate = require("../middlewares/authentication");
const { hasRole } = require("../middlewares/roleAuth");
const { ROLE } = require("../utils/constanta");

router.use(isAuthenticate);
router.use(
  hasRole([ROLE.ADMIN, ROLE.SUPER_ADMIN, ROLE.USER_BASIC, ROLE.USER_PREMIUM])
);
router.post("/", validate(createTransaction), transaction.createTransaction);
router.get("/:id_transaction", transaction.getOneTransaction);
router.get("/history", transaction.getAllByUserTransaction);
router.get("/", transaction.getAllTransactions);
module.exports = router;
