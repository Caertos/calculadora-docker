let num1 = '';
let num2 = '';
let operator = null;
let enteringSecondNumber = false;

function updateDisplay(value) {
  document.getElementById("display").value = value || '0';
}

function appendNumber(number) {
    if (!enteringSecondNumber) {
        num1 += number;
        updateDisplay(num1);
    } else {
        num2 += number;
        updateDisplay(num2);
    }
}

function setOperator(op) {
    if (num1 === '') return;
    operator = op;
    enteringSecondNumber = true;
    updateDisplay('');
}

async function calculate() {
    if (num1 === '' || num2 === '' || operator === null) return;

    const response = await fetch("http://localhost:5000/calculate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ num1, num2, operator })
    });

    const data = await response.json();
    if (data.result !== undefined) {
        updateDisplay(data.result);
        num1 = data.result.toString();
        num2 = '';
        operator = null;
        enteringSecondNumber = false;
    } else {
        updateDisplay(data.Error);
    }
}

function calculateResult() {
    calculate();
}

function clearDisplay() {
    num1 = '';
    num2 = '';
    operator = null;
    enteringSecondNumber = false;
    updateDisplay('0');
}

document.addEventListener('DOMContentLoaded', function() {
    updateDisplay('0');
});


