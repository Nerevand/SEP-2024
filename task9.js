// Write a function that converts an object into an array of key-value pairs.

function objectToPairs(obj) {
  //   ES6
  return Object.entries(obj);

  //   ES5
  //   var resultedArr = [];
  //   for (var key in obj) {
  //     if (obj.hasOwnProperty(key)) {
  //       resultedArr.push([key, obj[key]]);
  //     }
  //   }
  //   return result;
}

objectToPairs({ a: 1, b: 2 }); // [['a', 1], ['b', 2]]
