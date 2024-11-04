//  Create function that unravels array of arrays like so:
//  const matrixArr = [
//  [1, 2, 3, 4],    // → → → ↴
//  [12, 13, 14, 5], // ↱ → ↴ ↓
//  [11, 16, 15, 6], // ↑ ↑ ↲ ↓
//  [10, 9, 8, 7]    // ↑ ← ← ↲
//  ];

// const matrixArr = [
//   [1, 2, 3, 4, 5],
//   [16, 17, 18, 19, 6],
//   [15, 24, 25, 20, 7],
//   [14, 23, 22, 21, 8],
//   [13, 12, 11, 10, 9],
// ];

//  [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
//  NOTE: initial array should stay the same

const { isValidNumber, isValidArray } = require("./utils");

const matrixArr = [
  [1, 2, 3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10, 9, 8, 7],
];

function unravelArr(arr) {
  const isValidMatrixArr = arr.every(
    (subArr) =>
      isValidArray(subArr) &&
      subArr.every((subArrElem) => isValidNumber(subArrElem))
  );

  if (!isValidArray(arr) || !isValidMatrixArr) {
    throw new Error("Value must be a not empty matrix of integers.");
  }

  const copiedArr = structuredClone(arr);
  let unraveled = [];

  while (copiedArr.length) {
    const top = copiedArr.shift();
    const right = copiedArr
      .map((row) => row.pop())
      .filter((numItem) => numItem !== undefined);
    const bottom = copiedArr.length ? copiedArr.pop().reverse() : [];
    const left = copiedArr
      .map((row) => row.shift())
      .reverse()
      .filter((numItem) => numItem !== undefined);

    unraveled = [...unraveled, ...top, ...right, ...bottom, ...left];
  }

  return unraveled;
}

console.log(unravelArr(matrixArr));
