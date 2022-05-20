// 8 Kyu - Remove Duplicates from List

/* Define a function that removes duplicates from an array of numbers and returns it as a result. The order of the sequence has to stay the same. */

function distinct(a) {
    return [...new Set(a)];
}

// 8 Kyu - Function Syntax Debugging

/* A student was working on a function and made some syntax mistakes while coding. Help them find their mistakes and fix them. */

function main(verb, noun) {
    return verb+ "" +noun;
}

// 8 Kyu - Find the Remainder

/* Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

Division by zero should return NaN.

Examples:
n = 17
m = 5
result = 2 (remainder of `17 / 5`) */

function remainder(n, m){
    return n > m ? n % m : m % n;
}