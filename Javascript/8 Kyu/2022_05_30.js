// 8 Kyu - Get Character from ASCII Value

/* Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.

Example:

get_char(65)
should return:

'A' */

function getChar(c){
    return String.fromCharCode(c);
}

// 8 Kyu - Enumerable Magic #3 - Does My List Include This?

/* Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false. */

function include(arr, item){
    return arr.includes(item);
}

// 8 Kyu - Formatting Decimal Places #0

/* Each number should be formatted that it is rounded to two decimal places. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.

Example:    
5.5589 is rounded 5.56   
3.3424 is rounded 3.34 */

function twoDecimalPlaces(n) {
    return Math.round(n * 100) / 100;
}

// 8 Kyu - For UFC Fans: Conor McGregor vs George Saint Pierre

/* This is a beginner friendly kata especially for UFC/MMA fans.

It's a fight between the two legends: Conor McGregor vs George Saint Pierre in Madison Square Garden. Only one fighter will remain standing, and after the fight in an interview with Joe Rogan the winner will make his legendary statement. It's your job to return the right statement depending on the winner!

If the winner is George Saint Pierre he will obviously say:

"I am not impressed by your performance."
If the winner is Conor McGregor he will most undoubtedly say:

"I'd like to take this chance to apologize.. To absolutely NOBODY!"
Good Luck! */

let quote = function(fighter) {
    return fighter.toLowerCase() == 'george saint pierre' ? "I am not impressed by your performance." : "I'd like to take this chance to apologize.. To absolutely NOBODY!"
};