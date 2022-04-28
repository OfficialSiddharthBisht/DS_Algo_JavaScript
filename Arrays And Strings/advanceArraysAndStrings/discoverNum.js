/*
Discover number
You are given an array A of size N, and Q queries to deal with. For each query, you are given an integer X, and you're supposed to find out if X is present in the array A or not.
Input Format

The first line contains two integers, N and Q, denoting the size of array A and number of queries.

The second line contains N space separated integers, denoting the array of elements Ai.

The next Q lines contain a single integer X per line.

Constraints
1 <= N, Q <= 10^5
1 <= Ai <= 10^9
1 <= X <= 10^9

Output Format :- 
For each query, print YES if the X is in the array, otherwise print NO.

Sample Input 1 
5 10
50 40 30 20 10
10
20
30
40
50
60
70
80
90
100

Sample Output 1
YES
YES
YES
YES
YES
NO
NO
NO
NO
NO
*/
function discoverNum(N ,arr , q){
    for(let i = 0; i < N; i++){
        if(arr[i] === q ){
            return "YES";
        }
    }
    return "NO";
}
function runProgram(input){
    input = input.trim().split("\n");
    let [N , Q] = input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number);
    let line = 2;
    for(let i = 0; i < Q; i++){
        let q = parseInt(input[line++]);
        console.log(discoverNum(N ,arr , q));
    }
}


runProgram(`5 10
50 40 30 20 10
10
20
30
40
50
60
70
80
90
100`)