/* You are given n different numbers and an integer k. Write a program that finds lower bound of k in log(n) time complexity. Lower bound of a number k in a sorted list is the index of the first number which is same as k, in case the number is not present, print -1 (here the answer is given considering index to be starting from 0)

NOTE: YOU MUST NOT USE BRUTE FORCE SOLUTION.

WE KNOW THAT YOU KNOW BRUTE FORCE SOLUTION AND WANT YOU TO TRY THE LOGN SOLUTION.

USING BRUTE FORCE/LINEAR SEARCH, IN THIS CASE, WOULD LEAD TO DISQUALIFICATION.
Input Format

First line contains N and K

Second line contains N space separated sorted integers

Constraints

N<100

Output Format : -
Output lower bound

Sample Input 1 
5 2
1 1 2 2 5

Sample Output 1
2

Sample Input 2 
5 3
1 1 2 2 5

Sample Output 2
-1
*/
function searchLowerBound(N ,K,arr){
    let left = 0;
    let right = N-1;
    let ans = -1 ;
    while(left <= right){
        let mid = left + Math.floor((right - left)/2);
        if(arr[mid] === K){
            ans = mid;
            right = mid-1;
        }
        else if(arr[mid] > K){
            right = mid -1;
        }
        else if(arr[mid] < K){
            left = mid + 1;
        }
    }
    return ans;
}

function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let [N, K] = input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number);
    console.log(searchLowerBound(N ,K,arr));
}
if (process.env.USER === "siddharth") {
    runProgram(`5 3
    1 1 2 2 5`);
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
