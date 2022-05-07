// 8 Kyu - Grasshopper - Terminal Game Move Function

/* In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.
Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

Example: move(3, 6) should equal 15 */

function move (position, roll) {
    return (roll * 2) + position;
}

// 8 Kyu - Correct the Mistakes of the Character Recognition Software

/* Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer. When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes. Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1 */

function correct(string) {
  let array = string.split("");
  let newArray = [];
  for(let i = 0; i < array.length; i++) {
    if(array[i] === '5') {
      newArray.push('S');
    }else if(array[i] === '0') {
      newArray.push('O');
    }else if(array[i] === '1') {
      newArray.push('I');
    }else{
      newArray.push(array[i]);
    }
  }
  return newArray.join("");
}

// 8 Kyu - Grasshopper - Debug Says Hello

/* The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

Example: Hello, Mr. Spock */

function sayHello(name) {
    return `Hello, ${name}`
}

// 8 Kyu - Sum the Strings

/* Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

Example: "34", "5" --> "39" */

function sumStr(a,b) {
    return `${Number(a) + Number(b)}`;
}

// 8 Kyu - N-th Power

/* You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.

Let's look at a few examples:

array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1. */

function index(array, n){
    return array[n] ? Math.pow(array[n],n) : -1;
}
