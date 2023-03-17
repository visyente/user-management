const express = require('express');
const router = express.Router();
const controllers = require('../controllers');

router.post('/create', async function(req, res, next) {
  try {
    res.json(await controllers.create(req.body));
  } catch (err) {
    console.error(`Error while creating User`, err.message);
    next(err);
  }
});

module.exports = router;