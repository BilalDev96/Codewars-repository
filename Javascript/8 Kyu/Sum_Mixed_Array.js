function sumMix(x){
    let nums = [] // create an empty array
    x.forEach( number => nums.push(Number(number)) ) // For each loop, convert any integers (strings or numbers) to numbers and push it into the nums array
    return nums.reduce( (acc,c) => acc + c, 0) // return the sum of all values in the nums array
  }