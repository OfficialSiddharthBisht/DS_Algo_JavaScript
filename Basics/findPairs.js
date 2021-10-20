/* Given an array arr of size N and a variable M, To find the count of pair of distinct elements in the array, whose product is equal to the value stored in M */
function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    var testCases=+input[0];
    var line=1;
    for(var i=0;i<testCases;i++)
    {
        var[N,M]=input[line].trim().split(" ").map(Number);
        var arr=input[line+1].trim().split(" ").map(Number);
        line+=2;
        findPairs(N,M,arr);
    }
    function findPairs (N,M,arr) {
        var count=0;
        for(var i=0;i<N;i++)
        {
            for(var j=i+1;j<N;j++)
            {
                if(arr[i]*arr[j]===M)
                {
                    count++;
                }
            }
        }
        console.log(count);
    }
  }
  if (process.env.USERNAME === "offic") {
    runProgram(`2
    3 0
    1 3 2
    5 4
    3 2 2 1 5`);
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