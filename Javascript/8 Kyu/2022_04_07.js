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
