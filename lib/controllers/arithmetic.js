const { Router } = require('express');
const mathjax = require('mathjax-node');
const Arithmetic = require('../classes/Arithmetic');
mathjax.config({
  MathJax: {
    loader: {
      load: ['input/asciimath', 'output/chtml']
    }
  }
});

mathjax.start();

module.exports = Router()
  .get('/:operation', (req, res, next) => {
    const { operation } = req.params;
    const { difficulty } = req.query;
    const parsedOperation = Arithmetic.parseOperation(operation);
    
  })
;
