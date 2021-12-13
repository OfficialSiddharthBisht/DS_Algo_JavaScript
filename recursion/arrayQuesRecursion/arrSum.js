/* To find the sum of an array given the elements of the array.

The only constraint is that you have to write a recursive code

Input Format :

There are several test cases within a test case.

First line contains t which is the number of test cases

First line of each test case contains n which is the number of integers

Second line of each test case contains n space separated integers

Constraints :

n <= 100000

arr[i] <= 10

Output Format :- 
Output t lines where each line contains sum of all the elements in that test case

Sample Input 1 
3
5
6 3 8 2 -4
5
-10 -7 10 2 -2
5
-4 -5 6 -3 9

Sample Output 1
15
-7
3
*/
function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let testCases = parseInt(input[0]);
    let line = 1;
    for (let i = 0; i < testCases; i++) {
        let N = parseInt(input[line++]);
        let arr = input[line++].trim().split(" ").map(Number);
        console.log(arrSum(N, arr, (j = 0)));
    }
}
function arrSum(N, arr, i) {
    let sum = 0;
    if (i === N) {
        return 0;
    }
    sum += arr[i] + arrSum(N, arr, i + 1);
    return sum;
}
if (process.env.USER === "siddharth") {
    runProgram(`3
    5
    6 3 8 2 -4
    5
    -10 -7 10 2 -2
    5
    -4 -5 6 -3 9`);
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
