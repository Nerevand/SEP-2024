# Operators, Statements and Syntax

1. create a new branch from the current one _hw4_
2. In that branch, create a few JS files with exercise numbers, for example task1.js, task2.js, etc.
3. In those files, implement solutions for the tasks.

**TASK 1**

> Create function that unravels array of arrays like so:  
> const matrixArr = [  
> [1, 2, 3, 4], // → → → ↴  
> [12, 13, 14, 5], // ↱ → ↴ ↓  
> [11, 16, 15, 6], // ↑ ↑ ↲ ↓  
> [10, 9, 8, 7] // ↑ ← ← ↲  
> ];
>
> function unravelArr (arr) {  
> // your code  
> }
>
> console.log(unravelArr(matrixArr)); //[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]  
> // NOTE: initial array should stay the same

**TASK 2**

> Create a function that takes a "base number" as an argument.  
> // This function should return another function which takes a new argument,  
> // and returns the sum of the "base number" and the new argument.
>
> function plusFactory(num) {  
> // your code  
> }
>
> const plusFive = plusFactory(5)  
> plusFive(2) // ➞ 7  
> const plusTen = plusFactory(10)  
> plusTen(188) // ➞ 198  
> plusFive(plusTen(0)) // ➞ 15

**TASK 3**

> 3.Create a function that takes a number as its parameter and returns another function.  
> // The returned function must take an array of numbers as its parameter, and return an  
> // array of the numbers divided by the number that was passed into the first function.
>
> function arrayDivisionFactory (num) {  
> // your code  
> }
>
> const divide5 = arrayDivisionFactory(5);  
> console.log(divide5([10, 20, 25])) // [2, 4, 5]  
> const divide3 = arrayDivisionFactory(3);  
> console.log(divide3([6, 21, 27])) // [2, 7, 9]

**TASK 4**

> Create a function that takes a string of name and checks how much good is the given name.  
> // Add up the letters of your name to get the total score.
>
> const scores = {  
> "A": 100, "B": 14, "C": 9, "D": 28, "E": 145, "F": 12, "G": 3,  
> "H": 10, "I": 200, "J": 100, "K": 114, "L": 100, "M": 25,  
> "N": 450, "O": 80, "P": 2, "Q": 12, "R": 400, "S": 113,  
> "T": 405, "U": 11, "V": 10, "W": 10, "X": 3, "Y": 210, "Z": 23  
> }
>
> // Return your result as per the following rules:  
> // score <= 60: "NOT TOO GOOD"  
> // 61 <= score <= 300: "PRETTY GOOD"  
> // 301 <= score <= 599: "VERY GOOD"  
> // score >= 600: "THE BEST"
>
> function getNameScore (name) {  
>  // your code  
> }
>
> console.log(getNameScore('robot')); //"Your score 979, which is THE BEST"  
> console.log(getNameScore('man')); // "Your score 575, which is VERY GOOD"

**TASK 5**

> Write a function that reverses all the words in a sentence that start with a particular letter.  
> function specialReverse(string, letter) {  
> // your code  
> }
>
> console.log(specialReverse("word searches are super fun", "s")) //"word sehcraes are repus fun"  
> console.log(specialReverse("first man to walk on the moon", "m")) //"first nam to walk on the noom"

5. once done, create pull request into current branch _hw4_

## To read

- https://www.w3schools.com/js/js_function_definition.asp - Function definition
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function?retiredLocale=uk - Function declaration
- https://www.w3schools.com/js/js_object_methods.asp - Object Methods
- https://www.javascripttutorial.net/javascript-closure - closure
- https://developer.mozilla.org/en-US/docs/Glossary/Scope?retiredLocale=uk - Scope
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this - This context
