// write a function which returns a Fibonacci value for a given number with a loop.
// Sample output:
// getFibonacci(10) => 55

const getFibonacci = (n) => {
  if (typeof n !== "number" || !Number.isInteger(n) || n < 0) {
    throw new Error("Provided value must be positive integer.");
  }

  if (n === 0) return 0;
  if (n === 1) return 1;

  let a = 0;
  let b = 1;

  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }

  return b;
};

getFibonacci(10);
