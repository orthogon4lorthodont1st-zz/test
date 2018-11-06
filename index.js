'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');
const errorHandler = require('./error-handler.js');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(routes);

app.use(errorHandler);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.info(`Listening on port ${port}`);
});

module.exports = app;
