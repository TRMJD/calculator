
// Basic operations
function addNum(...num) {
    return num.reduce((sum, currentNum) => sum + currentNum, 0);
}

function subNum(...num) {
    //ensure at least one number is provided
    if (num.length === 0) return 0;
    //use the first number as the initial value and start reducing from the second number
    return num.slice(1).reduce((difference, currentNum) => difference - currentNum, num[0]);
}

function multiplyNum(...num) {
    
    if (num.length === 0) return 1;
    //use 1 as the initial value to avoid multiplying by 0
    return num.reduce((product, currentNum) => product * currentNum, 1);
}

function divideNum(...num) {
   
    if (num.length === 0) return 0;
    //use the first number as the initial value and start reducing from the second number
    return num.slice(1).reduce((quotient, currentNum) => quotient / currentNum, num[0]);
}


//variables for display
let num1, num2, operator, result;

function operate (num1,num2,operator) {
    if (operator === "+") {
        return result = addNum(num1,num2);
    }
    if (operator === "-") {
        return result = subNum(num1,num2);
    }
    if (operator === "*") {
        return result = multiplyNum(num1,num2);
    }
    if (operator === "/") {
        return result = divideNum(num1,num2);
    }
}

//function to update display
let dipslayArray = [];
const display = document.getElementById("display");
function updateDisplay () {
    //eventlistener for buttons

    //append numbers
}