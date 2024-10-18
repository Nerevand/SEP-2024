// Write a function that reverses an array without modifying the original array.

const deepCopy = (obj) => {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  const copiedObj = Array.isArray(obj) ? [] : {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      copiedObj[key] = deepCopy(obj[key]);
    }
  }

  return copiedObj;
};

function reverseArray(arr) {
  const copiedArray = arr.map((item) => deepCopy(item));

  return copiedArray.reverse();
}

reverseArray([1, 2, 3]); // [3, 2, 1]
