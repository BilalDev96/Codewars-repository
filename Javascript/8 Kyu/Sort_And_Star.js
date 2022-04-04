function twoSort(s) {
    s.sort(); // sort the array in alphabetical order
    let sortOne = s[0] // new variable for the first value
    return sortOne.split('').join('***') // split the first value's characters, join it with 3 asterisks betweeen each character, and return the new value
  }