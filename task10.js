// Write a function that calculates the average of elements in an array.

function getAverage(arr) {
  //   ES6
  if (!arr.length) {
    return "Array is empty.";
  }

  if (arr.some((item) => typeof item !== "number")) {
    return "Can't calculate the average. Some of elements are not numbers.";
  }

  const sum = arr.reduce((acc, item) => acc + item, 0);
  return sum / arr.length;

  //   ES5
  // const isNumberArr = arr.some(function (item) {
  //   return typeof item !== "number";
  // });

  // if (!arr.length) {
  //    return "Array is empty.";
  // }

  // if (isNumberArr) {
  //   return "Can't calculate the average. Some of elements are not numbers.";
  // }

  //   var sum = 0;
  //   for (var i = 0; i < arr.length; i++) {
  //     sum += arr[i];
  //   }
  //   sum = sum / arr.length;
  //   return sum
}

getAverage([10, 20, 30]); // 20
