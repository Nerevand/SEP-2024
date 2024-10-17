// Write a function that checks if an object is empty.

function isEmptyObject(obj) {
  //   ES6
  return Object.keys(obj).length === 0;

  //   ES5
  //   for (var key in obj) {
  //     if (obj.hasOwnProperty(key)) {
  //       return false;
  //     }
  //   }
  //   return true;
}

isEmptyObject({}); // true
isEmptyObject({ a: 1 }); // false
