// Write a function that takes a string and converts it to a number. If the conversion is not possible, return null.

function convertToNumber(str) {
  const convertedValue = Number(str);

  return isNaN(convertedValue) ? null : convertedValue;
}

convertToNumber("42"); // 42
convertToNumber("abc"); // null
