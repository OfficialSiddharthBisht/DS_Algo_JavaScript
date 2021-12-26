/* Iterative Binary Search :- 
 Given n distinct numbers, implement iterative binary search to check the presence of target number k.

In case k is present among those n numbers, print 1

Else print -1

Input Format :

First line of input contains n and k separated by a space

Next line contains n space separated integers

Constraints :

n<1000

Output
In case k is present among those n numbers, print its index

Else print -1

Sample Input 1 
5 0
2 -2 0 3 4

Sample Output 1
2
*/
function iterativeBinarySearch(arr,target) {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        let middle = low + Math.floor((high - low) / 2);
        if (arr[middle] == target) {
            return middle;
        }
        if (arr[middle] > target) {
            high = middle - 1 ;
        }
        if (arr[middle] < target) {
            low = middle + 1;
        }
    }
    return -1;
}

function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let [N ,K] =input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number);
    console.log(iterativeBinarySearch(arr,K));
  }
  if (process.env.USER === "siddharth") {
    runProgram(`5 0
    2 -2 0 3 4`);
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