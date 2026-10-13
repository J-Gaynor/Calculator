let firstNumber, secondNumber, operation;
const numbersContainer = document.querySelector(".numbers-container");

function populateNumbers() {
    let counter = 0;
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 3; j++) {
            if (counter < 10) {
                const numberButton = document.createElement("button");
                numberButton.textContent = counter;
                numberButton.value = counter;
                numbersContainer.appendChild(numberButton);
                counter++;
            }
        }
    }
}

populateNumbers();

// Basic functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// Operate function
function operate(a, b, operation) {
    switch (operation) {
        case "+":
            add(a, b);
            break;
        case "-":
            subtract(a, b);
            break;
        case "*":
            multiply(a, b);
            break;
        case "/":
            divide(a, b);
    }
}