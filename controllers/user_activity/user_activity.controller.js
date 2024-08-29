const {
  create,
  getAllByUser,
  getAll,
  getOne,
  update,
} = require("../../services/user_activity/user_activity.service");
const responseHandler = require("../../helpers/responseHandler");
const { sequelize } = require("../../models");

const createUserActivity = async (req, res, next) => {
  const transaction = await sequelize.transaction();
  try {
    const result = await create(req, transaction);

    transaction.commit();

    return responseHandler.created(res, "Success create user_activity", result);
  } catch (error) {
    next(error);
    transaction.rollback();
  }
};

const getAllActivityByUser = async (req, res, next) => {
  try {
    const result = await getAllByUser(req);
    return responseHandler.succes(res, "Success get all user_activity", result);
  } catch (error) {
    next(error);
  }
};

const getAllActivity = async (req, res, next) => {
  try {
    const result = await getAll(req);
    return responseHandler.succes(res, "Success get all user_activity", result);
  } catch (error) {
    next(error);
  }
};

const getOneActivity = async (req, res, next) => {
  try {
    const result = await getOne(req);
    return responseHandler.succes(res, "Success get one user_activity", result);
  } catch (error) {
    next(error);
  }
};

const updateActivity = async (req, res, next) => {
  try {
    const result = await update(req);
    return responseHandler.succes(res, "Success update user_activity", result);
  } catch (error) {
    next(error);
  }
};

const deleteActivity = async (req, res, next) => {
  try {
    const result = await destroy(req);
    return responseHandler.succes(res, "Success delete user_activity", result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUserActivity,
  getAllActivityByUser,
  getAllActivity,
  getOneActivity,
  updateActivity,
  deleteActivity,
};
