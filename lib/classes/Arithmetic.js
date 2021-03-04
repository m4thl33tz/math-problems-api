const math = require('mathjs');

module.exports = class Arithmetic {
  leftNumber;
  rightNumber;
  operation;
  solution;

  constructor(problem) {
    const { leftNumber, rightNumber, operation } = problem;

    this.leftNumber = leftNumber;
    this.rightNumber = rightNumber;
    this.operation = operation; 

    this.solution = null;
  }

};
