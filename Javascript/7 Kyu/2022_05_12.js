// 7 Kyu - Sum of a Sequence

/* Your task is to make function, which returns the sum of a sequence of integers. The sequence is defined by 3 non-negative values: begin, end, step (inclusive). If begin value is greater than the end, function should returns 0

Examples:
2,2,2 --> 2
2,6,2 --> 12 (2 + 4 + 6) */

const sequenceSum = (begin, end, step) => {
    let sum = 0 // create counter to hold the sum of integers between begin and including end
    if(begin > end) { // if begin is greater than end
      return 0; // return 0
    }
    for(let i = begin; i <= end; i += step) { // iterate through each integer using step
      sum += i; // add the integers to the sum variable
    }
    return sum; // return the sum
};

// 7 Kyu - Sum of All the Multiples of 3 or 5

/* Your task is to write function findSum. Upto and including n, this function will return the sum of all multiples of 3 and 5.

For example:
findSum(5) should return 8 (3 + 5)
findSum(10) should return 33 (3 + 5 + 6 + 9 + 10) */

function findSum(n) {
    let sum = 0; // create variable to hold the sum
    for(let i = 3; i <= n; i++) { // iterate through each integer starting from 3 and up to n
      if(i % 3 === 0 || i % 5 === 0) { // if the remainder for i by 3 or 5 is 0, add the integer to the sum variable
        sum += i;
      }
    }
    return sum; // return the sum variable
}