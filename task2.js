// Write a Javascript function that take any set of numbers, and it will return their sum and print the original numbers and the sum.
// Sample Output:
// Sum of the values: 125

const sumOfNumbers = (...args) => {
  if (
    !args.every(
      (argument) => typeof argument === "number" && !Number.isNaN(argument)
    )
  ) {
    throw new Error("All parameters must be numbers.");
  }

  const sum = args.reduce((a, b) => a + b, 0);

  console.log(`Original numbers: ${args.join(", ")}.`);
  console.log(`Sum of the values: ${sum}.`);

  return sum;
};

sumOfNumbers(5, 3, 5, 4);
