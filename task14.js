// Write a function that reverses an array without modifying the original array.

const deepCopy = require("./task4");

function reverseArray(arr) {
  const copiedArray = arr.map((item) => deepCopy(item));

  return copiedArray.reverse();
}

reverseArray([1, 2, 3]); // [3, 2, 1]
