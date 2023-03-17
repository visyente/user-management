const express = require('express');
const router = express.Router();
const controllers = require('../controllers');

router.delete('/multipleRemove', async function(req, res, next) {
  try {
    res.json(await controllers.multipleRemove({user_ids: req.body}));
  } catch (err) {
    console.error(`Error while deleting User`, err.message);
    next(err);
  }
});

module.exports = router;