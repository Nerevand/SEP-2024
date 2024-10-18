// Write a function that takes an array of objects and returns an array of values for a specific key.

function getValuesByKey(arr, key) {
  //   ES6
  return arr.map((obj) => obj[key]).filter((value) => value !== undefined);

  //   ES5
  //   var resultedArr = [];
  //   for (var i = 0; i < arr.length; i++) {
  //     if (arr[i].hasOwnProperty(key)) {
  //       resultedArr.push(arr[i][key]);
  //     }
  //   }
  //   return resultedArr;
}

getValuesByKey([{ a: 1 }, { a: 2 }, { a: 3 }], "a"); // [1, 2, 3]
