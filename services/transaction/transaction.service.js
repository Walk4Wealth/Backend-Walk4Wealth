const { Transaction, User, Vendor_product, Vendor } = require("../../models");
const ApiError = require("../../helpers/errorHandler");

const create = async (req, transaction) => {
  const { user_id, vendor_product_id } = req.body;

  const transactionExist = await Transaction.findOne(
    { where: { user_id, vendor_product_id } },
    { transaction }
  );

  if (transactionExist) {
    throw ApiError.unprocessableEntity("Already redeemed to this product");
  }

  const userExist = await User.findOne(
    { where: { id: user_id } },
    { transaction }
  );
  if (!userExist) {
    throw ApiError.badRequest("User not found");
  }

  const vendorProductExist = await Vendor_product.findOne(
    {
      where: { id: vendor_product_id },
    },
    { transaction }
  );
  if (!vendorProductExist) {
    throw ApiError.badRequest("Vendor product not found");
  }

  if (userExist.total_points === 0) {
    throw ApiError.badRequest("User has no points left to redeem");
  }

  if (userExist.total_points < vendorProductExist.points_required) {
    throw ApiError.badRequest("Insufficient points");
  }

  const expirationDate = new Date(vendorProductExist.expiration);
  if (expirationDate < new Date()) {
    throw ApiError.badRequest("Product expired");
  }

  const result = await Transaction.create(
    {
      user_id,
      vendor_product_id,
      points_used: vendorProductExist.points_required,
      timestamp: new Date(),
    },
    { transaction }
  );

  await User.update(
    {
      total_points:
        parseInt(userExist.total_points, 10) -
        parseInt(vendorProductExist.points_required, 10),
    },
    { where: { id: user_id } },
    { transaction }
  );

  await Vendor_product.update(
    { stock: vendorProductExist.stock - 1 },
    { where: { id: vendorProductExist.id } },
    { transaction }
  );

  return result;
};

const getAll = async (req) => {
  const result = await Transaction.findAll({});

  return result;
};

const getAllTransactionHistory = async (req) => {
  const user = req.user;

  const result = await Transaction.findAll({
    where: { user_id: user.id },
    order: [["id", "DESC"]],
    include: [
      {
        model: Vendor_product,
        as: "vendor_product",
      },
    ],
  });

  return result;
};

const getOne = async (req) => {
  const { id_transaction } = req.params;
  const result = await Transaction.findOne({
    where: { id: id_transaction },
    include: [
      {
        model: Vendor_product,
        as: "vendor_product",
        include: [
          {
            model: Vendor,
            as: "vendor",
          },
        ],
      },
      {
        model: User,
        as: "user",
      },
    ],
  });
  return result;
};

module.exports = {
  create,
  getAll,
  getAllTransactionHistory,
  getOne,
};
