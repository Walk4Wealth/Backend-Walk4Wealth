const router = require("express").Router();
const activity = require("../controllers/activity/activity.controller");
const validate = require("../utils/validatorIndex");
const {
  createActivity,
} = require("../services/activity/validators/activity.validator");
const isAuthenticate = require("../middlewares/authentication");
const { hasRole } = require("../middlewares/roleAuth");
const { ROLE } = require("../utils/constanta");

router.get("/:id_activity", activity.getOneActivity);
router.get("/", activity.getAllActivity);

// router.use(isAuthenticate);
// router.use(hasRole([ROLE.ADMIN, ROLE.SUPER_ADMIN]));

router.post("/", validate(createActivity), activity.createActivity);
router.patch("/:id_activity", activity.updateActivity);
router.delete("/:id_activity", activity.deleteActivity);

module.exports = router;
