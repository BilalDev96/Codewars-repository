// 8 Kyu - Make UpperCase

// Write a function which converts the input string to uppercase.

function makeUpperCase(str) {
    return str.toUpperCase(); // use the toUpperCase() method to convert a string to uppercase
};

// 8 Kyu - Is He Gonna Survive?

/* A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive? Return True if yes, False otherwise. */

const hero = (bullets, dragons) => bullets >= dragons * 2 ? true : false; // if the number of bullets are at least twice as many as there are dragons, return true. Otherwise, return false

// 8 Kyu - Beginner Series #1 School Paperwork

// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages. Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// Example: n= 5, m=5: 25

function paperwork(n, m) {
    return n < 0 || m < 0 ? 0 : n * m; // if n or m are < 0, return 0. Otherwise, multiply n by m to return the number of blank pages needed
};

// 8 Kyu - Calculate BMI

// Write function bmi that calculates body mass index (bmi = weight / height2).

/* if bmi <= 18.5 return "Underweight"
if bmi <= 25.0 return "Normal"
if bmi <= 30.0 return "Overweight"
if bmi > 30 return "Obese" */

function bmi(weight, height) {
    let bmi = weight/ Math.pow(height, 2); // create a variable to store the calculation for BMI
    if(bmi <= 18.5) { // run conditional statements based on the variable 
      return "Underweight";
    }else if(bmi <= 25.0) {
      return "Normal";
    }else if(bmi <= 30.0) {
      return "Overweight";
    }else if(bmi > 30) {
      return "Obese";
    }
};

// 8 Kyu - Calculate Average

// Write a function which calculates the average of the numbers in a given list. Empty arrays should return 0.

function find_average(array) {
    let sum = array.reduce( (acc,c) => acc + c, 0); // find the sum of all values in the array
    return sum == [] ? 0 : sum / array.length; // if the new array is empty, return 0. Otherwise, return the average by dividing by the array length
};

// 8 Kyu - Reversed Sequence

// Build a function that returns an array of integers from n to 1 where n>0.

// Example: Example : n=5 --> [5,4,3,2,1]

const reverseSeq = n => {
    let decreasingArray = []; // create an empty array to store the integer values
    for(let i = n; i >= 1; i--) { // run a decreasing loop starting from the value n
      decreasingArray.push(i); // push the values into the decreasingArray
    }
    return decreasingArray; // return the final array
};