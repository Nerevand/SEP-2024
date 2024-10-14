# JS Data types task

1. Create a new branch from the current one _hw2_.
2. Inside folder _homework2_, create a folder with your GitHub nickname or name.
3. In that branch, create a few JS files with exercise numbers, for example task1.js, task2.js, etc.
4. In those files, implement solutions for the tasks.

**TASK 1**

> Write a function that takes any value and returns its type as a string.

Sample Output:

```js
getType(42); // 'number'
getType("hello"); // 'string'
```

**TASK 2**

> Write a function that takes a string and returns an array of individual characters from that string.

Sample Output:

```js
stringToArray("hello"); // ['h', 'e', 'l', 'l', 'o']
```

**TASK 3**

> Write a function that merges two arrays, removing duplicate elements.

Sample Output:

```js
mergeArrays([1, 2], [2, 3]); // [1, 2, 3]
```

**TASK 4**

> Write a function that performs a deep copy of an object (without using JSON).

Sample Output:

```js
const obj = { a: 1, b: { c: 2 } };
deepCopy(obj); // {a: 1, b: {c: 2}}
```

**TASK 5**

> Write a function that takes an object and returns a new object with only the keys whose values are strings.

Sample Output:

```js
filterStrings({ a: 1, b: "text", c: true }); // {b: 'text'}
```

**TASK 6**

> Write a function that takes an array of numbers and returns an array of strings, where each number is converted to a string.

Sample Output:

```js
convertNumbersToStrings([1, 2, 3]); // ['1', '2', '3']
```

**TASK 7**

> Write a function that takes an array and returns an array of unique values.

Sample Output:

```js
getUnique([1, 2, 2, 3, 3]); // [1, 2, 3]
```

**TASK 8**

> Write a function that checks if a given value is an array.

Sample Output:

```js
isArray([1, 2, 3]); // true
isArray("text"); // false
```

**TASK 9**

> Write a function that converts an object into an array of key-value pairs.

Sample Output:

```js
objectToPairs({ a: 1, b: 2 }); // [['a', 1], ['b', 2]]
```

**TASK 10**

> Write a function that calculates the average of elements in an array.

Sample Output:

```js
getAverage([10, 20, 30]); // 20
```

**TASK 11**

> Write a function that merges two objects. If keys are the same, take values from the second object.

Sample Output:

```js
mergeObjects({ a: 1, b: 2 }, { b: 3, c: 4 }); // {a: 1, b: 3, c: 4}
```

**TASK 12**

> Write a function that checks if an object is empty.

Sample Output:

```js
isEmpty({}); // true
isEmpty({ a: 1 }); // false
```

**TASK 13**

> Write a function that compares two arrays for equality (same elements in the same order).

Sample Output:

```js
areArraysEqual([1, 2, 3], [1, 2, 3]); // true
areArraysEqual([1, 2, 3], [3, 2, 1]); // false
```

**TASK 14**

> Write a function that reverses an array without modifying the original array.

Sample Output:

```js
reverseArray([1, 2, 3]); // [3, 2, 1]
```

**TASK 15**

> Write a function that takes a string and converts it to a number. If the conversion is not possible, return null.

Sample Output:

```js
convertToNumber("42"); // 42
convertToNumber("abc"); // null
```

**TASK 16**

> Write a function that checks if a string is a palindrome.

Sample Output:

```js
isPalindrome("madam"); // true
isPalindrome("hello"); // false
```

**TASK 17**

> Write a function that filters an array, leaving only elements of a certain type.

Sample Output:

```js
filterByType([1, "a", true], "string"); // ['a']
```

**TASK 18**

> Write a function that takes an array of objects and returns an array of values for a specific key.

Sample Output:

```js
getValues([{ a: 1 }, { a: 2 }, { a: 3 }], "a"); // [1, 2, 3]
```

**TASK 19**

> Write a recursive function that calculates the sum of numbers in an array.

Sample Output:

```js
sumArray([1, 2, 3]); // 6
```

**TASK 20**

> Write a function that returns the largest number in an array.

Sample Output:

```js
findMax([1, 5, 3, 9, 2]); // 9
```
