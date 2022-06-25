// 6 Kyu - Backspace in String

/* Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

Examples
"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  "" */

function cleanString(s) {
    let newString = []; // create an empty array to add or remove characters to
    for(let i = 0; i < s.length; i++) {
      if(s[i] !== "#") { // iterate through the original string's characters. If the character is not equal to "#", push that value to the new array
        newString.push(s[i])
      }else {
        newString.pop() // Otherwise, pop the last character off from the new array (functioning as a backspace)
      }
    }
    return newString.join("") // join the array as a string and return the value
}

// 6 Kyu - Replace With Alphabet Position

/* In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string ) */

function alphabetPosition(text) {
    let textInsensitive = text.toLowerCase().split(""); // Convert the string to all lowercase values and split it into an array to iterate through
    let alphabet = ['','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']; // set variable for alphabet positoning
    let alphabetPosition = []; // create empty array to hold integer where alphabet letter is located
    for(let i = 0; i < textInsensitive.length; i++) {
      alphabet.indexOf(textInsensitive[i]) != -1 ? array.push(alphabet.indexOf(textInsensitive[i])) : null; // iterate through the array; if the index value is not equal to -1 (meaning it exists as a letter), push it to "array", otherwise ignore it
    }
    return alphabetPosition.join(" "); // return the final array converted to a string with spaces
}