function fibonacchi(N){
    if(N === 0 || N === 1){
        return N;
    }
    return fibonacchi(N - 1) + fibonacchi(N - 2)
}

console.log(fibonacchi(8));
