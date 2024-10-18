// Write a function that compares two arrays for equality (same elements in the same order).

function isArraysEqual(arr1, arr2) {
  //   ES6
  if (arr1.length !== arr2.length) {
    return false;
  }

  return arr1.every((value, index) => value === arr2[index]);

  //   ES5
  //   if (arr1.length !== arr2.length) {
  //     return false;
  //   }
  //   for (var i = 0; i < arr1.length; i++) {
  //     if (arr1[i] !== arr2[i]) {
  //       return false;
  //     }
  //   }
  //   return true;
}

isArraysEqual([1, 2, 3], [1, 2, 3]); // true
isArraysEqual([1, 2, 3], [3, 2, 1]); // false
