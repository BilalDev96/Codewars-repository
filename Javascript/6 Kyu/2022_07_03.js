// 6 Kyu - Exclamation marks series #17: Put the exclamation marks and question marks on the balance - are they balanced?

/* Each exclamation mark's weight is 2; each question mark's weight is 3. Putting two strings left and right on the balance - are they balanced?

If the left side is more heavy, return "Left"; if the right side is more heavy, return "Right"; if they are balanced, return "Balance".

Examples
"!!", "??"     -->  "Right"
"!??", "?!!"   -->  "Left"
"!?!!", "?!?"  -->  "Left"
"!!???!????", "??!!?!!!!!!!"  -->  "Balance" */

function balance(left,right){
    let leftCount = 0;
    let rightCount = 0; // create counters for the left and right side
    for(let i = 0; i < left.length; i++){
      if(left[i] === "!") {
        leftCount += 2
      }else {
        leftCount += 3
      }
    } // iterate through both sides with different loops to count the score for each side
    for(let j = 0; j < right.length; j++) {
      if(right[j] === "!") {
        rightCount += 2
      }else {
        rightCount += 3
      }
    }
    if(leftCount > rightCount) { // run a conditional for whatever side weighs more. If they're equal, return "Balance"
      return "Left"
    }else if(rightCount > leftCount) {
      return 'Right'
    }else {
      return "Balance"
    }
}