// 8 Kyu - 5 Without Numbers

/* Write a function that always returns 5

Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/ */

function unusualFive() {
    let five = 'Five!';
    return five.length;
}

// 8 Kyu - Find the Position!

/* When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1" */

function position(letter){
    let alphabet = [0, 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let char = alphabet.indexOf(letter);
    return `Position of alphabet: ${char}`;
}