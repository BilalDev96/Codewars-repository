// 8 Kyu - Opposites Attract

/* Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love. Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't. */

function lovefunc(flower1, flower2){
    let petalCount = flower1 + flower2; // add the count of both petals
    return petalCount % 2 !== 0 ? true : false; // if the count is odd, return true, else return false
};

// 8 Kyu - Are You Playing Banjo?

/* Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo! The function takes a name as its only argument, and returns one of the following strings:
name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings. */

function areYouPlayingBanjo(name) {
    if(name.charAt(0) === "R" || name.charAt(0) === "r") { // if the first character equals either uppercase or lowercase R
      return `${name} plays banjo`; // return this string
    }else {
      return `${name} does not play banjo`; // else, return this string
    }
};

// 8 Kyu - Find Maximum and Minimum Values of a List

/* Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the language) that receive a list of integers as input and return, respectively, the largest and lowest number in that list.

Example: * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134 */

const min = list => Math.min(...list); // search all values in the array and return the minimum value
const max = list => Math.max(...list); // search all values in the array and return the maximum value

// 8 Kyu - Simple Multiplication

// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
    return number % 2 === 0 ? number * 8 : number * 9; // if there are no remainders left when dividing by 2, return number * 8, else return number * 9
};

// 8 Kyu - How Good Are You Really?

/* There was a test in your class and you passed it. Congratulations! But you're an ambitious person. You want to know if you're better than the average student in your class. You receive an array with your peers' test scores. Now calculate the average and compare your score!
Return True if you're better, else False!
Note: Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given  array! */

function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce( (acc,c) => acc + c, yourPoints) / (classPoints.length + 1) // reduce the total class points including your own, divide it by the number of students. If your points are greater than that number, return true. Otherwise, return false.
};
  
// 8 Kyu - Function 3 - Multiplying Two Numbers

// Implement a function which multiplies two numbers.

function multiply(n1,n2) {
    return n1 * n2;
};