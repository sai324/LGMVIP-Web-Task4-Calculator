let expression = '';
let resultDisplayed = false;

function appendNumber(number) {
  if (resultDisplayed) {
    expression = '';
    resultDisplayed = false;
  }
  expression += number;
  updateDisplay();
}

function appendOperator(operator) {
  if (resultDisplayed) {
    resultDisplayed = false;
  }
  
  if (expression !== '' && isOperator(expression.slice(-1))) {
    // Replace the last operator with the new one
    expression = expression.slice(0, -1) + operator;
  } else if (expression !== '') {
    expression += operator;
  }
  
  updateDisplay();
}

function clearDisplay() {
  expression = '';
  updateDisplay();
}

function backspace() {
  expression = expression.slice(0, -1);
  updateDisplay();
}

function calculate() {
  try {
    const result = eval(expression);
    expression = result.toString();
    updateDisplay();
    resultDisplayed = true;
  } catch (error) {
    expression = '';
    updateDisplay();
    alert('Invalid expression!');
  }
}

function updateDisplay() {
  document.getElementById('display').value = expression;
}

function isOperator(character) {
  const operators = ['+', '-', '*', '/'];
  return operators.includes(character);
}