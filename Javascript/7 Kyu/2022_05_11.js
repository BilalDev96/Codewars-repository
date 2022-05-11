// 7 Kyu - String Ends With?

/* Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Example:
solution('abc', 'bc') // returns true */

function solution(str, ending){
    return str.endsWith(ending); // return Boolean if string ends with the specified ending
}

// 7 Kyu - Number of People in the Bus

/* There is a bus moving in the city, and it takes and drop some people in each bus stop.

You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop. Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D

Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative. The second value in the first integer array is 0, since the bus is empty in the first bus stop. */

let number = function(busStops){
    let peopleOnBus = 0; // create counter for the number of people
    for(let i = 0; i < busStops.length; i++) { // iterate through each bus stop
      peopleOnBus += (busStops[i][0] - busStops[i][1]); // add the remainder of people left from each bus stop to the overall counter
    }
    return peopleOnBus; // return the counter
}

// 7 Kyu - Count the Divisors of a Number

/* Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.

Examples (input --> output)
4 --> 3 (1, 2, 4) */

function getDivisorsCnt(n){
    let divisorCount = []; // create bucket to hold applicable divisors
    for(let i = 1; i <= n; i++) { // iterate through each integer between 1 and  including n
      if(n % i === 0){
        divisorCount.push(i); // push divisors into the array if divisor of n
      }
    }
    return divisorCount.length; // return the count of integers in the array
}

// 7 Kyu - Sort Numbers 

/* Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

For example:
solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50] */

function solution(nums){
    return nums !== null ? nums.sort((a,b) => a - b) : []; // if array is not null, return the sorted array. Otherwise, return an empty array
}

// 7 Kyu - Make a FUnction That Does Arithmetic

/* Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them. a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

The four operators are "add", "subtract", "divide", "multiply".
Example: 5, 2, "add"  --> 7 */

function arithmetic(a, b, operator){
    switch (operator) { // create switch statement for each type of operator
        case "add":
          return a + b;
          break;
        case "subtract":
          return a - b;
          break;
        case "multiply":
          return a * b;
          break;
        case "divide":
          return a / b;
          break;
    }
}