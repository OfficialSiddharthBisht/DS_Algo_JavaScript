/*Nikhil and his Search -121:16:22
Description :-
Nikhil and his friend Sachin are on a quest to find the answer to Life.

In order to complete it, they need to answer Q queries on an array A having N integers. The queries can be of the following two types:

0 x: Find the number of numbers in A which are not less than x.

1 x: Find the number of numbers in A which are greater than x.

Help them complete the quest.

Input Format

The first line consists of a single integer denoting N.

The second line consists of N space separated integers denoting the array A.

The third line consists of a single integer denoting Q.

Each of the following Q lines consists of a query of one of the given two types.

Constraints

1<= N <= 100000

1<=Q<=300000

1<= elements of array, x < 1000000000

Output Format :-
For each query print the required answer in a new line.

Sample Input 1 
4
1 2 3 4
3
0 5
1 3
0 3

Sample Output 1
0
1
2
*/
function notLessThanX(N , arr , x){
    let count = 0;
    for(let i = 0 ;i < N ;i++){
        if(arr[i] >= x){
            count++;
        }
    }
    return count;
}
function greaterThanX(N ,arr , x){
    let count =0;
    for(let i = 0; i < N; i++){
        if(arr[i] > x){
            count++;
        }
    }
    return count;
}
function runProgram(input) {
    input = input.trim().split("\n");
    let N = parseInt(input[0]);
    let arr = input[1].trim().split(" ").map(Number);
    let Q = parseInt(input[2]);
    let line = 3;
    for(let i = 0 ; i < Q; i++){
        let queries = input[line++].trim().split(" ").map(Number);
        if(queries[0] === 0){
           console.log(notLessThanX(N ,arr,queries[1]));
        }else if(queries[0] === 1){
            console.log(greaterThanX(N , arr ,queries[1]));
        }
    }
  }
  if (process.env.USERNAME === "SiddharthBisht") {
    runProgram(`4
    1 2 3 4
    3
    0 5
    1 3
    0 3`);
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
  