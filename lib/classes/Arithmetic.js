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

  static solve(problem) {
    const { leftNumber, rightNumber, operation } = problem;

    // Make a string so that mathjs can interpret the expression
    const expression = String(leftNumber) + String(operation) + String(rightNumber);

    return math.evaluate(expression);
  }

};
