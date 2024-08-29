const {
  create,
  getAll,
  getOne,
  update,
  destroy,
} = require("../../services/activity/activity.service");
const responseHandler = require("../../helpers/responseHandler");

const createActivity = async (req, res, next) => {
  try {
    const result = await create(req);

    return responseHandler.created(res, "Success create activity", result);
  } catch (error) {
    next(error);
  }
};

const getAllActivity = async (req, res, next) => {
  try {
    const result = await getAll(req);
    return responseHandler.succes(res, "Success get all activity", result);
  } catch (error) {
    next(error);
  }
};

const getOneActivity = async (req, res, next) => {
  try {
    const result = await getOne(req);
    return responseHandler.succes(res, "Success get one activity", result);
  } catch (error) {
    next(error);
  }
};

const updateActivity = async (req, res, next) => {
  try {
    const result = await update(req);
    return responseHandler.succes(res, "Success update activity", result);
  } catch (error) {
    next(error);
  }
};

const deleteActivity = async (req, res, next) => {
  try {
    const result = await destroy(req);
    return responseHandler.succes(res, "Success delete activity", result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createActivity,
  getAllActivity,
  getOneActivity,
  updateActivity,
  deleteActivity,
};
