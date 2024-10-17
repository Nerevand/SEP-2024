// Write a function that calculates the average of elements in an array.

function getAverage(arr) {
  //   ES6
  const sum = arr.reduce((acc, item) => acc + item, 0);
  return sum / arr.length;

  //   ES5
  //   var sum = 0;
  //   for (var i = 0; i < arr.length; i++) {
  //     sum += arr[i];
  //   }
  //   sum = sum / arr.length;
  //   return sum
}

getAverage([10, 20, 30]); // 20
