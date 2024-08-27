const { create } = require("../../services/transaction/transaction.service");
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

module.exports = {
  createTransaction,
};
