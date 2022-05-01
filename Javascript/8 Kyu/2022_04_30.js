// 8 Kyu - Will there be enough space?

/* The Story:
Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.

Task Overview:
You have to write a function that accepts three parameters:

cap is the amount of people the bus can hold excluding the driver.
on is the number of people on the bus excluding the driver.
wait is the number of people waiting to get on to the bus excluding the driver.
If there is enough space, return 0, and if there isn't, return the number of passengers he can't take. 

Example: cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting */

function enough(cap, on, wait) {
    if(on + wait < cap){ // if current passengers and those that are waiting are less than the max capacity
      return 0; // return 0
    }else {
      return (on + wait) - cap; // otherwise, subract the capacity from the addition of both values
    }
};

// 8 Kyu - Switch it Up!

/* When provided with a number between 0-9, return it in words.

Input :: 1

Output :: "One".

If your language supports it, try using a switch statement. */

function switchItUp(number){
    switch(number) {
        case 0:
          return 'Zero';
          break;
        case 1:
          return 'One';
          break;
        case 2:
          return 'Two';
          break;
        case 3:
          return 'Three';
          break;
        case 4:
          return 'Four';
          break;
        case 5:
          return 'Five';
          break;
        case 6:
          return 'Six';
          break;
        case 7:
          return 'Seven';
          break;
        case 8:
          return 'Eight';
          break;
        case 9:
          return 'Nine';
          break;
    }
  }