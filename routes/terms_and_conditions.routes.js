const router = require("express").Router();
const terms_and_conditions = require("../controllers/terms_and_conditions/terms_and_conditions.controller");
const isAuthenticate = require("../middlewares/authentication");
const { hasRole } = require("../middlewares/roleAuth");
const { ROLE } = require("../utils/constanta");

router.use(isAuthenticate);
router.use(hasRole([ROLE.VENDOR]));
router.post("/", terms_and_conditions.createTermAndCondition);

module.exports = router;
