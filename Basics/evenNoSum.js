 function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    var testCases=+input[0];
    var line=1;
    for(var i=1;i<=testCases;i++)
    {
    var N=+input[line];
    var arr=input[line+1].trim().split(" ").map(Number);
    line+=2;
    evenNoSum(N,arr);
    }
}
    function evenNoSum (N,arr) {
        var sum=0;
        for(var i=0;i<N;i++)
        {
            if(arr[i]%2===0)
            {
                sum+=arr[i];
            }
        }
     console.log(sum);   
    }
  if (process.env.USERNAME === "offic") {
    runProgram(`2
    3
    1 2 3
    5
    2 2 2 2 1`);
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