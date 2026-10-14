let firstNumber, secondNumber, operation;
const total = document.getElementById("total")
const numbersContainer = document.querySelector(".numbers-container");

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

function displayPress(e) {
    total.textContent += e.target.value
}

buttons.forEach((btn) => {
    btn.addEventListener("click", function () {
        switch (btn.value) {
            case "clear":
                total.textContent = "0";
                break;
            case "=":
                operate(total.textContent);
                break;
            default:
                console.log(total.textContent)
                if (total.textContent === "0") {
                    total.textContent = btn.value;
                } else {
                    console.log(total.textContent, btn.value)
                    total.textContent += btn.value;
                }
        }
    })
})




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
    console.log(expression);
    let [a, operation, b] = expression.split(/([+\-*\/])/);
    firstNumber = parseInt(a);
    secondNumber = parseInt(b);
    console.log(a, operation, b);
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