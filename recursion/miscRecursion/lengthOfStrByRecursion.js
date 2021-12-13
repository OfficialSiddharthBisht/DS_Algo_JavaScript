/* Given a string, S. Find the length of the string using recursion.

Note: You are not allowed to use the length built-in property.

Input Format

The single line  consists of string S

Constraints

1<= S length <= 200


Output Format :- 
Print length of the given string S.

Sample Input 1 
siddharthsinghbisht

Sample Output 1
11
*/

function runProgram(input) {
   console.log(lengthOfStr(input,i=0));
  }

function lengthOfStr(str,i){
    let count=1;
    if(!str[i]){
        return count-1;
    }
    count+=lengthOfStr(str,i+1);
    return count;
  }
  if (process.env.USER === "siddharth") {
    runProgram(`siddharthsinghbisht`);
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
 