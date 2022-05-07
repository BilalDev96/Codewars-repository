// 8 Kyu - DNA to RNA Conversion

/* Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T'). Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U'). Create a function which translates a given DNA string into RNA.

Example: "GCAT"  =>  "GCAU" */

function DNAtoRNA(dna) {
    return dna.split("").map(x => x === 'T' ? x = 'U' : x = x).join("") // split string into array. Iterate through each index and if it equals T, replace it with U. Otherwise, keep it the same. Join the final array into the new string
};

// 8 Kyu - Will You Make It?

/* You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. Considering these factors, write a function that tells you if it is possible to get to the pump or not. Function should return true if it is possible and false if not. The input values are always positive. */

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return distanceToPump <= mpg * fuelLeft // return true if miles per gallon & fuel left is greater than or equivalent to the distance to the pump. False otherwise
};

// 8 Kyu - Rock Paper Scissors!

/* Let's play! You have to return which player won! In case of a draw return Draw!.

Examples:
rps('scissors','paper') // Player 1 won!
rps('scissors','rock') // Player 2 won!
rps('paper','paper') // Draw! */

const rps = (p1, p2) => {
    if(p1 === "rock" && p2 === "scissors" || p1 === "paper" && p2 === "rock" || p1 === "scissors" && p2 === "paper") {
      return 'Player 1 won!';
    }else if(p2 === "rock" && p1 === "scissors" || p2 === "paper" && p1 === "rock" || p2 === "scissors" && p1 === "paper") {
      return 'Player 2 won!';
    }else {
      return 'Draw!'
    }
};

// 8 Kyu - Remove Exclamation Marks

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
    let array = s.split(""); // create array out of given string
    let finalArray = []; // create bucket to capture each character that isn't an exclamation mark
    for(let i = 0; i < array.length; i++) {
      if(array[i] !== "!") { // iterate through each index. If it isn't an exclamation mark, push it into finalArray
        finalArray.push(array[i]);
      }
    }
    return finalArray.join(""); // return finalArray as a string
};

// 8 Kyu - Twice as Old

/* Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). */

function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - (sonYearsOld * 2)); // return the positive integer of how many years the father is twice as old as the son
};