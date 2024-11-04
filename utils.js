const isValidStr = (str) => typeof str === "string" && str.trim();

const isValidNumber = (value) =>
  typeof value === "number" && Number.isInteger(value);

const isValidArray = (array) => Array.isArray(array) && array.length;

module.exports = { isValidStr, isValidNumber, isValidArray };
