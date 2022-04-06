// Input: Array of elements

// ["h","o","l","a"]

// Output: String with comma delimited elements of the array in th same order.

// "h,o,l,a"

//---MY ANSWER---
function printArray(array){
    return array.toString() // convert array to a string
  }

// ---BEST ANSWER---
function printArray(array){
    return array.join();
  }
  