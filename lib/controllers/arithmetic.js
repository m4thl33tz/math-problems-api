const { Router } = require('express');
const mathjax = require('mathjax-node');
const Arithmetic = require('../classes/Arithmetic');
const difficulties = require('../../data/difficulties.json');

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
    const { difficulty = 'easy', number = 1 } = req.query;

    const parsedOperation = Arithmetic.parseOperation(operation);
    
    const digits = difficulties.arithmetic.addition[difficulty];

    const problems = Arithmetic.makeProblems({ 
      number,
      operation: parsedOperation,
      digits
    });

    res.send(problems);
  })
;
