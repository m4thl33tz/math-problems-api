const { Router } = require('express');

module.exports = Router()
  .use('/arithmetic', require('./arithmetic'));
