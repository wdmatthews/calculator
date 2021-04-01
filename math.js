const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

/**
 * Splits an expression into its terms and operators.
 * @param {string} expression A math expression, like 1+2.
 * @returns {array} An array of all the terms and operators in the expression.
 * @example splitExpression('10+2-3*4/5') returns ['10', '+', '2', '-', '3', '*', '4', '/', '5']
 */
const splitExpression = (expression) => expression.match(/(([0-9\.]+)|([\+\-\*\/]))/g);

/**
 * Returns an expression after combining terms with a certain operator.
 * For example, combineTerms(['1', '+', '2', '*', '3'], '*') would combine 2 and 3, returning ['1', '+', '6'].
 * @param {array} expression The array expression from splitExpression.
 * @param {string} operator A math operator. Either +, -, *, or /.
 * @returns {array} The expression with some terms combined.
 * @see splitExpression
 */
function combineTerms(expression, operator) {
  let result = [];
  const expressionLength = expression.length;
  
  for (let i = 0; i < expressionLength; i++) {
    if (i + 2 < expressionLength && expression[i + 1] === operator) {
      const leftTerm = Number(expression[i]);
      const rightTerm = Number(expression[i + 2]);
      const op = expression[i + 1];
      let combinedTerm = 0;
      if (op === '+') combinedTerm = add(leftTerm, rightTerm);
      else if (op === '-') combinedTerm = subtract(leftTerm, rightTerm);
      else if (op === '*') combinedTerm = multiply(leftTerm, rightTerm);
      else if (op === '/') combinedTerm = divide(leftTerm, rightTerm);
      result.push(`${combinedTerm}`);
      i += 2;
    }
    else result.push(expression[i]);
  }
  
  return result;
}

/**
 * Calculates the value of the given math expression.
 * @param {string} expression A math expression, like 1+2.
 * @returns {number} The value of the math expression.
 */
function evaluateExpression(expression) {
  const expressionArray = splitExpression(expression);
  const combinedMultiplication = combineTerms(expressionArray, '*');
  const combinedDivision = combineTerms(combinedMultiplication, '/');
  const combinedAddition = combineTerms(combinedDivision, '+');
  const combinedSubtraction = combineTerms(combinedAddition, '-');
  return Number(combinedSubtraction);
}