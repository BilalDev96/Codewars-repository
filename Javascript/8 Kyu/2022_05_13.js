// 8 Kyu - Powers of 2

/* Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

Examples
n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1] */

function powersOfTwo(n){
    let powerArray = []
    for(let i = 0; i <= n; i++) {
      powerArray.push(Math.pow(2,i));
    }
    return powerArray;
}