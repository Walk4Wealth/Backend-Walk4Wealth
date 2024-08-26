const router = require("express").Router();
const responseHandler = require("../helpers/responseHandler");

router.get("/test", (req, res) => {
  return responseHandler.succes(res, "Test Route");
});

module.exports = router;
