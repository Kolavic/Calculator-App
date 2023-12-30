let currentInput = '';
let currentOperation = null;
let previousInput = null;

function updateDisplay() {
    document.getElementById('display').innerText = currentInput || '0';
}

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay();
    }
}

function setOperation(operator) {
    if (currentOperation !== null) {
        calculateResult();
    }
    currentOperation = operator;
    previousInput = currentInput;
    currentInput = '';
}

function clearDisplay() {
    currentInput = '';
    currentOperation = null;
    previousInput = null;
    updateDisplay();
}

function calculateResult() {
    if (currentOperation !== null && previousInput !== null) {
        switch (currentOperation) {
            case '+':
                currentInput = (parseFloat(previousInput) + parseFloat(currentInput)).toString();
                break;
            case '-':
                currentInput = (parseFloat(previousInput) - parseFloat(currentInput)).toString();
                break;
            case '*':
                currentInput = (parseFloat(previousInput) * parseFloat(currentInput)).toString();
                break;
            case '/':
                currentInput = (parseFloat(previousInput) / parseFloat(currentInput)).toString();
                break;
        }
        currentOperation = null;
        previousInput = null;
        updateDisplay();
    }
}

updateDisplay();

// Commit test
