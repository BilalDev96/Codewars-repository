// 7 Kyu - Don't Give Me Five!

// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive! The start number will always be smaller than the end number. Both numbers can be also negative.

// Example: 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12

function dontGiveMeFive(start, end){
    let totalRange = [] // create empty array
    for(let i = start; i <= end; i++){
      totalRange.push(i) // push each value between the start and end into the totalRange array
    }
    let filterForFive = totalRange.filter(number => !String(number).includes("5")); // filter the array for any value that contains 5
    return filterForFive.length // return the length of the filtered array
};

// 7 Kyu - Find the Middle Element

// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements. The input to the function will be an array of three distinct numbers 

// Example: gimme([2, 3, 1]) => 0. 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

function gimme (triplet) {
    let sortedTriplet = [...triplet].sort( (a,b) => a - b) // create a new immutable variable that contains the sorted triplet array
    for(let i = 0; i < triplet.length; i++){ // run a loop for each element
      if(triplet[i] == sortedTriplet[1]){ // if the original array's element equals the middle element of the sorted array
        return triplet.indexOf(triplet[i]) // return the index of the original array's element
      }
    }
};
  