// 7 Kyu - Is This a Triangle?

function isTriangle(a,b,c) {
    if(a + b > c && a + c > b && b + c > a) { // Use the Triangle Inequality Theorem as a conditional to determine if 3 given integers can create a triangle
      return true;
    }else {
      return false;
    }
}