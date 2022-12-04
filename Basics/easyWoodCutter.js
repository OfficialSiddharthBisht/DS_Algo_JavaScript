/*
* Easy Wood Cutter

You are given a wooden stick N meters long. Can the stick be cut into 3 pieces such that it forms sides of equilateral triangle.
If its possible, print "Yes"
Else print "No"

Input
First line contains length of wood : N

Constraints :
N < 1000

Output
Print Yes/No based on the length

Sample Input 1 
6

Sample Output 1
Yes
*/
function equilateralTriangle(N) {
    if (N % 3 === 0) {
        return "Yes";
    }
    return "No";
}
function runProgram(input) {
    let N = parseInt(input);
    console.log(equilateralTriangle(N));
}

if (process.env.USERNAME === "") {
    runProgram(``);
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