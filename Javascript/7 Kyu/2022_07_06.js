// 7 Kyu - Divide and Conquer

/* Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

Return as a number. */

function divCon(x){
    let numArray = [];
    let stringArray = [];
    for(let i = 0; i < x.length; i++) {
      if(typeof x[i] == "number") {
        numArray.push(x[i])
      }else {
        stringArray.push(Number(x[i]))
      }
    }
    return numArray.reduce((acc,c) => acc + c, 0) - stringArray.reduce((acc,c) => acc + c, 0)
}