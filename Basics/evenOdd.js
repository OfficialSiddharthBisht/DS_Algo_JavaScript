// Given a number,stored in the variable with the name N. If the number is even print Even, else print Odd.
function runProgram(input) {
    // Write code here
    input=+input;
    evenOdd(input);
  }
  function evenOdd(N)
  {
      if(N%2===0)
      {
          console.log("Even");
      }
      else{
          console.log("Odd");
      }
  }

  if (process.env.USERNAME =="offic") {
    runProgram(`8`);
  } 
  else {
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