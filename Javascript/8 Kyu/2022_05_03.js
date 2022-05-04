// 8 Kyu - Is It Even?

/* In this Kata we are passing a number (n) into a function. Your code will determine if the number passed is even (or not). The function needs to return either a true or false. Numbers may be positive or negative, integers or floats. Floats with decimal part non equal to zero are considered UNeven for this kata. */

function testEven(n) {
    return n % 2 === 0;
};

// 8 Kyu - Sum Without Highest and Lowest Number

/* Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ). The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value. Mind the input validation. If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0. */

function sumArray(array) {
    if(array === null || array === undefined || array.length < 2){
      return 0;
    }
    
    array.sort((a,b) => a - b);
    
    array.pop();
    array.shift();
    
    return array.reduce((acc,c) => acc + c, 0)
};

// 8 Kyu - Grasshopper - Grade Book

/* Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'

Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100. */

function getGrade (s1, s2, s3) {
    let score = (s1 + s2 + s3) / 3;
    if(score >= 90 && score <= 100) {
      return 'A';
    }else if(score >= 80 && score < 90) {
      return 'B';
    }else if(score >= 70 && score < 80) {
      return 'C';
    }else if(score >=60 &&  score < 70) {
      return 'D';
    }else if(score >= 0 && score < 60) {
      return 'F';
    }
};

// 8 Kyu - Grasshopper - Messi Goals Function

// Complete the function to return Messi's total number of goals in all three leagues.

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
};

// 8 Kyu - Beginner Series #4 Cockroach

/* The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

For example:
1.08 --> 30
Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer. */

function cockroachSpeed(s) {
    return Math.floor(Math.floor(s * 27.778));
};

// 8 Kyu - Double Char

// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Example: "Hello World" -> "HHeelllloo  WWoorrlldd"

function doubleChar(str) {
    let doubleArray = [];
    str.split("").map(x => doubleArray.push(x.repeat(2)));
    return doubleArray.join("");
};  