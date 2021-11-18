/*Description

You are given name and marks of N different students in a hackerrank contest. Your task is to write a program that makes leaderboard of the students under following conditions:

- If two students get same marks they get same rank

- The student placed next to the same marks students will get the rank skipping the intermediate ranks.

Refer to the sample test case for better understanding

Note : You cannot us e built-in sort function. Using that can lead to disqualification. Write your own sorting algorithm

Input
Input Format :
First line of input contains N

Next N line contains name and marks respectively of N different students (where name and marks is separated by a space)

Constraints :

N < 100

Output
Output N names with their rank. Follow these rules for generating the list:

1. The students having more mark gets better rank

2. If students have similar mark, their rank will be same(In case of similar marks, the person whose name comes first in alphabetical order comes first in order. However their rank will be same)

3. The student placed next to the same marks students will get the rank skipping the intermediate ranks.

//? Input

6
rancho 45
chatur 32
raju 30
farhan 28
virus 32
joy 45
//? Output

1 joy
1 rancho
3 chatur
3 virus
5 raju
6 farhan
*/
function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let N=+input[0];
    let marks=[];
    let names=[];
    for(let i=1;i<=N;i++){
        let [name,mark]=input[i].trim().split(" ");
        marks.push(Number(mark));
        names.push(name);
    }
    rankBoard(marks,names,N);
  }
  // by selection sort 
  function rankBoard (marks,names,N) {
      for(let i=0;i<N;i++){
        let max=i;
        for(let j=i+1;j<N;j++){
          if(marks[j]>marks[max]){
            max=j;
          }
          else if(marks[j]===marks[max]&&names[j]<names[max]){
            max=j;
          }
        }
        let temp=names[i];
        names[i]=names[max];
        names[max]=temp;

        temp=marks[i];
        marks[i]=marks[max];
        marks[max]=temp;
      }
     let rank=1;
     let actualRank=1;
     console.log(1+" "+names[0]);
     actualRank++;
     for(let i=1;i<N;i++){
       if(marks[i]!==marks[i-1]){
         rank=actualRank;
       }
       actualRank++;
       console.log(rank+" "+names[i]);
     }
  }
  if (process.env.USER === "siddharth") {
    runProgram(`6
    rancho 45
    chatur 32
    raju 30
    farhan 28
    virus 32
    joy 45`);
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
