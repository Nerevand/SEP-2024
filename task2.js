// Create a function that takes a "base number" as an argument.
// This function should return another function which takes a new argument,
// and returns the sum of the "base number" and the new argument.
// plusFive(2); // ➞ 7
// plusTen(188); // ➞ 198
// plusFive(plusTen(0)); // ➞ 15

const { isValidNumber } = require("./utils");

function plusFactory(num) {
  return (num2) => {
    if (!isValidNumber(num) || !isValidNumber(num2)) {
      throw new Error("Provided values must be numbers.");
    }

    return num + num2;
  };
}

const plusFive = plusFactory(5);
plusFive(2);
const plusTen = plusFactory(10);
plusTen(188);
plusFive(plusTen(0));
