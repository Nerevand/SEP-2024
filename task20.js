// Write a function that returns the largest number in an array.

function findMax(arr) {
  //   ES6
  return Math.max(...arr);

  //   ES5
  //   return Math.max.apply(null, arr);

  //   or
  //   let number = 0;
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] >= number) {
  //       number = arr[i];
  //     }
  //   }
  //   return number;
}

findMax([1, 5, 3, 9, 2]); // 9
