// 7 Kyu - Ones and Zeros

const binaryArrayToNumber = arr => {
    arr.reverse() // reverse binary array to order the arry in increasing values
    let sum = [] // create an empty array bucket
    if(arr[0] == 1){ // control for the first array element being 1;
      sum.push(arr[0]) // if the value is 1, push that value into the "sum" array
    }
    
    for(let i = 1; i < arr.length; i++){ // for every element after the first, 
      if(arr[i] == 1){ // if the element equals 1
        sum.push(Math.pow(2,i)) // the base of 2 will be raised by the exponent value of the element's index, and pushed to the "sum" array
      }
    }
    return sum.reduce( (acc,c) => acc + c,0) // return the sum of all values included in the "sum" array
};