// 7 Kyu - Make Copies

/* Write a function that takes a list (in Python) or array (in other languages) of numbers, and makes a copy of it.

Note that you may have troubles if you do not return an actual copy, item by item, just a pointer or an alias for an existing list or array.

If not a list or array is given as a parameter in interpreted languages, the function should raise an error.

Examples:

t = [1, 2, 3, 4]
tCopy = copyList(t)
t[1] += 5
t = [1, 7, 3, 4]
tCopy = [1, 2, 3, 4] */

function copyList(l){
    return l.slice()
}

// 7 Kyu - Nth Power Rules Them All!

/* You are provided with an array of positive integers and an additional integer n (n > 1).

Calculate the sum of each value in the array to the nth power. Then subtract the sum of the original array */

function modifiedSum(a, n) {
    let numPowers = 0;
    for(let i = 0; i < a.length; i++) {
      numPowers += Math.pow(a[i], n)
    }
    return numPowers - a.reduce((acc,c) => acc + c, 0)
}