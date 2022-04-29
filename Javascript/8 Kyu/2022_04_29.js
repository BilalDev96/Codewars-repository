// 8 Kyu - Third Angle of a Triangle

// You are given two interior angles (in degrees) of a triangle. Write a function to return the 3rd. Only positive integers will be tested.

const otherAngle = (a, b) => 180 - a - b; // all 3 angles of a triangle must equal 180. Therefore, subtract both values from 180 to get the third angle

// 8 Kyu - Get Planet Name by ID

// The function is not returning the correct values. Can you figure out why?

// Example: 3 --> "Earth"

function getPlanetName(id){ // added break line for each case
    let name;
    switch(id){
      case 1:
        name = 'Mercury'
        break;
      case 2:
        name = 'Venus'
        break;
      case 3:
        name = 'Earth'
        break;
      case 4:
        name = 'Mars'
        break;
      case 5:
        name = 'Jupiter'
        break;
      case 6:
        name = 'Saturn'
        break;
      case 7:
        name = 'Uranus'
        break;
      case 8:
        name = 'Neptune'
        break;
    }
    return name;
};

// 8 Kyu - Volume of a Cuboid

// Bob needs a fast way to calculate the volume of a cuboid with three values: length, width and the height of the cuboid. Write a function to help Bob with this calculation.

class Kata {
    static getVolumeOfCuboid(length, width, height) {
      return length * width * height; // multiply all values together to return the volume
    }
};

// 8 Kyu - Thinkful - Logic Drills: Traffic Light

/* You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

For example, update_light('green') should return 'yellow'. */

function updateLight(current) {
    if(current === 'green') {
      return 'yellow';
    }else if(current === 'yellow') {
      return 'red';
    }else if(current === 'red') {
      return 'green';
    }
};

// 8 Kyu - L1: Set Alarm;

/* Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

setAlarm(true, true) -> false
setAlarm(false, true) -> false
setAlarm(false, false) -> false
setAlarm(true, false) -> true */

function setAlarm(employed, vacation){
    return employed && !vacation ? true : false; // ternary operator used to state if employed is true & vacation is false, return true. Otherwise, return false.
};