const {
  create,
  login,
  whoami,
  resetPassword,
} = require("../../services/auth/auth.service");
const responseHandler = require("../../helpers/responseHandler");

const registerUser = async (req, res, next) => {
  try {
    const result = await create(req);

    return responseHandler.created(res, "Success register", result);
  } catch (error) {
    next(error);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const result = await login(req);
    return responseHandler.succes(res, "Success login", result);
  } catch (error) {
    next(error);
  }
};

const whoamiUser = async (req, res, next) => {
  try {
    const result = await whoami(req);
    return responseHandler.succes(res, "Success get credential", result);
  } catch (error) {
    next(error);
  }
};

const resetPasswordUser = async (req, res, next) => {
  try {
    const result = await resetPassword(req);
    return responseHandler.succes(res, "Success reset password", result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  registerUser,
  loginUser,
  whoamiUser,
  resetPasswordUser,
};
