const express = require("express");
const controllers = require('../controllers');
const router = express.Router();

router.get('/', async function (req, res, next) {
  try {
    res.json(await controllers.getAllUser());
  } catch (err) {
    console.error(`Error while getting all User `, err.message);
    next(err);
  }
})

module.exports = router