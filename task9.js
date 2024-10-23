// Write a function printEvenNumbers(limit) that prints all even numbers from 1 to the given limit using a 'for' loop.

const printEvenNumbers = (limit) => {
  if (
    typeof limit !== "number" ||
    Number.isNaN(limit) ||
    !Number.isInteger(limit) ||
    limit < 1
  ) {
    throw new Error(
      "Provided value must be a valid integer, that starts from 1"
    );
  }

  for (let i = 1; i <= limit; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
};

printEvenNumbers(20);
