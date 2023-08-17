console.log('I am linked now!');

//Step 2//
let name = "Mayssaê";
alert(name);

//Step 3//
let age = 30;
const lastName = "El Ahmadié";
var DOB = "15-11-1992"

console.log(age);
console.log(lastName);
console.log(DOB);

//The const value is constant. An error will occur if we assign a new value to the lastName//

//Step 4//
console.log(typeof ("This is a text"));
console.log(typeof (true));
console.log(typeof (false));
console.log(typeof (1215));
console.log(typeof ("999"));
console.log(typeof ({}));
console.log(typeof ([]));
console.log(typeof (null));
console.log(typeof (undefined));

let v1 = 1234;
let v2 = "Welcome to Javsascript";
let v3 = {};
let v4 = [1, 2, 3, 4, 5];
let v5 = true
let v6 = null;

console.log(v1 + " " + typeof (v1));
console.log(v2 + " " + typeof (v2));
console.log(v3 + " " + typeof (v3));
console.log(v4 + " " + typeof (v4));
console.log(v5 + " " + typeof (v5));
console.log(v6 + " " + typeof (v6));

//Step 5//
let myText = "Learning Javascript";
let w1 = "myText";
let w2 = 'myText';
let w3 = `myText`;

const counter = 3;
const backtick = `This is my text using backticks ${counter} times`;
const singleQuote =
    'This is my text using single quotations ${counter} times';
const doubleQuote =
    "This is my text using double quotations ${counter} times";
const tryThisAlso = `This is my new version, it’s the ${2 + 3}th version`;

console.log(backtick);
console.log(singleQuote);
console.log(doubleQuote);
console.log(tryThisAlso);

//The ${counter} is only functional in the backtick option"

//Step 6//
let s1 = "25";
let s2 = "25";
let result = s1 + s2;
console.log(result);
