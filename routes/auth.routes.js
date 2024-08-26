const router = require("express").Router();
const auth = require("../controllers/auth/auth.controller");
const validate = require("../utils/validatorIndex");
const {
  registerValidator,
} = require("../services/auth/validators/auth.validator");
const isAuthenticate = require("../middlewares/authentication");

router.post("/signup", validate(registerValidator), auth.registerUser);
router.post("/signin", auth.loginUser);

router.use(isAuthenticate);
router.get("/whoami", auth.whoamiUser);
router.patch("/reset-password", auth.resetPasswordUser);

module.exports = router;
