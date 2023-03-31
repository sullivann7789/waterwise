const router = require('express').Router();
const usersRouter = require('./users-router');
const reviewsRouter = require('./reviews-router');
const wateringHolesRouter = require('./wateringholes-router');


router.use('/users', usersRouter);
router.use('/reviews', reviewsRouter);
router.use('/watering_holes', wateringHolesRouter);

module.exports = router;
