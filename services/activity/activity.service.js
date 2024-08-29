const { Activity } = require("../../models");
const { Op } = require("sequelize");
const ApiError = require("../../helpers/errorHandler");

const create = async (req) => {
  const checkDuplicate = await Activity.findOne({
    where: {
      name: {
        [Op.like]: req.body.name,
      },
    },
  });

  if (checkDuplicate) throw ApiError.badRequest("Activity already exists");

  const result = await Activity.create(req.body);

  return result;
};

const getAll = async (req) => {
  const result = await Activity.findAll({ order: [["id", "ASC"]] });

  return result;
};

const getOne = async (req) => {
  const { id_activity } = req.params;
  const result = await Activity.findOne({
    where: { id: id_activity },
  });

  if (!result) throw ApiError.notFound("Activity not found");

  return result;
};

const update = async (req) => {
  const { id_activity } = req.params;

  await getOne(req);

  const result = await Activity.update(req.body, {
    where: { id: id_activity },
  });

  return result;
};

const destroy = async (req) => {
  const { id_activity } = req.params;

  await getOne(req);

  const result = await Activity.destroy({
    where: { id: id_activity },
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
