// Write a function that takes an array and returns an array of unique values.

function getUnique(arr) {
  //   ES6
  return [...new Set(arr)];

  //   or
  //   const resultedArr = arr.filter(
  //     (item, index, arr) => arr.indexOf(item) === index
  //   );
  //   return resultedArr;

  //   ES5
  //   var resultedArr = [];
  //     for (var i = 0; i < arr.length; i++) {
  //       if (resultedArr.indexOf(arr[i]) === -1) {
  //         resultedArr.push(arr[i]);
  //       }
  //     }
  //   return resultedArr;
}

getUnique([1, 2, 2, 3, 3]); // [1, 2, 3]
