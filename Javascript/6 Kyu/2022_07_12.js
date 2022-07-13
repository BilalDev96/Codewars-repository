// 6 Kyu - Sum of Two Integers

/* Given Two integers a , b , find The sum of them , BUT You are not allowed to use the operators + and -

Notes
The numbers (a,b) may be positive , negative values or zeros .

Returning value will be an integer .

Javascript: the Array reduce methods are disabled, along with eval, require, and module .
Input >> Output Examples
1- Add (5,19) ==> return (24) */

function add(x, y) {
    if (y == 0) {
          return x;
      } else {
          return add(x ^ y, (x & y) << 1)
      }
}