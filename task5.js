// Write a function that takes an object and returns a new object with only the keys whose values are strings.

function filterStrings(obj) {
  //   ES6
  return Object.fromEntries(
    Object.entries(obj).filter(([_key, value]) => typeof value === "string")
  );

  //   ES5
  //   var result = {};
  //   for (var key in obj) {
  //     if (obj.hasOwnProperty(key) && typeof obj[key] === "string") {
  //       result[key] = obj[key];
  //     }
  //   }
  //   return result;
}

filterStrings({ a: 1, b: "text", c: true }); // {b: 'text'}
