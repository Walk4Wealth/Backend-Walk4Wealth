const {
  create,
  getAll,
  getOne,
  destroy,
  update,
} = require("../../services/vendor/vendor.service");
const responseHandler = require("../../helpers/responseHandler");

const createVendor = async (req, res, next) => {
  try {
    const result = await create(req);

    return responseHandler.created(res, "Success create vendor", result);
  } catch (error) {
    next(error);
  }
};

const getAllVendor = async (req, res, next) => {
  try {
    const result = await getAll(req);
    return responseHandler.succes(res, "Success get all vendor", result);
  } catch (error) {
    next(error);
  }
};

const getOneVendor = async (req, res, next) => {
  try {
    const result = await getOne(req);
    return responseHandler.succes(res, "Success get vendor", result);
  } catch (error) {
    next(error);
  }
};

const updateVendor = async (req, res, next) => {
  try {
    const result = await update(req);
    return responseHandler.succes(res, "Success update vendor", result);
  } catch (error) {
    next(error);
  }
};

const deleteVendor = async (req, res, next) => {
  try {
    const result = await destroy(req);
    return responseHandler.succes(res, "Success delete vendor", result);
  } catch (error) {
    next(error);
  }
};
module.exports = {
  createVendor,
  getAllVendor,
  getOneVendor,
  updateVendor,
  deleteVendor,
};
