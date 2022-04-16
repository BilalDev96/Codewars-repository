// 7 Kyu - Sort Array by String Length

function sortByLength (array) {
    return array.sort( (a,b) => a.length - b.length ) // return the sorted array in ascending order by each string's length
};

// 7 Kyu - Small Enough? - Beginner

function smallEnough(a, limit){
    return a.some( el => el > limit) ? false : true // returns false if any one element is greater than the limit value, otherwise returns true
};

// 7 Kyu - Fizz Buzz

// Return an array containing the numbers from 1 to N, where N is the parametered value. Replace certain values however if any of the following conditions are met: If the value is a multiple of 3: use the value "Fizz" instead. If the value is a multiple of 5: use the value "Buzz" instead. If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead. N will never be less than 1.

// Method calling example: fizzbuzz(3) -->  [1, 2, "Fizz"]

function fizzbuzz(n) {
    let newArray = [] // create an empty array
    
    for(let i = 1; i <= n; i++){ // run a loop for each integer below the n value
      if(i % 3 === 0 && i % 5 === 0){ // if the integer is a multiple of 3 and 5
        newArray.push("FizzBuzz") // push "FizzBuzz" into the newly created array
      }else if (i % 3 === 0){ // otherwise, if the integer is a multiple of just 3
        newArray.push("Fizz") // push "Fizz" into the newly created array
      }else if (i % 5 === 0){ // otherwise, if the integer is a multiple of just 5
        newArray.push("Buzz") // push "Buzz" into the newly created array
      }else{ // if the integer does not meet any of the previous conditions
        newArray.push(i) // push the integer to the newly created array
      }
    }
    return newArray // return the array once the loop has completed
};
  