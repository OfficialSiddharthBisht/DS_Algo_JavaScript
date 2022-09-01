/*
* Valid Palindrome
Given a string, determine if it is a palindrome, considering only alphanumeric characters 
and ignoring cases.
For example,
"A man, a plan, a canal: Panama" is a palindrome.
"race a car" is not a palindrome.

? Example Questions Candidate Might Ask:
Q: What about an empty string? Is it a valid palindrome?
A: For the purpose of this problem, we define empty string as valid palindrome.
*/

// ? Time Complexity : O(N) 
// ? Space Complexity : O(N);
function validPalindromeReverse(str, N){
    if(str === ""){
        return true;
    }
    let revStr = "";
    for(let i = N - 1; i >= 0; i--){
        revStr += str[i];
    }
    for(let i = 0; i < N; i++){
        if(str[i] !== revStr[i]){
            return false;
        }
    }
    return true;
}

// console.log(validPalindromeReverse("malayalam",9));
// console.log(validPalindromeReverse("abcd",4));

// ? Time Complexity : O(N) 
// ? Space Complexity : O(1);
function validPalindromeTwoPointer(str ,N){
    if(str === ""){
        return true;
    }
    let low = 0;
    let high = N - 1;
    while(low <= high){
        if(str[low] !== str[high]){
            return false;
        }
        low++;
        high--;
    }
    return true;
}
console.log(validPalindromeTwoPointer("malayalam",9));
console.log(validPalindromeTwoPointer("abcd",4));
