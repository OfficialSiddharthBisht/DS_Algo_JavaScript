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