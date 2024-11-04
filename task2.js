// Create a function that takes a "base number" as an argument.
// This function should return another function which takes a new argument,
// and returns the sum of the "base number" and the new argument.
// plusFive(2); // ➞ 7
// plusTen(188); // ➞ 198
// plusFive(plusTen(0)); // ➞ 15

const { isValidNumber } = require("./utils");

const isPlusFactoryNumValid = (number) => {
  if (!isValidNumber(number)) {
    throw new Error("Provided value must be a number.");
  }
};

function plusFactory(num) {
  isPlusFactoryNumValid(num);

  return (num2) => {
    isPlusFactoryNumValid(num2);

    return num + num2;
  };
}

const plusFive = plusFactory(5);
plusFive(2);
const plusTen = plusFactory(10);
plusTen(188);
plusFive(plusTen(0));
