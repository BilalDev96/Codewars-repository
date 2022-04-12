// 8 Kyu - Duck Duck Goose

function duckDuckGoose(players, goose) {
    return players[(goose - 1) % players.length].name // provide the index value of the player who was chosen and return the key value pair associated with the player
}

// 8 Kyu - Enumerable Magic #1 - True for All?

function all( arr, fun ){
    return arr.every(fun) // return a Boolean value if the elements in the "arr" array pass the "fun" test
}

// 8 Kyu - Take an Arrow to the Knee, Functionally

var ArrowFunc = function(arr) {
    return arr.map( letter => String.fromCharCode(letter)).join(''); // return a new array where each element from the original array is converted to a character 
  }