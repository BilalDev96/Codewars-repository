// 8 Kyu - Count of Positives/Sum of Negatives

function countPositivesSumNegatives(input) {
    if(input == null || input.length == 0) // if input is null or input is empty
      return [] // return an empty array
      
    let positive = 0 // create bucket for count of positive numbers
    let negative = 0 // create bucket for sum of negative numbers
    
    for(let i = 0; i < input.length; i++){ // run a loop for each element in the array
      if(input[i] > 0){ // if the element is greater than 0
        ++positive // add 1 to the positive count
      }else{
        negative += input[i] // otherwise, add the sum of this negative number
      }
    }
    return [positive,negative] // return the array of counted positive numbers and sum of negative numbers
  }

  // 8 Kyu - To Square(root) or Not to Square(root)

  function squareOrSquareRoot(array) {
    return array.map(num => Math.sqrt(num) % 1 === 0 ? Math.sqrt(num) : (num * num) ) // If square root of an element has a remainder of zero (meaning it's a whole integer), return the square root value. Otherwise, return the square value of the element
  }