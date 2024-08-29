const router = require("express").Router();
const vendor = require("../controllers/vendor/vendor.controller");
const validate = require("../utils/validatorIndex");
const {
  createVendor,
} = require("../services/vendor/validators/vendor.validator");
const isAuthenticate = require("../middlewares/authentication");
const { hasRole } = require("../middlewares/roleAuth");
const { ROLE } = require("../utils/constanta");

router.get("/", vendor.getAllVendor);
router.get("/:id_vendor", vendor.getOneVendor);

router.use(isAuthenticate);
router.use(hasRole([ROLE.ADMIN, ROLE.SUPER_ADMIN]));
router.post("/", validate(createVendor), vendor.createVendor);
router.patch("/:id_vendor", vendor.updateVendor);
router.delete("/:id_vendor", vendor.deleteVendor);

module.exports = router;
