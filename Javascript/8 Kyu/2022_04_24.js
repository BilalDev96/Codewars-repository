// 8 Kyu - Find the Smallest Integer in the Array

//Given an array of integers your solution should find the smallest integer. You can assume, for the purpose of this kata, that the supplied array will not be empty.

// Example: Given [34, 15, 88, 2] your solution will return 2

class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args); // Use the spread operator to search the array and return the smallest integer
    }
};

// 8 Kyu - Returning Strings

// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

function greet(name){
    return `Hello, ${name} how are you doing today?`; // use template literal to return the required string
};

// 8 Kyu - Convert a Boolean to a String

// Implement a function which convert the given boolean value into its string representation.

function booleanToString(b){
    return b.toString(); // return the boolean value converted to string
};

// 8 Kyu - You Can't Code Under Pressure #1

//  You need to double the integer and return it.

function doubleInteger(i) {
    return i * 2; // multiply the integer by 2 and return it
};

// 8 Kyu - Jenny's Secret Message

// Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake. Can you help her?

function greet(name){
    return name === 'Johnny' ? `Hello, my love!` : `Hello, ${name}!`; // Use template literal to return the secret message if it's Johnny, otherwise a generic greeting
};

// 8 Kyu - Invert Values

// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// Example:invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]

function invert(array) {
    array.forEach((el,ind) => array[ind] *= -1); // For each element in the array, multiply it by -1 to invert the values
    return array; // return the inversed array
};

// 8 Kyu - Beginner Series #2 Clock

// Clock shows h hours, m minutes and s seconds after midnight. Your task is to write a function which returns the time since midnight in milliseconds.

// Example: h = 0 m = 1 s = 1 result = 61000

function past(h, m, s){
    let timeInMilliseconds = (h * 3600000) + (m * 60000) + (s * 1000); // create a variable that multiplies each value by their respective time in milliseconds and adds their sum
    return timeInMilliseconds; // return the variable
};