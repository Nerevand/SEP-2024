// Write a function checkEvenOdd(n) that uses a ternary operator to return 'Even' if the number is even and 'Odd' if it's odd.
// Sample output:
// checkEvenOdd(5) => Odd

const checkEvenOdd = (n) => {
  if (typeof n !== "number" || Number.isNaN(n) || !Number.isInteger(n)) {
    throw new Error("Provided value must be a valid integer.");
  }

  return n % 2 ? "Odd" : "Even";
};

checkEvenOdd(5);
