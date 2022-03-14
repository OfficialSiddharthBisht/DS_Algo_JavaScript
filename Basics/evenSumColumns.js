/* Given a 2d array arr with N rows and M columns for all columns print the sum of even numbers present in the column*/




















function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    var[N,M]=input[0].trim().split(" ").map(Number);
    // console.log(N,M);
    var arr=[];
    var line=1;
    for(var i=0;i<N;i++)
    {
        arr.push(input[line].trim().split(" ").map(Number))
        line++;
    }
    evenSumInColumns(N,M,arr);
  }

  function evenSumInColumns (N,M,arr) {
      for(var i=0;i<M;i++)
      {
        var sum=0;
          for(var j=0;j<N;j++)
          {
              if(arr[j][i]%2===0)
              {
            sum+=arr[j][i];
              }
          }
          console.log(sum);
      }
  }
  if (process.env.USERNAME === "offic") {
    runProgram(`3 4
    1 2 3 4
    4 5 6 7
    7 8 9 10`);
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