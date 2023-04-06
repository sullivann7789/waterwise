module.exports = {
  // add helper functions for handlebars here
  // Example:
  // json: object => JSON.stringify(object, null, 4),
  overallScore: (wateringHole) => {
    let total = parseInt(wateringHole.watering_hole_score);
    for (let i = 0; i < wateringHole.Reviews.length; i++) {
      total += parseInt(wateringHole.Reviews[i].review_score);
    }
    const avg = total / (wateringHole.Reviews.length + 1);
    return avg.toFixed(1);
  }
};
