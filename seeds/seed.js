const sequelize = require('../config/connection');
const { User, WateringHole, Review } = require('../models');

const userData = require('./userData.json');
const wateringHoleData = require('./wateringHoleData.json');
const reviewData = require('./reviewData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const wateringHole of wateringHoleData) {
    await WateringHole.create({
      ...wateringHole,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  for (const review of reviewData) {
    await Review.create({
      ...review,
      user_id: users[Math.floor(Math.random() * users.length)].id,
      watering_hole_id: wateringHole[Math.floor(Math.random() * users.length)].id
    });
  }

  process.exit(0);
};

seedDatabase();
