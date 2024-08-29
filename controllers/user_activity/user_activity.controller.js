const {
  create,
  getAllByUser,
  getAll,
  getOne,
} = require("../../services/user_activity/user_activity.service");
const responseHandler = require("../../helpers/responseHandler");
const { sequelize } = require("../../models");

const createTransaction = async (req, res, next) => {
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

module.exports = {
  createTransaction,
  getAllActivityByUser,
  getAllActivity,
  getOneActivity,
};
