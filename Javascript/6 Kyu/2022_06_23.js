// 6 Kyu - Detect Pangram

/* A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation. */

function isPangram(string){
    let counter = 0; // create counter for each unique letter in string
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'] // create array of letters to cross-reference string with
    let array = string.split("").map(x => x.toLowerCase()) // split the string into a new array, converting each letter to its lowercase value
    let removeDuplicateLetters = [...new Set(array)]; // remove any duplicate letters in the array
    for(let i = 0; i < array.length; i++) {
      if(alphabet.includes(`${removeDuplicateLetters[i]}`)) {
        counter += 1 // iterate through the new array and if the alphabet array includes the value from the new array, increase the counter by 1
      }
    }
    return counter === 26; // return true if the counter equals 26, otherwise return false
}

// 6 Kyu - Find the Unique Number

/* There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance. */

function findUniq(arr) {
    let sortedArray = arr.sort((a,b) => a - b); // Sort the array to separate the unique number and place it at either the beginning or end of the new array
    if(sortedArray[0] < sortedArray[1]) {
      return sortedArray[0]; // If the first value is less than the second value in the array, that means the first value is unique as all others will be equal. Return the first value
    }else {
      return sortedArray[sortedArray.length - 1]; // Otherwise, return the last element in the array as it's larger than the other non-unique numbers in the array
    }
}
  