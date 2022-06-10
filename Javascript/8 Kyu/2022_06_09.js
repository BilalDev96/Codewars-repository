// 8 Kyu - Exclusive "or" (xor) Logical Operator

/* Since we cannot define keywords in Javascript (well, at least I don't know how to do it), your task is to define a function xor(a, b) where a and b are the two expressions to be evaluated. Your xor function should have the behaviour described above, returning true if exactly one of the two expressions evaluate to true, false otherwise. */

function xor(a, b) {
    if(a == true && b == false || a == false && b == true) {
      return true;
    }else {
      return false;
    }
}

// 8 Kyu - Holiday VIII - Duty Free

/* The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.

You will be given the high street price (normPrice), the duty free discount (discount) and the cost of the holiday.

For example, if a bottle cost £10 normally and the discount in duty free was 10%, you would save £1 per bottle. If your holiday cost £500, the answer you should return would be 500.

All inputs will be integers. Please return an integer. Round down. */

function dutyFree(normPrice, discount, hol){
    return Math.floor(hol / (normPrice * (discount/100)));
}

// 8 Kyu - Surface Area and Volume of a Box

/* Write a function that returns the total surface area and volume of a box as an array: [area, volume] */

function getSize(width, height, depth) {
    return [2 * (width * height) + 2 * (width * depth) + 2 * (height * depth), width * height * depth];
}

// 8 Kyu - Leonardo Dicaprio and Oscars

/* if oscar was (integer) 88, you have to return "Leo finally won the oscar! Leo is happy".
if oscar was 86, you have to return "Not even for Wolf of wallstreet?!"
if it was not 88 or 86 (and below 88) you should return "When will you give Leo an Oscar?"
if it was over 88 you should return "Leo got one already!" */

function leo(oscar){
    if(oscar == 88) {
      return 'Leo finally won the oscar! Leo is happy';
    }else if(oscar == 86) {
      return 'Not even for Wolf of wallstreet?!'
    }else if (oscar > 88) { 
      return 'Leo got one already!'
    }else {
      return 'When will you give Leo an Oscar?'
    }
}