// Create a function that takes a string of name and checks how much good is the given name.
// Add up the letters of your name to get the total score.

// Return your result as per the following rules:
// score <= 60: "NOT TOO GOOD"
// 61 <= score <= 300: "PRETTY GOOD"
// 301 <= score <= 599: "VERY GOOD"
// score >= 600: "THE BEST"

// console.log(getNameScore("robot")); //"Your score 979, which is THE BEST"
// console.log(getNameScore("man")); // "Your score 575, which is VERY GOOD"

const { isValidStr } = require("./utils");

const scores = {
  A: 100,
  B: 14,
  C: 9,
  D: 28,
  E: 145,
  F: 12,
  G: 3,
  H: 10,
  I: 200,
  J: 100,
  K: 114,
  L: 100,
  M: 25,
  N: 450,
  O: 80,
  P: 2,
  Q: 12,
  R: 400,
  S: 113,
  T: 405,
  U: 11,
  V: 10,
  W: 10,
  X: 3,
  Y: 210,
  Z: 23,
};

function getNameScore(name) {
  if (!isValidStr(name)) {
    throw new Error("Value must be not empty string.");
  }

  let score = 0;
  let result = "";

  for (let char of name?.toUpperCase().trim().split("")) {
    if (scores[char] === undefined) {
      throw new Error(
        `There is no provided score for such character as ${char}.`
      );
    }

    score += scores[char];
  }

  switch (true) {
    case score <= 60:
      result = "NOT TOO GOOD";
      break;
    case score <= 300:
      result = "PRETTY GOOD";
      break;
    case score <= 599:
      result = "VERY GOOD";
      break;
    default:
      result = "THE BEST";
  }

  return `Your score ${score}, which is ${result}`;
}

console.log(getNameScore("robot"));
console.log(getNameScore("man"));
