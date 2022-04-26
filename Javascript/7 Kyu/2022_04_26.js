// 7 Kyu - Vowel Count

/* Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces. */

function getCount(str) {
    let vowels = ['a','e','i','o','u']; // create an array containing the vowels to iterate through
    let vowelCount = 0; // create a counter for the number of vowels in the string
    for(let i = 0; i < str.length; i++) {
      if(vowels[0] === str[i] || vowels[1] === str[i] || vowels[2] === str[i] || vowels[3] === str[i] || vowels[4] === str[i]) { // if each string chracter equals any of the elements in the vowel array
        vowelCount++; // add 1 to the counter
      }
    }
    return vowelCount; // return the counter
};

// 7 Kyu - Square Every Digit

/* Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
Note: The function accepts an integer and returns an integer */

function squareDigits(num){
    let stringOfNum = num.toString(); // create a string out of the number provided
    let concatArray = [];
    for(let i = 0; i < stringOfNum.length; i++) { // run a loop for each character in the number string
      concatArray.push( Math.pow(stringOfNum[i],2) ) // push the square of every digit into the empty array
    }
    return Number(concatArray.join("")); // return the numbered form of joining the array as a string
};

// 7 Kyu - Highest and Lowest

/* In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
Examples:
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes:
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first. */

function highAndLow(numbers){
    let array = numbers.split(" "); // convert the string into an array
    let maxNum = Math.max(...array); // create a variable to store the maximum value of the array
    let minNum = Math.min(...array); // create a variable to store the minimum value of the array
    return `${maxNum} ${minNum}`; // use template literal notation to return the required values
};