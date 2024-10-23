// Write a Javascript program to split a delimited string into an array.
// Sample output:
// Original delimited string:
// “Red, Green, Blue, 1, White, 3, 4, 5, 7” String to arrays:
// ["Red", "Green", "Blue", "White"] > [1, 3, 4, 5, 7]

const splitStrIntoArr = (str) => {
  if (!str.trim() || typeof str !== "string") {
    throw new Error("String must not be empty.");
  }

  const elementsList = str.split(",").map((elem) => elem.trim());

  const strArr = [];
  const numbArr = [];

  elementsList.forEach((element) => {
    if (!isNaN(element) && element !== "") {
      numbArr.push(element);
    } else {
      strArr.push(element);
    }
  });

  return { strArr, numbArr };
};

splitStrIntoArr("Red, Green, Blue, 1, White, 3, 4, 5, 7");
