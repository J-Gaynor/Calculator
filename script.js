let firstNumber, secondNumber, operation;
const total = document.getElementById("total")
const numbersContainer = document.querySelector(".numbers-container");

function populateNumbers() {
    let counter = 0;
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 3; j++) {
            if (counter < 10) {
                const numberButton = document.createElement("button");
                numberButton.classList.add("btn");
                numberButton.textContent = counter;
                numberButton.value = counter;
                numbersContainer.appendChild(numberButton);
                counter++;
            }
        }
    }
}

populateNumbers();
const buttons = Array.from(document.getElementsByClassName("btn"));
console.log(buttons);

function displayPress(e) {
    total.textContent += e.target.value
}

buttons.forEach((btn) => {
    btn.addEventListener("click", function () {
        switch (btn.value) {
            case "clear":
                total.textContent = "0";
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
        case "=":
            total.textContent = operate(a, b, operation);
        case "clear":
            total.textContent = 0;
    }
}