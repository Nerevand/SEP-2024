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

  let start = n;

  while (start > 0) {
    console.log(start);
    start--;
  }
};

countDown(20);
