// Step 1 //
// Array Creation //

let fiveNumbers = [5, 7, 13, 15, 19];
console.log(fiveNumbers);

// Object Creation //
const personalInfo = {
    name: "Mayssaê",
    age: 30,
    height: 1.55,
    locations: "Sawfar",
    nationality: "Lebanese",
    contactInfo:
    {
        email: "mayssae.ahmadie@gmail.com",
        phone: "71 899858",
    }
};
console.log(personalInfo);

// Step 2 //
// New Array with Spread //

let nextThreeNumbers = [22, 24, 28];
console.log(nextThreeNumbers);

const allNumbers = [...fiveNumbers, ...nextThreeNumbers];
console.log(allNumbers);

// New Object with Spread //
const additionalInfo = {
    occupation: "Dentist",
    hobby: "Hiking",
    education: "Doctor of dental surgery, USJ",
};
console.log(additionalInfo);

const fullInfo = { ...personalInfo, ...additionalInfo };
console.log(fullInfo);

// Step 3 //
// Destructuring Arrays //
const [firstNum, secondNum, thirdNum, fourthNum, fifthNum] = fiveNumbers;

console.log(firstNum);
console.log(secondNum);
console.log(thirdNum);

// Destructuring Objects //
const { name, age, height, locations, nationality, contactInfo: { email, phone } } = personalInfo;
console.log(name);
console.log(locations);
console.log(nationality);

// Step 4 //
// Nested Destructuring //
console.log(email);
console.log(phone);

// Rest with Destructuring //
const [num1, num2, ...restOfNumbers] = fiveNumbers;

console.log(num1);
console.log(num2);
console.log(restOfNumbers);

// Merging and Overwriting with Spread //
const obj1 = {
    name: "Mayssaê",
    age: 30,
    occupation: "Dentist",
    locations: "Sawfar"
};

const obj2 = {
    occupation: "Full-stack Developer",
    hobby: "Hiking"
};

const mergedObject = { ...obj1, ...obj2 };

console.log(mergedObject);



