// Write a function which returns a factorial of a given number with a loop.
// Sample output:
// getFactorial(5) => 120

const getFactorial = (n) => {
  if (n < 0) {
    throw new Error("Positive numbers must be provided.");
  }

  if (typeof n !== "number" || !Number.isInteger(n)) {
    throw new Error("Integer must be provided.");
  }

  let result = 1;

  for (let i = n; i > 1; i--) {
    result *= i;
  }

  return result;
};

getFactorial(5);
