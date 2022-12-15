// Given an integer number N , find whether it is palindrome or not

function isPalindrome(N) {
    let n = N;
    let rev = "";
    while (N) {
        rev += parseInt(N % 10);
        N = parseInt(N / 10)
    }
    return n === parseInt(rev);
}


console.log(isPalindrome(1212));