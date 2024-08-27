const {
  create,
} = require("../../services/terms_and_conditions/terms_and_conditions.service");
const responseHandler = require("../../helpers/responseHandler");

const createTermAndCondition = async (req, res, next) => {
  try {
    const result = await create(req);

    return responseHandler.created(
      res,
      "Success create terms and conditions",
      result
    );
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createTermAndCondition,
};
