// 7 Kyu - Tidy Number (Special Numbers Series #9)

/* Definition
A Tidy number is a number whose digits are in non-decreasing order.

Task
Given a number, Find if it is Tidy or not.

Notes
Number passed is always Positive.
Return the result as a Boolean

Example
tidyNumber (13579) ==> return (true)
Explanation:
The number's digits {1 , 3, 5, 7, 9} are in non-Decreasing Order. */

function tidyNumber(n){
    let arrayOfNums = String(n).split("").map(x => Number(x))
    let counter = 1
    for(let i = 0; i <= arrayOfNums.length - 1; i++) {
      if(arrayOfNums[i + 1] >= arrayOfNums[i]) {
        counter += 1
      }
    }
    return counter === arrayOfNums.length ? true : false
}