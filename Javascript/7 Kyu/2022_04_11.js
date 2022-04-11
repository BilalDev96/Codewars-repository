// 7 Kyu - Sum of Two Lowest Positive Integers

function sumTwoSmallestNumbers(numbers) {  
    let sorted = numbers.sort((a,b) => a - b) // sort the array from lowest to highest values
    return sorted[0] + sorted[1] // return the sum of the first and second integers added together
}

// 7 Kyu - Odd or Even?

function oddOrEven(array) {
    if(array == []){ // if the input array is empty
      return [0] // return an array with a value of 0
    }else if(array.reduce( (acc,c) => acc + c,0) % 2 === 0 || array.reduce( (acc,c) => acc + c,0) % 2 === -0){ // if the remainder of the array's summed elements are 0 or -0 (to include negative numbers)
      return 'even' // return string 'even'
    }else if(array.reduce( (acc,c) => acc + c,0) % 2 === 1 || array.reduce( (acc,c) => acc + c,0) % 2 === -1){ // else if the remainder of the array's summed elements are 1 or -1 (to include negative numbers)
      return 'odd' // return string 'odd'
    }
}

// 7 Kyu - Testing 1-2-3

var number=function(array){
    if(array == []){ // if array is empty
      return [] // return an empty array
    }
    let newArray = [] // create a new array
    for(let i = 0; i < array.length; i++){ // run a loop for each element in the original array
      newArray.push(`${i +1}: ${array[i]}`) // using template literal, push the loop counter + 1 as well as the element into the newly created array
    }
    return newArray // return the new array
  }