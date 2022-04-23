/*
* Shop Soap
Piyush goes to buy soap from a shop.The shop contains N soaps. The prices of soap are given in the form of an array A. The price of ith soap is A[i]. Now Piyush has q queries, in each query he wants to know the number of soaps that have price less than the given amount M.

Input Format :

First line contains integer N total number of soaps available in the shop.

Second line contains N space separated integers.
Third line contains Q number of queries.
Each of the next Q lines contain integer M.

Constraints :
1 ≤ N ≤ 100000
1 ≤ A[i] ≤ 1000000000
1 ≤ Q ≤ 100000
1 ≤ M ≤ 100000

Output
For each query output number of soaps having price less than M for that query.

Sample Input 1 
5
1 4 10 5 6
4
2
3
5
11

Sample Output 1
1
1
2
5
*/

// function priceLeassThenM(arr , M ,N){
//     let count = 0;
//     for(let i = 0; i < N; i++){
//         if(arr[i] < M){
//             count++;
//         }
//     }
//     return count;
// }

function priceLeassThenM(arr , M ,N){
    arr = arr.sort((a , b)=>{
        return a - b;
    });
    let count = 0;
    for(let i = N; i >=0; i--){
        if(arr[i] < M){
            count++;
        }
    }
    return count;
}

function runProgram(input){
    input = input.trim().split("\n");
    let N = parseInt(input[0]);
    let arr = input[1].trim().split(" ").map(Number);
    let Q = parseInt(input[2]);
    let line = 3;
    for(let q = 0; q < Q; q++){
       console.log(priceLeassThenM(arr,input[line++],N));
    }
}
runProgram(`5
1 4 10 5 6
4
2
3
5
11`)