/*
* Ash's Redemption
Ash is a famous player in the Pokemon universe. He has been trying to defeat his strongest rival Gary but he hasn't been successful till yet. He has played with Gary so much that he now knows everything about Gary and his pokemon and feels he is ready for one more fight.

Both players have n pokemon and n rounds are going to be played where one pokemon from each team fight with each other.

Each pokemon have their health points known as HP.

Gary is a champion so he gets an advantage. Ash wins a round when Ash's pokemon has strictly greater HP than Gary's else he loses that round. Ash wins the match if he wins all the rounds.

Since he knows everything about his rival, he knows the order of Gary's pokemon and their initial HP.

Can Ash order his pokemon in order to win the match?

Print "Ash Finally Wins" if he wins the match else "Train Hard Again".

Input Format :-
The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number of test cases. Then t test cases follow.

The first line of each test case contains a single integer n (1 ≤ n ≤ 100).

The second line of each test case contains n integers (1 ≤ Ai ≤ 1000). Ash'spokemon'sHP.

The third line of each test case contains n integers (1 ≤ Gi ≤ 1000). Gary's pokemon's HP.

Output Format :-
For each test case, print the outcome as instructed.


Sample Input 1 
2
3
12 3 4
5 4 1
2
1 5
1 4

Sample Output 1
Train Hard Again
Train Hard Again
*/

function pokemon(N, ash, gary) {
  ash = ash.sort(function (a, b) {
    return a - b;
  });
  gary = gary.sort(function (a, b) {
    return a - b;
  });
  for (let i = 0; i < N; i++) {
    if (ash[i] <= gary[i]) {
      return "Train Hard Again";
    }
  }
  return "Ash Finally Wins";
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let testCases = parseInt(input[0]);
  let line = 1;
  for (let i = 0; i < testCases; i++) {
    let n = parseInt(input[line++]);
    let arr1 = input[line++].trim().split(" ").map(Number);
    let arr2 = input[line++].trim().split(" ").map(Number);
    console.log(pokemon(n, arr1, arr2));
  }
}
if (process.env.USER === "siddharth") {
  runProgram(`2
    3
    12 3 4
    1 1 1
    2
    1 5
    1 4`);
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