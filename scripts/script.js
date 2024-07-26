const calculatorContainer = document.querySelector("#calculator-container");

/*
const clearButtonsContainer = document.querySelector("#clear-buttons-container");
const additionalOperationsContainer = document.querySelector("#additional-operations-container");
const numericButtonsContainer = document.querySelector("#numeric-buttons-container");
const arithmeticButtonsContainer = document.querySelector("#arithmetic-buttons-container");
*/

// Result row
const resultRow = document.createElement("div");
resultRow.id = "result-row";
resultRow.textContent = "0";
calculatorContainer.appendChild(resultRow);


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
const allClearButton = document.createElement("button");
allClearButton.id = "all-clear-button";
allClearButton.textContent = "AC";
allClearButton.classList.add("additional-button");
firstRowContainer.appendChild(allClearButton);

// Add percent button
const percentButton = document.createElement("button");
percentButton.id = "percent-button";
percentButton.textContent = "%";
percentButton.classList.add("additional-button");
firstRowContainer.appendChild(percentButton);

// Add plus/minus negative button
const plusMinusButton = document.createElement("button");
plusMinusButton.id = "plus-minus-button";
plusMinusButton.textContent = "+/-";
plusMinusButton.classList.add("additional-button");
firstRowContainer.appendChild(plusMinusButton);

// Division button
const divisionButton = document.createElement("button");
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
const multiplyButton = document.createElement("button");
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
const subtractButton = document.createElement("button");
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
const sumButton = document.createElement("button");
sumButton.id = "sum-button";
sumButton.textContent = "+";
sumButton.classList.add("arithmetic-button");
fourthRowContainer.appendChild(sumButton);

calculatorContainer.appendChild(fourthRowContainer);

// Fifth row
// Add zero button
const zeroButton = document.createElement("button");
zeroButton.id = "zero-button";
zeroButton.textContent = "0";
zeroButton.classList.add("numeric-button");
fifthRowContainer.appendChild(zeroButton);

// Add decimal button
const decimalButton = document.createElement("button");
decimalButton.id = "decimal-button";
decimalButton.textContent = ".";
decimalButton.classList.add("numeric-button");
fifthRowContainer.appendChild(decimalButton);

// Add equals button
const equalsButton = document.createElement("button");
equalsButton.id = "equals-button";
equalsButton.textContent = "=";
equalsButton.classList.add("arithmetic-button");
fifthRowContainer.appendChild(equalsButton);

calculatorContainer.appendChild(fifthRowContainer);

