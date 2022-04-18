// 7 Kyu - Check the Exam

// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers. The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used). If the score < 0, return 0.

// Example: checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6

function checkExam(array1, array2) {
    let sum = 0;
    for(let i = 0; i < array1.length; i++){ // run a loop for each element in the given arrays
      if(array1[i] == array2[i]){ // if the answer key matches the student's answer
        sum += 4 // add 4 to the sum variable
      }else if(array1[i] != array2[i] && array2[i] != ''){ // if the answer key does not match the student's answer and the student's answer is not empty
        sum -=1 // subtract one from the sum
      }
    }
    if(sum < 0){ // if the sum is less than 0
      return 0 // return 0
    }else{ 
      return sum // otherwise, return the sum value
    }
};

// 7 Kyu - Form the Minimum

// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).Only positive integers will be passed to the function (> 0 ), no negatives or zeros.

// Example: minValue({5, 7, 5, 9, 7})  ==> return (579)

function minValue(values){
    let removeDuplicates = [...new Set(values)]; // create a variable where duplicate values are removed
    return Number(removeDuplicates.sort( (a,b) => a - b).join("")) // sort the variable in ascending order, join the integers into a string, and convert it to a number
};

// 7 Kyu - Flatten and Sort an Array

// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// Example: Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

function flattenAndSort(array) {
    let totalArray = [].concat(...array) // flatten the array using the spread operator to include all nested arrays and concatenate it into an empty array
    return totalArray.sort( (a, b) => a - b) // return the flattened array, sorted in ascending order
};