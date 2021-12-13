/*Assume, you are given

S = 1 + (1/r) + (1/r^2) + (1/r^3) +... (1/r^n)

You will be given two integers n and r

Your task is to calculate the sum S by writing a recursive function

Input Format

First line of input contains space separated numbers n and r respectively

Constraints

n <= 1000

r <= 10

Output Format
Output till 4 places after the decimal. For instance, 12.1345 is a valid answer but 12.43138 is not. 12.0000 is also a valid answer


Sample Input 1 
1 1

Sample Output 1
2.0000

Sample Input 2 
3 5

Sample Output 2
1.2480
*/
function runProgram(input) {
    // Write code here
    let [n, r] = input.trim().split(" ").map(Number);
    console.log(geometricProgression(n, r).toFixed(4));
}

function geometricProgression(n, r) {
    //base case :-
    let sum = 0;
    if (n < 0) {
        return 0;
    }
    //recursion 
    sum += 1 / Math.pow(r, n) + geometricProgression(n - 1, r);
    return sum;
}
if (process.env.USER === "siddharth") {
    runProgram(`1 1`);
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
