// 6 Kyu - Unique in Order

/* Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3] */

let uniqueInOrder=function(iterable){
    let newArray = [];
    for(let i = 0; i < iterable.length + 1; i++) { // iterate through each element. If it's not equal to the one before it, push it to newArray
      if(iterable[i] !== iterable[i -1]) {
        newArray.push(iterable[i])
      }
    }
    newArray.pop(); // pop the last element in newArray off since it will always return undefined 
    return newArray // return the newArray
}