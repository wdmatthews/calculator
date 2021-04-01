const resultContainer = document.querySelector('#test-result');

function addParagraph(text) {
  resultContainer.innerHTML += `<p>${text}</p>`;
}

function printTest(statement, result, expected) {
  addParagraph(`Testing ${statement}.`);
  const passed = result === expected;
  addParagraph(`${passed ? '[PASSED]' : '[FAILED]'} ${statement} = ${result}.${!passed ? (' Expected: ' + expected) : ''}`);
}

printTest('add(1, 2)', add(1, 2), 3);
printTest('subtract(1, 2)', subtract(1, 2), -1);
printTest('multiply(1, 2)', multiply(1, 2), 2);
printTest('divide(1, 2)', divide(1, 2), 0.5);
printTest('splitExpression(\'10+2-3*4/5\')', splitExpression('10+2-3*4/5').toString(), '10,+,2,-,3,*,4,/,5');
printTest('combineTerms(splitExpression(\'1+2*3\'), \'*\')',
  combineTerms(splitExpression('1+2*3'), '*').toString(),
  '1,+,6'
);
printTest('evaluateExpression(\'1+2*3\')', evaluateExpression('1+2*3'), 7);