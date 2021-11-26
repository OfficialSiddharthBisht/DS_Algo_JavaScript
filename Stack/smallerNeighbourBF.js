/*Smaller Neighbour Element Ended
Description

Given an array, find the nearest smaller element G[i] for every element A[i] in the array such that the element has an index smaller than i.

Mathematically,

G[i] for an element A[i] is an element A[j] such that

j is maximum possible AND

j < i AND

A[j] < A[i]

Note: Elements for which no smaller element exist, consider next smaller element as -1.

Input Format:

First line contains an integer N denoting the number of elements in the array (not necessarily distinct).

Second line contains N space separated integers denoting the elements of the array.

Constraints:

N <= 100000


Output Format : 
Print N space separated integers denoting the array G.

Sample Input 1 

8
39 27 11 4 24 32 32 1

Sample Output 1

-1 -1 -1 -1 4 24 24 -1
*/
function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let N = +input[0];
    let arr = input[1].trim().split(" ").map(Number);
    smallerNeighboutBF(N, arr);
}

function smallerNeighboutBF(N, arr) {
    let output = [];
    for (let i = 0; i < N; i++) {
        let ans = -1;
        for (let j = i - 1; j >= 0; j--) {
            if (arr[j] < arr[i]) {
                ans = arr[j];
                break;
            }
        }
        output.push(ans);
    }
    console.log(output);
}
if (process.env.USER === "siddharth") {
    runProgram(`8
    39 27 11 4 24 32 32 1`);
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
