/*You are given an array, stored in a variable with the size arr
The size of the array is stored in a variable with the name n
You have to traverse the array, and print only the even elements in the array.
Print each number on a new line
For example, consider the array as arr = [1 2 3 4 5], and the value stored in n = 5
Then, the required output will be
2
4
*/

function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    var n=+(input[0]);
    var arr=input[1].trim().split(" ").map(Number);
    evenArray(n,arr);
  }

  function evenArray (n,arr) {
      for(var i=0;i<n;i++)
      {
        if(arr[i]%2===0)
        {
            console.log(arr[i]);
        }
      }
  }

  if (process.env.USERNAME === "offic") {
    runProgram(`5
    1 2 3 4 5`);
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