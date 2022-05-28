// 8 Kyu - Grasshopper - Terminal Game Combat Function

/* Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0. */

function combat(health, damage) {
    return health - damage < 0 ? 0 : health - damage;
}

// 8 Kyu - Take the Derivative

/* This function takes two numbers as parameters, the first number being the coefficient, and the second number being the exponent.

Your function should multiply the two numbers, and then subtract 1 from the exponent. Then, it has to print out an expression (like 28x^7). "^1" should not be truncated when exponent = 2.

For example:

derive(7, 8)
In this case, the function should multiply 7 and 8, and then subtract 1 from 8. It should output "56x^7", the first number 56 being the product of the two numbers, and the second number being the exponent minus 1.

derive(7, 8) --> this should output "56x^7"  */

function derive(coefficient,exponent) {
    return `${coefficient * exponent}x^${exponent - 1}`;
}