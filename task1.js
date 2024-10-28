//  Write a JavaScript program to pick a specified number of unique random elements from a given array (so that no element is selected more than once).
//  Sample Output:
//  Original array:
//  [12, 34, 23, 56]
//  2 random elements from the array.
//  [34, 12]
//  3 random elements from the array.
//  [56, 12, 34]

//  If an element is already selected, it cannot be selected again.

const findRandomElements = (arr, elemCount) => {
  switch (true) {
    case !Array.isArray(arr):
      throw new Error("Array expected.");
    case !arr.length:
      throw new Error("Array is empty.");
    case elemCount > arr.length:
      throw new Error(
        "Provided number of requested elements is bigger, than array length."
      );
    case !Number.isInteger(elemCount) || elemCount <= 0:
      throw new Error(
        "Provided 'elemCount' value must be positive integer, grater or equal to 0."
      );
  }

  for (let currentIndex = arr.length - 1; currentIndex > 0; currentIndex--) {
    const randomIndex = Math.floor(Math.random() * arr.length);

    [arr[currentIndex], arr[randomIndex]] = [
      arr[randomIndex],
      arr[currentIndex],
    ];
  }

  return arr.slice(0, elemCount);

  // or

  // const savedIndexes = new Set();
  // const resultedArr = [];

  // while (resultedArr.length < elemCount) {
  //   const randomIndex = Math.floor(Math.random() * uniqueElements.length);

  //   if (!savedIndexes.has(randomIndex)) {
  //     resultedArr.push(uniqueElements[randomIndex]);
  //     savedIndexes.add(randomIndex);
  //   }
  // }

  // return resultedArr;
};

findRandomElements([12, 34, 23, 56], 2);
