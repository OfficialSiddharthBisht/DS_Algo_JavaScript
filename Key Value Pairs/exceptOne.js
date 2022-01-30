/* You are given a numberN, and an array such that the array contains all the numbers from 1 to N including N twice, except for one, which is present only once

You have to find the number which is present only once, in the array


Input Format :-
The first line of the input containsT, the number of test cases

The first line of each test case, containsN, the value as explained in the problem statement

The next line contains2*N - 1, the number of elements in the array

Constraints

1 <= T <= 10

1 <= N <= 2 * 10^5

1 <= arr[i] <= N

Output Format :- 
For each test case, print the number which is present only once, on a new line

Sample Input 1 

1
5
1 2 1 3 4 4 5 2 3

Sample Output 1

5

Hint

In the sample test case, all the numbers except for 5 are present twice. Therefore, the output is5
*/
function exceptOnce(N,arr){
    let obj={};
    for(let i=0;i<2*N-1;i++){
        if(obj[arr[i]]===undefined){
            obj[arr[i]]=1;
        }
        else{
            obj[arr[i]]++;
        }
    }
    for(key in obj){
        if(obj[key]===1){
            console.log(key);
            return;
        }
    }
}

function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let testCases=+input[0];
    let line=1;
    for(let i=0;i<testCases;i++){
        let N=+input[line++];
        let arr=input[line++].trim().split(" ").map(Number);
        exceptOnce(N,arr);
    }
  }
  if (process.env.USER === "siddharth") {
    runProgram(`1
    5
    1 2 1 3 4 4 5 2 3`);
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