/*
You have a string S and its starting index is 1. The string S consists of characters from 1-9. You are asked to count the number of even numbered characters ( i.e 2,4,6,8) for every index i .

For an index i, the result should be calculated from i to the end of the string.

Input Format:

First line contains a string S.

Constraints:

Length of string S <= 10000

Output Format :-
Print space-separated integers,the result of every index.

Sample Input 1 

574674546476

Sample Output 1
7 7 7 6 5 5 4 4 3 2 1 1
*/
function evenCount(str){
    let N = str.length;
    let ans = new Array();
    count = 0;
    for(let i = N ; i >= 0;i--){
        if(parseInt(str[i]) % 2 === 0){
            count++;
            ans.unshift(count); 
        }else{
            ans.unshift(count);
        }
    }
    ans.pop();
    ans = ans.join(" ");
    return ans;
}


function runProgram(input){
    let str = input.trim();
    console.log(evenCount(str));
}

runProgram(`574674546476`);