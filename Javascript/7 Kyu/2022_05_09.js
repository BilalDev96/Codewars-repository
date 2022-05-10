// 7 Kyu - Friend or Foe?

/* Make a program that filters a list of strings and returns a list with only your friends name in it.
If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...Note: keep the original order of the names in the output.

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"] */

function friend(friends){
    return friends.filter(x => x.length === 4); // return a filtered array with any string length that equals 4
}

// 7 Kyu - Two to One

/* Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy" */

function longest(s1, s2) {
    let sorted1 = [...new Set(s1)]; // remove duplicates from first array
    let sorted2 = [...new Set(s2)]; // remove duplicates from second array
    let sortCombine = sorted1.concat(sorted2); // concatenate both sorted arrays
    let finalSorted = [...new Set(sortCombine)]; // remove duplicates from concatenated array
    return finalSorted.sort().join("") // sort array in lexicographic order and join as string
}

// 7 Kyu - Find the Next Perfect Square

/* Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer. If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

Examples:121 --> 144 */

function findNextSquare(sq) {
    let nextSquare = Math.sqrt(sq) // find the square root of the given number
    if(nextSquare % 1 === 0) { // if the square root is a whole integer indicating it's a perfect square
      return (nextSquare + 1) * (nextSquare + 1) // return the next perfect square
    }else {
      return -1 // else, return -1
    }
}