/*
? Fibonacci By Dynamic Programming
Fibonacci numbers, commonly denoted Fn form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0

F(1) = 1

Given an integer n, calculate n-th fibonacci number for large inputs.

Input Format :
First line of input contains n

Constraints :
n <= 50

Output Format : -
Output the n-th fibonacci

Sample Input 1 
50

Sample Output 1
102334155
*/

function fabonacci(N, sum, obj = {}) {
    //base cases
    if (N === 0 || N === 1) {
        return N;
    }
    if (obj[N]) {
        return obj[N];
    }
    obj[N] = fabonacci(N - 1, sum, obj) + fabonacci(N - 2, sum, obj);
    sum += obj[N]; //fabonacci(N - 1, sum, obj) + fabonacci(N - 2, sum, obj);
    return sum;
}
function runProgram(input) {
    // Write code here
    let N = parseInt(input);
    console.log(fabonacci(N, 0));
}
runProgram(`6`);
runProgram(`40`);
