// // function add(num1, num2){
// //     return num1 + num2
// // }

// // function subtract(num1, num2){
// //     return num1 - num2
// // }

// // function divide(num1, num2) {
// //     if (num2 !== 0) {
// //         return num1 / num2;
// //     } else {
// //         return "Error: Division by 0";
// //     }
// // }

// // function multiply(num1, num2){
// //     return num1 * num2
// // }


// // let num1 = null;
// // let operator = null;
// // let num2 = null;
// // let displayValue = '';
// // resetDisplay = false;


// // console.log(add(num1, num2))
// // console.log(subtract(num1, num2))
// // console.log(divide(num1, num2))
// // console.log(multiply(num1, num2))


// // function Operate(operator, num1, num2){
// //     if(operator === '+'){
// //         return add(num1, num2)
// //     }else if(operator === '-'){
// //         return subtract(num1, num2)
// //     }else if (operator === '*'){
// //         return multiply(num1, num2)
// //     }else if(operator === '/'){
// //         return divide(num1,  num2)
// //     }else{
// //         return "wrong Operator"
// //     }
// // }

// // console.log(Operate('+', 5,5))
// // console.log(Operate('-', 12, 3))
// // console.log(Operate('/', 3, 5))
// // console.log(Operate('*', 6, 4))



// // // Variable to store the current display value

// // // Function to update the display
// // function updateDisplay() {
// //     const display = document.getElementById("display");
// //     display.value = displayValue || "0"; // Show "0" if displayValue is empty
// // }
// // // updateDisplay()



// // const digitButtons = document.querySelectorAll('.digit')
// // digitButtons.forEach(button => {
// //     button.addEventListener('click', () => {
// //         displayValue += button.innerText; // Append clicked digit
// //         resetDisplay = false;
// //         updateDisplay(); // Update the display
// //     });
// // });



// // const operatorButtons = document.querySelectorAll('#operator');
// // operatorButtons.forEach(button => {
// //     button.addEventListener('click', () => {
// //         if (displayValue === "") return; // Skip if no number entered
// //         num1 = parseFloat(displayValue); // Store first number
// //         operator = button.innerText; // Store selected operator
// //         displayValue = ""; // Clear display for second number
// //         resetDisplay = true;
// //         updateDisplay();
// //     });
// // });

// // function clearDisplay() {
// //     displayValue = ""; // Reset display value
// //     num1 = null; // Reset stored numbers
// //     num2 = null;
// //     operator = null; // Reset operator
// //     updateDisplay(); // Update the display to "0"
// // }

// // const clear = document.getElementById("clear");
// // clear.addEventListener("click", clearDisplay);



// let num1 = null;
// let operator = null;
// let num2 = null;
// let displayValue = "";
// let resetDisplay = false; // Flag to track if display should reset

// // Functions for basic operations
// function add(num1, num2) {
//     return num1 + num2;
// }

// function subtract(num1, num2) {
//     return num1 - num2;
// }

// function divide(num1, num2) {
//     return num2 !== 0 ? num1 / num2 : "Error: Division by 0";
// }

// function multiply(num1, num2) {
//     return num1 * num2;
// }

// function Operate(operator, num1, num2) {
//     if (operator === "+") return add(num1, num2);
//     if (operator === "-") return subtract(num1, num2);
//     if (operator === "*") return multiply(num1, num2);
//     if (operator === "/") return divide(num1, num2);
//     return "Error: Invalid Operator";
// }

// // Update display
// function updateDisplay() {
//     const display = document.getElementById("display");
//     display.value = displayValue || "0";
// }

// // Digit buttons
// const digitButtons = document.querySelectorAll(".digit");
// digitButtons.forEach(button => {
//     button.addEventListener("click", () => {
//         if (resetDisplay) {
//             displayValue = ""; // Clear the display for a new number
//             resetDisplay = false;
//         }
//         displayValue += button.innerText; // Append the digit
//         updateDisplay();
//     });
// });

