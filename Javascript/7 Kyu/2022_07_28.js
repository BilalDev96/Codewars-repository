// 7 Kyu - Alphabet War

/* There is a war and nobody knows - the alphabet war!
There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

Task
Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

The left side letters and their power:

 w - 4
 p - 3
 b - 2
 s - 1
The right side letters and their power:

 m - 4
 q - 3
 d - 2
 z - 1
The other letters don't have power and are only victims. */

function alphabetWar(fight) {
    let fightArray = fight.split("")
    let leftSide = 0;
    let rightSide = 0;
    for(let i = 0; i <= fightArray.length; i++) {
      if(fightArray[i] === "w") {
        leftSide += 4
      }else if(fightArray[i] === "p") {
        leftSide += 3
      }else if(fightArray[i] === "b") {
        leftSide += 2
      }else if(fightArray[i] === "s") {
        leftSide += 1
      }else if(fightArray[i] === "m") {
        rightSide += 4
      }else if(fightArray[i] === "q") {
        rightSide += 3
      }else if(fightArray[i] === "d") {
        rightSide += 2
      }else if(fightArray[i] === "z") {
        rightSide += 1
      }
    }
    if(leftSide > rightSide) {
      return "Left side wins!"
    }else if(rightSide > leftSide) {
      return "Right side wins!"
    }else {
      return "Let's fight again!"
    }

}

// 7 Kyu - Sum of All Arguments

/* Write a function that finds the sum of all its arguments.

eg:

sum(1, 2, 3) // => 6
sum(8, 2) // => 10
sum(1, 2, 3, 4, 5) // => 15 */

function sum() {
    const array = [...arguments]
    return array.reduce((acc,c) => acc + c, 0)
}