const { Vendor, Vendor_product } = require("../../models");
const ApiError = require("../../helpers/errorHandler");

const create = async (req) => {
  const result = await Vendor.create(req.body);

  return result;
};

const getAll = async () => {
  const result = await Vendor.findAll({ order: [["name", "ASC"]] });
  return result;
};

const getOne = async (req) => {
  const { id_vendor } = req.params;
  const result = await Vendor.findOne({
    where: { id: id_vendor },
    include: [{ model: Vendor_product, as: "vendor_product" }],
  });

  if (!result) throw ApiError.notFound("Vendor not found");

  return result;
};

const update = async (req) => {
  const { id_vendor } = req.params;

  await getOne(req);

  const result = await Vendor.update(req.body, {
    where: { id: id_vendor },
  });

  return result;
};

const destroy = async (req) => {
  const { id_vendor } = req.params;

  await getOne(req);

  const result = await Vendor.destroy({ where: { id: id_vendor } });
  return result;
};

module.exports = {
  create,
  getAll,
  getOne,
  update,
  destroy,
};
