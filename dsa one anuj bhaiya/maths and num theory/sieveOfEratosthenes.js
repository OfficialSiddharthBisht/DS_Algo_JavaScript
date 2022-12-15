/*
Given a number N, find if any prime number exhists before that number using the sieveOfEratosthenes algorithm
*/

function sieveOfEratosthenes(N) {
    let isPrime = new Array(N + 1).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;
    for (let i = 2; i * i < N; i++) {
        for (let j = 2 * i; j < N; j += i) {
            isPrime[j] = false;
        }
    }
    return isPrime;
}


console.log(sieveOfEratosthenes(12));
