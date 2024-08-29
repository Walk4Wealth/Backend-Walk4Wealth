const { CALORIES_BURN } = require("./constanta");

const calculate_calories_burn = async (
  activity,
  weightKg,
  distanceKm,
  durationMinutes
) => {
  let caloriesConstant = 0;

  if (activity === "Walking") {
    caloriesConstant = CALORIES_BURN.WALKING;
  } else if (activity === "Jogging") {
    caloriesConstant = CALORIES_BURN.JOGGING;
  } else if (activity === "Running") {
    caloriesConstant = CALORIES_BURN.RUNNING;
  } else {
    caloriesConstant = CALORIES_BURN.OTHER;
    return caloriesConstant * weightKg * (durationMinutes / 60);
  }

  const caloriesBurned =
    caloriesConstant * weightKg * distanceKm * (durationMinutes / 60);

  return caloriesBurned;
};

module.exports = { calculate_calories_burn };
