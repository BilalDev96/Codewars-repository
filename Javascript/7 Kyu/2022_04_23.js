// 7 Kyu - Sort Arrays-1

// Just a simple sorting usage. Create a function that returns the elements of the input-array / list sorted in lexicographical order.

// Example: assert.deepEqual(sortme(['one', 'two', 'three' ]), ["one", "three", "two"])

sortme = names => names.sort(); // The sort method sorts by lexicographic order automatically

// 7 Kyu - Flatten

// Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.

let flatten = array => [].concat(...array); // the spread operator will grab all arrays within the array and the concat method will flatten them into a single array

// 7 Kyu - Simple Consecutive Pairs

// In this Kata your task will be to return the count of pairs that have consecutive numbers as follows:

/* Example: pairs([1,2,5,8,-4,-3,7,6,5]) = 3
The pairs are selected as follows [(1,2),(5,8),(-4,-3),(7,6),5]
--the first pair is (1,2) and the numbers in the pair are consecutive; Count = 1
--the second pair is (5,8) and are not consecutive
--the third pair is (-4,-3), consecutive. Count = 2
--the fourth pair is (7,6), also consecutive. Count = 3. 
--the last digit has no pair, so we ignore. */

function pairs(ar){
    let consecutiveCount = 0; // create a counter for each consecutive pair
    if(ar.length % 2 != 0){ // if there's an extra element at the end of the array that will not contribute to the count
      ar.pop(); // remove the last element
    }
    for(let i = 0; i < ar.length - 1; i += 2){ // run a loop for each consecutive pair in the array, counter will increase by 2 in order to run through each pairing
      if(ar[i] + 1 === ar[i + 1] || ar[i] - 1 === ar[i + 1]){ // if the first element in the pairing +/- 1 equals the next element in the pairing
        consecutiveCount++; // add one to the counter
      }
    }
    return consecutiveCount; // return the counter
};