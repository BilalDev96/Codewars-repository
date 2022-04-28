// 8 Kyu - Transportation on vacation

/* After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you. You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers. Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total. Write a code that gives out the total amount for different days(d). */

function rentalCarCost(d) {
    let rental = 40; // create variable for cost per day
    if(d > 2 && d < 7) { // if days with rental car are 3 or more, but less than 7
       return rental * d - 20 // return the cost minus $20
       }else if(d >= 7) { // if days with rental car are 7 or more days
         return rental * d - 50 // return the cost minus $50
       }else { // if days with rental are less than 3
         return rental * d // return cost
       }
};

// 8 Kyu - If you can't sleep, just count sheep!!

/* Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers. */

let countSheep = function (num){
    let sheep = []; // create an array to hold the sheep count
    for(let i = 1; i <= num; i++){ // run a loop for the number of sheep
      sheep.push(`${i} sheep...`) // push this template literal into the array
    }
    return sheep.join(""); // join the array back together as a string
};

// 8 Kyu - Area or Perimeter

/* You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square. If it is a square, return its area. If it is a rectangle, return its perimeter.
area_or_perimeter(6, 10) --> 32
area_or_perimeter(3, 3) --> 9
Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle. */

const areaOrPerimeter = (l , w) => l == w ? l * w : (l + w) * 2; // if length & width are equal values, return their values multiplied to get the area. Otherwise, return the addition of their values multiplied by 2 to get the perimeter

// 8 Kyu - Grasshopper - Personalized Message

/* Create a function that gives a personalized greeting. This function takes two parameters: name and owner. Use conditionals to return the proper message:

name equals owner: 'Hello boss'
otherwise: 'Hello guest' */

function greet (name, owner) {
    return name === owner ? 'Hello boss' : 'Hello guest'; // if both values equal the same, return the first string. Otherwise, return the second string
};

// 8 Kyu - Can we divide it?

/* Your task is to create the functionisDivideBy (or is_divide_by) to check if an integer number is divisible by both integers a and b. A few cases:

(-12, 2, -6)  ->  true
(-12, 2, -5)  ->  false */

function isDivideBy(number, a, b) {
    return number % a === 0 && number % b === 0 ? true : false; // if there is no remainder when number is divided by a & b, return true. Otherwis, return false
};

// 8 Kyu - Quarter of the year

/* Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number. For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter. */

const quarterOf = (month) => {
    if(month < 4) {
      return 1;
    }else if(month < 7) {
      return 2;
    }else if(month < 10) {
      return 3;
    }else if(month < 13) {
      return 4;
    }
};