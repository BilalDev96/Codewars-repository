// 8 Kyu - Find the First Non-Consecutive Number

function firstNonConsecutive (arr) {
    for(let i = 0; i < arr.length -1; i++){ //run a loop for each element in the array
      if(arr[i] + 1 != arr[i + 1]){ // if the element does not equal its next consecutive number value
        return arr[i + 1] // return the non-consecutive number
      }
    }
    return null // return null if the array if the whole array is consecutive or 
  }

// 8 Kyu - Basic Training: Add Item to an Array

websites.push("codewars") // add the value of "codewars" to the "webites" array

// 8 Kyu - A Wolf in Sheep's Clothing

function warnTheSheep(queue) {
  const newQueue = queue.reverse().indexOf('wolf') // reverse original queue and produce index value of wolf
  return newQueue === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${ newQueue }! You are about to be eaten by a wolf!`; // if wolf's index is 0, return first statement. Otherwise, return second statement
}

// 8 Kyu - Grasshopper - Array Mean

var findAverage = function (nums) {
  let number = nums.reduce( (acc,c) => acc + c, 0 ) // add all the values in the given array
  return number/nums.length // return the sum of values divided by the array length
}