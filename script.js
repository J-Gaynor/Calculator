let firstNumber, secondNumber, operation;
const total = document.getElementById("total")
const numbersContainer = document.querySelector(".numbers-container");
const operators = /([+\-*\/])/;

function populateNumbers() {
    let counter = 9;
    for (let i = 0; i < 4; i++) {
        let numberRow = document.createElement("div");
        for (let j = 0; j < 3; j++) {
            if (counter >= 0) {
                const numberButton = document.createElement("button");
                numberButton.classList.add("btn", "number-btn");
                numberButton.textContent = counter;
                numberButton.value = counter;
                numberRow.prepend(numberButton);
                counter--;
            }
            numbersContainer.append(numberRow);
        }
    }
}

populateNumbers();
const buttons = Array.from(document.getElementsByClassName("btn"));

function displayPress(appendText) {
    total.textContent += appendText
}

buttons.forEach((btn) => {
    btn.addEventListener("click", function () {
        if (total.textContent === "0" && parseInt(btn.value)) {
            total.textContent = btn.value;
        } else if (btn.value !== "=") {
            displayPress(btn.value);
        }
        switch (btn.value) {
            case "clear":
                total.textContent = "0";
                break;
            case "=":
                if (multipleOperators(total.textContent)) {
                    break;
                } else {
                    if (operate(total.textContent) === false) {
                        break;
                    };
                    operate(total.textContent);
                    break;
                }
            case "+":
            case "-":
            case "*":
            case "/":
                if (multipleOperators(total.textContent)) {
                    operate(total.textContent);
                    displayPress(btn.value);
                }
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
        return true;
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
    return a / b;
}

// Operate function
function operate(expression) {
    // Get the calculation values
    let [a, operation, b] = expression.split(operators);

    if (!a || !operation || !b) {
        return false;
    }

    firstNumber = parseInt(a);
    secondNumber = parseInt(b);
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