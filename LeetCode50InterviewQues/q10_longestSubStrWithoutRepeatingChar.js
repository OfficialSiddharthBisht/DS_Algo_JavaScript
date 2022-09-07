/*
*  Longest Substring Without Repeating Characters 
Given a string, find the length of the longest substring without repeating characters. For 
example, the longest substring without repeating letters for “abcabcbb” is “abc”, which 
the length is 3. For “bbbbb” the longest substring is “b”, with the length of 1. 
*/

function longestSubStrWithoutRepeatingChar(str){
    let N = str.length;
    let count = 0;
    let obj = {};
    for(let i = 0; i < N; i++){
        if(obj[str[i]]){
            return count;
        }else{
            obj[str[i]] = 1;
            count++;
        }
    }
    return count;
}
console.log(longestSubStrWithoutRepeatingChar("abcabcbb"));
console.log(longestSubStrWithoutRepeatingChar("bbbbbbbbbbb"));