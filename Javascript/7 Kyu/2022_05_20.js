// 7 Kyu - Fix String Case

/* In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
For example: solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase. */

function solve(s){
    let lowercase = 0;
    let uppercase = 0; // create counters for how many letters are uppercase or lowercase
    let array = s.split(""); // split string into an array
    for(let i = 0; i < array.length; i++) { // iterate through each index
      if(array[i] == array[i].toUpperCase()) {
        uppercase += 1;
      }else{
        lowercase += 1; // if the character is equal to it being uppercase, increase the uppercase variable count by 1. Otherwise, increase the lowercase variable count
      }
    }
  if(lowercase > uppercase || lowercase == uppercase) { // if the count of lowercase letters is greater than uppercase or it's the same, convert the string to lowercase
    return s.toLowerCase();
  }else if(uppercase > lowercase) { // otherwise, convert the string to uppercase
    return s.toUpperCase();
  }
}

// 7 Kyu - Digitize

/* Given a non-negative integer, return an array / a list of the individual digits in order.

Examples: 123 => [1,2,3] */

function digitize(n) {
    let array = String(n); // convert number to a string
    return array.split('').map(x => Number(x)); // split string into an array, and remap into new array converting string values into numbers
}

// 7 Kyu - Largest Pair Sum in Array

/* Given a sequence of numbers, find the largest pair sum in the sequence. Input sequence contains minimum two elements and every element is an integer.

For example:
[10, 14, 2, 23, 19] -->  42 (= 23 + 19) */

function largestPairSum (numbers) {
    let pairing = []; // create empty bucket to store highest value sums
    let sorted = numbers.sort((a,b) => a - b); // sort array in ascending order
    for(let i = 0; i < numbers.length - 1; i++) { // iterate through array
      pairing.push(sorted[sorted.length -1] + sorted[sorted.length - 2]) // push highest 2 values into pairing array
    }
    return Math.max(...pairing) // return the max value in the pairing array
}