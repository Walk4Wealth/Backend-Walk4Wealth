const router = require("express").Router();
const responseHandler = require("../helpers/responseHandler");
const auth = require("./auth.routes");
const vendor = require("./vendor.routes");
const vendor_product = require("./vendor_product.routes");

router.get("/test", (req, res) => {
  return responseHandler.succes(res, "Test Route");
});

router.use("/auth", auth);
router.use("/vendor", vendor);
router.use("/product", vendor_product);

module.exports = router;
