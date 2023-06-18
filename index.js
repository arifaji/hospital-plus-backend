const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
require('dotenv').config();

const logger = require('./src/util/logger');
const { authenticateDb } = require('./src/db/index');

const app = express();

app.use(bodyParser.json({ limit: '500kb' }));
app.use(bodyParser.urlencoded({ limit: '500kb', extended: true }));
app.use(helmet());

require('./src/routes')(app);

const port = process.env.PORT || 3000;
const server = app.listen(port, async () => {
  logger.info(`${process.env.NODE_ENV} - Listening on port ${port}...`);
  await authenticateDb();
});

module.exports = server;
