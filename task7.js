// Write a function checkNumber(n) that returns 'Positive', 'Negative', or 'Zero' based on the input number.
// Sample output:
// checkNumber(5) => Positive
// checkNumber(0) => Zero

const checkNumber = (n) => {
  if (typeof n !== "number" || Number.isNaN(n)) {
    throw new Error("Provided value must be a valid integer.");
  }

  return n > 0 ? "Positive" : n < 0 ? "Negative" : "Zero";

  //   or
  //   const convertedNumber = Math.sign(n);

  //   if (convertedNumber === 1) {
  //     return "Positive";
  //   } else if (convertedNumber === -1) {
  //     return "Negative";
  //   } else {
  //     return "Zero";
  //   }
};

checkNumber(5);
