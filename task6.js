// Write a function that takes an array of numbers and returns an array of strings, where each number is converted to a string.

function convertNumbersToStrings(arr) {
  //   ES6
  return arr.map(String);

  //   ES5
  //   var result = [];
  //   for (var i = 0; i < arr.length; i++) {
  //     result.push(String(arr[i]));
  //   }
  //   return result;
}

convertNumbersToStrings([1, 2, 3]); // ['1', '2', '3']
