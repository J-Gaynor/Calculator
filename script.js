let firstNumber, secondNumber, operation;
const total = document.getElementById("total")
const numbersContainer = document.querySelector(".numbers-container");
const operators = /([+\-*\/])/;

function populateNumbers() {
    let counter = 11;
    for (let i = 0; i < 4; i++) {
        let numberRow = document.createElement("div");
        for (let j = 0; j < 3; j++) {
            if (counter > 2) {
                numberRow.prepend(createNumberButton(counter - 2));
                counter--;
            } else if (counter === 2) {
                numberRow.append(createNumberButton(0));
                counter--;
            } else if (counter === 1) {
                numberRow.append(createNumberButton("."));
                counter--;
            } else {
                numberRow.append(createNumberButton("DEL"));
                counter--;
            }
            numbersContainer.append(numberRow);
        }
    }
}

function backSpace() {
    total.textContent = total.textContent.slice(0, -1);
}

function createNumberButton(value) {
    const numberButton = document.createElement("button");
    numberButton.classList.add("btn", "number-btn");
    numberButton.textContent = value;
    numberButton.value = value;
    return numberButton;
}

populateNumbers();
const buttons = Array.from(document.getElementsByClassName("btn"));

function displayPress(appendText) {
    total.textContent += appendText
}

function consecutiveOperators(expression) {
    if (operators.test(expression[expression.length - 1])) {
        return true;
    }
}

function doubleDecimal(expression) {
    let count = 0;
    let firstNumber, operation, secondNumber;
    let parts = expression.slice(1).split(operators);
    firstNumber = parts[0];
    operation = parts[1];
    secondNumber = parts[2];
    console.log(firstNumber, operation, secondNumber)
    if (operation) {
        for (const char of secondNumber) {
            console.log(char)
            if (char === ".") {
                count++;
            }
        }
        if (count > 0) {
            console.log(false)
            return false;
        }
        count = 0;
    } else {
        for (const char of firstNumber) {
            console.log(char)
            if (char === ".") {
                count++;
            }
        }
        console.log(count)
        if (count > 0) {
            console.log(false)
            return false;
        }
    }
    console.log(true)
    return true;
}

buttons.forEach((btn) => {
    btn.addEventListener("click", function () {
        if (btn.value === "." && !doubleDecimal(total.textContent)) {
            return;
        } else if (btn.value === "DEL") {
            if (total.textContent.length > 1) {
                backSpace();
            } else {
                total.textContent = "0";
            }
            return;
        } else if (total.textContent === "0" && parseInt(btn.value)) {
            total.textContent = btn.value;
        } else if (btn.value !== "=") {
            if (!operators.test(btn.value)) {
                displayPress(btn.value);
            }
        }
        switch (btn.value) {
            case "clear":
                total.textContent = "0";
                break;
            case "=":
                if (multipleOperators(total.textContent)) {
                    break;
                } else {
                    operate(total.textContent);
                    break;
                }
            case "+":
            case "-":
            case "*":
            case "/":
                if (consecutiveOperators(total.textContent)) {
                    let futureTotal = total.textContent.slice(0, -1);
                    futureTotal += btn.value;
                    total.textContent = futureTotal;
                } else {
                    operate(total.textContent);
                    displayPress(btn.value);
                }
                break;
            default:
                break;
        }
    })
})

function multipleOperators(expression) {
    let count = 0;
    for (char in expression) {
        if (operators.test(expression[char])) {
            count++;
        }
    }
    if (count > 1) {
        if (count === 2 && expression[0] === "-") {
            return false
        } else {
            return true;
        }
    } else {
        return false;
    }
}

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
    if (b === 0 || b === -0) {
        alert("Not today ;)")
        return 0;
    }
    return a / b;
}

// Operate function
function operate(expression) {
    // Get the calculation values
    let a, operation, b;
    if (expression.startsWith("-")) {
        let parts = expression.slice(1).split(operators);
        a = "-" + parts[0];
        operation = parts[1];
        b = parts[2];
    } else {
        [a, operation, b] = expression.split(operators);
    }

    if (!a || !operation || !b) {
        return false;
    }

    firstNumber = parseFloat(a);
    secondNumber = parseFloat(b);
    switch (operation) {
        case "+":
            total.textContent = add(firstNumber, secondNumber);
            break;
        case "-":
            total.textContent = subtract(firstNumber, secondNumber);
            break;
        case "*":
            total.textContent = multiply(firstNumber, secondNumber);
            break;
        case "/":
            total.textContent = divide(firstNumber, secondNumber);
            break;
    }
}