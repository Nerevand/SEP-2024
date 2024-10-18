// Write a function that performs a deep copy of an object (without using JSON).

function deepCopy(obj) {
  //   structuredClone
  const copiedObj = structuredClone(obj);
  return copiedObj;

  //   or
  //   if (typeof obj !== "object" || obj === null) {
  //     return obj;
  //   }
  //   const copiedObj = Array.isArray(obj) ? [] : {};
  //   for (const key in obj) {
  //     copiedObj[key] = deepCopy(obj[key]);
  //   }
  //   return copiedObj;
}

const obj = { a: 1, b: { c: 2 } };
deepCopy(obj); // {a: 1, b: {c: 2}}

module.exports = deepCopy;
