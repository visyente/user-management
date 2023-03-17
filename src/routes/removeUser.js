const express = require('express');
const router = express.Router();
const controllers = require('../controllers');

router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await controllers.remove({user_id: req.params.id}));
  } catch (err) {
    console.error(`Error while deleting User`, err.message);
    next(err);
  }
});

module.exports = router;