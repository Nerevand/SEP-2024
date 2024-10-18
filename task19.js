// Write a recursive function that calculates the sum of numbers in an array.

function sumArray(arr) {
  if (arr.length === 0) {
    return 0;
  }

  return arr[0] + sumArray(arr.slice(1));
}

sumArray([1, 2, 3]); // 6
