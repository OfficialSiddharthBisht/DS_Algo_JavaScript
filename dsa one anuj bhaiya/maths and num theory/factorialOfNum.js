// Given a number find the factorial of it.
function factorial(N) {
    if (N === 0 || N === 1) {
        return N;
    }
    return N * factorial(N - 1);
}


console.log(factorial(3));
console.log(factorial(5));


