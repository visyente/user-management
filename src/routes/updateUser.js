const express = require('express');
const router = express.Router();
const controllers = require('../controllers');

router.put('/:id', async function(req, res, next) {
  try {
    res.json(await controllers.update({user_id: req.params.id, reqBody: req.body}));
  } catch (err) {
    console.error(`Error while updating User`, err.message);
    next(err);
  }
});

module.exports = router;