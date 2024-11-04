// Write a function that reverses all the words in a sentence that start with a particular letter.

// console.log(specialReverse("word searches are super fun", "s")) //"word sehcraes are repus fun"
// console.log(specialReverse("first man to walk on the moon", "m")) //"first nam to walk on the noom"

const { isValidStr } = require("./utils");

function specialReverse(string, letter) {
  if (!isValidStr(string) || !isValidStr(letter)) {
    throw new Error("Values must be not an empty strings.");
  }

  const wordStartsWithLetter = new RegExp(`\\b(${letter})\\w*`, "g");
  const isUpperCaseLetter = /^[A-Z]$/.test(letter);

  return string?.replace(wordStartsWithLetter, (matchWord) => {
    return matchWord
      .split("")
      .reverse()
      .map((char, index) => {
        if (isUpperCaseLetter) {
          return index === 0 ? char.toUpperCase() : char.toLowerCase();
        }

        return char;
      })
      .join("");
  });
}

console.log(specialReverse("word searches are super fun", "s"));
console.log(specialReverse("first man to walk on the moon", "m"));
console.log(specialReverse("first man to walk on the moon", "F"));
console.log(specialReverse("First man First to walk on the moon", "F"));
