# JS Data types task

1. Create a new branch from the current one _hw2_.
2. Inside folder _homework2_, create a folder with your GitHub nickname or name.
3. In that branch, create a few JS files with exercise numbers, for example task1.js, task2.js, etc.
4. In those files, implement solutions for the tasks.

**TASK 1**

> Write a function that takes any value and returns its type as a string.

Sample Output:

```js
function getType(value) {
  // Your code goes here
}

getType(42); // 'number'
getType("hello"); // 'string'
```

**TASK 2**

> Write a function that takes a string and returns an array of individual characters from that string.

Sample Output:

```js
function stringToArray(str) {
  // Your code goes here
}

stringToArray("hello"); // ['h', 'e', 'l', 'l', 'o']
```

**TASK 3**

> Write a function that merges two arrays, removing duplicate elements.

Sample Output:

```js
function mergeArrays(arr1, arr2) {
  // Your code goes here
}

mergeArrays([1, 2], [2, 3]); // [1, 2, 3]
```

**TASK 4**

> Write a function that performs a deep copy of an object (without using JSON).

Sample Output:

```js
function deepCopy(obj) {
  // Your code goes here
}

const obj = { a: 1, b: { c: 2 } };
deepCopy(obj); // {a: 1, b: {c: 2}}
```

**TASK 5**

> Write a function that takes an object and returns a new object with only the keys whose values are strings.

Sample Output:

```js
function filterStrings(obj) {
  // Your code goes here
}

filterStrings({ a: 1, b: "text", c: true }); // {b: 'text'}
```

**TASK 6**

> Write a function that takes an array of numbers and returns an array of strings, where each number is converted to a string.

Sample Output:

```js
function convertNumbersToStrings(arr) {
  // Your code goes here
}

convertNumbersToStrings([1, 2, 3]); // ['1', '2', '3']
```

**TASK 7**

> Write a function that takes an array and returns an array of unique values.

Sample Output:

```js
function getUnique(arr) {
  // Your code goes here
}

getUnique([1, 2, 2, 3, 3]); // [1, 2, 3]
```

**TASK 8**

> Write a function that checks if a given value is an array.

Sample Output:

```js
function isArray(value) {
  // Your code goes here
}

isArray([1, 2, 3]); // true
isArray("text"); // false
```

**TASK 9**

> Write a function that converts an object into an array of key-value pairs.

Sample Output:

```js
function objectToPairs(obj) {
  // Your code goes here
}

objectToPairs({ a: 1, b: 2 }); // [['a', 1], ['b', 2]]
```

**TASK 10**

> Write a function that calculates the average of elements in an array.

Sample Output:

```js
function getAverage(arr) {
  // Your code goes here
}

getAverage([10, 20, 30]); // 20
```

**TASK 11**

> Write a function that merges two objects. If keys are the same, take values from the second object.

Sample Output:

```js
function mergeObjects(obj1, obj2) {
  // Your code goes here
}

mergeObjects({ a: 1, b: 2 }, { b: 3, c: 4 }); // {a: 1, b: 3, c: 4}
```

**TASK 12**

> Write a function that checks if an object is empty.

Sample Output:

```js
function isEmptyObject(obj) {
  // Your code goes here
}

isEmptyObject({}); // true
isEmptyObject({ a: 1 }); // false
```

**TASK 13**

> Write a function that compares two arrays for equality (same elements in the same order).

Sample Output:

```js
function isArraysEqual(arr1, arr2) {
  // Your code goes here
}

isArraysEqual([1, 2, 3], [1, 2, 3]); // true
isArraysEqual([1, 2, 3], [3, 2, 1]); // false
```

**TASK 14**

> Write a function that reverses an array without modifying the original array.

Sample Output:

```js
function reverseArray(arr) {
  // Your code goes here
}

reverseArray([1, 2, 3]); // [3, 2, 1]
```

**TASK 15**

> Write a function that takes a string and converts it to a number. If the conversion is not possible, return null.

Sample Output:

```js
function convertToNumber(str) {
  // Your code goes here
}

convertToNumber("42"); // 42
convertToNumber("abc"); // null
```

**TASK 16**

> Write a function that checks if a string is a palindrome.

Sample Output:

```js
function isPalindrome(str) {
  // Your code goes here
}

isPalindrome("madam"); // true
isPalindrome("hello"); // false
```

**TASK 17**

> Write a function that filters an array, leaving only elements of a certain type.

Sample Output:

```js
function filterByType(arr, type) {
  // Your code goes here
}

filterByType([1, "a", true], "string"); // ['a']
```

**TASK 18**

> Write a function that takes an array of objects and returns an array of values for a specific key.

Sample Output:

```js
function getValuesByKey(arr, key) {
  // Your code goes here
}

getValuesByKey([{ a: 1 }, { a: 2 }, { a: 3 }], "a"); // [1, 2, 3]
```

**TASK 19**

> Write a recursive function that calculates the sum of numbers in an array.

Sample Output:

```js
function sumArray(arr) {
  // Your code goes here
}

sumArray([1, 2, 3]); // 6
```

**TASK 20**

> Write a function that returns the largest number in an array.

Sample Output:

```js
function findMax(arr) {
  // Your code goes here
}

findMax([1, 5, 3, 9, 2]); // 9
```
