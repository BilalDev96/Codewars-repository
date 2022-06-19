// 7 Kyu - Beginner Series #3 Set of Numbers

/* Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2) */

function getSum( a,b ) {
    let sum = 0  // create variable to hold sum of values
    if(a === b) {
      return a; // if both parameters are the same, return a
    }else if(a > b) {
      for(let i = a; i >= b; i--) { // otherwise, iterate a descending loop to add each value betweeen a and b when a is greater than b
        sum += i
      }
    }else if(a < b) { // otherwise, iterate an ascending loop to add each value between a and b when a is less than b
      for(let i = a; i <= b; i++) {
        sum += i
      }
    }
    return sum // return the sum
}

// 7 Kyu - Reverse Words

/* Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps */

function reverseWords(str) {
    return str.split("").reverse().join("").split(" ").reverse().join(" "); // reverse the original array to swap the chracters in each word, then reverse it once more to return the words to their original place in the string
}

// 7 Kyu - Find the Stray Number

/* You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2 */

function stray(numbers) {
    let sortedNumbers = numbers.sort((a,b) => a - b); // sort the original array in ascending order
    if(sortedNumbers[0] === sortedNumbers[1]) {
      return sortedNumbers[sortedNumbers.length - 1]; // if the first two values of the array are equivalent, that means the unique number is larger than the rest and will be ordered last in the array. Return this value
    }else {
      return sortedNumbers[0]; // otehrwise, this means the unique value is smaller than the other integers and will be ordered first in the array. Return this value
    }
}

// 7 Kyu - Factorial

/* In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C). */

function factorial(n) {
    if(n === 0) {
      return 1; // solve for edge case when n equals 0
    }else if(n < 0 || n > 12) {
      return RangeError.prototpye.message; // if n is less than 0 or greater than 12, return RangeError message
    }
    let sum = 1;
    for(let i = n; i > 1; i--) { // otherwise, run an interative loop in descending order for each value above n. multiply that number back into the sum variable
      sum *= i
    }
    return sum // return the sum value
  }