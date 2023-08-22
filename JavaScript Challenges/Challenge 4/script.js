// Step 1 //
// Array Creation //

let fiveNumbers = [5, 7, 13, 15, 19];
console.log(fiveNumbers);

// Object Creation //
const personalInfo = {
    name: "Mayssaê",
    age: 30,
    height: 1.55,
    location: "Sawfar",
    nationality: "Lebanese",
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

