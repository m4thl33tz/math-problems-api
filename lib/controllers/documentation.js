const { Router } = require('express');

module.exports = Router()
  .get('/', (req, res, next) => {
    res.render('home/home', {
      header: 'This is the header!'
    });
  })
  .get('/arithmetic', (req, res, next) => {
    res.render('arithmetic/arithmetic', {
      header: 'Arithmetic'
    });
  });

