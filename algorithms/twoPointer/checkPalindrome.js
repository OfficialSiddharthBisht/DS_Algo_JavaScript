/*  ou are given a string, whose size is stored in a variable with the name N
The string is stored in a variable with the name str
Print Yes, if the string is a palindrome, else print No
For example, consider the value stored in str = "naman", if we reverse the string, the reversed string will be the same as the original string, hence the string is considered as palindrome, therefore, the output isYes
Note : A palindrome is a string which is the same read forwards or backwards
*/
function checkPalindrome(N, str) {
    //write code here
    let i = 0;
    let j = N - 1;
    let isPalindrome = true;
    while (i < j) {
        if (str[i] !== str[j]) {
            isPalindrome = false;
            break;
        }
        i++;
        j--;
    }
    if (isPalindrome) {
        console.log("Yes");
    }
    else {
        console.log("No");
    }
}
checkPalindrome(5, "racsr")
