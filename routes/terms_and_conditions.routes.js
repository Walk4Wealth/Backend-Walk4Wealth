const router = require("express").Router();
const terms_and_conditions = require("../controllers/terms_and_conditions/terms_and_conditions.controller");
const validate = require("../utils/validatorIndex");
const isAuthenticate = require("../middlewares/authentication");

// router.get("/", vendor_product.getAllProducts);
// router.get("/:vendor_product_id", vendor_product.getOneProduct);

// router.use(isAuthenticate);
router.post("/", terms_and_conditions.createTermAndCondition);
// router.patch("/:vendor_product_id", vendor_product.updateProduct);
// router.delete("/:vendor_product_id", vendor_product.deleteProduct);

module.exports = router;
