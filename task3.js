// Create a function that takes a number as its parameter and returns another function.
// The returned function must take an array of numbers as its parameter, and return an
// array of the numbers divided by the number that was passed into the first function.

// console.log(divide5([10, 20, 25])); // [2, 4, 5]
// console.log(divide3([6, 21, 27])); // [2, 7, 9]

const { isValidNumber, isValidArray } = require("./utils");

function arrayDivisionFactory(num) {
  if (!isValidNumber(num) || num === 0) {
    throw new Error("Provide any valid number exept 0.");
  }

  return (arr) => {
    if (!isValidArray(arr) || !arr.every((numElem) => isValidNumber(numElem))) {
      throw new Error("Provide an array of numbers.");
    }

    return arr.map((item) => item / num);
  };
}

const divide5 = arrayDivisionFactory(5);
console.log(divide5([10, 20, 25]));
const divide3 = arrayDivisionFactory(3);
console.log(divide3([6, 21, 27]));
