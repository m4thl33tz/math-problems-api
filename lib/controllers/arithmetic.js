const { Router } = require('express');
const mathjax = require('mathjax-node');
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
  })
;
