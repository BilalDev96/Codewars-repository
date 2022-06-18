// 6 Kyu - Take a Ten Minutes Walk

/* You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array (string in COBOL) containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!). */

function isValidWalk(walk) {
    let x = 0;
    let y = 0; // create variables to hold x & y axis values
    for(let i = 0; i < walk.length; i++){
      if(walk[i] === 'e') {
        x += 1; // if direction is east, move right by 1 on the x-axis
      }else if(walk[i] === 'w') {
        x -= 1; // if direction is west, move left by 1 on the x-axis
      }else if(walk[i] === 'n') {
        y += 1; // if direction is north, move up by 1 on the y-axis
      }else {
        y -= 1; // otherwise, move down by 1 on the y-axis
      }
    }
    return x === 0 && y === 0 && walk.length === 10 ? true : false; // if x and y are equivalent to 0, and exactly 10 blocks have been travelled, return true. Otherwise, return false
  }