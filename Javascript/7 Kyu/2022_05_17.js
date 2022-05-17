// 7 Kyu - Factorial

/* Your task is to write function factorial. */

function factorial(n){
    let sum = 1; // create variable to use multiplying operator on
    if(n === 0) { // test for edge case when n is equal to 0
      return sum;
    }
    for(let i = 1; i <=n; i++) { // iterate through each positive integer up to and including n
      sum *= i; // multiply it back into the sum variable
    }
    return sum; // return sum
}

// 7 Kyu - Mumbling

/* This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd" */

function accum(s) {
	let newString = []; // create empty array to hold string values
  for(let i = 0; i < s.length; i++) { // iterate for length of given string
    newString.push(s[i].toUpperCase() + s[i].repeat(i).toLowerCase()); // push the first letter of each character as an uppercase value and concatenate it with the repeated lowercase values per its index position
  }
  return newString.join("-"); // return the array as a string with hyphens
}

// 7 Kyu - Exes and Ohs

/* Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true */

function XO(str) {
    let array = str.split(""); // split string into an array
    let xCount = 0;
    let oCount = 0; // create counters to hold how many X's and O's there are
    for(let i = 0; i < array.length; i++){ // iterate through each array index
      if(array[i].toLowerCase() === 'x') { // if the index to lowercase is equal to x
        xCount += 1; // add one to the x count
      }else if(array[i].toLowerCase() === 'o') { 
        oCount += 1; // otherwise, add 1 to the o count
      }
    }
    if(xCount == oCount) { 
      return true; // if both counts are equal, return true
    }else{
      return false; // otherwise, return false
    }
}

// 7 Kyu - Number of Decimal Digits

/* Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

All inputs will be valid. */

function digits(n) {
    return String(n).length; // convert the number to a string and return the length of the string
}

// 7 Kyu - Bumps in the Road

/* Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

Unfortunately for you, your drive is very bumpy! Given a string showing either flat road ("_") or bumps ("n"), work out if you make it home safely. 15 bumps or under, return "Woohoo!", over 15 bumps return "Car Dead". */

function bump(x){
    let array = x.split(""); // split string into an array
    let bumps = 0; // create variable to hold count of bumps in road
    for(let i = 0; i < array.length; i++) { // iterate through each index in array
      if(array[i] === "n"){
        bumps += 1; // if index equals a bump, increase count by 1
      }
    }
    return bumps < 16 ? 'Woohoo!' : 'Car Dead'; // return the appropriate string determined by count of bumps in road
}