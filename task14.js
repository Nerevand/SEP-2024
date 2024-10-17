// Write a function that reverses an array without modifying the original array.

function reverseArray(arr) {
  //   ES6;
  return [...arr].reverse();

  //   ES5;
  //   return arr.slice().reverse();

  //   toReversed()
  //   return arr.toReversed();
}

reverseArray([1, 2, 3]); // [3, 2, 1]
