//can the second string be made with the help of the characters present at the first string 
function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    var N=+(input[0]);
    var chatInBag=input[1].trim();
    var M=+(input[2]);
    var str=input[3].trim();
    bagsOfLetters(N,chatInBag,M,arr);
  }

  function bagsOfLetters (N,charInBag,M,arr) {
      // body
      for(var i=0;i<N;i++)
      {
          for(var j=0;j<M;j++)
          {
              if(charInBag[i]===)
          }
      }
  }

  if (process.env.USERNAME === "offic") {
    runProgram(`5
    aabbc
    3
    abc`);
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