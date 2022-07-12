// 6 Kyu - The Vowel Code

/* Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5
For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

For example, decode("h3 th2r2") would return "hi there".

For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels. */

function encode(string) {
    let encodeArray = []; // create new array to capture original or converted character from original string
    for(let i = 0; i < string.length; i++){ // iterate through each character. If any equal a vowel, push its numerical value to the array. Otherwise, push the original value to the array
      if(string[i] === "a") {
        encodeArray.push("1")
      }else if(string[i] === "e") {
        encodeArray.push("2")
      }else if(string[i] === "i") {
        encodeArray.push("3")
      }else if(string[i] === "o") {
        encodeArray.push("4")
      }else if(string[i] === "u") {
        encodeArray.push("5")
      }else {
        encodeArray.push(string[i])
      }
    }
    return encodeArray.join("") // join the array as a string and return the final value
}

function decode(string) {
    let decodeArray = [];
    for(let i = 0; i < string.length; i++){ // iterate through each character. If any equal a number, push its vowel value to the array. Otherwise, push the original value to the array
      if(string[i] === "1") {
        decodeArray.push("a")
      }else if(string[i] === "2") {
        decodeArray.push("e")
      }else if(string[i] === "3") {
        decodeArray.push("i")
      }else if(string[i] === "4") {
        decodeArray.push("o")
      }else if(string[i] === "5") {
        decodeArray.push("u")
      }else {
        decodeArray.push(string[i])
      }
    }
    return decodeArray.join("") // join the array as a string and return the final value
}