// 7 Kyu - Squares Sequence

/* Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.

Examples
2, 5  -->  [2, 4, 16, 256, 65536]
3, 3  -->  [3, 9, 81] */

function squares(x, n) {
    let squaredArray = [x];
    for(let i = 0; i < n - 1; i++){
      squaredArray.push(Math.pow(squaredArray[i],2))
    }
    return n <= 0 ? [] : squaredArray
}

// 7 Kyu - Evens Times Last

/* Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.

Indices in sequence start from 0.

If the sequence is empty, you should return 0. */

function evenLast(numbers) {
    let filteredArray = numbers.filter((el,ind) => ind % 2 === 0)
    return numbers.length === 0 ? 0 : filteredArray.reduce((acc,c) => acc + c, 0) * numbers[numbers.length - 1];
}

// 7 Kyu - How Many Arguments

/* Create a function called args_count that returns the number of arguments provided

args_count(1, 2, 3) -> 3
args_count(1, 2, 3, 10) -> 4 */

function args_count() {
    return arguments.length;
}

// 7 Kyu - Series of Integers From m To n

/* Write a function that accepts two arguments and generates a sequence containing the integers from the first argument to the second inclusive.

Input
Pair of integers greater than or equal to 0. The second argument will always be greater than or equal to the first.

Example
generateIntegers(2, 5) // --> [2, 3, 4, 5] */

function generateIntegers(m, n) {
    let integerSeries = [];
    for(let i = m; i <= n; i++) {
      integerSeries.push(i)
    }
    return integerSeries;
}