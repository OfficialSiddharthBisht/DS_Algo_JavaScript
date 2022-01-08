/* 
* Subarray sum exhist or not :-
Given an array of non-negative integers, and a value 'sum', determine if there is a subset of the given set (array) with sum equal to given sum.

If there is a subset whose sum is equal to the required sum then print "yes" else print "no" without quotes.

Input Format :

The first line of input contains an integer N - denoting size of the array.

The second line contains the N space seperated integers.

The third line of input will contain S - the required Sum value.

Constraints :

1<=n<= 18

1<=A[i]<=10^9

Output Format :-
Print "yes" or "no" without quotes.

Sample Input 1 
9
1 2 3 4 5 6 7 8 9
5

Sample Output 1
yes
*/

function sumExhist(N, arr, sum, i, currSum) {
    if (currSum === sum) {
        return true;
    }
    // base case
    if (i >= N) {
        return false;
    }
    return (
        sumExhist(N, arr, sum, i + 1, currSum + arr[i]) ||
        sumExhist(N, arr, sum, i + 1, currSum)
    );
}

function runProgram(input) {
    input = input.trim().split("\n");
    let N = parseInt(input[0]);
    let arr = input[1].trim().split(" ").map(Number);
    let sum = parseInt(input[2]);
    if(sumExhist(N, arr, sum, 0, 0)){
        console.log("true");
    }else{
        console.log("false");
    }
}
if (process.env.USER === "siddharth") {
    runProgram(`9
    1 2 3 4 5 6 7 8 9
    5`);
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
