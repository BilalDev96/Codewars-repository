// 7 Kyu - Heron's Formula

/* Write function heron which calculates the area of a triangle with sides a, b, and c (x, y, z in COBOL).

Heron's formula:

s∗(s−a)∗(s−b)∗(s−c)\sqrt{s * (s - a) * (s - b) * (s - c)} 
s∗(s−a)∗(s−b)∗(s−c)
​
where

s= a+b+c / 2
​
 
Output should have 2 digits precision. */

function heron(a, b, c) {
    let s = (a + b + c) / 2
    return Math.sqrt(s * (s - a) * (s - b) * (s - c))
}

// 7 Kyu - Find Min and Max

/* Implement a function that returns the minimal and the maximal value of a list (in this order). */

function getMinMax(arr){
    return [Math.min(...arr),Math.max(...arr)]
}