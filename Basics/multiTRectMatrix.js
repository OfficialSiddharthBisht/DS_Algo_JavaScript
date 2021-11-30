function runProgram(input) {
    input=input.trim().split("\n");
    let testCases=+input[0];
    let line=1;
    for(let i=0;i<testCases;i++){
        let [N,M]=input[line++].trim().split(" ");
        let arr=[];
        for(let i=0;i<N;i++){
            arr.push(input[line++].trim().split(" ").map(Number));
        }
        successor(N,M,arr);
    }
  }
  function successor(N,M,arr){
      for(let i=0;i<N;i++){
          let str="";
          for(let j=0;j<M;j++){
              arr[i][j]+=1;
              str+=arr[i][j]+" ";
          }
          console.log(str);
      }
  }
  if (process.env.USER === "siddharth") {
    runProgram(`2
    3 4 
    1 2 3 4
    5 6 7 8 
    9 10 11 12
    2 3
    1 2 3 
    4 5 6`);
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