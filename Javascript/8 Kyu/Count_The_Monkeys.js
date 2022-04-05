function monkeyCount(n) {
    let newArray = []; //create an empty array
    for(let i = 1; i <= n; i++){ // run a loop for each positive integer before the number (n)
      newArray.push(i) // push each integer into the newArray
    }
    return newArray //return the newArray
  }