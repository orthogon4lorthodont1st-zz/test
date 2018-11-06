'use strict';

const router = require('express').Router();

const Aggregator = require('../services/index.js');
const Errors = require('../errors.js');

router.get('/notifications/:id', async (req, res, next) => {
  try {
    const result = await Aggregator.getInfo(req.params.id);
    return res.json(result);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
