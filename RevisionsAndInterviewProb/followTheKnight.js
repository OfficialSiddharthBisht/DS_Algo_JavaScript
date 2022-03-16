// N = number of total moves that the knight is allowed
// curr = current move at which the knight is 
function followTheKnight(i , j , curr , N){
    if(i > 10 || j > 10 || i < 1 || j < 1){
        return [];
    }
    if(curr == N){
        return [[i , j]];
    }
    ans = [];
    ans = ans.concat(followTheKnight(i - 2,j - 1,curr + 1,N));
    ans = ans.concat(followTheKnight(i - 1,j - 2,curr + 1,N));
    ans = ans.concat(followTheKnight(i + 1,j - 2,curr + 1,N));
    ans = ans.concat(followTheKnight(i + 2,j - 1,curr + 1,N));
    ans = ans.concat(followTheKnight(i + 2,j + 1,curr + 1,N));
    ans = ans.concat(followTheKnight(i + 1,j + 2,curr + 1,N));
    ans = ans.concat(followTheKnight(i - 1,j + 2,curr + 1,N));
    ans = ans.concat(followTheKnight(i - 2,j - 1,curr + 1,N));
    return ans;
}
function runProgram(input) {
    let [i , j ,N] = input.trim().split(" ").map(Number);
    let ans = followTheKnight(i , j ,curr = 0 , N);
    console.log(ans.length)
    let obj = {};
    let count = 0;
    for(let i = 0; i < ans.length; i++){
        if(!(ans[i] in obj)){
            count++;
            obj[ans[i]] = 1;
        }
    }
    console.log(count);
}
  if (process.env.USERNAME === "SiddharthBisht") {
    runProgram(`3 3 1`);
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
// console.log(followTheKnight(3 ,3 , 0, 10));
