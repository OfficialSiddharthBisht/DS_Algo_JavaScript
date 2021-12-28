/* Number Of Occurences In LogN 
You are given n different numbers and an integer k. Write a program that finds number of times k is present in log(n) time complexity.

NOTE: YOU MUST NOT USE BRUTE FORCE SOLUTION

WE KNOW THAT YOU KNOW BRUTE FORCE SOLUTION AND WANT YOU TRY THE LOGN SOLUTION

USING BRUTE FORCE/LINEAR SEARCH IN THIS CASE WOULD LEAD TO DISQUALIFICATION

Input Format :

First line contains N and K

Second line contains N space separated sorted integers

Constraints :

N<100

Output
Print number of times that number is present in the given list

Sample Input 1 
6 3
2 3 3 3 6 9

Sample Output 1
3
*/
function upperBound(N, K, arr) {
    let high = N - 1;
    let low = 0;
    let ans = -1;
    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        if (arr[mid] === K) {
            ans = mid ;
            low = mid + 1;
        }
        if (arr[mid] > K) {
            high = mid - 1;
        }
        if (arr[mid] < K) {
            low = mid + 1;
        }
    }
    // console.log("Upper Bond "+ ans);
    return ans;
}
function lowerBound(N, K, arr) {
    let high = N-1;
    let low = 0;
    let ans = -1;
    while(low <=high){
        let mid = low + Math.floor((high - low)/2);
        if(arr[mid] === K){
            ans = mid;
            high = mid - 1;
        }
        if(arr[mid] > K){
            high = mid - 1 ;
        }
        if(arr[mid] < K){
            low = mid + 1;
        }
    }
    // console.log("Lower Bond "+ ans);
    return ans;
}
function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let [N, K] = input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number);
    let ans = upperBound(N, K, arr) - lowerBound(N, K, arr) + 1;
    console.log(ans);
}
if (process.env.USER === "siddharth") {
    runProgram(`6 3
    2 3 3 3 6 9`);
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
