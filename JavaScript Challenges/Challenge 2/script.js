//Step 1//
let myAge = 30;
console.log(myAge);

if (myAge >= 20) { console.log("You can enter this room."); }
else { console.log("You can't enter this room."); }

const expression1 = 5 > 3;
const expression2 = 10 === '10';
const expression3 = true && false;
const expression4 = !expression3;

console.log(expression1);
console.log(expression2);
console.log(expression3);
console.log(expression4);

//Step 2//
const age = 25;
const hasDriverLicense = true;
const hasCar = false;

let canDrive = false;
if (age >= 18 && hasDriverLicense == true) canDrive = true;
console.log(canDrive);
let canRentCar = false;
if (age >= 22 && hasDriverLicense == true && hasCar == false) canRentCar = true;
console.log(canRentCar);
let needDriver = false;
if (age < 18 && hasDriverLicense == false && hasCar == false) needDriver = true;
console.log(needDriver);



