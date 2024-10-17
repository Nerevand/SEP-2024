// Write a function that takes a string and converts it to a number. If the conversion is not possible, return null.

function convertToNumber(str) {
  const convertedStr = isNaN(Number(str)) ? null : str;
  return convertedStr;
}

convertToNumber("42"); // 42
convertToNumber("abc"); // null
