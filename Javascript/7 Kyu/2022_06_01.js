// 8 Kyu - Thinkful - String Drills: Repeater

/* Write a function named repeater() that takes two arguments (a string and a number), and returns a new string where the input string is repeated that many times.

Example: "a", 5 --> "aaaaa" */

function repeater(string, n){
    return string.repeat(n);
}

// 8 Kyu - Digits Explosion

/* Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

Examples
explode("312")
should return :

"333122" */

function explode(s) {
    let array = []; // create empty array to hold eventual string values
    let oldArray = s.split("") // split old string into an array
    for(let i = 0; i < s.length; i++) { // iterate through each character in original string
      array.push(oldArray[i].repeat(oldArray[i])) // push the repeated string character by its respective integer into "array"
    }
    return array.join("") // join the array back as a string and return the value
}