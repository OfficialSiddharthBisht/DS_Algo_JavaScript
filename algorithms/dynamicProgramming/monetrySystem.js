/* Monetry system :-
We have a very strange monetary system.

Each of ours gold coin has an integer number written on it. A coin n can be exchanged in a bank into three coins: n/2, n/3 and n/4. But these numbers are all rounded down (the banks have to make a profit).

You can also sell out gold coins for Indian Rupees. The exchange rate is 1:1. But you can not buy Masaian coins.

You have one gold coin. What is the maximum amount of Indian Rupees you can get for it?

Input Format

The input will contain several test cases (not more than 10). Each test case is a single line with a numbern. It is the number written on your coin.

Constraints

0 <=n<= 1 000 000 000

Output
For each test case output a single line, containing the maximum amount of Indian Rupees you can make.

Sample Input 1 
12
2

Sample Output 1
13
2
*/
let obj = {};
function f(N){
    if(N === 0 ){
        return N;
    }
    if(!obj[N]){
        obj[N] = Math.max(N , f(Math.floor(N/2))+f(Math.floor(N/3))+f(Math.floor(N/4)));
    }else{
        return obj[N];
    }
    return obj[N];
}
function runProgram(input) {
    input = input.trim().split("\n");
    for(let i = 0; i < input.length; i++){
        let N = input[i];
        console.log(f(N));
    }
  }
  if (process.env.USER === "siddharth") {
    runProgram(`12
    2`);
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