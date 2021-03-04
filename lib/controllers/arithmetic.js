const { Router } = require('express')

module.exports = Router()
  .get('/:operation', (req, res, next) => {
    const { operation } = req.params;
  })