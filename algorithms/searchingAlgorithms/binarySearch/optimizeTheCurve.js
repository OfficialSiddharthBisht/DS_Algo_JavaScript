function optimizeTheCurve(A, B, C, K) {
    let ans = -1;
    let low = 0;
    let high = K;
    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        let value = A * mid * mid + B * mid + C;
        if (value >= K) {
            ans = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    if(ans <= 0){
        return -1;
    }
    return ans;
}

function runProgram(input) {
    input = input.trim().split("\n");
    let testCases = parseInt(input[0]);
    let line = 1;
    for (let i = 0; i < testCases; i++) {
        let [A, B, C, K] = input[line++].trim().split(" ").map(Number);
        console.log(optimizeTheCurve(A, B, C, K));
    }
}
if (process.env.USER === "siddharth") {
    runProgram(`1
    3 2 4 15`);
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
