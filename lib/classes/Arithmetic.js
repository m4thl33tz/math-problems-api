const math = require('mathjs');

module.exports = class Arithmetic {
  leftNumber;
  rightNumber;
  operation;
  solution;

  static operations = [
    { text: 'addition', symbol: '+' },
    { text: 'multiplication', symbol: '*' },
    { text: 'subtraction', symbol: '-' },
    { text: 'division', symbol: '/' }
  ]

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

    // Get and rename digits
    const [leftDigits, rightDigits] = digits;

    if(operation.text === 'addition') {
      leftNumber = Arithmetic
        .getNumberWithDigits(leftDigits);

      rightNumber = Arithmetic
        .getNumberWithDigits(rightDigits);
    }

    const problem = new Arithmetic({ leftNumber, rightNumber, operation });

    return problem;
  }

  static makeProblems({ number, operation, digits }) {
    const problems = [];

    for(let i = 0; i < number; i++) {
      const problem = Arithmetic
        .makeProblem({ operation, digits });

      problems.push(problem);
    }

    return problems;
  }

  static getNumberWithDigits(numberOfDigits) {
    // Largest number with 3 digits is 999
    // Don't subtract 1 because Math.random() < 1
    const upperBound = 10 ** numberOfDigits;
   
    // Least number with 3 digits is 100 
    const lowerBound = 10 ** (numberOfDigits - 1);

    // Number of numbers with 3 digits is 899
    const range = upperBound - lowerBound;

    // Get a random number in the range, then offset by the lowerBound
    return Math.floor(Math.random() * range + lowerBound);
  }
};
