/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
require('dotenv').config();

const logger = require('./src/util/logger');

const app = express();

app.use(bodyParser.json({ limit: '500kb' }));
app.use(bodyParser.urlencoded({ limit: '500kb', extended: true }));
app.use(helmet());

// require('./routes')(app);
// require('./startup/db')();
// require('./startup/config')();
// require('./startup/validation')();

const port = process.env.PORT || 3000;
const server = app.listen(port, () =>
  logger.info(`${process.env.NODE_ENV} - Listening on port ${port}...`)
);

module.exports = server;
