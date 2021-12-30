/*
Minimum In Sorted And Rotated Array : -
Given an array of length n, and it is sorted and rotated at some unknown point, find the minimum element in it.

In a sorted & rotated array,  we rotate an ascending order sorted array at some pivot unknown to you beforehand. So for instance, 1 2 3 4 5 might become 3 4 5 1 2.

Please note that the linear search approach with the time complexity of O(n) can easily be applied. But you are expected to solve it in O(log n) time complexity

Input Format

First line Consists of integer n.

Second line consists of n integers separated by spaces.

Constraints

1 <= n <= 10^6

Output Format :-
Print minimum element.

Sample Input 1 
10
4 6 7 9 10 -1 0 1 2 3

Sample Output 1
-1
*/
function searchMinimumInSortedAndRotatedArr(N, arr) {
    let low = 0;
    let high = N - 1;
    while(low <= high){
        let mid = low + Math.floor((high - low ) / 2);
        if(arr[mid] > arr[high]){
            low = mid + 1;
        }
        else if(arr[mid] < arr[high]){
            high = mid;
        }
        else if(arr[mid] === arr[high]){
            high --;
        }
    }
    return arr[low];
}

function runProgram(input) {
    input = input.trim().split("\n");
    let N = parseInt(input[0]);
    let arr = input[1].trim().split(" ").map(Number);
    console.log(searchMinimumInSortedAndRotatedArr(N, arr));
}
if (process.env.USER === "siddharth") {
    runProgram(`5
    5 10 -1 0 2`);
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
