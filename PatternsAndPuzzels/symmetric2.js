/*Symmetric ?
You are given some matrices consist of only 0 's and  1's and you have to pick which are symmetric and which are not

A matrix is said to be symmetric about X- axis if 1st row is identical to n-th row, 2nd is identical to (n-1)th  row and so on.

A matrix is said to be symmetric about Y- axis if 1st column is identical to the nth column, 2nd identical to (n-1)th and so on for all columns.

Your task is to print "YES" if it is symmetric about X-axis and Y-axis else "NO"

Input
Input Format :

First line contains T - number of test cases.

First line of each test case contains the n size of matrix.

Next n lines contains n characters.

Constraints :

1 ≤ T ≤ 10

2 ≤ N ≤ 32

Output
Print YES or NO in a new line for each test case .

Sample Input 1 

5
2
11
11
4
0101
0110
0110
0101
4
1001
0000
0000
1001
5
01110
01010
10001
01010
01110
5
00100
01010
10001
01010
01110

Sample Output 1

YES
NO
YES
YES
NO
Hint

Output Explanation :

Test Case 1: Symmetric about both axes, so YES.

Test Case 2: Symmetric about X-axis but not symmetric about Y-axis, so NO.

Test Case 3: Symmetric about both axes, so YES.

*/
function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let testCases = +input[0];
    let line = 1;
    for (let i = 0; i < testCases; i++) {
        let N = +input[line++];
        let arr = [];
        for (let j = 0; j < N; j++) {
            let row = input[line++].trim().split("").map(Number);
            arr.push(row);
        }
        symmetric(N, arr);
    }
}
// note print yes only if the array is symmetric in both x and y axis
function symmetric(N, arr) {
    for (let i = 0; i < N; i++) {
        if (arr[i][0] !== arr[i][N - 1] || arr[0][i] !== arr[N - 1][i]) {
            console.log("No");
            return;
        }
    }
    console.log("Yes");
    return;
}
if (process.env.USER === "siddharth") {
    runProgram(`5
    2
    11
    11
    4
    0101
    0110
    0110
    0101
    4
    1001
    0000
    0000
    1001
    5
    01110
    01010
    10001
    01010
    01110
    5
    00100
    01010
    10001
    01010
    01110`);
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
