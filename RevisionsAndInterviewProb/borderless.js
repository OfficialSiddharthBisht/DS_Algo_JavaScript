function borderless(N, M, arr) {
  let sum = 0;
  for (let i = 1; i < N - 1; i++) {
    for (let j = 1; j < M - 1; j++) {
      sum += arr[i][j];
    }
  }
  console.log(sum);
}

function runProgram(input) {
  input = input.trim().split("\n");
  let [N, M] = input[0].trim().split(" ").map(Number);
  let line = 1;
  let arr = [];
  for (let i = 0; i < N; i++) {
    arr.push(input[line++].trim().split(" ").map(Number));
  }
  borderless(N, M, arr);
}
if (process.env.USERNAME === "SiddharthBisht") {
  runProgram(`4 4
   1 2 3 4
   5 6 7 8
   9 10 11 12
   13 14 15 16`);
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


