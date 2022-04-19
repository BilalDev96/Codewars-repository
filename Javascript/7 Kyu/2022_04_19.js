// 7 Kyu - Row Weights

// Several people are standing in a row divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on. Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2. Array size is at least 1, and all numbers will be positive.

// Example: rowWeights([13, 27, 49])  ==>  return (62, 27)

function rowWeights(array){
    let teamOne = []
    let teamTwo = [] // create empty arrays for each team
    array.forEach( (el,ind) => ind % 2 == 0 ? teamOne.push(el) : teamTwo.push(el)) // for each index in the original array that is even, push that element into teamOne. Otherwise, push that element into teamTwo
    return [teamOne.reduce( (acc,c) => acc + c,0),teamTwo.reduce( (acc,c) => acc + c,0)] // return an array where both teams' total values are reduced 
};

// 7 Kyu - Sum of the First nth Term of Series

// Your task is to write a function which returns the sum of following series upto nth term(parameter). Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +... You need to round the answer to 2 decimal places and return it as String. If the given value is 0 then it should return 0.00. You will only be given Natural Numbers as arguments.

// Example: 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

function SeriesSum(n){
    let sum = 1
    let divisor = 1 // created variables to store values that will change based on nth term
    for(let i = 1; i < n; i++){ // run a loop for the nth value
       sum += 1/(divisor += 3) // add each series to the sum
    }
    if(n == 0){
      return '0.00' // if n equals zero, return string zero
    }else{
      return sum.toFixed(2).toString() // otehrwise, return the sum value fixed to two decimals as a string
    }
  }
   