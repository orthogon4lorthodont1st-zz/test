'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(routes);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.info(`Listening on port ${port}`);
});
