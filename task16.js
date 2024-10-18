// Write a function that checks if a string is a palindrome.

function isPalindrome(str) {
  //   ES6
  const strToCompare = str.toLowerCase();
  const reversedStr = strToCompare.split("").reverse().join("");

  return strToCompare === reversedStr;

  //   ES5
  //   var reversedStr = "";
  //   for (var i = str.length - 1; i >= 0; i--) {
  //     reversedStr += str[i];
  //   }
  //   return str === reversedStr;
}

isPalindrome("madam"); // true
isPalindrome("hello"); // false
