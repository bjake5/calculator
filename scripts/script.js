const calculatorContainer = document.querySelector("#calculator-container");
const resultRow = document.createElement("div");
const allClearButton = document.createElement("button");
const backspaceButton = document.createElement("button");
const squaredButton = document.createElement("button");
const percentButton = document.createElement("button");
const plusMinusButton = document.createElement("button");
const divisionButton = document.createElement("button");
const multiplyButton = document.createElement("button");
const subtractButton = document.createElement("button");
const sumButton = document.createElement("button");
const zeroButton = document.createElement("button");
const decimalButton = document.createElement("button");
const equalsButton = document.createElement("button");
const numericButtons = document.getElementsByClassName("numeric-button");

// Variables for calculator operation
let currentInputNumber = 0; // Variable to store current input number
let currentInputArray = []; // Array to store input numbers
let currentOperationResult = 0; // Display string
let operation = ""; // Active operation


// First step is to build the layout
buildCalculatorLayout();

function buildCalculatorLayout () {
    // Result row
    resultRow.id = "result-row";
    resultRow.textContent = "0";
    calculatorContainer.appendChild(resultRow);

    // Add row containers for button and assign class for CSS styling
    const topRowContainer = document.createElement("div");
    topRowContainer.classList.add("row-container");
    const firstRowContainer = document.createElement("div");
    firstRowContainer.classList.add("row-container");
    const secondRowContainer = document.createElement("div");
    secondRowContainer.classList.add("row-container");
    const thirdRowContainer = document.createElement("div");
    thirdRowContainer.classList.add("row-container");
    const fourthRowContainer = document.createElement("div");
    fourthRowContainer.classList.add("row-container");
    const fifthRowContainer = document.createElement("div");
    fifthRowContainer.classList.add("row-container");

    // Add clear all button
    allClearButton.id = "all-clear-button";
    allClearButton.textContent = String.fromCodePoint(0x1F5D1);
    allClearButton.classList.add("clear-button");
    topRowContainer.appendChild(allClearButton);

    // Add backspace button
    backspaceButton.id = "backspace-button";
    backspaceButton.textContent = String.fromCodePoint(0x1F519);
    backspaceButton.classList.add("clear-button");
    topRowContainer.appendChild(backspaceButton);    

    calculatorContainer.appendChild(topRowContainer);
    
    // Add percent button
    squaredButton.id = "squared-button";
    squaredButton.textContent = "x"+String.fromCodePoint(0xB2);
    squaredButton.classList.add("additional-button");
    firstRowContainer.appendChild(squaredButton);

    // Add percent button
    percentButton.id = "percent-button";
    percentButton.textContent = "%";
    percentButton.classList.add("additional-button");
    firstRowContainer.appendChild(percentButton);

    // Add plus/minus negative button
    plusMinusButton.id = "plus-minus-button";
    plusMinusButton.textContent = "+/-";
    plusMinusButton.classList.add("additional-button");
    firstRowContainer.appendChild(plusMinusButton);

    // Division button
    divisionButton.id = "division-button";
    divisionButton.textContent = "÷";
    divisionButton.classList.add("arithmetic-button");
    firstRowContainer.appendChild(divisionButton);

    calculatorContainer.appendChild(firstRowContainer);

    // Second row
    for(i=7; i<10; i++) {
        const button = document.createElement("button");
        button.id = i + "-button";
        button.textContent = i;
        button.classList.add("numeric-button");
        secondRowContainer.appendChild(button);
    };

    // Multiply button
    multiplyButton.id = "multiply-button";
    multiplyButton.textContent = "x";
    multiplyButton.classList.add("arithmetic-button");
    secondRowContainer.appendChild(multiplyButton);

    calculatorContainer.appendChild(secondRowContainer);


    // Third row
    for(i=4; i<7; i++) {
        const button = document.createElement("button");
        button.id = i + "-button";
        button.textContent = i;
        button.classList.add("numeric-button");
        thirdRowContainer.appendChild(button);
    };

    // Subtract button
    subtractButton.id = "subtract-button";
    subtractButton.textContent = "–";
    subtractButton.classList.add("arithmetic-button");
    thirdRowContainer.appendChild(subtractButton);

    calculatorContainer.appendChild(thirdRowContainer);

    // Fourth row
    for(i=1; i<4; i++) {
        const button = document.createElement("button");
        button.id = i + "-button";
        button.textContent = i;
        button.classList.add("numeric-button");
        fourthRowContainer.appendChild(button);
    };

    // Sum button
    sumButton.id = "sum-button";
    sumButton.textContent = "+";
    sumButton.classList.add("arithmetic-button");
    fourthRowContainer.appendChild(sumButton);

    calculatorContainer.appendChild(fourthRowContainer);

    // Fifth row
    // Add zero button
    zeroButton.id = "zero-button";
    zeroButton.textContent = "0";
    zeroButton.classList.add("numeric-button");
    fifthRowContainer.appendChild(zeroButton);

    // Add decimal button
    decimalButton.id = "decimal-button";
    decimalButton.textContent = ".";
    decimalButton.classList.add("numeric-button");
    fifthRowContainer.appendChild(decimalButton);

    // Add equals button
    equalsButton.id = "equals-button";
    equalsButton.textContent = "=";
    equalsButton.classList.add("arithmetic-button");
    fifthRowContainer.appendChild(equalsButton);

    calculatorContainer.appendChild(fifthRowContainer);

    currentOperationResult = 0; // Variable to store first number when second exists
    currentInputNumber = ""; // Variable to store current input number
    currentInputArray = []; // Array to store input numbers
    operation = ""; // Reset active operation
    handleButtonActivity();
    
};

