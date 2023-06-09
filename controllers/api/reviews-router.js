const { Review } = require('../../models');
const router = require('express').Router();
const withAuth = require('../../util/withAuth');

router.post('/', withAuth, async (req, res) => {
    try {
        const reviewData = await Review.create({
            ...req.body,
             user_id: req.session.userId,
        });
        res.status(200).json(reviewData);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

router.get('/', withAuth, async (req, res) => {
    try {
        const reviewData = await Review.findAll();
        res.status(200).json(reviewData);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

router.get('/:id', withAuth, async (req, res) => {
    try {
        const reviewData = await Review.findByPk(req.params.id);

        if (!reviewData) {
            res.status(404).json({ message: 'No watering hole found with this id!' });
            return;
        }
        
        res.status(200).json(reviewData);

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
      const reviewData = await Review.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.userId,
        },
      });
  
      if (!reviewData) {
        res.status(404).json({ message: 'No watering hole found with this id!' });
        return;
      }
  
      res.status(200).json(reviewData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;