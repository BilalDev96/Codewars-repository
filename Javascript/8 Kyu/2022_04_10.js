// 8 Kyu - UEFA EURO 2016

function uefaEuro2016(teams, scores){
      if(scores[0] > scores[1]){ // if the first team scored more than the second team
        return `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!` // return a template literal stating the first team won
      }else if(scores[1] > scores[0]){ // if the second team scored more than the first team
        return `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!` // return a template literal stating the second team won
      }else{ // otherwise, if both teams scored the same
        return `At match ${teams[0]} - ${teams[1]}, teams played draw.` // return a template literal stating the game was a draw
      }
}

// 8 Kyu - Duck Duck Goose

//My attempt
function duckDuckGoose(players, goose) {
    let names = (goose - 1) % players.length // provide the index value of the player who was chosen 
    return players[names] // return the player within the "players" array
} // Almost got it right.. returned the object of Player { name: 'a' } instead of 'a'

//"Best practice" answer
function duckDuckGoose(players, goose) {
  
    return players[(goose-1)%players.length].name // what they did differently is added the dot notation of "name" to pull the key value pair for the name
}

// 8 Kyu - Swap Values

function swapValues(numbers) {
    //     var args = Array.prototype.slice.call(arguments); Original line given by kata owner. 
        var args = numbers // Originally, there was no function parameter provided. Updated code so that the args variable held this value.
        var temp = args[0];
        args[0] = args[1];
        args[1] = temp;
}

// 8 Kyu - Grasshopper - Messi Goals

let laLigaGoals = 43
let championsLeagueGoals = 10
let copaDelReyGoals = 5 // assigned a value for each variable

let totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals // let total goals equal the 3 previous variables combined

// 8 Kyu - Grasshopper - Order of Operations

function orderOperations () {
    return (2 + 2) * (2 + 2) * 2 // needed to return a value of 32, added brackets in required positions to run correctly
}

// 8 Kyu - Grasshopper - Summation

var summation = function (num) {
    let sum = [] // create empty array to store values
    for(let i = 1; i <= num; i++){ // for each integer less than num
      sum.push(i) // push the integer into the sum array
    }
    return sum.reduce( (acc,c) => acc + c, 0) // add all the values within the sum array and return the summation
}

// 8 Kyu - Unfinished Loop - Bug Fixing #1

function createArray(number){
    var newArray = [];
    
    for(var counter = 1; counter <= number; counter++){ // fixed the infinite loop by adding the increment expression
      newArray.push(counter);
    }
    
    return newArray;
}

// 8 Kyu - Do You Speak "English"?

function spEng(sentence){
    let newSentence = sentence.toLowerCase() // convert function parameter values to lowercase
    if(newSentence.includes("english")){ // if the new string includes "english"
      return true // return true
    }else{
      return false // otherwise, return false
    }
  }