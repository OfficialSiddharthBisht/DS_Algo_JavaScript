/*
https://atcoder.jp/contests/abc236/tasks/abc236_a
Time Limit: 2 sec / Memory Limit: 1024 MB
Score : 100 points

Problem Statement : -
You are given a string S consisting of lowercase English letters.

Swap the a-th and b-th characters from the beginning of S and print the resulting string.

Constraints
S is a string consisting of lowercase English letters.
The length of S, ∣S∣, satisfies 2≤∣S∣≤10.
1≤a<b≤∣S∣
a and b are integers.
Input
Input is given from Standard Input in the following format:

S
a b
Output
Print the answer.

Sample Input 1 
Copy
chokudai
3 5
Sample Output 1 
Copy
chukodai
After swapping the 3-rd character o and 5-th character u of chokudai, we have chukodai.

Sample Input 2 
Copy
aa
1 2
Sample Output 2 
Copy
aa
In this sample, after swapping the 1-st and 2-nd characters of S, we have the same string as S.

Sample Input 3 
Copy
aaaabbbb
1 8
Sample Output 3 
Copy
baaabbba
*/

function swapAccIndex(str , a , b ){
    let arr = str.trim().split("");
    let temp = str[a - 1];
    arr[a - 1] = arr[b - 1];
    arr[b - 1] = temp;
    return arr.join("");
}
function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let str = input[0].trim();
    let [a , b] = input[1].trim().split(" ").map(Number);
    console.log(swapAccIndex(str,a , b));
  }
  if (process.env.USERNAME === "SiddharthBisht") {
    runProgram(`chokudai
    3 5
`);
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