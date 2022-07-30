// 7 Kyu - Disarium Number (Special Numbers Series #3) 

/* Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.

Task
Given a number, Find if it is Disarium or not . */

function disariumNumber(n){
    let sum = 0;
    let num = String(n).split("").map(x => Number(x))
    for(let i = 0; i < num.length; i++){
      sum += Math.pow(num[i],(i + 1))
    }
    return sum === n ? "Disarium !!" : "Not !!"
}