// 8 Kyu - Regular Ball Super Ball

/* Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

ball1 = new Ball();
ball2 = new Ball("super");

ball1.ballType     //=> "regular"
ball2.ballType     //=> "super" */

let Ball = function(ballType) {
    this.ballType = ballType || "regular";
};

// 8 Kyu - Squash the Bugs

/* Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value. Output should be the length of the longest word, as a number.

There will only be one 'longest' word. */

function findLongest(str) {
  
    let spl = str.split(" ");
    let longest = 0;
    
    for (let i = 0; i < spl.length; i++) {
      if (spl[i].length > longest) {
        longest = spl[i].length;
      }
    }
      return longest;
}

// 8 Kyu - Drink About

/* Kids drink toddy.
Teens drink coke.
Young adults drink beer.
Adults drink whisky.
Make a function that receive age, and return what they drink.

Rules:
Children under 14 old.
Teens under 18 old.
Young under 21 old.
Adults have 21 or more. */

function peopleWithAgeDrink(old) {
    if(old < 14) {
      return 'drink toddy';
    }else if(old < 18) {
      return 'drink coke';
    }else if(old < 21) {
      return 'drink beer';
    }else {
      return 'drink whisky';
    }
};