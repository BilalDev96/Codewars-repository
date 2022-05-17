// 8 Kyu - Reverse List Order

/* In this kata you will create a function that takes in a list and returns a list with the reverse order.

Examples (Input -> Output)
* [1, 2, 3, 4]  -> [4, 3, 2, 1] */

function reverseList(list) {
    return list.reverse();
}

// 8 Kyu - The Wide-Mouthed Frog?

/* The wide-mouth frog is particularly interested in the eating habits of other creatures. He just can't stop asking the creatures he encounters what they like to eat. But, then he meets the alligator who just LOVES to eat wide-mouthed frogs!When he meets the alligator, it then makes a tiny mouth. Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small otherwise return wide */

function mouthSize(animal) {
    return animal.toLowerCase() === 'alligator' ? 'small' : 'wide';
}

// 8 Kyu - Palindrome Strings

/* A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.

Examples
isPalindrome("anna")   ==> true
isPalindrome("walter") ==> false
isPalindrome(12321)    ==> true */

function isPalindrome(line) {
    return String(line) === String(line).split("").reverse().join("");
}