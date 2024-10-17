// Write a function that merges two arrays, removing duplicate elements.

function mergeArrays(arr1, arr2) {
  //   ES6
  return [...new Set([...arr1, ...arr2])];

  //   ES5
  //   var mergedArray = arr1.concat(arr2);
  //   var filteredArr = [];
  //   for (var i = 0; i < mergedArray.length; i++) {
  //     if (filteredArr.indexOf(mergedArray[i]) === -1) {
  //       filteredArr.push(mergedArray[i]);
  //     }
  //   }
  //   return filteredArr;
}

mergeArrays([1, 2], [2, 3]); // [1, 2, 3]
