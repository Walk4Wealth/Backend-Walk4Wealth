const calculate_points = async (caloriesBurned, minutes) => {
  const pointsPerCalorie = 0.25;
  const pointsPerMinute = 0.01;

  const points = caloriesBurned * pointsPerCalorie + minutes * pointsPerMinute;

  return Math.floor(points);
};

module.exports = { calculate_points };
