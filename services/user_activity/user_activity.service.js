const { User, Activity, User_activity, Coordinate } = require("../../models");
const ApiError = require("../../helpers/errorHandler");
const {
  calculate_calories_burn,
} = require("../../utils/calculate_calories_burn");
const { calculate_points } = require("../../utils/calculate_points");

const create = async (req, transaction) => {
  const { activity_id, duration_seconds, mileage, coordinates } = req.body;
  const user = req.user;

  const convertDurationToMinute = duration_seconds / 60;
  const convertMileageToKm = mileage / 1000;

  const activityExist = await Activity.findOne(
    {
      where: { id: activity_id },
    },
    { transaction }
  );

  if (!activityExist) throw ApiError.badRequest("Activity not found");

  const userExist = await User.findOne(
    { where: { id: user.id } },
    { transaction }
  );

  if (!userExist) throw ApiError.badRequest("User not found");

  const caloriesBurn = await calculate_calories_burn(
    activityExist.name,
    user.weight,
    convertMileageToKm,
    convertDurationToMinute
  );

  const totalPoints = await calculate_points(
    caloriesBurn,
    convertDurationToMinute
  );

  req.body.user_id = user.id;
  req.body.points_earned = totalPoints;
  req.body.calories_burn = caloriesBurn;
  req.body.timestamp = Date.now();
  const result = await User_activity.create(req.body, { transaction });

  for (const coordinate of coordinates) {
    coordinate.user_activity_id = result.id;
    await Coordinate.create(coordinate, { transaction });
  }

  await User.update(
    {
      points: user.points + totalPoints,
    },
    {
      where: { id: user.id },
    },
    { transaction }
  );

  return result;
};

const getAllByUser = async (req) => {
  const user = req.user;
  const result = await User_activity.findAll({
    where: { user_id: user.id },
    include: [
      { model: Activity, as: "activity" },
      { model: Coordinate, as: "coordinates", attributes: ["lat", "long"] },
    ],
    order: [["createdAt", "DESC"]],
  });
  return result;
};

const getAll = async () => {
  const result = await User_activity.findAll({
    include: [
      { model: Activity, as: "activity" },
      { model: User, as: "user", attributes: { exclude: ["password"] } },
      { model: Coordinate, as: "coordinates", attributes: ["lat", "long"] },
    ],
    order: [["createdAt", "DESC"]],
  });
  return result;
};

const getOne = async (req) => {
  const { id_user_activity } = req.params;
  const result = await User_activity.findOne({
    where: { id: id_user_activity },
    include: [
      { model: Activity, as: "activity" },
      { model: User, as: "user", attributes: { exclude: ["password"] } },
      { model: Coordinate, as: "coordinates", attributes: ["lat", "long"] },
    ],
  });

  if (!result) throw ApiError.notFound("User_activity not found");

  return result;
};

const update = async (req) => {
  const { id_user_activity } = req.params;

  await getOne(req);

  const result = await User_activity.update(req.body, {
    where: { id: id_user_activity },
  });

  return result;
};

const destroy = async (req) => {
  const { id_user_activity } = req.params;

  await getOne(req);

  const result = await User_activity.destroy({
    where: { id: id_user_activity },
  });

  return result;
};

module.exports = {
  create,
  getAllByUser,
  getAll,
  getOne,
  update,
  destroy,
};
