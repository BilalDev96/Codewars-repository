// 7 Kyu - Maximum Gap (Array Series #4)

/* Task
Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.

Notes
Array/list size is at least 3.
Array/list's numbers Will be mixture of positives and negatives also zeros.
Repetition of numbers in the array/list could occur.
The Maximum Gap is computed Regardless the sign.

Input >> Output Examples
maxGap ({13,10,5,2,9}) ==> return (4)
Explanation: The Maximum Gap after sorting the array is 4 , The difference between 9 - 5 = 4. */

function maxGap (numbers){
    let sortedNums = numbers.sort((a,b) => a - b)
    let gaps = []
    for(let i = 0; i <= numbers.length - 1; i++){
      gaps.push(sortedNums[i] - sortedNums[i + 1])
    }
    let finalGaps = gaps.sort((a,b) => a - b)
    return Math.abs(finalGaps[0])
}