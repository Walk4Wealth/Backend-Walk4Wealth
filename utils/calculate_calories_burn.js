const { CALORIES_BURN } = require("./constanta");

const calculate_calories_burn = async (
  activity,
  weightKg,
  distanceKm,
  durationMinutes
) => {
  let caloriesConstant = CALORIES_BURN.OTHER; // Default to OTHER if activity is not recognized

  switch (activity) {
    case "Walking":
      caloriesConstant = CALORIES_BURN.WALKING;
      break;
    case "Jogging":
      caloriesConstant = CALORIES_BURN.JOGGING;
      break;
    case "Running":
      caloriesConstant = CALORIES_BURN.RUNNING;
      break;
    default:
      return caloriesConstant * weightKg * (durationMinutes / 60);
  }

  const caloriesBurned =
    caloriesConstant * weightKg * distanceKm * (durationMinutes / 60);

  return caloriesBurned;
};

module.exports = { calculate_calories_burn };
