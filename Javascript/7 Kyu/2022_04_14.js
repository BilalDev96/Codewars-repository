// 7 Kyu - No Oddities Here

function noOdds( values ){
    let newArray = [] // create an empty array
    for (let i = 0; i < values.length; i++){ // run a loop for each element in the "values" array
      if (values[i] % 2 === 0){ // if modulus 2 for each element indicates the number is even
        newArray.push(values[i]) // push that element into the newArray
      }
    }
    return newArray // return the newArray
  }