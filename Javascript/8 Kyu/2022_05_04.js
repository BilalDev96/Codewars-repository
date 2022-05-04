// 8 Kyu - Difference of Volume of Cuboids

/* In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8. Your function will be tested with pre-made examples as well as random ones. */

function findDifference(a, b) {
    let aCuboid = a.reduce((acc,c) => acc * c, 1);
    let bCuboid = b.reduce((acc,c) => acc * c, 1);
    return aCuboid > bCuboid ? aCuboid - bCuboid : bCuboid - aCuboid;
};

// 8 Kyu - All Star Code Challenge #18

/* Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.If no occurrences can be found, a count of 0 should be returned.

Example: ("Hello", "o")  ==>  1 */

function strCount(str, letter){  
    let array = str.split("");
    let count = 0;
    for(let i = 0; i < array.length; i++){
      if(letter === array[i]){
        count +=1;
      }
    }
    return count;
};

// 8 Kyu - Grasshopper - Check for Factor

// This function should test if the factor is a factor of base. Return true if it is a factor or false if it is not.

function checkForFactor (base, factor) {
    return base % factor === 0;
};