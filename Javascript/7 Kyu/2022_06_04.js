// 7 Kyu - Alternate Case

/* Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD */

function alternateCase(s) {
    let array = [];
    for(let i = 0; i < s.length; i++) { // iterate through each string character
      if(s[i] == s[i].toUpperCase()) {
        array.push(s[i].toLowerCase()); // if character is uppercase, push it as a lowercase character to the array
      }else{
        array.push(s[i].toUpperCase()); // otherwise, push it as uppercase character to the array
      }
    }
    return array.join(""); // return the array as a string
}

// 7 Kyu - Multiply Characters

/* Here we have a function that help us spam our hearty laughter. But is not working! I need you to find out why...

Expected results:

spam(1);  // hue
spam(6);  // huehuehuehuehuehue */

function spam(number){
    return "hue".repeat(number); // use repeat method to return string n times
}

// 7 Kyu - Return the First M Multiples of N

/* Implement a function, multiples(m, n), which returns an array of the first m multiples of the real number n. Assume that m is a positive integer.

Ex.

multiples(3, 5.0)
should return

[5.0, 10.0, 15.0] */

function multiples(m, n){
    let array = [];
    for(let i = 1; i <= m; i++) {
      array.push(n * i);
    }
    return array;
}

// 7 Kyu - Use Reduce() to Calculate the Sum of the Values in an Array

/* Make the sum() function return the sum of the values in the passed in array. Your solution must use the reduce() function of the built-in javascript Array object. If you're not familiar with reduce(), reading over the documentation may help. */

function sum(array) {
    return array.reduce((acc,c) => acc + c, 0);
  }
  