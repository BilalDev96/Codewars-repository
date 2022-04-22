// 7 Kyu - Smallest Value of an Array

// Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index. Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

// Example: min([1,2,3,4,5], 'value') // => 1

function min(arr, toReturn) {
    if(toReturn == 'value'){ // if toReturn equals 'value'
      return Math.min(...arr) // return the smallest value in the array
    }else if(toReturn == 'index'){ // otherwise, if toReturn equals 'index'
      return arr.indexOf(Math.min(...arr)) // return the index of the smallest value in the array
    }
};

// 7 Kyu - Sum of Minimums

// Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

// Example: [ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
//          , [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
//          , [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
//          ] So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

function sumOfMinimums(arr) {
    let sumOfMins = 0; // create a variable to store the sum of minimums from the nested list
    for(let i = 0; i < arr.length; i++){ // run a loop for each nested array
      sumOfMins += Math.min(...arr[i]) // add the minimum value from each nested array to the variable
    }
    return sumOfMins; // return the variable
};

// 7 Kyu - Maximum Product

// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array. Array/list size is at least 2. Array/list numbers could be a mixture of positives, negatives also zeroes.

// Example: adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]); ==> return 50

function adjacentElementsProduct(array) {
    let maxProducts = []; // create an empty array to push max products into
    for(let i = 0; i < array.length -1; i++){ // run a loop for each element, minus the last element. Was running into NaN earlier because the next line has (i + 1) which would add a nonexistent element, 
      maxProducts.push(array[i] * array[i+1]) // push the multiple of each adjacent number into the new array. The (array.length - 1) counteracts the (i + 1) here to grab all elements
    }
    return Math.max(...maxProducts) // return the max value from the final array
  }