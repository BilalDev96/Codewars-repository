// 7 Kyu  - Sum of Cubes

/* Write a function that takes a positive integer n, sums all the cubed values from 1 to n, and returns that sum.

Assume that the input n will always be a positive integer.

Examples: (Input --> output)

2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27) */

function sumCubes(n){
    let sum = 0; // create a variable to store the summed values of each integer up to and including the n parameter
    for(let i = 1; i <= n; i++){
      sum += Math.pow(i,3) // iterate through each integer and add it to the sum variable
    }
    return sum; // return the sum
}

// 7 Kyu - Averages of Numbers

/* Write a method, that gets an array of integer-numbers and return an array of the averages of each integer-number and his follower, if there is one.

Example:

Input:  [ 1, 3, 5, 1, -10]
Output:  [ 2, 4, 3, -4.5]
If the array has 0 or 1 values or is null, your method should return an empty array. */

function averages(numbers) {
    if(numbers === null || numbers.length === 0 || numbers.length === 1) {
      return []; // test for edge cases where array has 0 or 1 values, or is null. Return an empty array if so
    }
    let averagesArray = []; // create empty array to store new average values
    for(let i = 0; i < numbers.length - 1; i++) { // iterate through each array value
      array.push((numbers[i] + numbers[i + 1]) / 2); // push the average of each array value and its concurrent array value
    }
    return averagesArray; // return the new array
}

// 7 Kyu - Switcheroo

/* Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb' */

function switcheroo(x){
    let switchArray = x.split(""); // convert string to array
    let finalArray = []; // create new array to push switched values to
    for(let i = 0; i < switchArray.length; i++) {
      if(switchArray[i] === "a") {
        finalArray.push("b"); // if array value equals a, push the value as b
      }else if(switchArray[i] === "b") {
        finalArray.push("a"); // if array value equals b, push the value as a
      }else {
        finalArray.push(switchArray[i]); // otherwise, push the value as c
      }
    }
    return finalArray.join(""); // convert the array into a string and return the value
}