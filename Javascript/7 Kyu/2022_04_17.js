// 7 Kyu - JavaScript Array Filter

// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

// Example: getEvenNumbers([2,4,5,6]) // should == [2,4,6]

function getEvenNumbers(numbersArray){
    return numbersArray.filter(num => num % 2 === 0) // use the filter method to return the values that pass the test (their remainder equaling zero)
};