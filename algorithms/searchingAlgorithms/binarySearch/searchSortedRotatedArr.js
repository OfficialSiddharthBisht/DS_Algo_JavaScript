/* 
 ? Search A Target In A Sorted And Rotated Array :-
Given a sorted(increasing order) array of length n and is rotated by some value beforehand. Find the index of the target element  K in the rotated array in O(logn) time. If not found print -1.

In a sorted & rotated array,  we rotate an ascending order sorted array at some pivot unknown to you beforehand. So for instance, 1 2 3 4 5 might become 3 4 5 1 2.

Please note that the linear search approach with the time complexity of O(n) can easily be applied. But you are expected to solve it in O(log n) time complexity

Note: Array contains all distinct elements.

Input Format :- 

First line consists of n and k separated by space.

Second line consists of n integers separated by spaces

Constraints

1 <= n <= 50

k <= 50

Output Format : -
Print index of the target element


Sample Input 1 
5 1
3 4 5 1 2

Sample Output 1
3

Sample Input 2 
6 6
3 4 7 9 1 2

Sample Output 2
-1
*/
function minimumInSortedAndRotatedArr(N, arr) {
    let low = 0;
    let high = N - 1;
    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        if (arr[mid] < arr[high]) {
            high = mid;
        } else if (arr[mid] > arr[high]) {
            low = mid + 1;
        } else if (arr[mid] === arr[high]) {
            high--;
        }
    }
    return low;
}
function searchTargetInSortedAndRotatedArr(N, K, arr) {
    let min = minimumInSortedAndRotatedArr(N, arr);
    let low = 0;
    let high = N - 1;
    if(K === arr[min]){
        return min;
    }
    if(K > arr[low] && K <= arr[min - 1]){
        high = min + 1;
    }
    if(K >= arr[min] && K <= arr[high]){
        low = min;
    }
    //binary search algorithm
    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        if (arr[mid] === K) {
            return mid;
        }
        if (arr[mid] > K) {
            high = mid - 1;
        }
        if (arr[mid] < K) {
            low = mid + 1;
        }
    }
    return -1;
}

function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let [N, K] = input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number);
    console.log(searchTargetInSortedAndRotatedArr(N, K, arr));
}
if (process.env.USER === "siddharth") {
    runProgram(`5 1
    3 4 5 1 2`);
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
