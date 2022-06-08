// 8 Kyu - Find Multiples of a Number

/* In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

If you can, try writing it in only one line of code. */

function findMultiples(integer, limit) {
    let multiples = [];
    for(let i = integer; i <= limit; i += integer) {
      multiples.push(i);
    }
    return multiples;
}

// 8 Kyu - Sum of Multiples

/* Find the sum of all multiples of n below m

Keep in Mind
n and m are natural numbers (positive integers)
m is excluded from the multiples */

function sumMul(n,m){
    let sum = 0;
    for(let i = n; i < m; i += n) {
      sum += i;
    }
    if(m > n) {
      return sum;
    }else {
      return 'INVALID';
    }
}