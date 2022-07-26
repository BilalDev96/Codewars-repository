// 7 Kyu - Simple Beads Count

/* Two red beads are placed between every two blue beads. There are N blue beads. After looking at the arrangement below work out the number of red beads.

@ @@ @ @@ @ @@ @ @@ @ @@ @

Implement count_red_beads(n) (in PHP count_red_beads($n); in Java, Javascript, TypeScript, C, C++ countRedBeads(n)) so that it returns the number of red beads.
If there are less than 2 blue beads return 0. */

function countRedBeads(n) {
    return n < 2 ? 0 : n + (n - 2)
}

// 7 Kyu - Build a Square

/* I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

Example
n = 3, so I expect a 3x3 square back just like below as a string:

+++
+++
+++ */

function generateShape(integer){
    let squares = [];
    for(let i = 1; i <= integer; i++) {
      squares.push("+".repeat(integer))
    }
    return squares.join("\n")
}