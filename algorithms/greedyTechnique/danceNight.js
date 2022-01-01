/*
Promp Night.There would be M boys and N girls at the prom tonight. Each boy wants a girl who is strictly shorter than him. A girl can dance with only one boy and vice-versa.

Given the heights of all the boys and girls comment whether it is possible for all boys to get a girl.


Input Format :-
The first line contains T denoting the number of test cases.

Each test case contains three lines.

The first line contains M and N.

The second line contains M integers each denoting the height of boy.

The third contains N integers each denoting the height of girl.

Constraints

1<=T<=10

1<=N, M<=10000

1<=Height<=200

Output Format :-
Print YES if it is possible for each boy to get a girl else print NO.

Sample Input 1 
1
4 5
2 5 6 8
3 8 5 1 7

Sample Output 1
YES
*/
function danceNight(M, N, boysHeight, girlsHeight) {
    boysHeight = boysHeight.sort(function (a, b) {
        return a - b;
    });
    girlsHeight = girlsHeight.sort(function (a, b) {
        return a - b;
    });
    // console.log(boysHeight, girlsHeight);
    let i = 0;
    let j = 0;
    while (i < M && j < N) {
        if (girlsHeight[j] >= boysHeight[i]) {
            return "NO";
        }
        if(boysHeight[i] > girlsHeight[j]){
          i++;
          j++;
        }
    }
    return "YES";
}

function runProgram(input) {
    input = input.trim().split("\n");
    let testCase = parseInt(input[0]);
    let line = 1;
    for (let i = 0; i < testCase; i++) {
        let [M, N] = input[line++].trim().split(" ").map(Number);
        let boysHeight = input[line++].trim().split(" ").map(Number);
        let girlsHeight = input[line++].trim().split(" ").map(Number);
        console.log(danceNight(M, N, boysHeight, girlsHeight));
    }
}
if (process.env.USER === "siddharth") {
    runProgram(`10
    2 8
    135 101
    170 125 79 159 163 65 106 146
    2 8
    162 92
    196 143 28 37 192 5 103 154
    3 3
    22 117 119
    96 48 127
    2 9
    70 113
    68 100 36 95 104 12 123 134 74
    5 2
    112 54 69 148 45
    63 158
    8 10
    124 142 130 179 117 36 191 43
    89 107 41 143 65 49 47 6 91 130
    1 1
    7
    102
    4 9
    30 24 85 155
    157 41 167 177 132 109 145 40 27
    4 8
    139 119 83 130
    142 34 116 40 59 105 131 178
    7 4
    187 22 146 125 73 71 30
    178 174 98 113`);
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
/*
Expected Output
YES
YES
NO
YES
NO
YES
NO
NO
YES
NO
Output
YES
YES
YES
YES
NO
YES
YES
YES
YES
NO
*/