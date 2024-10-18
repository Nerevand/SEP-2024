// Write a function that takes any value and returns its type as a string.

function getType(value) {
  switch (true) {
    case value === null:
      return "null";
    case value === undefined:
      return "undefined";
    case Array.isArray(value):
      return "array";
    case typeof value === "symbol":
      return "symbol";
    case typeof value === "number" && isNaN(value):
      return "nan";
    case typeof value === "function":
      return "function";
    case value instanceof Date:
      return "date";
    case value instanceof RegExp:
      return "regexp";
    case value instanceof Map:
      return "map";
    case value instanceof Set:
      return "set";
    case value instanceof WeakMap:
      return "weakmap";
    case value instanceof WeakSet:
      return "weakset";
    case value instanceof Error:
      return "error";
    case value instanceof ArrayBuffer:
      return "arraybuffer";
    case value instanceof DataView:
      return "dataview";
    default:
      return typeof value;
  }
}

getType(42); // 'number'
getType("hello"); // 'string'

module.exports = getType;
