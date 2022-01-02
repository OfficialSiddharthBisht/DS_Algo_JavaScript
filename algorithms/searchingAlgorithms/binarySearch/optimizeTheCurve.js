/*
? Optimize The Curve Using Binary Search : -
Siddharth is skilled in calculations, he can do most of the complex calculations in head but he is stuck with this quesiton and wants your help.

Siddharth wants to solve the given mathematical equation which states that, he needs to find the least non-negative integer Xo, that shall make the value of given equation atleast K i.e.,

A Xo^2 + B Xo + C >= K

He is given A,B,C and K, which form the above equation. He has to answer T independent test cases.

Output -1 if there is no possible positive value of Xo


Input
Input Format :

Number of test cases, space seperated values of A B C K respectively

Constraints :

- A, B, C <= 100000

- K <= 10000000000

- T <= 100000


Output
The value of Xo

Sample Input 1 
1
3 2 4 15

Sample Output 1
2
*/
function optimizeTheCurve(A, B, C, K) {
    let ans = -1;
    let low = 0;
    let high = K;
    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        let value = A * mid * mid + B * mid + C;
        if (value >= K) {
            ans = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    if(ans <= 0){
        return -1;
    }
    return ans;
}

function runProgram(input) {
    input = input.trim().split("\n");
    let testCases = parseInt(input[0]);
    let line = 1;
    for (let i = 0; i < testCases; i++) {
        let [A, B, C, K] = input[line++].trim().split(" ").map(Number);
        console.log(optimizeTheCurve(A, B, C, K));
    }
}
if (process.env.USER === "siddharth") {
    runProgram(`1
    3 2 4 15`);
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
