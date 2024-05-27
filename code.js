
//basic operations
function addNum (...num) {
    return num.reduce((sum, currentNum) => sum + currentNum, 0);
}

function subNum (...num) {
    return num.reduce((difference, currentNum) => difference - currentNum, 0);
}

function multiplyNum (...num) {
    return num.reduce((product, currentNum) => product * currentNum, 0);
}

function divideNum (...num) {
    return num.reduce((quotient, currentNum) => quotient/currentNum, 0);
}