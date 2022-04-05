function fakeBin(x){
    let newArray = [] // create empty array
    for(let i = 0; i < x.length; i++){ // run a loop for each digit in the string of x
      if(x[i] < 5){ 
        newArray.push('0') // if the digit is below 5, push a value of 0 into the array
      }else{
        newArray.push('1') // otherwise, push a value of 1 into the array
      }
    }
    return newArray.join("").toString() // use the join method to eliminate the commas between the array elements, and convert the array to a string
  }