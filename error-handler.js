'use strict';

module.exports = (err, req, res, next) => {
  if (!err.statusCode) {
    return res.status(500).json({
      error: 'Internal Server Error',
    });
  }

  return res.status(err.statusCode).json({
    name: err.name,
    message: err.message,
    statusCode: err.statusCode,
  });
};
