/*
? Jewels And Stones
Problem Link : -  https://leetcode.com/problems/jewels-and-stones/

Solution Video Link :- https://youtu.be/KtkEcv5oCwE

You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:

Input: jewels = "aA", stones = "aAAbbbb"
Output: 3
Example 2:

Input: jewels = "z", stones = "ZZ"
Output: 0
 

Constraints:

1 <= jewels.length, stones.length <= 50
jewels and stones consist of only English letters.
All the characters of jewels are unique.
*/

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
 var numJewelsInStones = function(jewels, stones) {
    let count = 0;
    let N = jewels.length;
    let M = stones.length;
    for(let i = 0; i < N; i++){
        for(let j = 0; j < M; j++){
            if(jewels[i] === stones[j]){
                count++;
            }
        }
    }
    return count;
};