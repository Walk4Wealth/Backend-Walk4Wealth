const router = require("express").Router();
const responseHandler = require("../helpers/responseHandler");
const auth = require("./auth.routes");
const vendor = require("./vendor.routes");
const vendor_product = require("./vendor_product.routes");
const terms_and_conditions = require("./terms_and_conditions.routes");
const transaction = require("./transaction.routes");

router.get("/test", (req, res) => {
  return responseHandler.succes(res, "Test Route");
});

router.use("/auth", auth);
router.use("/vendor", vendor);
router.use("/product", vendor_product);
router.use("/terms-and-conditions", terms_and_conditions);
router.use("/transaction", transaction);

module.exports = router;
