const router = require("express").Router();
const user_activity = require("../controllers/user_activity/user_activity.controller");
const validate = require("../utils/validatorIndex");
const {
  createUserActivity,
} = require("../services/user_activity/validators/user_activity.validators");
const isAuthenticate = require("../middlewares/authentication");
const { hasRole } = require("../middlewares/roleAuth");
const { ROLE } = require("../utils/constanta");

router.use(isAuthenticate);
router.use(hasRole([ROLE.USER_BASIC, ROLE.USER_PREMIUM]));
router.get("/my-activity", user_activity.getAllActivityByUser);
router.get("/:id_user_activity", user_activity.getOneActivity);
router.post(
  "/",
  validate(createUserActivity),
  user_activity.createUserActivity
);

router.use(hasRole([ROLE.ADMIN, ROLE.SUPER_ADMIN]));
router.get("/", user_activity.getAllActivity);
router.patch("/:id_user_activity", user_activity.updateActivity);
router.delete("/:id_user_activity", user_activity.deleteActivity);

module.exports = router;
