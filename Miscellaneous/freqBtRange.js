/*
? Frequency Between Range 

Description

You're given an array of N integers. You need to answer Q queries.

Each query consists of three integers [left , right , value]

For each query print the frequency of value between the range [left , right]

Input Format

The first line contains N , the number of integers and Q the number of queries.

The second lines contains N integers

The next Q lines contains three integers left , right , value

Constraints

1<=N<=10^6

1<=Q<=10^4

1<=left<=right<=10^6

1<=A[i]<=10^6

Output Format :-
Print Q lines, each containing the answer the queries

Sample Input 1 
6 2
1 5 3 2 3 2 
3 6 2
4 4 2

Sample Output 1
2
1

Hint
Between the range [3,6] , the value 2 occurs twice

and between the range [4,4], the value 2 occurs once.
*/
function freqBetRange(N ,arr ,left ,right ,value){
    let count = 0;
    for(let  i = left -1; i < right; i++){
        if(arr[i] === value){
            count++;
        }
    }
    return count;
}

function runProgram(input) {
  input = input.trim().split("\n");
  let [N, Q] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);
  let line = 2;
  for (let i = 0; i < Q; i++) {
    let [left, right, value] = input[line++].trim().split(" ").map(Number);
   console.log(freqBetRange(N, arr, left, right, value));
  }
}

runProgram(`8 5
3 5 4 3 1 1 2 1
1 3 1
5 6 4
2 5 3
2 7 3
7 7 1`);
