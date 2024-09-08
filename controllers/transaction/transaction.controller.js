const {
  create,
  getAll,
  getOne,
  getAllTransactionHistory,
} = require("../../services/transaction/transaction.service");
const responseHandler = require("../../helpers/responseHandler");
const { sequelize } = require("../../models");

const createTransaction = async (req, res, next) => {
  const transaction = await sequelize.transaction();
  try {
    const result = await create(req, transaction);

    transaction.commit();

    return responseHandler.created(res, "Success create transaction", result);
  } catch (error) {
    next(error);
    transaction.rollback();
  }
};

const getAllHistoryTransactions = async (req, res, next) => {
  try {
    const result = await getAllTransactionHistory(req);
    return responseHandler.succes(res, "Success get all transaction", result);
  } catch (error) {
    next(error);
  }
};

const getAllTransactions = async (req, res, next) => {
  try {
    const result = await getAll(req);
    return responseHandler.succes(res, "Success get all transaction", result);
  } catch (error) {
    next(error);
  }
};

const getOneTransaction = async (req, res, next) => {
  try {
    const result = await getOne(req);
    return responseHandler.succes(res, "Success get transaction", result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createTransaction,
  getAllHistoryTransactions,
  getAllTransactions,
  getOneTransaction,
};
