/*
* Coding Club Fight :-
Siddharth went to fight for Coding Club. There were N soldiers with various powers. There will be Q rounds to fight and in each round Piyush's power will be varied. With power M, Piyush can kill all the soldiers whose power is less than or equal to M(<=M). After each round, All the soldiers who are dead in previous round will reborn.Such that in each round there will be N soldiers to fight. Count the number of soldiers that he can kill in each round and total sum of their powers.

* Input Format :-
First line contains N

Next N line contains N integers which represents power of N soldiers

Next line contains Q

Next Q line contains Piyush's power for each of the Q rounds

Constraints

1<=N<=10000

1<=power of each soldier<=100

1<=Q<=10000

1<=power of bishu<=100

Output Format

In each line, print the number of soldiers that he can kill in each round and total sum of their powers.

Sample Input 1 

7
1 
2 
3 
4 
5 
6 
7
3
3
10
2

Sample Output 1
3 6
7 28
2 3
*/

function codingClubFightBruteForce(N, powerOfSoldiers, M, powerOfHero) {
    for (let i = 0; i < M; i++) {
        let sum = 0;
        let count = 0;
        for (let j = 0; j < N; j++) {
            if (powerOfSoldiers[j] <= powerOfHero[i]) {
                sum += powerOfSoldiers[j];
                count++;
            }
        }
        console.log(count + " " + sum);
    }
}

function codingClubFightBinarySearch(N, powerOfSoldiers, M, powerOfHero) {
    //sorting the array
    powerOfSoldiers.sort(function (a, b) {
        return a - b;
    });
    // prefix sum
    let prefixSumArr = [];
    let sum = 0;
    for (let i = 0; i < N; i++) {
        sum += powerOfSoldiers[i];
        prefixSumArr[i] = sum;
    }
    // binary search
    for (let i = 0; i < M; i++) {
        let low = 0;
        let high = N - 1;
        let pos = -1;
        while (low <= high) {
            let mid = low + Math.floor((high - low) / 2);
            if (powerOfSoldiers[mid] <= powerOfHero[i]) {
                low = mid + 1;
                pos = mid;
            } else {
                high = mid - 1;
            }
        }
        console.log(pos + 1 + " " + prefixSumArr[pos]);
    }
}
function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let N = parseInt(input[0]);
    let powerOfSoldiers = [];
    let line = 1;
    for (let i = 0; i < N; i++) {
        powerOfSoldiers.push(parseInt(input[line++].trim()));
    }
    let noOfRounds = parseInt(input[line++]);
    let rounds = [];
    for (let i = 0; i < noOfRounds; i++) {
        rounds.push(parseInt(input[line++].trim()));
    }
    codingClubFightBinarySearch(N, powerOfSoldiers, noOfRounds, rounds);
}
if (process.env.USER === "siddharth") {
    runProgram(`7
    1 
    2 
    3 
    4 
    5 
    6 
    7
    3
    3
    10
    2`);
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
