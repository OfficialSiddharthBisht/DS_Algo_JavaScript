/*
!Optimization missing
* Longest Palindromic Substring

Given a string S, find the longest palindromic substring in S. You may assume that the 
maximum length of S is 1000, and there exists one unique longest palindromic substring.
*/
function palindrome(str){
    let i = 0;
    let j = str.length - 1;
    while(i < j){
        if(str[i] !== str[j]){
            return false;
        }
        i++;
        j--;
    }
    return str.length;
}

function longestPalindromicSubstrBF(str){
    let N = str.length;
    let max = 0;
    let ans = "";
    for(let i = 0 ;i < N; i++){
        for(let j = i; j < N; j++){
            let temp = "";
            for(let k = i; k <= j; k++){
                temp += str[k];
            }
            let isPalindrome = palindrome(temp);
            if(isPalindrome){
                if(max < isPalindrome){
                    max = isPalindrome;
                    ans = temp;
                }
            }
        }
    }
    return ans;
}
// console.log(longestPalindromicSubstrBF("abacd"));
