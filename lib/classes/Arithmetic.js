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

    this.solution = Arithmetic.solve(problem);
  }

  static solve(problem) {
    const { leftNumber, rightNumber, operation } = problem;

    // Make a string so that mathjs can interpret the expression
    const expression = String(leftNumber) + String(operation) + String(rightNumber);

    return math.evaluate(expression);
  }

  static makeProblem({ operation, digits }) {
    // Initialize left and right number
    let leftNumber, rightNumber;

    if(operation.text === 'addition') {

    }

    const problem = new Arithmetic({ leftNumber, rightNumber, operation });

    return problem;
  }

};
