// 7 Kyu - Printer Errors

/* In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.

Examples:
s="aaabbbbhaijjjm"
printer_error(s) => "0/14" */

function printerError(s) {
    let alphabet = ['n','o','p','q','r','s','t','u','v','w','x','y','z']
    let array = s.split("");
    let count = 0;
    for(let i = 0; i < array.length; i++) {
      if(alphabet.includes(array[i])) {
        count += 1
      }
    }
  return `${count}/${array.length}`
}

// 7 Kyu - Summing a Number's Digits

/* Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5
Let's assume that all numbers in the input will be integer values. */

function sumDigits(number) {
    let string = String(Math.abs(number)).split("").map(x => Number(x))
    return string.reduce((acc,c) => acc + c, 0)
}

// 8 Kyu - Simple Fun #176: Reverse Letter

/* Given a string str, reverse it and omit all non-alphabetic characters.

Example
For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".

Input/Output
[input] string str
A string consists of lowercase latin letters, digits and symbols.

[output] a string
 */

function reverseLetter(str) {
    let trueString = str.split('');
    let filterString = [];
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    for(let i = 0; i < trueString.length; i++){
      if(alphabet.includes(trueString[i])) {
         filterString.push(trueString[i])
         }
    }
    return filterString.reverse().join("")
}