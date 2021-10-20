/* Given a 2D array arr whose dimensions are N rows and M columns . To print the elements of the 2D array, row by row 
?INPUT -  
3 2
1 2
3 4
5 6
?OUTPUT-
1 2 
3 4
5 6 */
function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    var[N,M]=input[0].trim().split(" ").map(Number);
    var arr=[];
    var line=1;
    for(var i=0;i<N;i++)
    {
            arr.push(input[line].trim().split(" ").map(Number));
            line++;
    }
    print2DArrayRowByRow(N,M,arr);
  }
function print2DArrayRowByRow (N,M,arr) {
    for(var i=0;i<N;i++)
    {
        var str="";
        for(var j=0;j<M;j++)
        {
            str+=arr[i][j]+" ";
        }
        console.log(str);
    }
}

  if (process.env.USERNAME === "offic") {
    runProgram(`3 2
    1 2
    3 4
    5 6`);
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