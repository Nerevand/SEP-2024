// Write a function that merges two objects. If keys are the same, take values from the second object.

function mergeObjects(obj1, obj2) {
  //   ES6
  return { ...obj1, ...obj2 };

  //   ES5
  //   var resultedObj = {};
  //   for (var key in obj1) {
  //     if (obj1.hasOwnProperty(key)) {
  //       resultedObj[key] = obj1[key];
  //     }
  //   }
  //   for (var key in obj2) {
  //     if (obj2.hasOwnProperty(key)) {
  //       resultedObj[key] = obj2[key];
  //     }
  //   }
  //   return resultedObj;
}

mergeObjects({ a: 1, b: 2 }, { b: 3, c: 4 }); // {a: 1, b: 3, c: 4}
