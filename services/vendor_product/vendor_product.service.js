const {
  Vendor_product,
  Vendor,
  Vendor_product_detail,
} = require("../../models");
const ApiError = require("../../helpers/errorHandler");
const { STATUS } = require("../../utils/constanta");

const create = async (req) => {
  const { id_vendor } = req.body;

  if (id_vendor) {
    req.body.vendor_id = id_vendor;
  }

  vendorExist = await Vendor.findOne({ where: { id: id_vendor } });
  if (!vendorExist) throw ApiError.notFound("Vendor not found");

  req.body.status = STATUS.ACTIVE;

  const result = await Vendor_product.create(req.body);
  return result;
};

const getAll = async (req) => {
  const { vendor_id } = req.params;

  let whereClause = {};

  if (vendor_id) {
    whereClause = { id_vendor: vendor_id };
  }

  const result = await Vendor_product.findAll({
    where: whereClause,
    order: [["name", "ASC"]],
    include: [
      {
        model: Vendor_product_detail,
        as: "terms_and_conditions",
        attributes: ["number", "description"],
        separate: true,
        order: [["number", "ASC"]],
      },
    ],
  });
  return result;
};

const getOne = async (req) => {
  const { vendor_product_id } = req.params;
  const result = await Vendor_product.findOne({
    where: { id: vendor_product_id },
    include: [
      {
        model: Vendor_product_detail,
        as: "terms_and_conditions",
        attributes: ["number", "description"],
        separate: true,
        order: [["number", "ASC"]],
      },
    ],
  });
  if (!result) throw ApiError.notFound("Vendor_product not found");

  return result;
};

const update = async (req) => {
  const { vendor_product_id } = req.params;

  await getOne(req);

  const result = await Vendor_product.update(req.body, {
    where: { id: vendor_product_id },
  });
  return result;
};

const destroy = async (req) => {
  const { vendor_product_id } = req.params;

  await getOne(req);

  const result = await Vendor_product.destroy({
    where: { id: vendor_product_id },
  });
  return result;
};

module.exports = {
  create,
  getAll,
  getOne,
  update,
  destroy,
};
