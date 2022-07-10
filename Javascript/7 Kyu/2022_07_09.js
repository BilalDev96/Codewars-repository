// 7 Kyu - Substituting Variables Into Strings: Padded Numbers

/* Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.

Example:

solution(5) // should return "Value is 00005" */

function solution(value){
    let array = String(value).split("");
    for(let i = array.length; i < 5; i++ ) {
      array.unshift("0");
    }
    return `Value is ${array.join("")}`;
}

// 7 Kyu - Sum of Odd Numbers

/* Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8 */

function rowSumOddNumbers(n) {
    return Math.pow(n,3)
}

// 7 Kyu - Maximum Length Difference

/* You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y)))

If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

Example:
a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(a1, a2) --> 13
Bash note:
input : 2 strings with substrings separated by ,
output: number as a string */

function mxdiflg(a1, a2) {
    let aOne = Math.min(...a1.map(x => x.length))
    let aTwo = Math.max(...a2.map(x => x.length))
    let aOneAgain = Math.max(...a1.map(x => x.length))
    let aTwoAgain = Math.min(...a2.map(x => x.length))
    if(a1.length === 0 || a2.length === 0) {
      return -1
    }
    return Math.abs(aOne - aTwo) > Math.abs(aOneAgain - aTwoAgain) ?  Math.abs(aOne - aTwo) : Math.abs(aOneAgain - aTwoAgain)
}