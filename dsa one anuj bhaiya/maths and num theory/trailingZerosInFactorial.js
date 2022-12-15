function trailingZerosInAFactorial(N) {
    let res = 0;
    for (let i = 5; i <= N; i = i * 5) {
        res = res + parseInt(N / i)
    }
    return res;
}


console.log(trailingZerosInAFactorial(10));