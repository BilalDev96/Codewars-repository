// 7 Kyu - Anagram Detection

/* An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK" */

let isAnagram = function(test, original) {
    let testArray = test.toLowerCase().split("");
    let originalArray = original.toLowerCase().split("")
    return testArray.sort().join("") == originalArray.sort().join("")
};

// 7 Kyu - Love vs. Friendship

/* If　a = 1, b = 2, c = 3 ... z = 26

Then l + o + v + e = 54

and f + r + i + e + n + d + s + h + i + p = 108

So friendship is twice stronger than love :-)

The input will always be in lowercase and never be empty. */

function wordsToMarks(string){
    let alphabet = [0,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let sum = 0;
    for(let i = 0; i < string.length; i++) {
      sum += alphabet.indexOf(string[i])
    }
    return sum
}