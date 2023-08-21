// Step 1//
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

//Step 2//
// Arrow Function //
const squareNumber = (number) => number * number;
console.log(squareNumber(2 * 2));

// Understanding Scopes //
let globalVar = 5;

console.log(squareNumber(globalVar));

const squareNumber1 = (number1) => { let localVar = 6; return localVar * localVar } //the return won't show in the console since it's a localVar//

// Step 3 //
//For loop// 
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//While Loop//
let j = 10;

while (j >= 1) {
    console.log(j);
    j--;
}

// Do-While Loop with Conditionals //
let i = 1;

do {
    if (i % 2 === 0) {
        console.log(i);
    }
    i++;
} while (i <= 10);

// Advanced Loop Challenge //
let favoriteFruits = ["avocado", "mango", "plum", "peach", "kiwi", "banana"];

for (let fruit of favoriteFruits) {
    if (fruit.length > 5) {
        console.log(fruit);
    }
}