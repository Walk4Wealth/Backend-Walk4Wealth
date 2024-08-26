const router = require("express").Router();
const vendor = require("../controllers/vendor/vendor.controller");
const validate = require("../utils/validatorIndex");
const {
  createVendor,
} = require("../services/vendor/validators/vendor.validator");
const isAuthenticate = require("../middlewares/authentication");

router.get("/", vendor.getAllVendor);
router.get("/:id_vendor", vendor.getOneVendor);

// router.use(isAuthenticate);
router.post("/", validate(createVendor), vendor.createVendor);
router.patch("/:id_vendor", vendor.updateVendor);
router.delete("/:id_vendor", vendor.deleteVendor);

module.exports = router;
