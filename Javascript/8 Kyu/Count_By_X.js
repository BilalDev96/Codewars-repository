function countBy(x, n) {
    let z = [];
    for(let i = 1; i <= n; i++){ // loop through each multiple of the n count
      z.push(x * i) // multiply the x by the loop counter and push the value into the z array
    }
    return z; // return the z array once the loop is finished
  }