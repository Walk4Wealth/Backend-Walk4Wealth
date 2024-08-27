const { Vendor_product_detail, Vendor_product } = require("../../models");
const ApiError = require("../../helpers/errorHandler");

const create = async (req) => {
  const { vendor_product_id, terms_and_conditions } = req.body;

  productExist = await Vendor_product.findOne({
    where: { id: vendor_product_id },
  });

  if (!productExist) throw ApiError.notFound("Product not found");

  let resultData = [];

  for (let i = 0; i < terms_and_conditions.length; i++) {
    let result = await Vendor_product_detail.create({
      vendor_product_id,
      number: i + 1,
      description: terms_and_conditions[i],
    });

    resultData.push(result);
  }

  return resultData;
};

module.exports = {
  create,
};
