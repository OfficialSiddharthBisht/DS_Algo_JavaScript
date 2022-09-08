/*
* Palindrome Number
Determine whether an integer is a palindrome.

Example Questions Candidate Might Ask: 

Q: Does negative integer such as –1 qualify as a palindrome? 
A: For the purpose of discussion here, we define negative integers as non-palindrome.
*/
function reverseNumber(N){
    let ans = "";
    while(N){
        ans += N % 10;
        N = parseInt(N / 10);
    }
    return parseInt(ans);
}

function palindromeNumber(N){
    let revNum = reverseNumber(N);
    if(revNum === N){
        return true;
    }else{
        return false;
    }
}

console.log(palindromeNumber(1221));
console.log(palindromeNumber(1321));