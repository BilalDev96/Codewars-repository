// 7 Kyu - Square Every Digit

/* Welcome. In this kata, you are asked to square every digit of a number and concatenate them. For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. Note: The function accepts an integer and returns an integer. */

function squareDigits(num){
    let finalArray = []; // create empty array to store squared digits
    let numToVar = num; // convert numbers to a variable
    let numToArray = Array.from(String(numToVar)) // convert variable to an array
    for(let i = 0; i < numToArray.length; i++){ // iterate through each index and push the squared digit into the finalArray
      finalArray.push(Math.pow(numToArray[i],2))
    }
    return Number(finalArray.join("")) // return the concatenated integer value of the array 
};