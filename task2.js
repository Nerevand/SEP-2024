// Write a function that takes a string and returns an array of individual characters from that string.

function stringToArray(str) {
  //   ES6
  return [...str];

  //   ES5;
  //   return str.split("");
}

stringToArray("hello"); // ['h', 'e', 'l', 'l', 'o']
