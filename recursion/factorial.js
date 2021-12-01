/*  Given a number N, to write a program that calculates factorial of N.
(Factorial of a +ve number is the product of all +ve integers less then or equal to N).
Input Format

First and the only line contains N

Constraints

N<15

Output
Output the factorial value of N

Sample Input 1 
5

Sample Output 1
120

Hint

Sample Explanation
Factorial of 5 = 5* 4* 3* 2* 1 = 120
*/
function runProgram(input) {
    input = Number(input);
    console.log(factorial(input));
}

function factorial(num) {
    //base case
    if (num === 0 || num === 1) {
        return 1;
    }
    return num * factorial(num - 1);
}
// boiler 
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
