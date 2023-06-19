const express = require('express');
const error = require('../middleware/error');
const user = require('./users');
const auth = require('./auth');

module.exports = (app) => {
  app.use(express.json());
  app.use('/api', user);
  app.use('/api', auth);
  app.use(error);
};
