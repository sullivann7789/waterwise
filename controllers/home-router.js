const router = require('express').Router();
const { User, WateringHole, Review } = require('../models');
const withAuth = require('../util/withAuth')

router.get('/', async (req, res) => {
  try {
    let user;
    if (req.session.isLoggedIn) {
      user = await User.findByPk(req.session.userId, {
        exclude: ['password'],
        raw: true,
      });
    }
    res.render('home', {
      title: 'Home Page',
      isLoggedIn: req.session.isLoggedIn,
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('⛔ Uh oh! An unexpected error occurred.');
  }
});

router.get('/login', (req, res) => {
  res.render('login', { title: 'Log-In Page' });
});

router.get('/signup', (req, res) => {
  res.render('signup', { title: 'Sign-Up Page' });
});

router.get('/wateringholes', withAuth, async (req, res) => {
  try {
    const wateringHoleData  = await WateringHole.findAll({
      include: [{ model: Review }]
    });
    const wateringHoles = wateringHoleData.map((wateringHole) => wateringHole.get({ plain: true }));
    res.render('wateringholes', {
      wateringHoles,
      sessionId: req.session.userId,
      isLoggedIn: req.session.isLoggedIn
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/wateringholes/:id', withAuth, async (req, res) => {
  try {
    const reviewData = await Review.findAll({
      where: { watering_hole_id: req.params.id },
      include: [{ model: User }, { model: WateringHole }]
    });
    const reviews = reviewData.map((review) => review.get({ plain: true }));
    res.render('reviews', { 
      reviews,
      isLoggedIn: req.session.isLoggedIn
    });
  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;
