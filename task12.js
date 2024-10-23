// Write a function swap(a, b) that swaps two variables using array destructuring and return that variables

const swap = (a, b) => {
  if (a && b) {
    [a, b] = [b, a];
    return [a, b];
  }
};

swap(3, "cat");
