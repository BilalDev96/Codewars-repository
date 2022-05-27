// 8 Kyu - Determine Offspring Sex Based on Genes XX and XY Chromosomes

/* The male gametes or sperm cells in humans and other mammals are heterogametic and contain one of two types of sex chromosomes. They are either X or Y. The female gametes or eggs however, contain only the X sex chromosome and are homogametic.

The sperm cell determines the sex of an individual in this case. If a sperm cell containing an X chromosome fertilizes an egg, the resulting zygote will be XX or female. If the sperm cell contains a Y chromosome, then the resulting zygote will be XY or male.

Determine if the sex of the offspring will be male or female based on the X or Y chromosome present in the male's sperm.

If the sperm contains the X chromosome, return "Congratulations! You're going to have a daughter."; If the sperm contains the Y chromosome, return "Congratulations! You're going to have a son."; */

function chromosomeCheck(sperm) {
    return sperm.indexOf('Y') == 1 ? "Congratulations! You're going to have a son." : "Congratulations! You're going to have a daughter.";
}

// 8 Kyu - L1: Bartender, drinks!

/* Complete the function that receives as input a string, and produces outputs according to the following table:

Input	Output
"Jabroni"	"Patron Tequila"
"School Counselor"	"Anything with Alcohol"
"Programmer"	"Hipster Craft Beer"
"Bike Gang Member"	"Moonshine"
"Politician"	"Your tax dollars"
"Rapper"	"Cristal"
anything else	"Beer"
Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars". */

function getDrinkByProfession(param){
    switch (param.toLowerCase()) {
        case "jabroni":
          return 'Patron Tequila';
          break;
        case "school counselor":
          return 'Anything with Alcohol';
          break;
        case "programmer":
          return 'Hipster Craft Beer';
          break;
        case "bike gang member":
          return 'Moonshine';
          break;
        case "politician":
          return 'Your tax dollars';
          break;
        case "rapper":
          return 'Cristal';
          break;
        default:
          return 'Beer';
          break;
    }
}

// 8 Kyu - Sleight Authentication

/* Christmas is coming and many people dreamed of having a ride with Santa's sleigh. But, of course, only Santa himself is allowed to use this wonderful transportation. And in order to make sure, that only he can board the sleigh, there's an authentication mechanism.

Your task is to implement the authenticate() method of the sleigh, which takes the name of the person, who wants to board the sleigh and a secret password. If, and only if, the name equals "Santa Claus" and the password is "Ho Ho Ho!" (yes, even Santa has a secret password with uppercase and lowercase letters and special characters :D), the return value must be true. Otherwise it should return false.

Examples:

var sleigh = new Sleigh();
sleigh.authenticate("Santa Claus", "Ho Ho Ho!"); // must return TRUE */

function Sleigh() {}

Sleigh.prototype.authenticate = function(name, password) {
  return name == 'Santa Claus' && password == 'Ho Ho Ho!' ? true : false;
};

// 8 Kyu - Pre-FizzBuzz Workout #1

/* This is the first step to understanding FizzBuzz.

Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.

Your expected output is an array of positive integers from 1 to n (inclusive).

Your job is to write an algorithm that gets you from the input to the output. */

function preFizz(n) {
    let array = [];
    let counter = 1;
    while(counter <= n){
      array.push(counter);
      counter++;
    }
    return array;
}

// 8 Kyu - Thinkful - Number Drills: Pixelart Planning

/* You're laying out a rad pixel art mural to paint on your living room wall in homage to Paul Robertson, your favorite pixel artist.

You want your work to be perfect down to the millimeter. You haven't decided on the dimensions of your piece, how large you want your pixels to be, or which wall you want to use. You just know that you want to fit an exact number of pixels.

To help decide those things you've decided to write a function, is_divisible() that will tell you whether a wall of a certain length can exactly fit an integer number of pixels of a certain length.

Your function should take two arguments: the size of the wall in millimeters and the size of a pixel in millimeters. It should return True if you can fit an exact number of pixels on the wall, otherwise it should return False. For example is_divisible(4050, 27) should return True, but is_divisible(4066, 27) should return False. */

function isDivisible(wallLength, pixelSize){
    return wallLength % pixelSize == 0;
}