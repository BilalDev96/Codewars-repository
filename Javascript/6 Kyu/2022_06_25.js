// 6 Kyu - Write Numbers in Expanded Form

/* You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0. */

function expandedForm(num) {
    let string = String(num) // convert the number to a string to eventually iterate through
    let array = [Number(string[string.length - 1])]; // set the first array element as the integer value of the last character in the string
    for(let i = 2; i <= string.length; i++) { // iterate through the rest of the characters in the string
      array.unshift(Number(string[string.length - i]) * Math.pow(10, i - 1)) // push the string value converted to an integer when it is multiplied by its respective multiple of 10 according to its decimal place
    }
    return array.filter(x => x !== 0).join(" + ") // filter out any of the zero integers from the array, and join it all together with a + operator
}