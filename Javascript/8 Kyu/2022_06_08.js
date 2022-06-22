// 8 Kyu - Contamination #1 - String

/* An AI has infected a text with a character!!

This text is now fully mutated to this character.

If the text or the character are empty, return an empty string.
There will never be a case when both are empty as nothing is going on!!

Note: The character is a string of length 1 or an empty string.

Example
text before = "abc"
character   = "z"
text after  = "zzz" */

function contamination(text, char){
    let array = text.split("");
    return array.map(x => x = char).join("");
}

// 8 Kyu - Type of Sum

/* Return the type of the sum of the two arguments */

function typeOfSum(a, b) {
    let sum = a + b;
    return typeof(sum);
}

// 8 Kyu - For Twins: 1. Types

/* This kata series was created for friends of mine who just started to learn programming. Wish you all the best and keep your mind open and sharp!

Task:
Write function typeValidation that will accept two parameters: variable and type and check if type of variable is matching type. Return true if types match or false if not.

Examples:
typeValidation(42, "number");   // => true */

function typeValidation(variable, type) {
    return typeof(variable) == type;
}