// // Operator buttons
// const operatorButtons = document.querySelectorAll("#operator");
// operatorButtons.forEach(button => {
//     button.addEventListener("click", () => {
//         if (displayValue === "") return; // Skip if no number is entered
//         num1 = parseFloat(displayValue); // Store the first number
//         operator = button.innerText;    // Store the operator
//         resetDisplay = true;            // Flag to reset display on next input
//     });
// });

// // Equals button
// const equalsButton = document.getElementById("equal");
// equalsButton.addEventListener("click", () => {
//     if (num1 === null || displayValue === "" || !operator) return;
//     num2 = parseFloat(displayValue); // Store the second number
//     const result = Operate(operator, num1, num2); // Perform the operation
//     displayValue = result.toString(); // Update the display with the result
//     updateDisplay();

//     // Reset state for the next calculation
//     num1 = null;
//     num2 = null;
//     operator = null;
//     resetDisplay = true; // Prepare to reset the display
// });

// // Clear button
// const clearButton = document.getElementById("clear");
// clearButton.addEventListener("click", () => {
//     displayValue = "";
//     num1 = null;
//     num2 = null;
//     operator = null;
//     resetDisplay = false; // Ensure no premature reset
//     updateDisplay();
// });



let num1 = null;
let operator = null;
let num2 = null;
let displayValue = "";
let resetDisplay = false; // Flag to track if display should reset

// Functions for basic operations
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function divide(num1, num2) {
    return num2 !== 0 ? num1 / num2 : "Error: Division by 0";
}

function multiply(num1, num2) {
    return num1 * num2;
}

function Operate(operator, num1, num2) {
    if (operator === "+") return add(num1, num2);
    if (operator === "-") return subtract(num1, num2);
    if (operator === "*") return multiply(num1, num2);
    if (operator === "/") return divide(num1, num2);
    return "Error: Invalid Operator";
}

// Update display
function updateDisplay() {
    const display = document.getElementById("display");
    if (num1 !== null && operator !== null) {
        display.value = `${num1} ${operator} ${displayValue}`;
    } else {
        display.value = displayValue || "0";
    }
}

// Digit buttons
const digitButtons = document.querySelectorAll(".digit");
digitButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (resetDisplay) {
            displayValue = ""; // Clear the display for a new number
            resetDisplay = false;
        }
        displayValue += button.innerText; // Append the digit
        updateDisplay();
    });
});

// Operator buttons
const operatorButtons = document.querySelectorAll("#operator");
// operatorButtons.forEach(button => {
//     button.addEventListener("click", () => {
//         if (displayValue === "") return;
//         if (num1 === null) {
//             num1 = parseFloat(displayValue);
//         } else if (operator !== null) {
//             num2 = parseFloat(displayValue);
//             const result = Operate(operator, num1, num2);
//             num1 = result;
//             displayValue = "";
//         }
//         operator = button.innerText;
//         resetDisplay = true;
//         updateDisplay();
//     });
// });

operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (displayValue === "") return; // Skip if no number is entered

        if (num1 === null) {
            num1 = parseFloat(displayValue); // Store the first number
        } else if (operator !== null) {
            // If an operator is already selected, calculate the intermediate result
            num2 = parseFloat(displayValue);
            const result = Operate(operator, num1, num2);
            num1 = result; // Use the result as the new first number
        }

        operator = button.innerText; // Store the selected operator
        resetDisplay = true; // Flag to clear display for the second number
        displayValue = ""; // Clear displayValue for the next number
        updateDisplay(); // Show the first number and operator only
    });
});

// Equals button
const equalsButton = document.getElementById("equal");
equalsButton.addEventListener("click", () => {
    if (num1 === null || displayValue === "" || !operator) return;
    num2 = parseFloat(displayValue);
    const result = Operate(operator, num1, num2);
    displayValue = result.toString();
    num1 = null;
    num2 = null;
    operator = null;
    resetDisplay = true;
    updateDisplay();
});

// Clear button
const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", () => {
    displayValue = "";
    num1 = null;
    num2 = null;
    operator = null;
    resetDisplay = false;
    updateDisplay();
});
