// function superDigit(num , sum){
//     if(parseInt(num / 10) === 0){
//         return num;
//     }
//         sum += (num % 10) + superDigit(parseInt(num / 10), sum);
//         if(parseInt(sum / 10) === 0 && sum !== 0){
//             return sum;    
//         }
//        return superDigit(sum,0);
// }

// console.log(superDigit(45 , 0));
// console.log(superDigit(9 , 0));
// console.log(superDigit(186 , 0));
// console.log(superDigit(35 , 0));

function superDigit(num , sum){
    if(parseInt(num / 10) === 0){
        return num;
    }
        sum += (num % 10) + superDigit(parseInt(num / 10), sum);
        if(parseInt(sum / 10) === 0 && sum !== 0){
            return sum;    
        }
       return superDigit(sum,0);
}

function runProgram(input) {
    input = input.trim().split("\n");
    let testCases = parseInt(input[0]);
    let line = 1;
    for(let t = 0; t < testCases; t++){
        let N = parseInt(input[line++]);
        console.log(superDigit(N , 0));
    }
 }
 if (process.env.USERNAME === "SiddharthBisht") {
   runProgram(`3
   45
   8
   186`);
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