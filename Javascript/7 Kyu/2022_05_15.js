// 7 Kyu - Remove Duplicate Words

/* Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

Example:
Input: 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
Output: 'alpha beta gamma delta' */

function removeDuplicateWords (s) {
    let array = s.split(" "); // turn string into array
    let duplicatesRemoved = [...new Set(array)] // remove duplicate values by creating new variable
    return duplicatesRemoved.join(" ") // join the new variable as a string
}

// 7 Kyu - Predict Your Ages

/* My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

In honor of my grandfather's memory we will write a function using his formula!

Take a list of ages when each of your great-grandparent died.
Multiply each number by itself.
Add them all together.
Take the square root of the result.
Divide by two.
Example
predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86 */

function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    let nums = [age1,age2,age3,age4,age5,age6,age7,age8]; // create an array with original age values
    let multiple = nums.map(x => x * x); // multiply each index by itself
    let add = multiple.reduce((acc,c) => acc + c, 0); // add the results together
    return Math.floor(Math.sqrt(add) / 2); // return the nearest lowest integer when finding the square root divided by 2
}