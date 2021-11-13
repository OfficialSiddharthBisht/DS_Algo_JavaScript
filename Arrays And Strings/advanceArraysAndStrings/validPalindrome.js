/* Question Source Leetcode - https://leetcode.com/problems/valid-palindrome/
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 

Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.
*/
function isPalindrome(s) {
    s=s.toLowerCase();
    let alphaNum = "abcdefghijklmnopqrstuvwxyz1234567890";
    let str = "";
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < alphaNum.length; j++) {
            if(s[i]===alphaNum[j])
            {
                str+=s[i];
            }
        }
    }
    // console.log(str);
    let i=0;
    let j=str.length-1;
    let isPalindrome=true;
    while(i<j){
            if(str[i]!==str[j])
            {
                return false;
            }
            i++;
            j--;
    }
    return true;
}
console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));
