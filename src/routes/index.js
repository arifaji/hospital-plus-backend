const express = require('express');
const error = require('../middleware/error');
const user = require('./users');

module.exports = (app) => {
  app.use(express.json());
  app.use('/api', user);
  app.use(error);
};
