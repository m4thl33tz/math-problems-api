const math = require('mathjs');

module.exports = class Arithmetic {
  leftNumber;
  rightNumber;
  operation;
  solution;
  equation;

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
    this.equation = `${leftNumber} ${operation.symbol} ${rightNumber} = `;
  }

  static solve(problem) {
    const { leftNumber, rightNumber, operation } = problem;

    // Make a string so that mathjs can interpret the expression
    const expression = String(leftNumber) + String(operation.symbol) + String(rightNumber);

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

    if(operation.text === 'multiplication') {
      leftNumber = Arithmetic
        .getNumberWithDigits(leftDigits);

      rightNumber = Arithmetic
        .getNumberWithDigits(rightDigits);
    }

    // For subtraction, make sure that rightNumber is less than leftNumber
    if(operation.text === 'subtraction') {
      if(digits[0] < digits[1]) throw new Error(`Cannot make subtraction problem with ${digits[0]} by ${digits[1]} digits!`);

      leftNumber = Arithmetic.getNumberWithDigits(digits[0]);

      // Gets a number with digits[1] digits that is less than leftNumber
      rightNumber = Arithmetic.getBoundedNumberWithDigits(digits[1], leftNumber);
    }

    // For division, make sure that rightNumber is a factor of leftNumber
    if(operation.text  === 'division') {
      if(digits[0] < digits[1]) throw new Error(`Cannot make division problem with ${digits[0]} by ${digits[1]} digits!`);

      leftNumber = Arithmetic.getNumberWithDigits(digits[0]);

      // Get a number with digits[1] digits that is less than half of leftNumber
      // because no factors of leftNumber are > leftNumber / 2
      // If rightNumber is zero (in case digits[1] === 1), set rightNumber to one instead
      rightNumber = Arithmetic.getBoundedNumberWithDigits(digits[1], leftNumber / 2) || 1;

      // Compute the quotient and round off extra decimals
      const quotient = Math.floor(leftNumber / rightNumber);

      // Compute new leftNumber. This ensures everything is a whole number
      leftNumber = quotient * rightNumber;
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

  static getBoundedNumberWithDigits(digits = 1, bound) {
    const lowerBound = 10 ** (digits - 1);

    // Choose the smaller upper bound
    const upperBound = bound > 10 ** digits ? 10 ** digits : bound;
    
    const range = upperBound - lowerBound;
    return Math.floor(Math.random() * range + lowerBound);
  }

  static parseOperation(operationText) {
    const operations = Arithmetic.getOperations();

    const operation = operations
      .find(op => op.text === operationText);

    if(!operation) throw new Error(`No operation with text ${operationText} found.`);

    return operation; 
  }

  static getOperations() {
    return Arithmetic.operations;
  }
};
