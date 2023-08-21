// Basic Function //
function addNumbers(num1, num2) {
    return num1 + num2
}
console.log(addNumbers(3, 5), addNumbers(8, 5), addNumbers(8, 10));

// Function with Conditional Statements //
function findMax(par1, par2) {
    if (par1 > par2) {
        return (par1);
    }
    else if (par2 > par1) {
        return (par2);
    }
    else {
        return ("Both are equal");
    }
}
console.log(findMax(3, 5), findMax(8, 5), findMax(8, 8));

// Nested Function //
function compute(num1, num2, operation) {
    function add() {
        return num1 + num2;
    }
    function substract() {
        return num1 - num2;
    }
    function multiply() {
        return num1 * num2;
    }
    function divide() {
        return num1 / num2;
    }

    if (operation === "add") {
        return add();
    }
    else if (operation === "substract") {
        return substract();
    }
    else if (operation === "multiply") {
        return multiply();
    }
    else if (operation === "divide" && num2 !== 0) {
        return divide();
    }
    else { return ("Invalid Operation") }
}

console.log(compute(5, 2, "add"), compute(5, 3, "substract"), compute(5, 2, "multiply"), compute(10, 10, "divide"), compute(10, 0, "divide"));