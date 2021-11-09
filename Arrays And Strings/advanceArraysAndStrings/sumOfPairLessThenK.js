/* Given an array arr of N integers , and an integer K. Find the maximum value of S,such that s=arr[i]+arr[j] and S<K .If no such value exists then print -1
?Input 
2
5
1 2 3 4 5
7
3
30 10 20
15
?Output
6
-1
The first line of the input contains T, the number of test cases.
The first line of each test case contains N, the number of elements in the array.
The next line contains N space separated integers, denoting the values in the array.
*/
function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let testCases=+input[0];
    let line=1;
    for(let i=0;i<testCases;i++)
    {
        let N=+input[line++];
        let arr=input[line++].trim().split(" ").map(Number);
        let K=+input[line++]
        sumOfPairLessThenK(N,arr,K);
    }
  }
  function sumOfPairLessThenK(N,arr,K)
  {
      let sum=-1;
    //   let maxSum=sum;
      for(let i=0;i<N;i++)
      {
          for(let j=i+1;j<N;j++)
          {
              if(arr[i]+arr[j]>sum&&arr[i]+arr[j]<K)
              {
                  sum=arr[i]+arr[j];
              }
          }
      }
      console.log(sum);
  }
  if (process.env.USER === "siddharth") {
    runProgram(`2
    5
    1 2 3 4 5
    7
    3
    30 10 20
    15`);
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

/*In the sample test case, in the first test case, the value of K is 7. The value of S, when i = 0, and j = 4, is 6, which is less than K, and largest possible value satisfying all the constraints. Therefore, the output is 6.
In the 2nd test case, no possible value of S exists which satisfies all the required conditions , therefore the output is -1
*/