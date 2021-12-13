/* You are given an array of N unsorted numbers. Your task is to write BUBBLE SORT using RECURSION such that numbers present in the array get sorted.

USING ANY OTHER ALGORITHM OR USING SORT FUNCTION WOULD LEAD TO DISQUALIFICATION.

Input Format

First line of input contains N

Second line of input contains N numbers

Constraints

N < 500

Output Format 
Output the numbers given after sorting it in increasing order

Sample Input 1 
5
3 5 0 9 8

Sample Output 1
0 3 5 8 9
*/
function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let N = +input[0];
    let arr = input[1].trim().split(" ").map(Number);
    let ans = bubbleSortRecursion(N, arr);
    console.log(ans.join(" "));
}

function bubbleSortRecursion(N, arr) {
    // base case
    if (N === 1) {
        return;
    }
    // bubble sort
    for (let i = 0; i < N - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    }
    // recursion - logic after every iteration of bubble sort the last element of the array gets sorted and need not to look again
    bubbleSortRecursion(N - 1, arr);
    return arr;
}
if (process.env.USER === "siddharth") {
    runProgram(`5
    3 5 0 9 8`);
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
