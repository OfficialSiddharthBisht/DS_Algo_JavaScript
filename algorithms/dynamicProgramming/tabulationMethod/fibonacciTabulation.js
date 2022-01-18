/* 
Fibonacci Using Tabulation - Bottom Up Approach .
Given a number N find its fibonacci using Bottom Up Approach.
*/
function fib(N){
    let arr = [];
    arr[0] = 0;
    arr[1] = 1;
    for(let i = 2; i <= N; i++){
        arr[i] = arr[i - 2] + arr[i - 1];
    }
    // console.log(arr);
    return arr[N];
}

console.log(fib(5));
console.log(fib(50));
