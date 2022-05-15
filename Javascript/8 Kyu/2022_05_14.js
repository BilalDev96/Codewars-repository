// 8 Kyu - Plural 

/* We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun. */

function plural(n) {
    return n !== 1;
}

// 8 Kyu - What is Between?

/* Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4] */

function between(a, b) {
    let fullArray = [];
    for(let i = a; i <= b; i++) {
      fullArray.push(i);
    }
    return fullArray;
}

// 8 Kyu - How Many Lightsabers Do You Own?

/* Inspired by the development team at Vooza, write the function that

accepts the name of a programmer, and
returns the number of lightsabers owned by that person.
The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.

Note: your function should have a default parameter. */

function howManyLightsabersDoYouOwn(name) {
    return name === 'Zach' ? 18 : 0;
}