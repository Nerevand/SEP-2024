// Write a function that checks if a given value is an array.

function isArray(value) {
  //   ES6
  return Array.isArray(value);

  //   ES65
  //   return Object.prototype.toString.call(value) === "[object Array]";

  //   instanceof
  //   return value instanceof Array;
}

isArray([1, 2, 3]); // true
isArray("text"); // false