// Build primary function to handle button click activity
function handleButtonActivity () {

    // Add support for all clear function  
    allClearButton.addEventListener("click", () => {
        currentInputNumber = ""; // Clear the current input number
        currentInputArray.length = 0; // Clear the current input array
        currentOperationResult = 0; // Clear the current operation result
        resultRow.textContent = currentOperationResult; // Update the result row to zero

    });    

    backspaceButton.addEventListener("click", () => {
        currentInputArray.pop();
        currentInputNumber = currentInputArray.join("");
        if (currentInputArray.length >1) {
            resultRow.textContent = currentInputNumber; 
            currentInputNumber = Number(currentInputNumber);
        }
        else resultRow.textContent = currentOperationResult;
    });  

    // Add support for percentages from whole integers to decimal representation
    squaredButton.addEventListener("click", () => {
        if (currentOperationResult == 0) {
            currentInputNumber = Number(currentInputNumber * currentInputNumber);
            resultRow.textContent = currentInputNumber; 
        } else {
            currentOperationResult = Number(currentInputNumber * currentInputNumber);
            resultRow.textContent = currentOperationResult; 
        };
    });    


    // Add support for percentages from whole integers to decimal representation
    percentButton.addEventListener("click", () => {
        currentInputNumber = Number(currentInputNumber / 100);
        resultRow.textContent = currentInputNumber; 
    });

    // Add support for switching the sign on a function
    plusMinusButton.addEventListener("click", () => {
        currentInputNumber = Number(currentInputNumber * -1);
        resultRow.textContent = currentInputNumber; 
    });

    Array.from(numericButtons).forEach((button) => {
        // and for each one we add a 'click' listener
        button.addEventListener("click", () => {
            if(button.textContent == '.' && currentInputArray.includes('.')) return false; // Validate that a decimal has not been submitted
            else {
            currentInputArray.push(button.textContent); // Add the last character to the input array
            currentInputNumber = currentInputArray.join(""); // Create a new current input number string from array
            resultRow.textContent = currentInputNumber; // Update display row with the current input number
            currentInputNumber = Number(currentInputNumber); // Convert input number to string to mitigate leading decimal handling issues
            };
        });
      });
    
    // Add support for basic mathematical functions
    sumButton.addEventListener("click", () => {
        operation = "sum";
        if(currentInputNumber != "") operate();
    });

    subtractButton.addEventListener("click", () => {
        operation = "subtract";
        if(currentInputNumber != "") operate();
    });

    multiplyButton.addEventListener("click", () => {
        operation = "multiply";
        if(currentInputNumber != "") operate();
    });

    divisionButton.addEventListener("click", () => {
        operation = "divide";
        if(currentInputNumber != "") operate();
    });

    equalsButton.addEventListener("click", () => {
        operate();
    });
};

function sum (x, y) {
    return x + y;
}

function subtract (x, y) {
    return x - y;
}

function multiply (x, y) {
    return x * y;
}

function divide (x, y) {
    return x / y;
}

// Add function to handle calculator operations
function operate () {
    if(currentOperationResult === 0 && currentInputNumber === 0) return false; // Determine if both inputs are false and should not operate
    else if (currentOperationResult === 0 && currentInputNumber !== 0) { // Determine if we have two inputs and can operate or wait for second input
        currentOperationResult = Number(currentInputNumber);
        currentInputNumber = "";
        currentInputArray.length = 0;
        return false;
    } else if (currentOperationResult !== 0 && operation !== "") { // Execute operation if we know which one and we have two inputs 
        if(operation == "sum"){
            currentOperationResult = Math.round(Number(sum(currentOperationResult,currentInputNumber)) * 1000) / 1000;
        } else if (operation == "subtract"){
            currentOperationResult = Math.round(Number(subtract(currentOperationResult,currentInputNumber)) * 1000) / 1000;
        } else if (operation == "multiply"){
            currentOperationResult = Math.round(Number(multiply(currentOperationResult,currentInputNumber)) * 1000) / 1000;
        } else if (operation == "divide"){
            currentOperationResult = Math.round(Number(divide(currentOperationResult,currentInputNumber)) * 1000) / 1000;
        };  
    };
    
    // Updat display row to new result
    resultRow.textContent = currentOperationResult;
    operation = "";
    currentInputNumber = "";
    currentInputArray.length = 0;
};

/*
function log () {
    console.log(currentInputArray);
    console.log(currentInputNumber);
    console.log(currentOperationResult);
};
*/