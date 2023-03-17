const express = require('express');
const router = express.Router();
const controllers = require('../controllers');

router.get(
  '/list',
  async function  (req, res, next) {
    try {
      res.json(await controllers.getAllUser());
    } catch (err) {
      console.error(`Error while getting all User `, err.message);
      next(err);
    }
  }
);

module.exports = router;