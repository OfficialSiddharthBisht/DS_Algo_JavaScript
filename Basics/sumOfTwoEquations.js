/* You are given two numbers, stored in a variable with the names,a, b
You have to find the sum ofXandY, such that
1. X = (a*5) + (b*3)
2. Y = (a*7) + (b*4)
Find the value of sum, such thatsum = X + Y 
Sample Input    Sample Output
2 3                 45
*/
function sumTwoEqs(a, b) {
    // write code here
    let X = (a*5)+(b*3);
    let Y = (a*7)+(b*4);
    let sumOfEquations = X+Y;
    console.log(sumOfEquations);
  }
  sumTwoEqs(2,3);