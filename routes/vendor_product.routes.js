const router = require("express").Router();
const vendor_product = require("../controllers/vendor_product/vendor_product.controller");
const validate = require("../utils/validatorIndex");
const {
  createProductVendor,
} = require("../services/vendor_product/validators/vendor_product.validator");
const isAuthenticate = require("../middlewares/authentication");

router.get("/", vendor_product.getAllProducts);
router.get("/:vendor_product_id", vendor_product.getOneProduct);

router.use(isAuthenticate);
router.post("/", validate(createProductVendor), vendor_product.createProduct);
router.patch("/:vendor_product_id", vendor_product.updateProduct);
router.delete("/:vendor_product_id", vendor_product.deleteProduct);

module.exports = router;
