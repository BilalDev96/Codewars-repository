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

// 8 Kyu - I Love You, A Little, A Lot, Passionately...Not At All

function howMuchILoveYou(nbPetals) {
  let phrases = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'] //create array of phrases
  return phrases[(nbPetals - 1) % phrases.length] // return phrase index by subracting one from given value and modulus remainder corresponding to phrase index
}

// 8 Kyu - Remove First and Last Character Part Two (completed initial test, failed randomized 100 tests. Included best answer below)

function array(arr){
  let newString = arr.slice(1,-1).split(",").join(" ").trim() // let new string equal the removal of first and last characters with spaces in between
  
  if(newString.length < 1){ // if length of new string is less than 2
    return null // return null
  }else{
    return newString // otherwise, return the new string
  }
}
// 'Best Practice' answer
function array(arr){
  return arr.split(",").slice(1,-1).join(" ") || null;
}

// 8 Kyu - Add Length

function addLength(str) {
  return str.split(' ').map(item => item + " " + item.length) // split string into array, and map each element with its concatenated length
}

// 8 Kyu - Filter Out The Geese

function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(a => !geese.includes(a)) // return a new array that filters out any string values contained in the geese array
};

// 8 Kyu - Filling an Array (part 1)

function arr(N){
  let newArray = []; // create an empty array
  for(let i = 0; i < N; i++){ // for each number below the N integer
    newArray.push(i) // push that value into the newly created array
  }
  return newArray // return the array
}

// 8 Kyu - Multiple of Index

function multipleOfIndex(array) {
  let newArray = [] // create empty array
  for(let i = 0; i < array.length; i++){ // run a loop for each element in the original array
    if(array[i] % i == 0) // if the element value can be divided by its index value equally with no remainder
      newArray.push(array[i]) // push the element value into the new array
  }
  return newArray // return the newly created array
}

// 8 Kyu - No Loops 2 - You Only Need One

function check(a,x){
  return a.includes(x) // return a value of true if the array(a) contains the value(x)
};