// 7 Kyu - The Highest Profit Wins!

// Write a function that returns both the minimum and maximum number of the given list/array. All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.

// Example: minMax([1,2,3,4,5])   == [1,5]

function minMax(arr){
    let newArray = [] // create empty array
    let sort = arr.sort( (a,b) => a - b) // sort given array in ascending order
    newArray.push(sort[0]) // push the lowest value as the first element in the new array
    newArray.push(sort[sort.length-1]) // // push the highest value as the second element in the new array
    return newArray // return the new array
};

// 7 Kyu - Find the Capitals

// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example: Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

let capitals = function (word) {
  let array = word.split(""); // split string into an array
  let newArray = []; // create an empty array
  for(let i = 0; i < array.length; i++){ // run a loop for each element 
    if (array[i] == array[i].toUpperCase()){ // if each letter equals its uppercase counterpart
      newArray.push(i) // push the index value to the new array
    }
  }
  return newArray // return the new array
};

// 7 Kyu - Maximum Multiple

// Given a Divisor and a Bound, find the largest integer N, such that: N is divisible by divisor, N is less than or equal to bound, and N is greater than 0. The parameters (divisor, bound) passed to the function are only positive values. It's guaranteed that a divisor is found.

// Input >> Output Example: maxMultiple (2,7) ==> return (6)

function maxMultiple(divisor, bound){
    let newArray = [] // create an empty array
    for (let i = divisor +1; i <= bound; i++){ // run a loop to test each integer for N between divisor and bound. Add 1 to the N value to ensure the divisor value isn't pushed into newArray
      if(i % divisor === 0 && i <= bound){ // if the integer is divisible by divisor and less than or equal to bound
        newArray.push(i) // push the integer into newArray
      }
    }
    return Math.max(...newArray) // return the max value of newArray
};