/*Given an array A containing N integers, find the running sum of the array.
The running sum of the array is defined as the sum of all the elements of the array that exists before the current element ,including the current element 
//? Input
1
5
1 2 3 4 5
//? Output
1 3 6 10 15
*/
function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let testCases=input[0];
    let lines=1;
    for(let i=0;i<testCases;i++)
    {
        let N=+input[lines++];
        let arr=input[lines++].trim().split(" ").map(Number);
        console.log(runningSumArr(N,arr));
    }
  }
  function runningSumArr (N,arr) {
      let sum=0;
      let ans="";
      for(let i=0;i<N;i++)
      {
          sum+=arr[i];
          ans+=sum+" ";

      }
      return ans;
  }
  if (process.env.USER === "siddharth") {
    runProgram(`2
    5
    1 2 3 4 5
    4
    5 6 7 8`);
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