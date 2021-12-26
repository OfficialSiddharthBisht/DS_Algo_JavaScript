/* Given n distinct numbers, implement a recursive binary search to check the presence of target number k.

In case k is present among those n numbers, print index of k

Else print -1

Input Format :

First line of input contains n and k separated by a space

Next line contains n space separated integers

Constraints:

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
function recursiveBinarySearch(arr, target, left, right) {
    let mid = left + Math.floor((right - left) / 2);
    if(left >=right){
        return -1;
    }
    if (arr[mid] === target) {
        return mid;
    }
    if (arr[mid] < target) {
       return recursiveBinarySearch(arr, target, mid + 1 ,right);
    }
    if(arr[mid] > target){
       return recursiveBinarySearch(arr ,target , left , mid-1);
    }
}

function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let [N ,K] =input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number);
    console.log(recursiveBinarySearch(arr,K ,0 ,arr.length-1));
  }
  if (process.env.USER === "siddharth") {
    runProgram(`5 2
    8 4 1 9 11`);
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

