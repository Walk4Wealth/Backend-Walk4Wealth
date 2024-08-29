const router = require("express").Router();
const vendor_product = require("../controllers/vendor_product/vendor_product.controller");
const validate = require("../utils/validatorIndex");
const {
  createProductVendor,
} = require("../services/vendor_product/validators/vendor_product.validator");
const isAuthenticate = require("../middlewares/authentication");
const { hasRole } = require("../middlewares/roleAuth");
const { ROLE } = require("../utils/constanta");

router.get("/", vendor_product.getAllProducts);
router.get("/:vendor_product_id", vendor_product.getOneProduct);

router.use(isAuthenticate);
router.use(hasRole([ROLE.VENDOR]));
router.post("/", validate(createProductVendor), vendor_product.createProduct);
router.patch("/:vendor_product_id", vendor_product.updateProduct);
router.delete("/:vendor_product_id", vendor_product.deleteProduct);

module.exports = router;
