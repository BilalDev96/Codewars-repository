// 7 Kyu - Return String of First Characters

/* In this exercise, a string is passed to a method and a new string has to be returned with the first character of each word in the string.

For example:

"This Is A Test" ==> "TIAT"
Strings will only contain letters and spaces, with exactly 1 space between words, and no leading/trailing spaces. */

function makeString(s){
    let array = s.split(" ").map(x => x[0]) // split the string into an array, and map a new array only consisting of the first character from each word
    return array.join("") // join the new array as a string and return the result
}
  