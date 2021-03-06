const { Router } = require('express');
const mathjax = require('mathjax-node');
const Arithmetic = require('../../classes/Arithmetic');
const difficulties = require('../../../data/difficulties.json');

mathjax.config({
  MathJax: {
    loader: {
      load: ['input/asciimath', 'output/chtml']
    }
  }
});

module.exports = Router()
  .get('/:operation', async(req, res, next) => {
    const { operation } = req.params;
    const { difficulty = 'easy', number = 1 } = req.query;

    const parsedOperation = Arithmetic.parseOperation(operation);
    
    const digits = difficulties.arithmetic[operation][difficulty];

    const problems = Arithmetic.makeProblems({ 
      number,
      operation: parsedOperation,
      digits
    });

    await Promise.all(
      problems.map(problem => {
        return mathjax.typeset({
          math: problem.equation,
          format: 'TeX',
          mml: true
        }).then(data => problem.mml = data.mml);
      })
    );

    res.send(problems);
  })
;
