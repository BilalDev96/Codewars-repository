// 7 Kyu - Even Numbers in an Array

// Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

// Example: ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]

function evenNumbers(array, number) {
    let filterForEven = array.filter(num => num % 2 == 0); // filter out all odd numbers from original array
    let finalEvenArray = [] // create final array for answer to be stored into
    for(let i = 1; i <= number; i++){ 
      finalEvenArray.push(filterForEven[filterForEven.length - i]) // push each number into the final array starting from the end of the array and working backwards
    }
    return finalEvenArray.reverse(); // return the reverse of the final array, since we want to keep the original order intact
};

// 7 Kyu - Return the Missing Element

// Our sequence given was supposed to contain all of the integers from 0 to 9 (in no particular order), but one of them seems to be missing. Write a function that accepts a sequence of unique integers between 0 and 9 (inclusive), and returns the missing element.

// Example: [0, 5, 1, 3, 2, 9, 7, 6, 4] --> 8

function getMissingElement(superImportantArray){
    let missingInteger = [] // create empty array to capture missing integer
    for(let i = 0; i <= superImportantArray.length; i++){ // run a loop for each element in the original array
      if(superImportantArray.indexOf(i) == -1){ // if the index of the element equals -1, meaning it's not present
        missingInteger.push(i) // push that value into the empty array
      }
    }
    return Number(missingInteger) // return the number value of the array
};

// 7 Kyu - Maximum Triplet Sum (Array Series #7)

// Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .Array/list size is at least 3 . Array/list numbers could be a mixture of positives , negatives and zeros .Repetition of numbers in the array/list could occur , So (duplications are not included when summing).

// Example: maxTriSum ({3,2,6,8,2,3}) ==> return (17)

function maxTriSum(numbers){
    let duplicatesRemoved = [...new Set(numbers)] // remove duplicates from given array
    let sortedIntegers = duplicatesRemoved.sort( (a,b) => a -b) // create a new array of sorted integers in ascending order
    let maxTriplet = sortedIntegers.filter(num => num > sortedIntegers[sortedIntegers.length - 4]) // filter the array for integers greater than the 4th greatest in the array
    return maxTriplet.reduce( (acc,c) => acc + c, 0) // return the sum of the 3 integers
};