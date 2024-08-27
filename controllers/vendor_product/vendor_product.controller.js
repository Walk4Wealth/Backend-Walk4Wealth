const {
  create,
  getAll,
  getOne,
  destroy,
  update,
} = require("../../services/vendor_product/vendor_product.service");
const responseHandler = require("../../helpers/responseHandler");

const createProduct = async (req, res, next) => {
  try {
    const result = await create(req);

    return responseHandler.created(res, "Success create product", result);
  } catch (error) {
    next(error);
  }
};

const getAllProducts = async (req, res, next) => {
  try {
    const result = await getAll(req);
    return responseHandler.succes(res, "Success get all products", result);
  } catch (error) {
    next(error);
  }
};

const getOneProduct = async (req, res, next) => {
  try {
    const result = await getOne(req);
    return responseHandler.succes(res, "Success get product", result);
  } catch (error) {
    next(error);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const result = await update(req);
    return responseHandler.succes(res, "Success update product", result);
  } catch (error) {
    next(error);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const result = await destroy(req);
    return responseHandler.succes(res, "Success delete product", result);
  } catch (error) {
    next(error);
  }
};
module.exports = {
  createProduct,
  getAllProducts,
  getOneProduct,
  updateProduct,
  deleteProduct,
};
