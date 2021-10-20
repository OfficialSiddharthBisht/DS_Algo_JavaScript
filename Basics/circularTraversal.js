/* Given a square matrix , to find the reverse U traveral of the matrix */

function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    var testCases=+input[0];
    var line=1;
    for(var i=0;i<testCases;i++)
    {
        var N=+input[line];
        var arr=[];
        for(var i=0;i<N;i++)
        {
        arr.push(input[line+1].trim().split(" ").map(Number));
        line++;
        }
        console.log(N,arr);
    }
  }
  if (process.env.USERNAME === "offic") {
    runProgram(`2
    3
    1 2 3
    4 5 6
    7 8 9
    2
    1 2
    3 4`);
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