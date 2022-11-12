// 7 Kyu - Special Number (Special Numbers Series #5)

/* Definition
A number is a Special Number if it’s digits only consist 0, 1, 2, 3, 4 or 5
Given a number determine if it special number or not.

Notes
The number passed will be positive (N > 0) .
All single-digit numbers within the interval [1:5] are considered as special number.

Input >> Output Examples
specialNumber(2) ==> return "Special!!"
specialNumber(39) ==> return "NOT!!" */

function specialNumber(n){
    let arrayOfNums = String(n).split("").map(x => Number(x)) // create an array with each digit of the number as an element
    let counter = 0; // set counter for special numbers in array
    for(let i = 0; i <= arrayOfNums.length; i++) { // run a loop to check if each element is a Special Number
      if(arrayOfNums[i] === 0 || arrayOfNums[i] === 1 || arrayOfNums[i] === 2 || arrayOfNums[i] === 3 || arrayOfNums[i] === 4 || arrayOfNums[i] === 5) {
        counter += 1 // add 1 to the counter if the element is a Special Number
      }
    }
    return counter === arrayOfNums.length ? "Special!!" : "NOT!!" // return the corresponding phrase if the counter equals the array length (meaning that every digit was a Special Number)
}