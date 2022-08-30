// 8 Kyu - Fix Your Code Before the Garden Dies!

/* You have an award-winning garden and every day the plants need exactly 40mm of water. You created a great piece of JavaScript to calculate the amount of water your plants will need when you have taken into consideration the amount of rain water that is forecast for the day. Your jealous neighbour hacked your computer and filled your code with bugs.

Your task is to debug the code before your plants die! */

function rainAmount(mm){
    if (mm < 40) {
         return `You need to give your plant ${Math.abs(mm - 40)}mm of water`
    }else {
         return "Your plant has had more than enough water for today!"
    };
}

// 8 Kyu - NBA Full 48 Minutes Average

/* An NBA game runs 48 minutes (Four 12 minute quarters). Players do not typically play the full game, subbing in and out as necessary. Your job is to extrapolate a player's points per game if they played the full 48 minutes.

Write a function that takes two arguments, ppg (points per game) and mpg (minutes per game) and returns a straight extrapolation of ppg per 48 minutes rounded to the nearest tenth. Return 0 if 0.

Examples:

pointsPer48(12, 20) // 28.8
pointsPer48(10, 10) // 48 
pointsPer48(5, 17) // 14.1 
pointsPer48(0, 0) // 0
Notes:
All inputs will be either be an integer or float.
Follow your dreams! */

function pointsPer48(ppg, mpg) {
    let num = (ppg / mpg) * 48
    return ppg > 0 ? Number(num.toFixed(1)) : 0
}