// 7 Kyu - Name Array Cappint

/* Create a method that accepts an array of names, and returns an array of each name with its first letter capitalized.

example

capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey'] */

function capMe(names) {
    return names.map(x => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase())
}

// 7 Kyu - Narcissistic Numbers

/* A Narcissistic Number is a number of length l in which the sum of its digits to the power of l is equal to the original number. If this seems confusing, refer to the example below.

Ex: 153, where l = 3 ( the number of digits in 153 )
13 + 53 + 33 = 153

Write a function that, given n, returns whether or not n is a Narcissistic Number. */

function isNarcissistic(n) {
    let array = String(n).split("")
    return array.map(x => Math.pow(x,array.length)).reduce((acc,c) => acc + c, 0) == n;
}