/* Given an array arr , containing N integers. To find the sum array for the given arrray. The digit sum array for a given array arr , contains the sum of digits present in a given number , stored at the corresponding index in arr.
? Input
2
5
12 14 16 17 29
6
1 2 3 4 5 51
? Output
9 5 7 8 11
1 2 3 4 5 6
*/
function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let testCases=input[0];
    let lines=1;
    for(let i=0;i<testCases;i++)
    {
        let N=+input[lines];
        lines++;
        let arr=input[lines].trim().split(" ").map(Number);
        lines++;
        digitSumArr(N,arr);
    }
  }
  function digitSumArr(N,arr) {
      let ans="";
      for(let i=0;i<N;i++)
      {
        ans+=sumOfDigits(arr[i])+" ";
      }
      console.log(ans);
  }
  function sumOfDigits (num) {
      let sum=0;
      while(num>0)
      {
        sum=sum+(num%10);
        num=Math.floor(num/10);
      }
      return sum;
  }
  if (process.env.USER === "siddharth") {
    runProgram(`2
    5
    12 14 16 17 29
    6
    1 2 3 4 5 51`);
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