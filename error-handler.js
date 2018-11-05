'use strict';

module.exports = (err, req, res) => {
  if (!res.statusCode) {
    return res.status(500).json({
      error: 'Internal Server Error',
    });
  }

  return res.status(err.statusCode).json({
    name: err.name,
    message: err.message,
  });
};
