/* Given a sorted array of integers, return indices of two numbers such that they add up to a target value.
Print -1 -1 if not found
*Input              Output
3    (testcases)    0 1 
4 9   (N,K)         3 4
2 7 11 15  (arr)    -1 -1
5 10 
1 2 3 5 5
2 100
48 49
*/
function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    const testcases=input[0];
    let line=1;
    for(var i=0;i<testcases;i++)
    {
        let[N,K]=input[line].trim().split(" ").map(Number);
        line++;
        let arr=input[line].trim().split(" ").map(Number);
        twoSum(N,K,arr);
        line++;
    }
  }
  function twoSum(N,K,arr)
  {
      let i=0;
      let j=N-1;
      while(i!==j)
      {
          if(arr[i]+arr[j]>K)
          {
              j--;
          }
          else if(arr[i]+arr[j]<K)
          {
              i++;
          }
          else if(arr[i]+arr[j]===K)
          {
              console.log(i+" "+j);
              return;
          }
      }
      console.log(-1+" "+-1);

  }
  if (process.env.USERNAME === "offic") {
    runProgram(`3
    4 9
    2 7 11 15
    5 10
    1 2 3 5 5
    2 100
    48 49`);
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