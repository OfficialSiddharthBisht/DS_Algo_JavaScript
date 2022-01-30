/*
Convert Array to String
Given an array A of n elements. Write a programme that processes the elements of the array and generates a string from the elements present in the array.
For instance: If elements of the array are 3 5 0 9 8 => the output string should be "35098" (without quotes). But in case of elements are negative (lesser than 0), your string should contain 0 instead of that number
Suppose elements of the array are 2 -4 6 8 -9, the string generated should be 20680 because -4 and -9 are negative elements, so your string contains 0 instead of that number.
Input Format
First line of input contains an integer n, which is the number of integers present in the array.
Second line contains n space separated integers which are integers of array.

Constraints

n < 100

Output
Output string generated from the array.

Sample Input 1 

5
2 -4 6 8 -9

Sample Output 1

20680
*/
function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let N=+input[0];
    let arr=input[1].trim().split(" ").map(Number);
    arrToStr(N,arr);
  }

  function arrToStr(N,arr){
      let str="";
      for(let i=0;i<N;i++){
          if(arr[i]>=0){
              str+=arr[i];
          }
          else if(arr[i]<0){
              str+="0";
          }
      }
      console.log(str);
  }
  if (process.env.USER === "siddharth") {
    runProgram(`5
    2 -4 6 8 -9`);
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