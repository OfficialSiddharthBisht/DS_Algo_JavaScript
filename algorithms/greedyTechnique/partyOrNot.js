/*
? Party Please
Siddharth has N friends and he wants to give a party to his C friends on his birthday. Ashutosh knows the amount he will have to spend on each of his N friends in party. Given the expense amount of each of the N friends, comment if it is possible for Ashutosh to give a party to his C friends if he has just R rupees.

Input Method

First line contains three space separated integers: N, C and R respectively

Second line contains N space separated integers which represents the amount he needs to spend on each of his N friends.

Constraints

N <= 1000

C is lesser than N

R < 10000

Output Method :-
If it is possible to give party to C friends, print "Party"

Else print "Sad".

Sample Input 1 
5 3 24
6 4 21 20 13

Sample Output 1
Party

Hint :-

Sample 1 Explanation :-
In this case, he can take 3 of his friends to party with 24 rupees in his pocket.

*/

function party(N , C, R ,arr){
   arr = arr.sort(function (a,b){
       return a - b;
   });
   let sum = 0;
   for(let i = 0; i < C; i++){
       sum += arr[i];
   }
   if(sum <= R){
       return "Party";
   }else{
       return "Sad";
   }
}

function runProgram(input) {
    input = input.trim().split("\n");
    let [N, C, R] = input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number);
    console.log(party(N, C, R, arr));
}

  if (process.env.USER === "siddharth") {
    runProgram(`5 3 24
    6 4 21 20 13`);
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