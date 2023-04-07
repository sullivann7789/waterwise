module.exports = {
  overallScore: (wateringHole) => {
    let total = parseInt(wateringHole.watering_hole_score);
    for (let i = 0; i < wateringHole.Reviews.length; i++) {
      total += parseInt(wateringHole.Reviews[i].review_score);
    }
    const avg = total / (wateringHole.Reviews.length + 1);
    return avg.toFixed(1);
  },
  equals: (num1, num2) => {
    return (num1 === num2);
  }

};
