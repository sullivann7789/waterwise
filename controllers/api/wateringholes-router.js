const { WateringHole } = require('../../models');
const router = require('express').Router();
const withAuth = require('../../util/withAuth');

router.post('/', withAuth, async (req, res) => {
    try {
        const wateringHoleData = await WateringHole.create({
            ...req.body,
             user_id: req.session.user_id,
        });
        req.session.save(() => res.json({ id: wateringHoleData.id }));
        res.status(200).json(wateringHoleData);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

router.get('/', withAuth, async (req, res) => {
    try {
        const wateringHoleData = await WateringHole.findAll();
        res.status(200).json(wateringHoleData);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

router.get('/:id', withAuth, async (req, res) => {
    try {
        const wateringHoleData = WateringHole.findOne({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
              }
        });

        if (!wateringHoleData) {
            res.status(404).json({ message: 'No watering hole found with this id!' });
            return;
        }
        
        res.status(200).json(wateringHoleData);

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
      const wateringHoleData = await Project.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!wateringHoleData) {
        res.status(404).json({ message: 'No watering hole found with this id!' });
        return;
      }
  
      res.status(200).json(wateringHoleData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;