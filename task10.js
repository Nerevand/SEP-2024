// Write a function countDown(n) that prints numbers from n to 1 using a 'while' loop.

const countDown = (n) => {
  if (
    typeof n !== "number" ||
    Number.isNaN(n) ||
    !Number.isInteger(n) ||
    n < 1
  ) {
    throw new Error(
      "Provided value must be a valid integer, that starts from 1."
    );
  }

  while (n > 0) {
    console.log(n);
    n--;
  }
};

countDown(20);
