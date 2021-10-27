/* Given an integer , print "Yes" if that integer is a Palindrome, else print No
*Input -            Output
1221                Yes
1223                No
*/
function runProgram(input) {
    // Write code here
    var N=input.length;
    var i=0;
    var j=N-1;
    while(i<=j)
    {
        if(input[i]!==input[j])
        {
            console.log("No");
            return;
        }
        i++;
        j--;
    }
    console.log("Yes");
  }
  if (process.env.USERNAME === "offic") {
    runProgram(`1221`);
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