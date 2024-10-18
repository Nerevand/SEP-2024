// Write a function that filters an array, leaving only elements of a certain type.

function filterByType(arr, type) {
  //   ES6
  return arr.filter((item) => typeof item === type);

  //   ES5
  //   var filteredArr = [];
  //   for (var i = 0; i < arr.length; i++) {
  //     if (typeof arr[i] === type) {
  //       filteredArr.push(arr[i]);
  //     }
  //   }
  //   return filteredArr;
}

filterByType([1, "a", true], "string"); // ['a']