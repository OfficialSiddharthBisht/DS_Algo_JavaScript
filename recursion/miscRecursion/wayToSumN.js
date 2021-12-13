function waysToSumN(N) {
        if (N === 0) {
            return 1;
        }
        if(N<0){
            return 0;
        }
        return waysToSumN(N - 1) + waysToSumN(N - 2) + waysToSumN(N - 5);
    }
function runProgram(input) {
    input = input.trim().split("\n");
    let testCases = +input[0];
    let line = 1;
    for (let i = 0; i < testCases; i++) {
        let N = +input[line++];
        console.log(waysToSumN(N));
    }
}
if (process.env.USER === "siddharth") {
    runProgram(`1
    5`);
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
