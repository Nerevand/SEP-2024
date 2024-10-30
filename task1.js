//  Create function that unravels array of arrays like so:
//  const matrixArr = [
//  [1, 2, 3, 4],    // → → → ↴
//  [12, 13, 14, 5], // ↱ → ↴ ↓
//  [11, 16, 15, 6], // ↑ ↑ ↲ ↓
//  [10, 9, 8, 7]    // ↑ ← ← ↲
//  ];

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

  while (copiedArr.length > 0) {
    let [top, right, bottom, left] = copiedArr;

    top = copiedArr.shift();
    right = copiedArr.map((row) => row.pop());
    bottom = copiedArr.pop().reverse();
    left = copiedArr.map((row) => row.shift()).reverse();

    unraveled = [...unraveled, ...top, ...right, ...bottom, ...left];
  }

  return unraveled;
}

console.log(unravelArr(matrixArr));
