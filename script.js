let displayValue = '';

function appendNumber(number) {
  displayValue += number;
  document.getElementById('display').value = displayValue;
}

function appendOperator(operator) {
  if (displayValue !== '') {
    displayValue += operator;
    document.getElementById('display').value = displayValue;
  }
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = '';
}

function deleteLast() {
  displayValue = displayValue.slice(0, -1);
  document.getElementById('display').value = displayValue;
}

function calculateResult() {
  try {
    displayValue = eval(displayValue).toString();
    document.getElementById('display').value = displayValue;
  } catch (error) {
    document.getElementById('display').value = 'Error';
    displayValue = '';
  }
}
