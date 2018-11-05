'use strict';

const router = require('express').Router();

const Aggregator = require('../services/index.js');
const Errors = require('../errors.js');

router.get('/feed', async (req, res, next) => {
  if (!req.headers.id) {
    return res.status(400).json({
      name: Errors.MISSING_ID.name,
      message: Errors.MISSING_ID.msg,
    });
  }

  try {
    const result = await Aggregator.getInfo(req.headers.id);
    return res.json(result);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
