// 7 Kyu - You're a Square!

/* Given an integral number, determine if it's a square number: The tests will always use some integral number, so don't worry about that in dynamic typed languages.

Example: 25  =>  true */

let isSquare = function(n){
    return Math.sqrt(n) % 1 === 0; // return true if square root of integral number is even, meaning number is not a float 
}

// 7 Kyu - Descending Order

/* Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples: Input: 42145 Output: 54421 */

function descendingOrder(n){
    let string = String(n); // Convert number into a string
    let reverse = string.split("").sort((a,z) => z - a); // convert string into an array and sort the digits into descending order
    return Number(reverse.join("")); // return the number data type of the joined array
}

// 7 Kyu - List Filtering

/* In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

filter_list([1,'a','b',0,15]) == [1,0,15] */

function filter_list(l) {
    return l.filter(x => x !== String(x)) // filter any integers that aren't equivalent to a string
}

// 7 Kyu - Shortest Word

/* Simple, given a string of words, return the length of the shortest word(s). String will never be empty and you do not need to account for different data types. */

function findShort(s){
    let array = s.split(" "); // convert string to array
    let length = array.map(x => x.length); // create new array mapping the length of each index
    return Math.min(...length); // return the smallest number in that array
}

// 7 Kyu - Complementary DNA

/* In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

Example: dnaStrand [A,T,G,C] `shouldBe` [T,A,C,G] */

function DNAStrand(dna){
    let array = dna.split(""); // split string into array
    let finalArray = []; // create bucket to hold new values
    for(let i = 0; i < array.length; i++) { // iterate for each value and replace each letter with its complement
      if(array[i] === 'A') {
        finalArray.push('T');
      }else if(array[i] === 'T') {
        finalArray.push('A');
      }else if(array[i] === 'C') {
        finalArray.push('G');
      }else if(array[i] === 'G') {
        finalArray.push('C');
      }
    }
    return finalArray.join(""); // return the final array as a string
}