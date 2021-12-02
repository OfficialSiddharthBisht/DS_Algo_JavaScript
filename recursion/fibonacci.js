/* In mathematics, the Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is

F (0) = 0 , F (1) = 1
and
F (n) = F (n − 1) + F (n − 2) ,
for n > 1.

Your task is to write a program that calculates n-th fibonacci numbers when you are provided with n

Input Format

First line of input contains n

Constraints

n<35

Output Format

Output the n-th fibonacci number

Sample Input 1 
4

Sample Output 1
3
*/
function runProgram(input) {
    // Write code here
    input = parseInt(input);
    console.log(fibonacciNumbers(input));
}

//recursive function
function fibonacciNumbers(num) {
    // base case
    if (num === 1) {
        return 1;
    }
    if (num === 0) {
        return 0;
    }
    
    let x, y, ans;
    x = fibonacciNumbers(num - 1);
    y = fibonacciNumbers(num - 2);
    ans = x + y;
    return ans;
}
//boiler
if (process.env.USER === "siddharth") {
    runProgram(`4`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}
